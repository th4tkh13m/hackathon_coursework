import HashMap "mo:base/HashMap";
import Types "Types";
import Text "mo:base/Text";

actor {
  let customers = HashMap.HashMap<Text, Types.Customer>(0, Text.equal, Text.hash);
};
