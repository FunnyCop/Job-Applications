import React, { useState, useEffect } from "react"
import axios from "axios"

// From ../static/SASS/Table.sass
import "../static/CSS/Table.css"

// Requires props.getDetails( String, Int )
const ContactTable = props => {

    // Data for table
    const [ contacts, setContacts ] = useState( null )

    // Get Job Applications from Database
    useEffect( () => {

        axios.get( props.url )
        .then( res => setContacts( res.data ) )
        .catch( err => console.log( err ) )

    }, [ props.url ] )

    return (

        // Table Container
        <div className = "TableContainer table-responsive" id = "ContactTable">

            <table className = "table">

                <thead>

                    <tr>

                        <th scope = "row">ID</th>
                        <th scope = "row">Company Name</th>
                        <th scope = "row">Name</th>
                        <th scope = "row">Email</th>

                    </tr>

                </thead>

                <tbody>

                    {/* Display Table Data or Null */}
                    {

                        contacts

                            ? contacts.map( item => { return (

                                // Get Item Details Modal
                                <tr key = { item.id }
                                    onClick = { () => props.getDetails( "Contact", item.id ) }>

                                    {/* ID Column */}
                                    <td className = "ID">{ item.id }</td>

                                    {/* Company Name Column */}
                                    <td>{ item.companyName }</td>

                                    {/* Name Column */}
                                    <td className = "Name">{ item.name }</td>

                                    {/* Email Column */}
                                    <td className = "Email">{ item.email }</td>

                                </tr>

                            ) } )

                            : null

                    }

                </tbody>

            </table>

        </div>

    )

}

export default ContactTable