import React, { useState } from 'react';

const ComplaintsContent = () => {
  const [complain, setComplain] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Complain:', complain);
    console.log('General Notes:', generalNotes);
    // Optionally, reset the form fields
    setComplain('');
    setGeneralNotes('');
  };

  // Inline styles for the form container
  const formContainerStyle = {
    border: '1px solid lightgray',
    padding: '20px',
    borderRadius: '5px',
    marginTop: '30px'
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Complaints Subject */}
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Complain</label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control"
                placeholder="Your subject:"
                value={complain}
                onChange={(e) => setComplain(e.target.value)}
                required
              />
            </div>
          </div>
          {/* General Notes */}
          <div className="col-md-12">
            <div className="mb-3">
              <label htmlFor="comments" className="form-label">General Notes:</label>
              <textarea
                name="comments"
                id="comments"
                rows={8}
                className="form-control"
                placeholder="Your Message:"
                value={generalNotes}
                onChange={(e) => setGeneralNotes(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="row">
          <div className="col-sm-12">
            <button
              type="submit"
              id="submit"
              name="send"
              className="btn btn-success"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ComplaintsContent;
