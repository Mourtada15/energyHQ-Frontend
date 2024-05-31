import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { FileUpload } from 'primereact/fileupload';
import { Calendar } from 'primereact/calendar';
import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal';
import './DashboardBanners.css';

const DashboardBanners = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bannerTitle, setBannerTitle] = useState('Middle East Energy Dubai');
  const [bannerImage, setBannerImage] = useState('/Website Leaderboard.png');
  const [newImage, setNewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('');
  const [date, setDate] = useState(null);

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
      <div className='card p-3 d-flex flex-column gap-3'>
        <div className="card card-body d-flex flex-row justify-content-between">
          <div className="d-flex gap-4">
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="buttondisplay" className="font-bold block mb-2">
                Title
              </label>
              <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="buttondisplay" className="font-bold block mb-2">
                Date
              </label>
              <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
          </div>
          <div>
            <button className='btn-dashboard-issues'>Save & Publish</button>
          </div>
        </div>
        <div className="card">
          <FileUpload name="cover[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={2097152} emptyTemplate={<p className="m-0">Drag and drop the <b>Cover</b> here to upload.</p>} />
        </div>
      </div>

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
