import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Types "Types";

actor {
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


};
