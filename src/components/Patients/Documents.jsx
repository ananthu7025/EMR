import React, { useState } from 'react';

const Documents = () => {
  // Example data for the table
  const [documents, setDocuments] = useState([
    { name: 'Document 1', type: 'PDF', date: '2024-08-01', file: 'document1.pdf' },
    { name: 'Document 2', type: 'Word', date: '2024-08-02', file: 'document2.docx' },
  ]);

  return (
    <div className='container bg-soft-muted' style={{ height: "70vh" }}>
      <div className='row' style={{padding:"20px"}}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Document Name <span className="text-danger">*</span>
              </label>
              <input
                name="docName"
                id="docName"
                type="text"
                className="form-control"
                placeholder="Document Name :"
              />
            </div>
          </div>
          {/*end col*/}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Document Type <span className="text-danger">*</span>
              </label>
              <input
                name="docType"
                id="docType"
                type="text"
                className="form-control"
                placeholder="Document Type :"
              />
            </div>
          </div>
          {/*end col*/}
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">
                Upload Document <span className="text-danger">*</span>
              </label>
              <input
                name="docUpload"
                id="docUpload"
                type="file"
                className="form-control"
              />
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-sm-12">
            <input
              type="submit"
              id="submit"
              name="send"
              className="btn btn-primary"
              defaultValue="Upload Document"
            />
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row mt-4">
          <div className="col-md-12">
            <h5>Uploaded Documents</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={index}>
                    <td>{doc.name}</td>
                    <td>{doc.type}</td>
                    <td>{doc.date}</td>
                    <td>
                      <a href={doc.file} target="_blank" rel="noopener noreferrer">
                        View Document
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
    </div>
  );
};

export default Documents;
