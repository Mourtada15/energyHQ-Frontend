import { Link, useLocation } from 'react-router-dom';
import './DashboardIssues.css';

import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast, toast } from 'primereact/toast';
import { Button } from 'primereact/button'
import { confirm2 } from 'primereact/confirm'


const DashboardIssues = () => {
  const { pathname } = useLocation();

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
              <td>energyHQ May 2024</td>
              <td>May 24, 2024</td>
              <td><Link className="edit-link">Edit</Link></td>
              <td><Link className="delete-link">Delete</Link></td>
            </tr>
            <tr>
              <td>energyHQ June 2024</td>
              <td>June 24, 2024</td>
              <td><Link className="edit-link">Edit</Link></td>
              <td><Link className="delete-link">Delete</Link></td>
            </tr>
            <tr>
              <td>energyHQ July 2024</td>
              <td>July 24, 2024</td>
              <td><Link className="edit-link">Edit</Link></td>
              <td><Link className="delete-link">Delete</Link></td>
            </tr>
            <tr>
              <td>energyHQ May 2024</td>
              <td>May 24, 2024</td>
              <td><Link>Edit</Link></td>
              <td><Link>Delete</Link></td>
            </tr>
            <tr>
              <td>energyHQ June 2024</td>
              <td>June 24, 2024</td>
              <td><Link>Edit</Link></td>
              <td><Link>Delete</Link></td>
            </tr>
            <tr>
              <td>energyHQ July 2024</td>
              <td>July 24, 2024</td>
              <td><Link>Edit</Link></td>
              <td><Link>Delete</Link></td>
            </tr>
            <tr>
              <td>energyHQ May 2024</td>
              <td>May 24, 2024</td>
              <td><Link>Edit</Link></td>
              <td><Link>Delete</Link></td>
            </tr>
            <tr>
              <td>energyHQ June 2024</td>
              <td>June 24, 2024</td>
              <td><Link>Edit</Link></td>
              <td><Link>Delete</Link></td>
            </tr>
            <tr>
              <td>energyHQ July 2024</td>
              <td>July 24, 2024</td>
              <td><Link>Edit</Link></td>
              {/* <td><Link>Delete</Link></td> */}
              <Toast ref={toast} />
              <ConfirmDialog />
              <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
            </tr>
          </tbody>
        </table>
      </div >
    </>
  );
}

export default DashboardIssues;