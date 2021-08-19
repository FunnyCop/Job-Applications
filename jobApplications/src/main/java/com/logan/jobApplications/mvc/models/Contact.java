package com.logan.jobApplications.mvc.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table( name = "contacts" )
public class Contact {


/*
 * COLUMNS
 *
 * id - Long - Generated
 *
 * companyName - String
 * name - String
 * email - String
 *
 * createdAt - Date - Generated
 * updatedAt - Date - Generated
 *
 * job_application_id - Long - Generated ( unavailable )
 */


// Columns


// contact.id

	@Id

	@GeneratedValue( strategy = GenerationType.IDENTITY )

	private Long id;


// contact.companyName

	@NotEmpty( message = "Company Name is Required" )

	@Size(

		min = 1,
		max = 255,
		message = "Company Name must be between 1 and 255 characters long"

	)

	private String companyName;


// contact.name

	@NotEmpty( message = "Name is Required" )

	@Size(

		min = 1,
		max = 255,
		message = "Name must be between 1 and 255 characters long"

	)

	private String name;


// contact.email

	@NotEmpty( message = "Email is Required." )

	@Email( message = "Please enter a valid email." )

	private String email;


// contact.createdAt

	@Column( updatable = false )

    @DateTimeFormat( pattern = "yyyy-MM-dd" )

    private Date createdAt;


// contact.updatedAt

	@DateTimeFormat( pattern = "yyyy-MM-dd" )

    private Date updatedAt;

// created_at generator


// contact.createdAt

    @PrePersist

 	protected void onCreate()
    	{ this.createdAt = new Date(); }


// updated_at generator


// contact.updatedAt

 	@PreUpdate

 	protected void onUpdate()
 		{ this.updatedAt = new Date(); }


// Getters


// contact.id

	public Long getId()
		{ return this.id; }


// contact.companyName

 	public String getCompanyName()
 		{ return this.companyName; }


// contact.name

	public String getName()
		{ return this.name; }


// contact.email

	public String getEmail()
		{ return this.email; }


// contact.createdAt

	public Date getCreatedAt()
		{ return this.createdAt; }


// contact.updatedAt

	public Date updatedAt()
		{ return this.updatedAt; }


// Setters


// contact.id

	public void setId( Long id )
		{ this.id = id; }


// contact.companyName

 	public void setCompanyName( String companyName )
 		{ this.companyName = companyName; }


// contact.name

	public void setName( String name )
		{ this.name = name; }


// contact.email

	public void setEmail( String email )
		{ this.email = email; }


// Constructors


	public Contact() {}

	public Contact(

		String companyName,
		String name,
		String email

	) {

		this.companyName = companyName;
		this.name = name;
		this.email = email;

	}

}