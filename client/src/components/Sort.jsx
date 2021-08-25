import React, { useState } from "react"

const Sort = props => {

    const [ companyName, setCompanyName ] = useState( "" )
    const [ jobTitle, setJobTitle ] = useState( "" )

    return (

        <div className = "Modal">

            <div className = "Form" id = "ContactForm">

                <div className = "FormHeader">

                    <h3 className = "HeadingText">Sort</h3>

                    <span>

                            <button className = "ClearFormButton"
                                onClick = { () => props.getTable( "Job Applications" ) }>Reset</button>

                            <button className = "CloseModalButton"
                                onClick = { () => props.setModal( null ) }>x</button>

                    </span>

                </div>

                <div className = "FormBody" id = "Sort">

                    <div className = "FormSection">

                        <button className = "SortButton"
                            onClick = { () => props.getTable( "Sort Open" ) }>Open</button>

                        <button className = "SortButton SortButtonInterviews"
                            onClick = { () => props.getTable( "Sort Interviews" ) }>Interviews</button>

                    </div>

                    <div className = "FormSection">

                        <label htmlFor = "companyName">Company Name</label>
                        <input className = "FormInput"
                            type = "text"
                            name = "companyName"
                            value = { companyName }
                            onChange = { e => setCompanyName( e.target.value ) } />

                        <button className = "SortButton SearchButton"
                            onClick = { () => props.getSearch( "Company Name", companyName ) }>Search</button>

                    </div>

                    <div className = "FormSection">

                        <label htmlFor = "jobTitle">JobTitle</label>
                        <input className = "FormInput"
                            type = "text"
                            name = "jobTitle"
                            value = { jobTitle }
                            onChange = { e => setJobTitle( e.target.value ) } />

                        <button className = "SortButton SearchButton"
                            onClick = { () => props.getSearch( "Job Title", jobTitle ) }>Search</button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Sort