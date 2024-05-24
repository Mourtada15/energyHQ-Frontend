import './DashboardIssues.css';

const DashboardIssues = () => {
  return (
    <div className="dashboardissues-wrapper">
      <p class="d-inline-flex gap-1">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Create Issue
        </button>
      </p>

      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <p>Title <input type='text' /></p>
          <p>Date <input type='date' /></p>
          <p>Ebook <input type='file' /></p>
          <p>Cover <input type='file' /></p>
          <div>
            <button>Save & Publish</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DashboardIssues;