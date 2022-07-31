import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Types "Types";

actor {
  let customers = HashMap.HashMap<Text, Types.Customer>(0, Text.equal, Text.hash);
  stable var counter : Nat = 1;

  

  public func createAccount(account: Types.Customer) {
    customers.put(Nat.toText(counter), account);
    counter += 1;
  };


};
