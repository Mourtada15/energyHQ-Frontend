import './CreateIssue.css';

const CreateIssue = () => {
  return (
    <div className="createissue-wrapper">
      <h1>Create Issue</h1>
      <div className="card card-body">
        <p>Title <input type='text' /></p>
        <p>Date <input type='date' /></p>
        <p>Ebook <input type='file' /></p>
        <p>Cover <input type='file' /></p>
        <div>
          <button className='btn-dashboard-issues'>Save & Publish</button>
        </div>
      </div>
    </div>
  );
}

export default CreateIssue;