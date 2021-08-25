package com.logan.jobApplications.mvc.repositories;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.logan.jobApplications.mvc.models.Contact;
import com.logan.jobApplications.mvc.models.JobApplication;

@Repository
public interface JobApplicationRepository extends CrudRepository< JobApplication, Long > {


/* 
 * QUERIES
 *
 * findAll
 * findById
 * findAllByStatus
 * findAllByCompanyName
 * findAllByJobTitle
 *
 * findAllByContacts
 * findAllByContactsNotContains
 */


// Retrieve


// find all

	Set< JobApplication > findAll();


// find by id

	Optional< JobApplication > findById( Long id );


// find all by status

	Set< JobApplication > findAllByStatus( String status );


// find all by company name

	Set< JobApplication > findAllByCompanyName( String companyName );


// find all by job title

	Set< JobApplication > findAllByJobTitle( String jobTitle );


// find all by contact

	Set< JobApplication > findAllByContacts( Contact contact );


// find all by contact not contains

	Set< JobApplication > findAllByContactsNotContains( Contact contact );


// find all with status "open"

	@Query( value = "SELECT * FROM job_applications WHERE status = 'open'", nativeQuery = true )
	Set< JobApplication > findAllOpen();


// find all, order by interviews descending

	@Query( value = "SELECT * FROM job_applications ORDER BY interviews DESC", nativeQuery = true )
	Set< JobApplication > findAllOrderByInterviewsDescending();

}