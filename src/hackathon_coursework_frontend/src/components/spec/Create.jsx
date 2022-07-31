import React, { useState } from 'react';
import UploadGif from "../../assets/images/upload_gif.gif";
import styled from "styled-components";

import { Web3Storage } from 'web3.storage'
import { Principal } from '@dfinity/principal';
import {
  ConnectButton,
  useConnect,
} from '@connect2ic/react'

import { hackathon_coursework_backend } from '../../../../declarations/hackathon_coursework_backend';
export default function Create() {
  const { principal, connect } = useConnect()
  const API_WEB3 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAxMjlEZTAyQ0EzNTQzMzU2RkM0N0EzODQwMjRkQTA3NGJmQjUwNjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTkwNzI2MTkxNzEsIm5hbWUiOiJmaXJzdCJ9.c1rd8LfT2ea4vwWmSBoinvmSfwDJ3alXxAdFID0JE9k"
  const DWEB_LINK = "ipfs.dweb.link"
  const [imgUri, setImgUri] = useState('')
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState('')
  const [name, setName] = useState('')
  const [nfts, setNfts] = useState([])
  const [nftName, setNftName] = useState('')
  const [nftDes, setNftDes] = useState('')

  function toOptional(object) {
    return object ? [object] : [];
  }

  const getFile = e => {
    let file = e.target.files[0]
    setFile(file)
    setFileName(file.name)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        let result = reader.result
        setImgUri(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateNft = async () => {
    if (!principal) {
      alert("Please connect to PLug wallet first")
    }
    if (file && nftName && nftDes) {
      console.log("Mining!")
      console.log(file);
      console.log(nftName, nftDes)
      const client = new Web3Storage({ token: API_WEB3 })
      const cid = await client.put([file])
      console.log('stored files with cid:', cid)
      const imgURI = `${cid}.${DWEB_LINK}/${fileName}`
      const res = await hackathon_coursework_backend.mintNFT(Principal.fromText(principal), toOptional({
        cid, name: nftName, desc: nftDes
      }))
      console.log(res);
      setImgUri('')
      setFile(null)
      setFileName('')
      setName('')
      setNftName('')
      setNftDes('')
      console.log("Mined!");
    }
  }

  return (



    <Container>
      <h1 className="text-center">Create New Item</h1>
      <div className="wrap-upload input-group mb-3 d-flex justify-content-center">
        {
          imgUri &&
          <img className="previewImg" src={imgUri} alt="preview" />
        }
        <input type="file" name="file" id="fileUpload" onChange={(e) => getFile(e)} />
        <label htmlFor="fileUpload">
          <div className="upload_label">
            <img src={UploadGif} alt="upload gif" />
            <h3>Click to upload Item</h3>
          </div>
        </label>
      </div>
      {/* <button className="btn btn-primary" onClick={() => generateNft()}>
        Upload
      </button> */}
      <div className="mb-3 row">
        <label htmlFor="inputName" className="col-sm-2 col-form-label">NFT Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputName" onChange={(e) => setNftName(e.target.value)} />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputPassword" onChange={(e) => setNftDes(e.target.value)} />
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => generateNft()}>Mint</button>
    </Container >
  )
}

const Container = styled.div`
  .wrap-upload{
    row-gap: 15px;
    column-gap: 15px;
  }
  #fileUpload{
    display: none;
  }
  .upload_label{
      width: 250px;
      height: 250px;
      border: 3px dashed #ccc;
      border-radius: 10px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
  }
  .previewImg{
    width: 250px;
    box-sizing: border-box;
    border: 3px dashed #7df360;
    border-radius: 10px;
  }
`;