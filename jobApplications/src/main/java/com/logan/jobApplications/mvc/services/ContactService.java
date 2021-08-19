package com.logan.jobApplications.mvc.services;

import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.logan.jobApplications.mvc.models.Contact;
import com.logan.jobApplications.mvc.repositories.ContactRepository;

@Service
public class ContactService {


/*
 * QUERIES
 *
 * findAll
 * findById
 * findAllByCompanyName
 * findAllByName
 * findAllByEmail
 */


// Initialize Repository

	private final ContactRepository contactRepository;

	public ContactService( ContactRepository contactRepository )
		{ this.contactRepository = contactRepository; }


// Create


	public Contact createContact( Contact contact )
		{ return contactRepository.save( contact ); }


// Retrieve


// find all contacts

	public Set< Contact > findAll()
		{ return contactRepository.findAll(); }


// find contact by id

	public Contact findById( Long id ) {

		Optional< Contact > contact = contactRepository.findById( id );

		if ( contact.isPresent() )
			return contact.get();

		return null;

	}


// find all contacts by company name

	public Set< Contact > findAllByCompanyName( String companyName )
		{ return contactRepository.findAllByCompanyName( companyName ); }


// find all contacts by name

	public Set< Contact > findAllByName( String name )
		{ return contactRepository.findAllByName( name ); }


// find all contacts by email

	public Set< Contact > findAllByEmail( String email )
		{ return contactRepository.findAllByEmail( email ); }


// Update


	public Contact updateContact( Long id, @Valid Contact contact ) {

		if ( ! contactRepository.existsById( id ) )
			return null;

		contact.setId( id );

		return contactRepository.save( contact );

	}


// Delete

	public Boolean deleteContact( Long id ) {

		if ( ! contactRepository.existsById( id ) )
			return false;

		contactRepository.deleteById( id );

		return true;

	}

}