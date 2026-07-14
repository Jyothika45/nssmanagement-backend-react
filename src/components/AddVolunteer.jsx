import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddVolunteer = () => {

  const [input, changeData] = useState({
    volunteerId: "",
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    department: "",
    yearOfStudy: "",
    campName: "",
    hoursCompleted: "",
    address: "",
    unitNumber: ""
  })

  const inputHandler = (event) => {
    changeData({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const readValue = () => {
    console.log(input)
    axios.post("https://host-demo-app.onrender.com/api/add-volunteer", input).then(
      (response) => {
        console.log(response.data)
        alert("Volunteer added successfully")
      }
    ).catch(
      (error) => {
        console.error("Error adding volunteer:", error)
        alert("Failed to add volunteer")
      }
    )
  }

  return (
    <div>

      <NavigationBar />

      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <h3 className="text-center mb-4">ADD VOLUNTEER</h3>

            <div className="row g-3">

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Volunteer ID :</label>
                <input
                  type="text"
                  className="form-control"
                  name="volunteerId"
                  value={input.volunteerId}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Full Name :</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={input.fullName}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Email :</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Phone :</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={input.phone}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Date of Birth :</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={input.dob}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Gender :</label>
                <select
                  className="form-select"
                  name="gender"
                  value={input.gender}
                  onChange={inputHandler}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Blood Group :</label>
                <select
                  className="form-select"
                  name="bloodGroup"
                  value={input.bloodGroup}
                  onChange={inputHandler}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Department :</label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={input.department}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Year of Study :</label>
                <select
                  className="form-select"
                  name="yearOfStudy"
                  value={input.yearOfStudy}
                  onChange={inputHandler}
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Camp Name :</label>
                <input
                  type="text"
                  className="form-control"
                  name="campName"
                  value={input.campName}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Hours Completed :</label>
                <input
                  type="number"
                  className="form-control"
                  name="hoursCompleted"
                  value={input.hoursCompleted}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Address :</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={input.address}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Unit Number :</label>
                <input
                  type="text"
                  className="form-control"
                  name="unitNumber"
                  value={input.unitNumber}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                <button
                  className="btn btn-success"
                  onClick={readValue}
                >
                  ADD VOLUNTEER
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddVolunteer