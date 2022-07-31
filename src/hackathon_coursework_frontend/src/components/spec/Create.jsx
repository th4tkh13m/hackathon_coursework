import React, { useState } from 'react'

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
    /*{ <div id="drop_zone" onDrop={(event) => dropHandler(event)} onDragOver={(event) => dragOverHandler(event)} style={{
      border: "5px solid blue", width: "200px", height: "200px"
    }}>
      <p>Drag one or more files to this <i>drop zone</i>.</p>
      <input
        type="file"
        className="form-control"
        id="inputGroupFile02"
        accept=".jpeg,.jpg,.png,.gif,image"
        onChange={e => getFile(e)}
      />
    </div> }*/



    <div>
      <div className="input-group mb-3">
        {<img src={imgUri} alt="preview" />}
        <label className="input-group-text" htmlFor="inputGroupFile02">
          Choose File
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
    </div >
  )
}
