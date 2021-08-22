import React, { useState, useEffect } from "react"
import axios from "axios"

// From ../static/SASS/Table.sass
import "../static/CSS/Table.css"

// Requires props.getDetails( String, Int )
const JobApplicationTable = props => {

    // Data for table
    const [ jobApplications, setJobApplications ] = useState( null )

    // Get Job Applications from Database
    useEffect( () => {

        axios.get( "http://192.168.1.253/api/JobApplication/all" )
        .then( res => setJobApplications( res.data ) )
        .catch( err => console.log( err ) )

    }, [] )

    return (

        // Table Container
        <div className = "TableContainer table-responsive">

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

                    {/* Display Table Data or Null */}
                    {

                        jobApplications

                            ? jobApplications.map( item => { return (

                                // Get Item Details Modal
                                <tr key = { item.id }
                                    onClick = { () => props.getDetails( "Job Application", item.id ) }>

                                    {/* ID Column */}
                                    <td className = "ID">{ item.id }</td>

                                    {/* Status Column */}
                                    {

                                        item.status === "open"

                                            ? <td className = "StatusOpen">{ item.status }</td>
                                            : <td className = "StatusClosed">{ item.status }</td>

                                    }

                                    {/* Interviews Column */}
                                    <td className = "Interviews">{ item.interviews }</td>

                                    {/* Company Name Column */}
                                    <td>{ item.companyName }</td>

                                    {/* Job Title Column */}
                                    <td className = "JobTitle">{ item.jobTitle }</td>

                                </tr>

                            ) } )

                            : null

                    }

                </tbody>

            </table>

        </div>

    )

}

export default JobApplicationTable