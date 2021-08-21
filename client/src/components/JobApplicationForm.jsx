import React, { useState } from "react"
import axios from "axios"
import qs from "qs"

import "../static/CSS/Modal.css"

const JobApplicationForm = props => {

    const [ companyName, setCompanyName ] = useState( "" )
    const [ companyWebsite, setCompanyWebsite ] = useState( "" )
    const [ jobTitle, setJobTitle ] = useState( "" )
    const [ link, setLink ] = useState( "" )
    const [ description, setDescription ] = useState( "" )

    const [ companyNameError, setCompanyNameError ] = useState( null )
    const [ companyWebsiteError, setCompanyWebsiteError ] = useState( null )
    const [ jobTitleError, setJobTitleError ] = useState( null )
    const [ linkError, setLinkError ] = useState( null )
    const [ descriptionError, setDescriptionError ] = useState( null )

    const clearForm = () => {

        setCompanyName( "" )
        setCompanyWebsite( "" )
        setJobTitle( "" )
        setLink( "" )
        setDescription( "" )

    }

    const handleSubmit = e => {

        e.preventDefault()

        axios.post(

            "http://192.168.1.253/api/JobApplication/create",

            qs.stringify( {

                companyName: companyName,
                companyWebsite: companyWebsite,
                jobTitle: jobTitle,
                link: link,
                description: description

            } )

        ).then( res => {

            if ( res.data.id === -1 ) {

                res.data.companyName !== companyName
                    ? setCompanyNameError( res.data.companyName )
                    : setCompanyNameError( null )

                res.data.companyWebsite !== companyWebsite
                    ? setCompanyWebsiteError( res.data.companyWebsite )
                    : setCompanyWebsiteError( null )

                res.data.jobTitle !== jobTitle
                    ? setJobTitleError( res.data.jobTitle )
                    : setJobTitleError( null )

                res.data.link !== link
                    ? setLinkError( res.data.link )
                    : setLinkError( null )

                res.data.description !== description
                    ? setDescriptionError( res.data.description )
                    : setDescriptionError( null )

            } else {

                clearForm()
                window.location.reload( false )

            }

        } ).catch( err => console.log( err ) )

    }

    return (

        <div className = "Modal">

            <div className = "Form">

                <div className = "FormHeader">

                    <h3 className = "HeadingText">Create Job Application</h3>

                    <span>

                        <button className = "ClearFormButton"
                                onClick = { () => clearForm() }>Clear</button>

                            <button className = "CloseModalButton"
                                onClick = { () => props.setModal( null ) }>x</button>

                    </span>

                </div>

                <form className = "FormBody" onSubmit = { e => handleSubmit( e ) }>

                    { companyNameError ? <p>{ companyNameError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor = "companyName">Company Name</label>
                        <input className = "FormInput"
                            name = "companyName"
                            type="text"
                            value = { companyName }
                            onChange = { e => setCompanyName( e.target.value ) } required />

                    </div>

                    { companyWebsiteError ? <p>{ companyWebsiteError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor="companyWebsite">Company Website</label>
                        <input className = "FormInput"
                            name = "companyWebsite"
                            type="text"
                            value = { companyWebsite }
                            onChange = { e => setCompanyWebsite( e.target.value ) } required />

                    </div>

                    { jobTitleError ? <p>{ jobTitleError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor="jobTitle">Job Title</label>
                        <input className = "FormInput"
                            name = "jobTitle"
                            type="text"
                            value = { jobTitle }
                            onChange = { e => setJobTitle( e.target.value ) } required />

                    </div>

                    { linkError ? <p>{ linkError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor="link">Link</label>
                        <input className = "FormInput"
                            name = "link"
                            type="text"
                            value = { link }
                            onChange = { e => setLink( e.target.value ) } required />

                    </div>

                    { descriptionError ? <p>{ descriptionError }</p> : null }

                    <div className = "FormSection TextAreaSection">

                        <label htmlFor="description">Description</label>
                        <textarea className = "TextArea"
                            name = "description"
                            type="text"
                            value = { description }
                            onChange = { e => setDescription( e.target.value ) } required />

                    </div>

                    <input type="submit" value = "Submit" />

                </form>

            </div>

        </div>

    )

}

export default JobApplicationForm