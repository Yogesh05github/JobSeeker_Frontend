import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { MdFindInPage } from 'react-icons/md'
import { IoMdSend } from 'react-icons/io'

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>
          How JobZee Works ?
        </h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus/>
            <p>Create Account</p>
            <p>First of all create an account with either Employer/Job Seeker role</p>
          </div>

          <div className="card">
            <MdFindInPage/>
            <p>Find a Job / Post a Job</p>
            <p>If you are a Job Seeker you can find a job according to your skills and if you are an Employer you can esaily post a job according to your company's need</p>
          </div>

          <div className="card">
            <IoMdSend/>
            <p>Apply for a Job / See Job Applications</p>
            <p>Job Seeker can apply for any suitable job they find and also Employer can check all the application for that job </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks