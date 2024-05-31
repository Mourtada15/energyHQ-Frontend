import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import './AddSector.css';
import { Link } from "react-router-dom";

const AddSector = () => {
  const [date, setDate] = useState(null);
  const [value, setValue] = useState('');

  return (
    <div className="createissue-wrapper">
      <h1>Add a Sector</h1>
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

      <table className="table table-striped">
        <thead>
          <tr >
            <th>Sector</th>
            <th>Date</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Renewable Energy</td>
            <td>May 24, 2024</td>
            <td><Link className="edit-link">Edit</Link></td>
            <td><Link className="delete-link">Delete</Link></td>
          </tr>
          <tr>
            <td>Sustainability & Decarbonization</td>
            <td>June 24, 2024</td>
            <td><Link className="edit-link">Edit</Link></td>
            <td><Link className="delete-link">Delete</Link></td>
          </tr>
          <tr>
            <td>Oil & Gas</td>
            <td>July 24, 2024</td>
            <td><Link className="edit-link">Edit</Link></td>
            <td><Link className="delete-link">Delete</Link></td>
          </tr>
          <tr>
            <td>Nuclear</td>
            <td>May 24, 2024</td>
            <td><Link className="edit-link">Edit</Link></td>
            <td><Link className="delete-link">Delete</Link></td>
          </tr>
          <tr>
            <td>Hydrogen</td>
            <td>June 24, 2024</td>
            <td><Link className="edit-link">Edit</Link></td>
            <td><Link className="delete-link">Delete</Link></td>
          </tr>
          <tr>
            <td>Energy Storage & Gris</td>
            <td>July 24, 2024</td>
            <td><Link className="edit-link">Edit</Link></td>
            <td><Link className="delete-link">Delete</Link></td>
          </tr>
          <tr>
            <td>Country Reports</td>
            <td>May 24, 2024</td>
            <td><Link className="edit-link">Edit</Link></td>
            <td><Link className="delete-link">Delete</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddSector;