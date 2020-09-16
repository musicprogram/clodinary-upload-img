import React, {useEffect, useState} from 'react';

import './App.css'


function App() {

  const [loading,setLoading] = useState(false);
  const [image,setImage] = useState("");

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'react-upload-init');
    setLoading(true);

    const res = await fetch("https://api.cloudinary.com/v1_1/my-site-juan-test/image/upload",{
      method: 'POST',
      body:data
    })

    const file = await res.json()

    // console.log(file);

    setImage(file.secure_url);
    setLoading(false);
  }


  useEffect(()=>{
     fetch("https://res.cloudinary.com/my-site-juan-test/image/upload")
      .then((imgs)=>{
        debugger
        console.log(imgs)
      })
  },[])


  return (
    <div className="App">
      <h1>Upload Image To Cloudinary in React</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload Image"
        onChange={uploadImage}
      />
      <br/>
      {
        loading?(
          <img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-14.jpg"/>
        ):(
          <img src={image}/>
        )
      }
    </div>
  );
}

export default App;
