import React, { useState, useEffect } from "react"
import axios from "axios"

import JobApplicationForm from "./JobApplicationForm.jsx"
import ContactForm from "./ContactForm.jsx"

const Home = () => {
    const [ jobApplications, setJobApplications ] = useState( null )
    const [ modal, setModal ] = useState( null )

    useEffect( () => {

        axios.get( "http://192.168.1.253/api/JobApplication/all" )
        .then( res => setJobApplications( res.data ) )
        .catch( err => console.log( err ) )

    }, [] )

    const navButtonHandler = type => {

        if ( type === 0 )
            setModal( <JobApplicationForm setModal = { setModal } /> )

        if ( type === 1 )
            setModal( <ContactForm setModal = { setModal } /> )

    }

    return (

        <div className = "Component">

            <header>

                <h1 className = "HeadingText">Job Applications</h1>

            </header>

            <nav>

                <button className = "NavButton"
                    onClick = { () => navButtonHandler( 0 ) }>Create Job Application</button>

                <button className = "NavButton"
                    onClick = { () => navButtonHandler( 1 ) }>Create Contact</button>

                <button className = "NavButton"
                    onClick = { () => navButtonHandler( 2 ) }>View Contacts</button>

                <button className = "NavButton"
                    onClick = { () => navButtonHandler( 3 ) }>Sort</button>

                <button className = "NavButton"
                    onClick = { () => window.location.reload( false ) }>Refresh</button>

            </nav>

            <main className = "table-responsive">

                <table className = "table">

                    <thead>

                        <tr>

                            <th scope = "row">ID</th>
                            <th scope = "row">Status</th>
                            <th scope = "row">Interviews</th>
                            <th scope = "row">Company Name</th>
                            <th scope = "row">Job Title</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            jobApplications

                                ? jobApplications.map( item => { return (

                                    <tr key = { item.id }
                                        onClick = { () => navButtonHandler( 4 ) }>

                                        <td className = "ID">{ item.id }</td>

                                        {

                                            item.status === "open"

                                                ? <td className = "StatusOpen">{ item.status }</td>
                                                : <td className = "StatusClosed">{ item.status }</td>

                                        }

                                        <td className = "Interviews">{ item.interviews }</td>
                                        <td>{ item.companyName }</td>
                                        <td className = "JobTitle">{ item.jobTitle }</td>

                                    </tr>

                                ) } )

                                : null

                        }

                    </tbody>

                </table>

            </main>

            { modal ? modal : null }

        </div>

    )

}

export default Home