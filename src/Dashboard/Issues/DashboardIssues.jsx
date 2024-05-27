import { Link } from 'react-router-dom';
import './DashboardIssues.css';

const DashboardIssues = () => {
  return (
    <div className="dashboardissues-wrapper">
      <p className="d-inline-flex gap-1">
        <Link className="btn btn-dashboard-issues" to='/admin/issues/createissue'>
          Create Issue
        </Link>
      </p>

      <div>
        <div>
          <table className="table table-striped">
            <thead>
              <tr >
                <th>Issue</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>energyHQ May 2024</td>
                <td>May 24, 2024</td>
              </tr>
              <tr>
                <td>energyHQ June 2024</td>
                <td>June 24, 2024</td>
              </tr>
              <tr>
                <td>energyHQ July 2024</td>
                <td>July 24, 2024</td>
              </tr>
              <tr>
                <td>energyHQ May 2024</td>
                <td>May 24, 2024</td>
              </tr>
              <tr>
                <td>energyHQ June 2024</td>
                <td>June 24, 2024</td>
              </tr>
              <tr>
                <td>energyHQ July 2024</td>
                <td>July 24, 2024</td>
              </tr>
              <tr>
                <td>energyHQ May 2024</td>
                <td>May 24, 2024</td>
              </tr>
              <tr>
                <td>energyHQ June 2024</td>
                <td>June 24, 2024</td>
              </tr>
              <tr>
                <td>energyHQ July 2024</td>
                <td>July 24, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default DashboardIssues;