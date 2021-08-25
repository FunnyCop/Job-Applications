package com.logan.jobApplications.mvc.services;

import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.logan.jobApplications.mvc.models.Contact;
import com.logan.jobApplications.mvc.models.JobApplication;
import com.logan.jobApplications.mvc.repositories.ContactRepository;
import com.logan.jobApplications.mvc.repositories.JobApplicationRepository;

@Service
public class JobApplicationService {


/*
 * QUERIES
 *
 * createJobApplication
 * findAll
 * findById
 * findAllByStatus
 * findAllByCompanyName
 * findAllByJobTitle
 *
 * findAllByContacts
 * findAllByContactsNotContains
 *
 * updateJobApplication
 * deleteJobApplication
 */


// Initialize Repository

	private final JobApplicationRepository jobApplicationRepository;
	private final ContactRepository contactRepository;

	public JobApplicationService(

		JobApplicationRepository jobApplicationRepository,
		ContactRepository contactRepository

	) {

		this.jobApplicationRepository = jobApplicationRepository;
		this.contactRepository = contactRepository;

	}


// Create


	public JobApplication createJobApplication( JobApplication jobApplication )
		{ return jobApplicationRepository.save( jobApplication ); }


// Retrieve


// find all job applications

	public Set< JobApplication > findAll()
		{ return jobApplicationRepository.findAll(); }


// find job application by id

	public JobApplication findById( Long id ) {

		Optional< JobApplication > jobApplication = jobApplicationRepository.findById( id );

		if ( jobApplication.isPresent() )
			return jobApplication.get();

		return null;

	}


// find all job applications by status

	public Set< JobApplication > findAllByStatus( String status )
		{ return jobApplicationRepository.findAllByStatus( status ); }


// find all job applications by company name

	public Set< JobApplication > findAllByCompanyName( String companyName )
		{ return jobApplicationRepository.findAllByCompanyName( companyName ); }


// find all job applications by job title

	public Set< JobApplication > findAllByJobTitle( String jobTitle )
		{ return jobApplicationRepository.findAllByJobTitle( jobTitle ); }


// find all job applications by contact

	public Set< JobApplication > findAllByContacts( Contact contact )
		{ return jobApplicationRepository.findAllByContacts( contact ); }


// find all job applications by contact not contains

	public Set< JobApplication > findAllByContactsNotContains( Contact contact )
		{ return jobApplicationRepository.findAllByContactsNotContains( contact ); }


// find all with status "open"

	public Set< JobApplication > findAllOpen()
		{ return jobApplicationRepository.findAllOpen(); }


// find all, order by interviews descending

	public Set< JobApplication > findAllOrderByInterviewsDescending()
		{ return jobApplicationRepository.findAllOrderByInterviewsDescending(); }


// Update


	public JobApplication updateJobApplication( Long id, @Valid JobApplication jobApplication ) {

		Optional< JobApplication > oldJobApplication = jobApplicationRepository.findById( id );

		if ( ! oldJobApplication.isPresent() )
			return null;

		jobApplication.setContacts( oldJobApplication.get().getContacts() );
		jobApplication.setId( id );

		return jobApplicationRepository.save( jobApplication );

	}


// Delete


	public Boolean deleteJobApplication( Long id ) {

		if ( ! jobApplicationRepository.existsById( id ) )
			return false;

		jobApplicationRepository.deleteById( id );

		return true;

	}

// Add Contact

	public JobApplication addContact( Long jobApplicationId, Long contactId ) {

		if ( ! jobApplicationRepository.existsById( jobApplicationId ) )
			return null;

		if ( ! contactRepository.existsById( contactId ) )
			return null;

		JobApplication jobApplication = jobApplicationRepository.findById( jobApplicationId ).get();
		Contact contact = contactRepository.findById( contactId ).get();

		Set< Contact > contacts = jobApplication.getContacts();

		contacts.add( contact );
		jobApplication.setContacts( contacts );
		jobApplication.setId( jobApplicationId );

		return jobApplicationRepository.save( jobApplication );

	}

}