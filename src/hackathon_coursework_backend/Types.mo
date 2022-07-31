import Time "mo:base/Time";
module {

    //--------
    public type Customer = {
        firstName: Text;
        lastName: Text;
        sex: Bool;
        dob: Time.Time;
        phone: Text;
        address: Text;
    };

    public type Nft = {
        owner: Principal;
        id: TokenId;
        metadata: Metadata;
    };
    
    public type Metadata = {
        name : Text;
        desc : Text;
    };

    public type Result<S, E> = {
        #Ok : S;
        #Err : E;
    };

    public type MintResult = Result<Text, Text>;
    
    //-------

      public type Dip721NonFungibleToken = {
    logo: LogoResult;
    name: Text;
    symbol: Text;
    maxLimit : Nat16;
    };

    public type ApiError = {
        #Unauthorized;
        #InvalidTokenId;
        #ZeroAddress;
        #Other;
    };

    public type OwnerResult = Result<Principal, ApiError>;
    public type TxReceipt = Result<Nat, ApiError>;
  
    public type TransactionId = Nat;
    public type TokenId = Nat64;

    public type InterfaceId = {
        #Approval;
        #TransactionHistory;
        #Mint;
        #Burn;
        #TransferNotification;
    };

    public type LogoResult = {
        logo_type: Text;
        data: Text;
    };

    public type ExtendedMetadataResult = Result<{
        metadata_desc: Metadata;
        token_id: TokenId;
    }, ApiError>;

    public type MetadataResult = Result<Metadata, ApiError>;

    

    public type MetadataPurpose = {
        #Preview;
        #Rendered;
    };
  
    public type MetadataKeyVal = {
        key: Text;
        val: MetadataVal;
    };

    public type MetadataVal = {
        #TextContent : Text;
        #BlobContent : Blob;
        #NatContent : Nat;
        #Nat8Content: Nat8;
        #Nat16Content: Nat16;
        #Nat32Content: Nat32;
        #Nat64Content: Nat64;
    };

    public type MintReceipt = Result<MintReceiptPart, ApiError>;

    public type MintReceiptPart = {
        token_id: TokenId;
        id: Nat;
    };

}