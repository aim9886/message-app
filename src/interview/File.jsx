import React, { useState } from 'react'

const File = () => {
    let [file, setFile] = useState();
    const handleFileChange = (e) => {
        setFile([...file, ...e.target.value]);
    };

    let handleUpload = () => {
        console.log(file);
    };

  return (
    <div>
        <input type="file" multiple onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Files</button>
    </div>
  );
};

export default File