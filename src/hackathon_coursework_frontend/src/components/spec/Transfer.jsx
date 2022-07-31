import React from 'react'

export default function Transfer() {
    return (
        <div>
            <h1>My NFT</h1>
            <div>
                <div className="wrap_imgs">
                    <img src="" alt="item" />
                </div>
            </div>
            <div className="d-flex">
                <h1>Owned by</h1>
                <p>{"owner"}</p>
            </div>
            <div className="d-flex">
                <h1>To principle</h1>
                <input type='text' placeholder="Receiver" />
            </div>
            <button type="button" className="btn btn-success">Send</button>
        </div>
    )
}
