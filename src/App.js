import React from 'react';


function App() {

  const uploadImage = () =>{

  }

  return (
    <div className="App">
      <h1>Upload Image To Cloudinary in React</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload Image"
        onChange={uploadImage}
      />
    </div>
  );
}

export default App;
