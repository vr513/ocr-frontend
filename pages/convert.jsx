import React, { useState, useRef } from "react";
import Head from "next/dist/shared/lib/head";
import { baseUrl } from "./_app";
import styles from '../styles/Convert.module.css'


function Convert() {
  const [text, setText] = useState(null);
  const [fileSrc, setFileSrc] = useState(null);
  const form = useRef(null);

  function handleImageChange(evt) {
    setFileSrc(URL.createObjectURL(evt.target.files[0]))
    console.log(fileSrc);
  }

  async function getText(evt) {
    evt.preventDefault();
    const data = new FormData(form.current)
    setText("Please wait while we fetch your result")
    let res = await fetch(baseUrl, {
      method: "POST",
      body: data
    })
    res = await res.json();
    console.log(res)
    setText(res.result)
  }
  return <>
    <div className="container">
      <h2 className={styles.mainHead}>Optical Character Recognition</h2>
      <div className={styles.main}>
        <form ref={form} onSubmit={getText} className={styles.formMain}>

          <div className="form-group">
            <h2 className={styles.formHead} htmlFor="exampleFormControlFile1">Test Image input</h2><br />
            <input type="file" name="file" className={styles.formImageInput} onChange={handleImageChange} id="exampleFormControlFile1" /><br />
          </div>
          <img src={fileSrc} alt="" className={styles.selectedImage} />
          <button type="submit" className={styles.btnSubmit}>Submit</button>
          {text ? (
            <>
              <h2 className={styles.formHead}>Result</h2>
              <p>{text}</p>
            </>
          ) : <></>}
        </form>
      </div>
    </div>

  </>;
}

export default Convert;
