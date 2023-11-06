import React, { useState, ChangeEvent } from 'react';

function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];//on prend la premiere valeur entree
      setSelectedFile(file);
    }
  };

  return (
    <div>
      <h4>Inserer votre photo</h4>
      <input 
        className='photo_file'
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>
  );
}

export default PhotoUpload;
