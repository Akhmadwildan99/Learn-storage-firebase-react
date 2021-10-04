import React, {useState} from 'react';
import {  ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {db} from './firrebase'



function App() {
  const [image, setImage] = useState({})
  const handleChange = (e) => {
    const select = e.target.files[0];
    setImage(select);
  }

  const submitImage = async () => {
    const storage = db
    const storageRef = ref(storage, image.name);

    // 'file' comes from the Blob or File API
    const upload = await uploadBytes(storageRef, image);
    console.log(upload)
    const url = await getDownloadURL(storageRef)
    console.log(url)
    
    
  }
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick = {submitImage}>submit</button>
    </div>
  );
}

export default App;
