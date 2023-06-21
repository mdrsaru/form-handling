import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [images, setImages] = useState([]);
  const [titles, setTitles] = useState([]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = event?.target?.result;
      setImages((prevState) => {
        const newImages = [...prevState];
        newImages[index] = image;
        return newImages;
      });
    };

    reader.readAsDataURL(file);
  };

  const handleTitleChange = (e, index) => {
    const title = e.target.value;
    setTitles((prevState) => {
      const newTitles = [...prevState];
      newTitles[index] = title;
      return newTitles;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform any further actions with the uploaded images and titles
    console.log(images);
    console.log(titles);
  };

  const renderImageUploadFields = () => {
    console.log('render')
    return images.map((image, index=1) => (
      <div key={index}>
        <input type="file" onChange={(e) => handleImageChange(e, index)} />
        <input
          type="text"
          placeholder="Image Title"
          value={titles[index] || ''}
          onChange={(e) => handleTitleChange(e, index)}
        />
      </div>
    ));
  };
  const handleAddImage = () => {
    setImages((prevState) => [...prevState, '']);
    setTitles((prevState) => [...prevState, '']);
  };
  return (
    <form onSubmit={handleSubmit}>
        
      {renderImageUploadFields()}
      <button type="button" onClick={handleAddImage}>Add Image</button>
     
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUploadForm;