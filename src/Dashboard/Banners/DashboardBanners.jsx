import React, { useState } from 'react';
import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal';
import './DashboardBanners.css';

const DashboardBanners = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bannerTitle, setBannerTitle] = useState('Middle East Energy Dubai');
  const [bannerImage, setBannerImage] = useState('/Website Leaderboard.png');
  const [newImage, setNewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false);
    // Add your delete logic here
    console.log('Item deleted');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (newImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(newImage);
    }
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    setBannerTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
    }
  };

  return (
    <div className="dashboardbanners-wrapper">
      <h1>Banners Page</h1>

      <div className="dashboardbanners-card">
        <div className={isEditing ? 'dashboardbanners-card-inner' : ''}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={bannerTitle}
                onChange={handleTitleChange}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <>
              <p>{bannerTitle}</p>
              <img src={bannerImage} alt="Banner" />
            </>
          )}
        </div>
        <div className="dashboardbanners-buttons">
          {isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
          <button onClick={handleDelete}>Delete</button>
          <ConfirmationModal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
          />

        </div>
      </div>
    </div>
  );
};

export default DashboardBanners;
