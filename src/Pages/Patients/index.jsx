import React, { useState, useEffect } from 'react';
import { patientData } from '../../data/AppointmentData'; // Assuming the data file name also changes
import SearchBar from '../../components/Appointments/Searchbar'; // Assuming the search bar component name also changes
import toast from 'react-hot-toast';
import DeletePatient from '../../components/Patients/CancelPatientModal';
import { useNavigate } from 'react-router';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const itemsPerPage = 8;

  useEffect(() => {
    setPatients(patientData);
    setFilteredPatients(patientData);
  }, []);

  useEffect(() => {
    const filtered = patients.filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(filtered);
    setCurrentPage(1); // Reset to first page
  }, [searchTerm, patients]);

  const indexOfLastPatient = currentPage * itemsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - itemsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const navigate = useNavigate();

  const handleAddPatient = (newPatient) => {
    navigate('/add-patient'); 
  };

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCancelPatient = (patientId) => {
    setPatients(prevPatients => prevPatients.filter(patient => patient.id !== patientId));
    setFilteredPatients(prevPatients => prevPatients.filter(patient => patient.id !== patientId));
    setSelectedPatient(null);
    toast.success('Patient canceled successfully!');
  };

  return (
    <div className="container-fluid">
      <div className="layout-specing">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-md-4">
            <h5 className="mb-0">Patient</h5>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-8 mt-4 mt-md-0">
            <div className="justify-content-md-end">
              <form>
                <div className="row justify-content-between align-items-center">
                  <div className="col-sm-12 col-md-5">
                    <div className="mb-0 position-relative">
                      <select className="form-select form-control">
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="Yesterday">Yesterday</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-5 mt-4 mt-sm-0">
                    <SearchBar onSearch={(term) => setSearchTerm(term)} />
                  </div>
                  <div className="col-sm-12 col-md-2 mt-4 mt-sm-0">
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-primary"
                        onClick={handleAddPatient}
                      >
                        Patient
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4">
            <div style={{minHeight:"65vh"}} className="table-responsive bg-white shadow rounded">
              <table className="table mb-0 table-center">
                <thead>
                  <tr>
                    <th className="border-bottom p-3" style={{ minWidth: 50 }}>#</th>
                    <th className="border-bottom p-3" style={{ minWidth: 180 }}>Name</th>
                    <th className="border-bottom p-3" style={{ minWidth: 150 }}>Email</th>
                    <th className="border-bottom p-3">Age</th>
                    <th className="border-bottom p-3">Gender</th>
                    <th className="border-bottom p-3" style={{ minWidth: 150 }}>Date</th>
                    <th className="border-bottom p-3">Time</th>
                    <th className="border-bottom p-3" style={{ minWidth: 150 }} />
                  </tr>
                </thead>
                <tbody>
                  {currentPatients.map((patient) => (
                    <tr key={patient.id}>
                      <th className="p-3">{patient.id}</th>
                      <td className="p-3">
                        <a href="#" className="text-dark">
                          <div className="d-flex align-items-center">
                            <img
                              src={patient.avatar || "../assets/images/client/01.jpg"}
                              className="avatar avatar-md-sm rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">{patient.name}</span>
                          </div>
                        </a>
                      </td>
                      <td className="p-3">{patient.email}</td>
                      <td className="p-3">{patient.age}</td>
                      <td className="p-3">{patient.gender}</td>
                      <td className="p-3">{patient.date}</td>
                      <td className="p-3">{patient.time}</td>
                      <td className="text-end p-3">
                        <a
                          href="#"
                          className="btn btn-icon btn-pills btn-soft-primary"
                          onClick={() => handleViewPatient(patient)}
                          style={{ margin: "1px" }}
                        >
                          <i className="uil uil-eye" />
                        </a>
                       
                        <a
                          href="#"
                          className="btn btn-icon btn-pills btn-soft-danger"
                          data-bs-toggle="modal"
                          style={{ margin: "5px" }}
                          data-bs-target="#cancelappointment" // Assuming the modal ID also changes
                          onClick={() => handleViewPatient(patient)}
                        >
                          <i className="uil uil-times-circle" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 mt-4">
            <div className="d-md-flex align-items-center text-center justify-content-between">
              <span className="text-muted me-3">Showing {indexOfFirstPatient + 1} - {Math.min(indexOfLastPatient, filteredPatients.length)} out of {filteredPatients.length}</span>
              <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                <li className="page-item">
                  <a
                    className={`page-link ${!hasPrevious ? 'disabled' : ''}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (hasPrevious) paginate(currentPage - 1);
                    }}
                    aria-label="Previous"
                  >
                    Prev
                  </a>
                </li>
                {pageNumbers.map((number) => (
                  <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        paginate(number);
                      }}
                    >
                      {number}
                    </a>
                  </li>
                ))}
                <li className="page-item">
                  <a
                    className={`page-link ${!hasNext ? 'disabled' : ''}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (hasNext) paginate(currentPage + 1);
                    }}
                    aria-label="Next"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DeletePatient
          patient={selectedPatient}
          onDeletePatient={handleCancelPatient}
        />
      </div>
    </div>
  );
};

export default Patients;
