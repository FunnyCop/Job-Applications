import React, { useState, useEffect } from "react"
import axios from "axios"

import "../static/CSS/Home.css"

const Home = () => {
    const [ jobApplications, setJobApplications ] = useState()

    useEffect( () => {

        axios.get( "http://192.168.1.253/api/JobApplication/all" )
        .then( res => setJobApplications( res.data ) )
        .catch( err => console.log( err ) )

    }, [] )

    return (

        <div id = "Home" className = "Component">

            <header>
                <h1>Job Applications</h1>
            </header>

            <nav>
                <button>Create Job Application</button>
                <button>Create Contact</button>
                <button>View Contacts</button>
            </nav>

            <main>
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
                                    <tr>
                                        <td scope = "row">{ item.id }</td>
                                        <td>{ item.status }</td>
                                        <td>{ item.interviews }</td>
                                        <td>{ item.companyName }</td>
                                        <td>{ item.jobTitle }</td>
                                    </tr>
                                ) } )

                                : null
                        }
                    </tbody>
                </table>
            </main>

        </div>

    )

}

export default Home