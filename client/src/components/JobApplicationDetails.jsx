import React, { useState, useEffect } from "react"
import axios from "axios"
import qs from "qs"

import ContactTable from "./ContactTable.jsx"
import AddContact from "./AddContact.jsx"

import "../static/CSS/Modal.css"

// Requires props.id, props.setModal(), and props.setSmallTable()
const JobApplicationDetails = props => {

    const [ status, setStatus ] = useState( "" )
    const [ offer, setOffer ] = useState( "" )
    const [ interviews, setInterviews ] = useState( 0 )
    const [ companyName, setCompanyName ] = useState( "" )
    const [ companyWebsite, setCompanyWebsite ] = useState( "" )
    const [ jobTitle, setJobTitle ] = useState( "" )
    const [ link, setLink ] = useState( "" )
    const [ description, setDescription ] = useState( "" )

    const [ statusError, setStatusError ] = useState()
    const [ offerError, setOfferError ] = useState()
    const [ companyNameError, setCompanyNameError ] = useState( null )
    const [ companyWebsiteError, setCompanyWebsiteError ] = useState( null )
    const [ jobTitleError, setJobTitleError ] = useState( null )
    const [ linkError, setLinkError ] = useState( null )
    const [ descriptionError, setDescriptionError ] = useState( null )

    const [ displayAddContact, setDisplayAddContact ] = useState( null )

    const clearForm = () => {

        setStatus( "" )
        setOffer( "" )
        setInterviews( 0 )
        setCompanyName( "" )
        setCompanyWebsite( "" )
        setJobTitle( "" )
        setLink( "" )
        setDescription( "" )

    }

    useEffect( () => {

        axios.get( `http://192.168.1.253/api/JobApplication/id/${ props.id }` )
        .then( res => {

            setStatus( res.data.status )
            setOffer( res.data.offer )
            setInterviews( res.data.interviews )
            setCompanyName( res.data.companyName )
            setCompanyWebsite( res.data.companyWebsite )
            setJobTitle( res.data.jobTitle )
            setLink( res.data.link )
            setDescription( res.data.description )

        } ).catch( err => console.log( err ) )

    }, [ props.id ] )

    const handleSubmit = e => {

        e.preventDefault()

        axios.put(

            `http://192.168.1.253/api/JobApplication/update/${ props.id }`,

            qs.stringify( {

                status: status,
                offer: offer,
                interviews: interviews,
                companyName: companyName,
                companyWebsite: companyWebsite,
                jobTitle: jobTitle,
                link: link,
                description: description

            } )

        ).then( res => {

            if ( res.data.id === -1 ) {

                res.data.status !== status
                    ? setStatusError( res.data.status )
                    : setStatusError( null )

                res.data.offer !== offer
                    ? setOfferError( res.data.offer )
                    : setOfferError( null )

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

            } else
                window.location.reload( false )

        } ).catch( err => console.log( err ) )

    }

    const addContactHandler = e => {

        e.preventDefault()

        if ( displayAddContact !== null )
            setDisplayAddContact( null )

        else
            setDisplayAddContact( <AddContact id = { props.id } setModal = { setDisplayAddContact } /> )

    }

    return (

        <div className = "Modal">

            <div className = "Form">

                <div className = "FormHeader">

                    <h3 className = "HeadingText">Job Application #{ props.id }</h3>

                    <span>

                            <button className = "GoToContactsButton"
                                onClick = { () => props.setSmallTable( <div id = "SmallTable">

                                        <div className = "FormHeader">

                                            <h5 className = "HeadingText" id = "SubHeader">Contacts for Job Application #{ props.id }</h5>

                                            <button className = "CloseModalButton"
                                                onClick = { () => props.setSmallTable( null ) }>x</button>

                                        </div>

                                        <ContactTable getDetails = { props.getDetails }
                                            url = { `http://192.168.1.253/api/Contact/jobApplication/${ props.id }` } />

                                </div> ) }>Open Contacts</button> {/* TODO */}

                            <button className = "ClearFormButton"
                                onClick = { () => clearForm() }>Clear</button>

                            <button className = "CloseModalButton"
                                onClick = { () => props.setModal( null ) }>x</button>

                    </span>

                </div>

                <form className = "FormBody" onSubmit = { e => handleSubmit( e ) }>

                    { statusError ? <p>{ statusError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor = "status">Status</label>
                        <input className = "FormInput"
                            name = "status"
                            type="text"
                            value = { status }
                            onChange = { e => setStatus( e.target.value ) } required />

                    </div>

                    { offerError ? <p>{ offerError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor = "offer">Offer</label>
                        <input className = "FormInput"
                            name = "offer"
                            type="text"
                            value = { offer }
                            onChange = { e => setOffer( e.target.value ) } />

                    </div>

                    <div className = "FormSection">

                        <label htmlFor = "interviews">Interviews</label>
                        <input className = "FormInput"
                            name = "interviews"
                            type="text"
                            value = { interviews }
                            onChange = { e => setInterviews( e.target.value ) } required />

                    </div>

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

                    <span>

                        <button onClick = { e => addContactHandler( e ) }>Add Contact</button>
                        <input type="submit" value = "Update" />

                    </span>

                </form>

                { displayAddContact ? displayAddContact : null }

            </div>

        </div>

    )

}

export default JobApplicationDetails