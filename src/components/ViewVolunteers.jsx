import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewVolunteers = () => {

  const [data, changeData] = useState([])

  const fetchData = () => {
    axios
      .post("https://host-demo-app.onrender.com/api/view-volunteers")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <h2 className="text-center mb-4">
              View All Volunteers
            </h2>

            <div className="row">

              {
                data.map((value, index) => {
                  return (

                    <div
                      key={index}
                      className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
                    >

                      <div className="card h-100 shadow">

                        <div className="card-body">

                          <h5 className="card-title">
                            {value.fullName}
                          </h5>

                          <p className="card-text">
                            <strong>Volunteer ID :</strong> {value.volunteerId}
                          </p>

                          <p className="card-text">
                            <strong>Email :</strong> {value.email}
                          </p>

                          <p className="card-text">
                            <strong>Phone :</strong> {value.phone}
                          </p>

                          <p className="card-text">
                            <strong>Date of Birth :</strong> {value.dob}
                          </p>

                          <p className="card-text">
                            <strong>Gender :</strong> {value.gender}
                          </p>

                          <p className="card-text">
                            <strong>Blood Group :</strong> {value.bloodGroup}
                          </p>

                          <p className="card-text">
                            <strong>Department :</strong> {value.department}
                          </p>

                          <p className="card-text">
                            <strong>Year of Study :</strong> {value.yearOfStudy}
                          </p>

                          <p className="card-text">
                            <strong>Camp Name :</strong> {value.campName}
                          </p>

                          <p className="card-text">
                            <strong>Hours Completed :</strong> {value.hoursCompleted}
                          </p>

                          <p className="card-text">
                            <strong>Address :</strong> {value.address}
                          </p>

                          <p className="card-text">
                            <strong>Unit Number :</strong> {value.unitNumber}
                          </p>

                        </div>

                      </div>

                    </div>

                  )
                })
              }

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewVolunteers