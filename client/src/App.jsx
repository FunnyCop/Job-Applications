import React, { useState } from "react"

import JobApplicationNav from "./components/JobApplicationNav.jsx"
import JobApplicationTable from "./components/JobApplicationTable.jsx"
import JobApplicationForm from "./components/JobApplicationForm.jsx"
import JobApplicationDetails from "./components/JobApplicationDetails.jsx"

import ContactNav from "./components/ContactNav.jsx"
import ContactTable from "./components/ContactTable.jsx"
import ContactForm from "./components/ContactForm.jsx"
import ContactDetails from "./components/ContactDetails.jsx"

import Sort from "./components/Sort.jsx"

const App = () => {

  // Header
  const [ header, setHeader ] = useState( null )

  // Nav Component
  const [ nav, setNav ] = useState( null )

  // Table Component
  const [ table, setTable ] = useState( null )

  // Second Table
  const [ smallTable, setSmallTable ] = useState( null )

  // Modal Component
  const [ modal, setModal ] = useState( null )

  const getTable = type => {

    if ( type === "Job Applications" ) {

      setHeader( null )
      setNav( null )
      setTable( null )

    }

    if ( type === "Contacts" ) {

      setHeader( <h1 className = "Header HeadingText">Contacts</h1> )
      setNav( <ContactNav getModal = { getModal } getTable = { getTable } /> )
      setTable( <ContactTable getDetails = { getDetails } url = "http://192.168.1.253/api/Contact/all" /> ) // TODO

    }

    if ( type === "Sort Open" )
      setTable( <JobApplicationTable getDetails = { getDetails } url = "http://192.168.1.253/api/JobApplication/open" /> )

    if ( type === "Sort Interviews" )
      setTable( <JobApplicationTable getDetails = { getDetails } url = "http://192.168.1.253/api/JobApplication/interviews/descending" /> )

  }

  const getSearch = ( type, value ) => {

    if ( type === "Company Name" )
      setTable( <JobApplicationTable getDetails = { getDetails } url = { `http://192.168.1.253/api/JobApplication/companyName/${ value }` } /> )

    if ( type === "Job Title" )
      setTable( <JobApplicationTable getDetails = { getDetails } url = { `http://192.168.1.253/api/JobApplication/jobTitle/${ value }` } /> )

  }

  const getModal = type => {

      if ( type === "Job Application Form" )
          setModal( <JobApplicationForm setModal = { setModal } /> )

      if ( type === "Contact Form" )
          setModal( <ContactForm setModal = { setModal } /> )

      if ( type === "Sort" )
        setModal( <Sort setModal = { setModal } getTable = { getTable } getSearch = { getSearch } /> )

  }

  const getDetails = ( type, id ) => {

    if ( type === "Job Application" )
      setModal( <JobApplicationDetails id = { id } setModal = { setModal } setSmallTable = { setSmallTable } getDetails = { getDetails } /> ) // TODO

    if ( type === "Contact" )
      setModal( <ContactDetails id = { id } setModal = { setModal } setSmallTable = { setSmallTable } getDetails = { getDetails } /> ) // TODO

  }

  return (

    <div id = "App">

      <div className = "Component">

          { header ? header : <h1 className = "Header HeadingText">Job Applications</h1> }

          { nav ? nav : <JobApplicationNav getModal = { getModal } getTable = { getTable } /> }

          { table ? table : <JobApplicationTable getDetails = { getDetails } url = "http://192.168.1.253/api/JobApplication/all" /> }

          { smallTable ? smallTable : null }

          { modal ? modal : null }

      </div>

    </div>

  )

}

export default App