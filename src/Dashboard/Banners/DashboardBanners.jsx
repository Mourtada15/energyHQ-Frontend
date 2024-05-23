import React, { useState } from 'react';
import "./DashboardBanners.css";

const DashboardBanners = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bannerTitle, setBannerTitle] = useState('Middle East Energy Dubai');
  const [bannerImage, setBannerImage] = useState('/website Leaderboard.png');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    setBannerTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setBannerImage(e.target.value);
  };

  return (
    <div className="dashboardbanners-wrapper">
      <h1>Banners Page</h1>

      <div className="dashboardbanners-card">
        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                value={bannerTitle}
                onChange={handleTitleChange}
              />
              <input
                type='image'
                value={bannerImage}
                onChange={handleImageChange}
                placeholder="Image URL"
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
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanners;

//   return (
//     <div className="dashboardbanners-wrapper" >
//       <h1>Banners Page</h1>

//       <div className="dashboardbanners-card">
//         <div>
//           <p className="banner-title">Middle East Energy Dubai</p>
//           <img src="/Website Leaderboard.png" alt="Banner" />
//         </div>
//         <div className="dashboardbanners-buttons">
//           <button>Edit</button>
//           <button>Delete</button>
//         </div>
//       </div>
    
//     </div>
//   );
// }

// export default DashboardBanners;