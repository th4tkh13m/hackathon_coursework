import Time "mo:base/Time";
module {

    public type Customer {
        id : Nat;
        firstName: Text;
        lastName: Text;
        sex: Bool;
        dob: Time;
        phone: Text;
        address: Text;
    };

}