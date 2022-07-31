import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Nat16 "mo:base/Nat16";
import Nat32 "mo:base/Nat32";
import Nat64 "mo:base/Nat64";
import List "mo:base/List";
import Array "mo:base/Array";
import Option "mo:base/Option";
import Bool "mo:base/Bool";
import Principal "mo:base/Principal";
import Types "./Types";
import Iter "mo:base/Iter";
import Buffer "mo:base/Buffer";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";

actor {

    stable var transactionId: Types.TransactionId = 0;
  stable var nfts = List.nil<Types.Nft>();


  stable var entries : [(Text, Types.Customer)] = [];
  let customers = HashMap.fromIter<Text, Types.Customer>(entries.vals(), 0, Text.equal, Text.hash);
  stable var counter : Nat = 1;

  system func preupgrade() {
    entries := Iter.toArray(customers.entries());
  };

  system func postupgrade() {
    entries := [];
  };


  public func createAccount(account: Types.Customer) {
    customers.put(Nat.toText(counter), account);
    counter += 1;
  };

    public func updateCustomer(id : Nat, customer : Types.Customer) : async Text {
        switch(findCustomer(id)){
            case(?c) {customers.put(Nat.toText(id), customer); "Update successfully"};
            case null {"Update failed"};
        };
        
    };    

    private func findCustomer(id : Nat) : ?Types.Customer {
        customers.get(Nat.toText(id))
    };

    public func removeCustomer(id: Nat) : async ?Types.Customer {
        customers.remove(Nat.toText(id))
    };
    
    public func readAccount() : async [(Text, Types.Customer)] {
      return Iter.toArray(customers.entries());
    };


    //NFT Function
    public shared({ caller }) func mintNFT(to: Principal, metadata: ?Types.Metadata) : async Types.MintResult {
    
        switch(metadata) {
            case null {return #Err("The data invalid");};
            case (?metadata) {
                let newId = Nat64.fromNat(List.size(nfts));
                let nft : Types.Nft = {
                owner = caller;
                id = newId;
                metadata = metadata;
                };
                nfts := List.push(nft, nfts);
                transactionId += 1;

                return #Ok("Mint token Successfully");
            };
        };
    };

    private func findNFT(token_id : Nat64) : ?Types.Nft {
        List.find(nfts, func(token: Types.Nft) : Bool { token.id == token_id })
    };

    public shared({ caller }) func transfer(to: Principal, token_id : Nat64) : async Types.TxReceipt {
        var thisNFT = findNFT(token_id);
        switch(thisNFT) {
            case null {return #Err("Token not found");};
            case (?nft) {   
                if (caller != nft.owner) {
                    return #Err("Unauthorized");
                } else {
                    nfts := List.map(nfts, func (item : Types.Nft) : Types.Nft {
                        if (item.id == nft.id) {let update : Types.Nft = {
                            owner = to;
                            id = item.id;
                            metadata = nft.metadata;
                        };
                        return update;
                    } else {return item;};
                    });
                };
            };

        };
        #Ok("Transfer successfully");
    };  
}
