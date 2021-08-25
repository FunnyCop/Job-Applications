import React, { useState, useEffect } from "react"
import axios from "axios"

const AddContact = props => {

    const [ contacts, setContacts ] = useState( null )
    const [ contact, setContact ] = useState()

    const getContacts = () => {

        axios.get( `http://192.168.1.253/api/Contact/notJobApplication/${ props.id }` )
        .then( res => {

            setContacts( res.data )
            setContact( res.data[ 0 ].id )

        } ).catch( err => console.log( err ) )

    }

    useEffect( () => getContacts(), [] )

    const handleSubmit = e => {

        e.preventDefault()

        axios.post( `http://192.168.1.253/api/JobApplication/addContact/${ props.id }/${ contact }`, {} )
        .then( res => getContacts() )
        .catch( err => console.log( err ) )

    }

    return (

        <div className = "Modal">

            <div className = "Form" id = "ContactForm">

                <div className = "FormHeader">

                    <h3 className = "HeadingText">Add Contact</h3>

                        <span>

                            <button className = "CloseModalButton"
                                onClick = { () => props.setModal( null ) }>x</button>

                        </span>

                </div>

                <form className = "FormBody" onSubmit = { e => handleSubmit( e ) }>

                    <div className = "FormSection">

                        <label htmlFor="contact">Contact: </label>

                        <select className = "FormInput" name="contact" onChange = { e => setContact( e.target.value ) }>

                            {

                                contacts

                                    ? contacts.map( item => { return (

                                        <option key = { item.id }
                                            value = { item.id }>

                                                { `Company: ${ item.companyName }, Name: ${ item.name }, Email: ${ item.email }` }

                                        </option>

                                    ) } )

                                    : null

                            }

                        </select>

                    </div>

                    <input type="submit" value = "Submit" />

                </form>

            </div>

        </div>

    )

}

export default AddContact