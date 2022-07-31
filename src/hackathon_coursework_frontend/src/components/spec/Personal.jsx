import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { hackathon_coursework_backend } from '../../../../declarations/hackathon_coursework_backend';
import { Principal } from '@dfinity/principal';
import { Web3Storage } from 'web3.storage'
import {
    ConnectButton,
    useConnect,
} from '@connect2ic/react'

export default function Personal() {
    const { principal, connect } = useConnect()
    const DWEB_LINK = "ipfs.dweb.link"
    const [myNFT, setMyNFT] = useState([])
    useEffect(() => {
        async function fetchDate() {
            console.log(principal);
            const data = await hackathon_coursework_backend.getAllTokens()
            console.log(data)
            setMyNFT(data)
        }
        fetchDate()
    }, [principal])

    const API_WEB3 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAxMjlEZTAyQ0EzNTQzMzU2RkM0N0EzODQwMjRkQTA3NGJmQjUwNjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTkwNzI2MTkxNzEsIm5hbWUiOiJmaXJzdCJ9.c1rd8LfT2ea4vwWmSBoinvmSfwDJ3alXxAdFID0JE9k"
    async function retrieve(cid) {
        const client = new Web3Storage({ token: API_WEB3 })
        const res = await client.get(cid)
        if (!res.ok) {
            throw new Error(`failed to get ${cid}`)
        }
        return res
    }

    const getImage = async (cid) => {
        const res = await retrieve(cid)
        const file = await res.files()
        return file.name;
    }

    getImage("bafybeiby6zxsqustx6ohjf4sfunybcf4zoxr5xqra3j2ykc4dom7tz5t7u")
    return (
        <div>
            <h1>My NFT</h1>
            <div>
                {/* {
                    myNFT.map(async (nft) => {
                        const { id, metadata } = nft

                    })
                } */}
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
