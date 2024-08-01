import React, { useState } from 'react';
import './AddAppointment.css'; // Import CSS file for styling

const AddAppointment = ({ onAddAppointment }) => {
  const [formData, setFormData] = useState({
    name: '',
    time: '',
    phone: '',
    date: '',
    email: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Patient Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.comments) newErrors.comments = 'Comments are required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      onAddAppointment(formData);
      setFormData({
        name: '',
        time: '',
        phone: '',
        date: '',
        email: '',
        comments: ''
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="modal fade" id="appointmentform" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom p-3">
            <h5 className="modal-title" id="exampleModalLabel">Book an Appointment</h5>
            <button type="button" className="btn btn-icon btn-close" data-bs-dismiss="modal" id="close-modal">
              <i className="uil uil-times fs-4 text-dark" />
            </button>
          </div>
          <div className="modal-body p-3 pt-4">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Patient Name <span className="text-danger">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Patient Name :"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="input-time">Time Slot :</label>
                    <input
                      name="time"
                      type="text"
                      className={`form-control timepicker ${errors.time ? 'is-invalid' : ''}`}
                      id="input-time"
                      placeholder="03:30 PM"
                      value={formData.time}
                      onChange={handleChange}
                    />
                    {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Your Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="Your Phone :"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mb-3">
                    <label className="form-label"> Date :</label>
                    <input
                      name="date"
                      type="text"
                      className={`form-control start ${errors.date ? 'is-invalid' : ''}`}
                      placeholder="Select date :"
                      value={formData.date}
                      onChange={handleChange}
                    />
                    {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Your email :"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Comments <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="comments"
                      rows={4}
                      className={`form-control ${errors.comments ? 'is-invalid' : ''}`}
                      placeholder="Your Message :"
                      value={formData.comments}
                      onChange={handleChange}
                    />
                    {errors.comments && <div className="invalid-feedback">{errors.comments}</div>}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary"  data-bs-dismiss="modal" id="close-modal" > 
                      Book An Appointment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
