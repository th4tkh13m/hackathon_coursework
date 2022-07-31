import React from 'react';
import { Link } from "react-router-dom";

export default function Personal() {
    return (
        <div>
            <h1>My NFT</h1>
            <div>
                <div className="wrap_imgs">
                    <img src="" alt="item" />
                </div>
                <div className="actions">
                    <Link to="/mint-and-transfer/transfer">
                        <button type="button" className="btn btn-primary">Transfer</button>
                    </Link>
                    <Link to="/create">
                        <button type="button" className="btn btn-success">Create</button>
                    </Link>
                </div>
            </div>
            <div>
                <h1>Owned by</h1>
                <p>{"owner"}</p>
            </div>
        </div>
    )
}
