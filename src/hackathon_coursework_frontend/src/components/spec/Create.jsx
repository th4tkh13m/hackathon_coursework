import React, { useState } from 'react';
import UploadGif from "../../assets/images/upload_gif.gif";
import styled from "styled-components";

export default function Create() {
  const [file, setFile] = useState(null)
  const [imgUri, setImgUri] = useState('')

  // function dropHandler(ev) {
  //   console.log('File(s) dropped');

  //   // Prevent default behavior (Prevent file from being opened)
  //   ev.preventDefault();

  //   if (ev.dataTransfer.items) {
  //     // Use DataTransferItemList interface to access the file(s)
  //     for (let i = 0; i < ev.dataTransfer.items.length; i++) {
  //       // If dropped items aren't files, reject them
  //       if (ev.dataTransfer.items[i].kind === 'file') {
  //         const file = ev.dataTransfer.items[i].getAsFile();
  //         console.log(`… file[${i}].name = ${file.name}`);
  //       }
  //     }
  //   } else {
  //     // Use DataTransfer interface to access the file(s)
  //     for (let i = 0; i < ev.dataTransfer.files.length; i++) {
  //       let file = file[${i}]

  //     }
  //   }
  // }

  function dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  const getFile = e => {
    let file = e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        let result = reader.result
        setImgUri(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateNft = () => {
    console.log("Generating NFT")
    // console.log(process.env.REACT_APP_TOKEN_WEB3_STORAGE)
  }

  return (
    


    <Container>
      <h1 className="text-center">Create New Item</h1>
      <div className="wrap-upload input-group mb-3 d-flex justify-content-center">
        {
          imgUri &&
          <img className="previewImg" src={imgUri} alt="preview" />
        }
        <input type="file" name="file" id="fileUpload" onChange={(e) => getFile(e)}/>
        <label htmlFor="fileUpload">
          <div className="upload_label">
            <img src={UploadGif} alt="upload gif" />
            <h3>Click to upload Item</h3>
          </div>
        </label>
      </div>
      <button className="btn btn-primary" onClick={() => generateNft()}>
        Upload
      </button>
      <div className="mb-3 row">
        <label htmlFor="inputName" className="col-sm-2 col-form-label">NFT Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputName" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputPassword" />
        </div>
      </div>
      <button className="btn btn-primary">Mint</button>
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