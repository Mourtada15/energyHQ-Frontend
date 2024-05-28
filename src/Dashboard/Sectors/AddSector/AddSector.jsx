import './AddSector.css';

const AddSector = () => {
  return (
    <div className="createissue-wrapper">
      <h1>Add a Sector</h1>
      <div className="card card-body">
        <p>Name <input type='text' /></p>
        <p>Date <input type='date' /></p>
        <div>
          <button className='btn-dashboard-issues'>Save & Publish</button>
        </div>
      </div>
    </div>
  );
}

export default AddSector;