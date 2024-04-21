import React, { useState, useRef } from 'react';
import './style.css';

function ImagePicker() {
  const inputRef = useRef(null);
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // To store the uploaded image URL
  const [notification, setNotification] = useState(''); // To store the notification message

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxSize = Math.max(img.width, img.height);
          canvas.width = maxSize;
          canvas.height = maxSize;
          const ctx = canvas.getContext('2d');

          // Center the image on the canvas
          const x = (maxSize - img.width) / 2;
          const y = (maxSize - img.height) / 2;
          ctx.drawImage(img, x, y);

          canvas.toBlob((blob) => {
            const imageFile = new File([blob], file.name, {
              type: 'image/png',

            });

            setImage(imageFile); // Set the File object to the state
            setImageUrl(URL.createObjectURL(imageFile)); // Set the image preview URL
          }, 'image/png');
        };
      };
    }
  };

  const handleUploadButtonClick = () => {
    // Image Uploading Logic
    setNotification('Healthy Grade 0'); // Sets the notification
    setTimeout(() => setNotification(''), 3000); // Notification will disappear after 3 seconds
  };

  return (
    <div>
      <div className="box-container">
        <label htmlFor="image-upload" className="image-upload-label">
          {image ? image.name : 'Choose an image'}
        </label>
        <input
          id="image-upload"
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        {imageUrl && (
          <img src={imageUrl} alt="" className="img-display-after" />
        )}
      </div>
      <button className="image-upload-button" onClick={handleUploadButtonClick}>
        Upload
      </button>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default ImagePicker;
