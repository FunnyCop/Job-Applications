import React, { useState } from "react"
import axios from "axios"
import qs from "qs"

import "../static/CSS/Modal.css"

const ContactForm = props => {

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

    const handleSubmit = e => {

        e.preventDefault()

        axios.post(

            "http://192.168.1.253/api/Contact/create",

            qs.stringify( {

                companyName: companyName,
                name: name,
                email: email

            } )

        ).then( res => {

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

            } else {

                clearForm()
                window.location.reload( false )

            }

        } ).catch( err => console.log( err ) )

    }

    return (

        <div className = "Modal">

            <div className = "Form" id = "ContactForm">

                <div className = "FormHeader">

                    <h3 className = "HeadingText">Create Contact</h3>

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

export default ContactForm