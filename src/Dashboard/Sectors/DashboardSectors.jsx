import { Link } from 'react-router-dom';
import "./DashboardSectors.css";

const DashboardSectors = () => {
  return (
    <div className="dashboardsectors-wrapper">
      <p className="d-inline-flex gap-1">
        <Link className="btn btn-dashboard-issues" to='/admin/sectors/addsector'>
          Add a Sector
        </Link>
      </p>

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

export default DashboardSectors;