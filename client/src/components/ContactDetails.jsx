import React, { useState, useEffect } from "react"
import axios from "axios"
import qs from "qs"

import JobApplicationTable from "./JobApplicationTable.jsx"

// Requires props.id, props.setModal(), and props.setSmallTable()
const ContactDetails = props => {

    const [ companyName, setCompanyName ] = useState( "" )
    const [ name, setName ] = useState( "" )
    const [ email, setEmail ] = useState( "" )

    const [ companyNameError, setCompanyNameError ] = useState( null )
    const [ nameError, setNameError ] = useState( null )
    const [ emailError, setEmailError ] = useState( null )

    const clearForm = () => {

        setCompanyName( "" )
        setName( "" )
        setEmail( "" )

    }

    useEffect( () => {

        axios.get( `http://192.168.1.253/api/Contact/id/${ props.id }` )
        .then( res => {

            setCompanyName( res.data.companyName )
            setName( res.data.name )
            setEmail( res.data.email )

        } ).catch( err => console.log( err ) )

    } )

    const handleSubmit = e => {

        axios.put( `http://192.168.1.253/api/Contact/update/${ props.id }`,

            qs.stringify( {

                companyName: companyName,
                name: name,
                email: email

            } ).then ( res => {

                if ( res.data.id === -1 ) {

                    res.data.companyName !== companyName
                        ? setCompanyNameError( res.data.companyName )
                        : setCompanyNameError( null )

                    res.data.name !== name
                        ? setNameError( res.data.name )
                        : setNameError( null )

                    res.data.email !== email
                        ? setEmailError( res.data.email )
                        : setEmailError( null )

                } else
                    window.location.reload( false )

            } ).catch( err => console.log( err ) )

        )

    }

    return (

        <div className = "Modal">

            <div className = "Form" id = "ContactForm">

                <div className = "FormHeader">

                    <h3 className = "HeadingText">Contact #{ props.id }</h3>

                    <span>

                            <button className = "GoToContactsButton"
                                onClick = { () => props.setSmallTable( <div id = "SmallTable">

                                        <div className = "FormHeader">

                                            <h5 className = "HeadingText" id = "SubHeader">Job Applications for Contact #{ props.id }</h5>

                                            <button className = "CloseModalButton"
                                                onClick = { () => props.setSmallTable( null ) }>x</button>

                                        </div>

                                        <JobApplicationTable getDetails = { props.getDetails }
                                            url = { `http://192.168.1.253/api/JobApplication/contact/${ props.id }` } />

                                </div> ) }>Open Job Applications</button> {/* TODO */}

                            <button className = "ClearFormButton"
                                onClick = { () => clearForm() }>Clear</button>

                            <button className = "CloseModalButton"
                                onClick = { () => props.setModal( null ) }>x</button>

                    </span>

                </div>

                <form className = "FormBody" onSubmit = { e => handleSubmit( e ) }>

                    { companyNameError ? <p>{ companyNameError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor="companyName">Company Name</label>
                        <input className = "FormInput"
                            name = "companyName"
                            type="text"
                            value = { companyName }
                            onChange = { e => setCompanyName( e.target.value ) } required />

                    </div>

                    { nameError ? <p>{ nameError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor="name">Name</label>
                        <input className = "FormInput"
                            name = "name"
                            type="text"
                            value = { name }
                            onChange = { e => setName( e.target.value ) } required />

                    </div>

                    { emailError ? <p>{ emailError }</p> : null }

                    <div className = "FormSection">

                        <label htmlFor="email">Email</label>
                        <input className = "FormInput"
                            name = "email"
                            type="email"
                            value = { email }
                            onChange = { e => setEmail( e.target.value ) } required />

                    </div>

                    <input type="submit" value = "Submit" />

                </form>

            </div>

        </div>

    )

}

export default ContactDetails