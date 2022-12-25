import React from 'react'
import axios from "axios";
import { useState } from "react";
const Cool = () => {
    const [file, setFile] = useState();

    function handleChange(event) {
      setFile(event.target.files[0]);
    }
    function handleSubmit() {
      console.log("hiii");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);
      console.log(formData);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      
    
      axios
        .post(
          " https://lurm-backend.onrender.com/api/v1/pastquestion/upload/",
          {
            courseCode: "csc211",
            semester: "Alpha",
            level: "300",
            session: "2010/2011",
            questionFile: formData,
          },
           {
            headers: {
              "content-type": "multipart/form-data"
            }
          },
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
      <div className="">
        <div className="">
  
        
          <input type="file" name="Choose" onChange={handleChange} />
          <button onClick={() => handleSubmit()}>Upload</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
}

export default Cool