package com.logan.jobApplications.mvc.controllers;

import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.logan.jobApplications.mvc.models.Contact;
import com.logan.jobApplications.mvc.services.ContactService;

@RestController
@CrossOrigin
@RequestMapping( "/api/Contact" )
public class ContactAPI {


// Initialize Service


	private final ContactService contactService;

	public ContactAPI( ContactService contactService )
		{ this.contactService = contactService; }


// Create

	@RequestMapping( value = "/create", method = RequestMethod.POST )
	public Contact create(

		String companyName,
		String name,
		String email

	) {

		Contact contact = new Contact(

			companyName,
			name,
			email

		);

		try {

			Contact pendingContact = contactService.createContact( contact );

			return pendingContact;

		} catch( Exception e ) {

			contact.setId( ( long ) -1 );

			if ( companyName.length() < 1 || companyName.length() > 255 )
				contact.setCompanyName( "Company Name must be between 1 and 255 characters long" );

			if ( name.length() < 1 || name.length() > 255 )
				contact.setName( "Name must be between 1 and 255 characters long" );

			String regex = "^(.+)@(.+)$";
			Pattern pattern = Pattern.compile( regex );
			Matcher matcher = pattern.matcher( email );

			if ( ! matcher.matches() )
				contact.setEmail( "Please enter a valid email." );

			return contact;

		}

	}


// Retrieve


// find all contacts

	@RequestMapping( value = "/all", method = RequestMethod.GET )
	public Set< Contact > findAll()
		{ return contactService.findAll(); }


// find contact by id

	@RequestMapping( value = "/id/{id}", method = RequestMethod.GET )
	public Contact findById( @PathVariable( "id" ) Long id )
		{ return contactService.findById( id ); }


// find all contacts by company name

	@RequestMapping( value = "/companyName/{companyName}", method = RequestMethod.GET )
	public Set< Contact > findAllByCompanyName( @PathVariable( "companyName" ) String companyName )
		{ return contactService.findAllByCompanyName( companyName ); }


// find all contacts by name

	@RequestMapping( value = "/name/{name}", method = RequestMethod.GET )
	public Set< Contact > findAllByName( @PathVariable( "name" ) String name )
		{ return contactService.findAllByName( name ); }


// find all contacts by email

	@RequestMapping( value = "/email/{email}", method = RequestMethod.GET )
	public Set< Contact > findAllByEmail( @PathVariable( "email" ) String email )
		{ return contactService.findAllByEmail( email ); }


// Update


	@RequestMapping( value = "/update/{id}", method = RequestMethod.PUT )
	public Contact updateContact(

		@PathVariable( "id" ) Long id,
		String companyName,
		String name,
		String email

	) {

		Contact contact = new Contact(

				companyName,
				name,
				email

			);

			try {

				Contact pendingContact = contactService.updateContact( id, contact );

				return pendingContact;

			} catch( Exception e ) {

				contact.setId( ( long ) -1 );

				if ( companyName.length() < 1 || companyName.length() > 255 )
					contact.setCompanyName( "Company Name must be between 1 and 255 characters long" );

				if ( name.length() < 1 || name.length() > 255 )
					contact.setName( "Name must be between 1 and 255 characters long" );

				String regex = "^(.+)@(.+)$";
				Pattern pattern = Pattern.compile( regex );
				Matcher matcher = pattern.matcher( email );

				if ( ! matcher.matches() )
					contact.setEmail( "Please enter a valid email." );

				return contact;

			}

	}


// Delete


	@RequestMapping( value = "/delete/{id}", method = RequestMethod.DELETE )
	public Boolean deleteContact( @PathVariable( "id" ) Long id )
		{ return contactService.deleteContact( id ); }

}
