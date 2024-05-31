import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { FileUpload } from 'primereact/fileupload';
import './MediaKit.css';

const MediaKit = () => {
  const [date, setDate] = useState(null);
  const [value, setValue] = useState('');

  return (
    <div className='mediakit-wrapper'>
      <h1>Media Kit</h1>
      <div className="d-flex flex-column gap-2">
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
          <FileUpload name="ebook[]" url={'/api/upload'} multiple accept="application/pdf" maxFileSize={5242880} emptyTemplate={<p className="m-0">Drag and drop <b>MediaKit</b> here to upload.</p>} />
        </div>
      </div>
    </div>
  );
}

export default MediaKit;