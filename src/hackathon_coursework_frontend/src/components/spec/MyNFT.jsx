import React from 'react';

const YourNFT = () => {
    const [nft, setNft] = React.useState([]);

    // const useEffect (() => {

    // })

    return (
        <>
            <h2>My NFT</h2>
            <div className="">
                <button className="btn btn-primary">Transfer</button>
                <button className="btn btn-success">Create</button>
            </div>
        </>
    )
}

export default YourNFT;