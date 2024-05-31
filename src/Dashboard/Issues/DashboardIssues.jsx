import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal';
import './DashboardIssues.css';

const DashboardIssues = () => {
  const { pathname } = useLocation();

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

  return (
    <>
      <div className="dashboardissues-wrapper">
        <p className="d-inline-flex gap-1">

          {pathname === '/admin/issues' && (
            <Link className="btn btn-dashboard-issues" to="/admin/issues/createissue">
              Create Issue
            </Link>
          )}
        </p>

        <table className="table table-striped">
          <thead>
            <tr >
              <th>Issue</th>
              <th>Date</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>energyHQ July 2024</td>
              <td>July 24, 2024</td>
              <td><Link className="edit-link">Edit</Link></td>
              <td><Link className="delete-link" onClick={handleDelete}>Delete</Link></td>
              <ConfirmationModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
              />
            </tr>
            <tr>
              <td>energyHQ July 2024</td>
              <td>July 24, 2024</td>
              <td><Link className="edit-link">Edit</Link></td>
              <td><Link className="delete-link" onClick={handleDelete}>Delete</Link></td>
              <ConfirmationModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
              />
            </tr>
            <tr>
              <td>energyHQ July 2024</td>
              <td>July 24, 2024</td>
              <td><Link className="edit-link">Edit</Link></td>
              <td><Link className="delete-link" onClick={handleDelete}>Delete</Link></td>
              <ConfirmationModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
              />
            </tr>
          </tbody>
        </table>
      </div>
    </>

  );
}

export default DashboardIssues;
