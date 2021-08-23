import React from "react"

// Requires props.getModal( String ) and props.getTable( String )
const ContactNav = props => {

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
                onClick = { () => props.getTable( "Job Applications" ) }>View Job Applications</button>

            {/* Refresh Page */}
            <button className = "NavButton"
                onClick = { () => window.location.reload( false ) }>Refresh</button>

        </nav>

    )

}

export default ContactNav