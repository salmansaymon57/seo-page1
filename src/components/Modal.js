import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Modal.css";
import styles from "./mystyle.module.css";

function Modal({ setOpenModal }) {
  const [file, setFile] = useState();

  const [previews, setPreviews] = useState();

  useEffect(() => {
    if (!file) return;
    let tmp = [];
    for (let i = 0; i < file.length; i++) {
      tmp.push(URL.createObjectURL(file[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [file]);

  const upload = () => {
    const formData = new FormData();

    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }

    console.log(formData.get("file"));

    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => {})
      .catch((er) => console.log(er));
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <div>
            <main className="container">
              <br />
              <h3>image preview</h3>

              <input
                type="file"
                name="file"
                multiple
                onChange={(e) => setFile(e.target.files)}
              />

              <button type="button" onClick={upload}>
                Upload
              </button>

              <p style={{ marginTop: "1rem" }}>A list of selected files</p>

              {previews &&
                previews.map((pic) => {
                  return (
                    <>
                      <br />
                      <img src={pic} key={pic} className={styles.details} />
                      <span>Image.jpg</span>
                    </>
                  );
                })}
            </main>
          </div>
        </div>
        <div className="body">
          <p></p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
