package com.logan.jobApplications.mvc.repositories;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.logan.jobApplications.mvc.models.Contact;

@Repository
public interface ContactRepository extends CrudRepository< Contact, Long > {


/*
 * QUERIES
 *
 * findAll
 * findById
 * findAllByCompanyName
 * findAllByName
 * findAllByEmail
 */


// Retrieve


// find all

	Set< Contact > findAll();


// find by id

	Optional< Contact > findById( Long id );


// find all by company name

	Set< Contact > findAllByCompanyName( String companyName );


// find all by name

	Set< Contact > findAllByName( String name );


// find all by email

	Set< Contact > findAllByEmail( String email );

}