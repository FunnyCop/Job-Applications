import React from "react"

// Requires props.getModal( String ) and props.getTable( String )
const JobApplicationNav = props => {

    return (

        <nav>

            {/* Get Job Application Form Modal */}
            <button className = "NavButton"
                onClick = { () => props.getModal( "Job Application Form" ) }>Create Job Application</button>

            {/* Get Contact Form Modal */}
            <button className = "NavButton"
                onClick = { () => props.getModal( "Contact Form" ) }>Create Contact</button>

            {/* Get Contacts Table */}
            <button className = "NavButton"
                onClick = { () => props.getTable( "Contacts" ) }>View Contacts</button>

            {/* Get Sort Modal */}
            <button className = "NavButton"
                onClick = { () => props.getModal( "Sort" ) }>Sort</button>

            {/* Refresh Page */}
            <button className = "NavButton"
                onClick = { () => window.location.reload( false ) }>Refresh</button> {/* TODO */}

        </nav>

    )

}

export default JobApplicationNav