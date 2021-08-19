package com.logan.jobApplications.mvc.controllers;

import java.util.Set;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.logan.jobApplications.mvc.models.Contact;
import com.logan.jobApplications.mvc.models.JobApplication;
import com.logan.jobApplications.mvc.services.ContactService;
import com.logan.jobApplications.mvc.services.JobApplicationService;

@RestController
@CrossOrigin
@RequestMapping( "/api/JobApplication" )
public class JobApplicationAPI {


// Initialize Service


	private final JobApplicationService jobApplicationService;
	private final ContactService contactService;

	public JobApplicationAPI(

		JobApplicationService jobApplicationService,
		ContactService contactService

	) {

		this.jobApplicationService = jobApplicationService;
		this.contactService = contactService;

	}


// Create


	@RequestMapping( value = "/create", method = RequestMethod.POST )
	public JobApplication create(

		String companyName,
		String companyWebsite,
		String jobTitle,
		String link,
		String description

	) {

		JobApplication jobApplication = new JobApplication(

			companyName,
			companyWebsite,
			jobTitle,
			link,
			description

		);

		try {

			JobApplication pendingApplication = jobApplicationService.createJobApplication( jobApplication );

			return pendingApplication;
			
		} catch ( Exception e ) {

			jobApplication.setId( ( long ) -1 );

			if ( companyName.length() < 1 || companyName.length() > 255 )
				jobApplication.setCompanyName( "Company Name must be between 1 and 255 characters long" );

			if ( companyWebsite.length() < 1 || companyWebsite.length() < 255 )
				jobApplication.setCompanyWebsite( "Company Website must be between 1 and 255 characters long" );

			if ( jobTitle.length() < 1 || jobTitle.length() > 255 )
				jobApplication.setJobTitle( "Job Title must be between 1 and 255 characters long" );

			if ( link.length() < 1 || link.length() > 255 )
				jobApplication.setLink( "Link must be between 1 and 255 characters long" );

			if ( description.length() < 1 || description.length() > 255 )
				jobApplication.setDescription( "Description must be between 1 and 255 characters long" );

			return jobApplication;

		}

	}


// Retrieve


// find all job applications

	@RequestMapping( value = "/all", method = RequestMethod.GET )
	public Set< JobApplication > findAll()
		{ return jobApplicationService.findAll(); }


// find job application by id

	@RequestMapping( value = "/id/{id}", method = RequestMethod.GET )
	public JobApplication findById( @PathVariable( "id" ) Long id )
		{ return jobApplicationService.findById( id ); }


// find all job applications by status

	@RequestMapping( value = "/status/{status}", method = RequestMethod.GET )
	public Set< JobApplication > findAllByStatus( @PathVariable( "status" ) String status )
		{ return jobApplicationService.findAllByStatus( status ); }


// find all job applications by company name

	@RequestMapping( value = "/companyName/{companyName}", method = RequestMethod.GET )
	public Set< JobApplication > findAllByCompanyName( @PathVariable( "companyName" ) String companyName )
		{ return jobApplicationService.findAllByCompanyName( companyName ); }


// find all job applications by job title

	@RequestMapping( value = "/jobTitle/{jobTitle}", method = RequestMethod.GET )
	public Set< JobApplication > findAllByJobTitle( @PathVariable( "jobTitle" ) String jobTitle )
		{ return jobApplicationService.findAllByJobTitle( jobTitle ); }


// find all job applications by contact

	@RequestMapping( value = "/contact/{contact}", method = RequestMethod.GET )
	public Set< JobApplication > findAllByContacts( @PathVariable( "contact" ) Long contactId ) {

		Contact contact = contactService.findById( contactId );

		if ( contact != null )
			return jobApplicationService.findAllByContacts( contact );

		return null;

	}


// find all job applications by contact not contains

	@RequestMapping( value = "/notContact/{contact}", method = RequestMethod.GET )
	public Set< JobApplication > findAllByContactsNotContains( @PathVariable( "contact" ) Long contactId ) {

		Contact contact = contactService.findById( contactId );

		if ( contact != null )
			return jobApplicationService.findAllByContactsNotContains( contact );

		return jobApplicationService.findAll();

	}


// Update


	@RequestMapping( value = "/update/{id}", method = RequestMethod.PUT )
	public JobApplication updateJobApplication(

		@PathVariable( "id" ) Long id,
		String status,
		String offer,
		int interviews,
		String companyName,
		String companyWebsite,
		String jobTitle,
		String link,
		String description

	) {

		JobApplication jobApplication = new JobApplication(

			companyName,
			companyWebsite,
			jobTitle,
			link,
			description

		);

		jobApplication.setStatus( status );
		jobApplication.setOffer( offer );
		jobApplication.setInterviews( interviews );
		jobApplication.setId( id );

		try {

			JobApplication pendingApplication = jobApplicationService.updateJobApplication( id, jobApplication );

			return pendingApplication;

		} catch ( Exception e ) {

			jobApplication.setId( ( long ) -1 );

			if ( status.length() < 4 || status.length() > 6 )
				jobApplication.setStatus( jobApplication.getStatus() + "Status must be either 'open' or 'closed'" );

			if ( offer.length() < 0 || offer.length() > 255 )
				jobApplication.setOffer( "Offer must be between 0 and 255 characters long" );

			if ( companyName.length() < 1 || companyName.length() > 255 )
				jobApplication.setCompanyName( "Company Name must be between 1 and 255 characters long" );

			if ( companyWebsite.length() < 1 || companyWebsite.length() < 255 )
				jobApplication.setCompanyWebsite( "Company Website must be between 1 and 255 characters long" );

			if ( jobTitle.length() < 1 || jobTitle.length() > 255 )
				jobApplication.setJobTitle( "Job Title must be between 1 and 255 characters long" );

			if ( link.length() < 1 || link.length() > 255 )
				jobApplication.setLink( "Link must be between 1 and 255 characters long" );

			if ( description.length() < 1 || description.length() > 255 )
				jobApplication.setDescription( "Description must be between 1 and 255 characters long" );

			return jobApplication;

		}

	}


// Delete


	@RequestMapping( value = "/delete/{id}", method = RequestMethod.DELETE )
	public Boolean deleteJobApplication( @PathVariable( "id" ) Long id )
		{ return jobApplicationService.deleteJobApplication( id ); }


// Add Contact


	@RequestMapping( value = "/addContact/{jobApplicationId}/{contactId}", method = RequestMethod.POST )
	public JobApplication addContact(

		@PathVariable( "jobApplicationId" ) Long jobApplicationId,
		@PathVariable( "contactId" ) Long contactId

	) { return jobApplicationService.addContact( jobApplicationId, contactId ); }

}