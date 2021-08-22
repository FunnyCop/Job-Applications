package com.logan.jobApplications.mvc.models;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table( name = "job_applications" )
public class JobApplication {


/*
 * TODO
 * Resume - File
 * Cover Letter - File
 * Default values
 */


/*
 * COLUMNS
 *
 * id - Long - Generated
 *
 * status - String - Default = "open"
 * offer - String - Default = ""
 * interviews - int - Default = 0
 *
 * companyName - String
 * companyWebsite - String
 * jobTitle - String
 * link - String
 * description - String
 *
 * createdAt - Date - Generated
 * updatedAt - Date - Generated
 *
 * contacts - Set< Contact > - Many to Many
 */


// Columns


// jobApplication.id

	@Id

	@GeneratedValue( strategy = GenerationType.IDENTITY )

	private Long id;


// jobApplication.status

	@NotEmpty( message = "Status is Required" )

	@Size(

		min = 4,
		max = 6,
		message = "Status must be either 'open' or 'closed'"

	)

	private String status;


// jobApplication.offer

	@Size(

		min = 0,
		max = 255,
		message = "Offer must be between 0 and 255 characters long"

	)

	private String offer;


// jobApplication.interviews

	private int interviews;


// jobApplication.companyName

	@NotEmpty( message = "Company Name is Required" )

	@Size(

		min = 1,
		max = 255,
		message = "Company Name must be between 1 and 255 characters long"

	)

	private String companyName;


// jobApplication.companyWebsite

	@NotEmpty( message = "Company Website is Required" )

	@Size(

		min = 1,
		max = 255,
		message = "Company Website must be between 1 and 255 characters long"

	)

	private String companyWebsite;


// jobApplication.jobTitle

	@NotEmpty( message = "Job Title is Required" )

	@Size(

		min = 1,
		max = 255,
		message = "Job Title must be between 1 and 255 characters long"

	)

	private String jobTitle;


// jobApplication.link

	@NotEmpty( message = "Link is Required" )

	@Size(

		min = 1,
		max = 255,
		message = "Link must be between 1 and 255 characters long"

	)

	private String link;


// jobApplication.description

	@NotEmpty( message = "Description is Required" )

	@Size(

		min = 1,
		max = 255,
		message = "Description must be between 1 and 255 characters long"

	)

	private String description;


// jobApplication.createdAt

	@Column( updatable = false )

    @DateTimeFormat( pattern = "yyyy-MM-dd" )

    private Date createdAt;


// jobApplication.updatedAt

	@DateTimeFormat( pattern = "yyyy-MM-dd" )

    private Date updatedAt;


// jobApplication.contacts

	@ManyToMany( cascade = CascadeType.ALL, fetch = FetchType.LAZY )

	@JoinTable(

		name = "job_application_contact",
		joinColumns = { @JoinColumn( name = "job_application_id" ) },
		inverseJoinColumns = { @JoinColumn( name = "contact_id" ) }

	)

	@JsonManagedReference

	private Set< Contact > contacts;


// created_at generator


// jobApplication.createdAt

    @PrePersist

 	protected void onCreate()
    	{ this.createdAt = new Date(); }


// updated_at generator


// jobApplication.updatedAt

 	@PreUpdate

 	protected void onUpdate()
 		{ this.updatedAt = new Date(); }


// Getters


// jobApplication.id
 
 	public Long getId()
 		{ return this.id; }


// jobApplication.status

 	public String getStatus()
 		{ return this.status; }


// jobApplication.offer

 	public String getOffer()
 		{ return this.offer; }


// jobApplication.interviews

 	public int getInterviews()
 		{ return this.interviews; }


// jobApplication.companyName

 	public String getCompanyName()
 		{ return this.companyName; }


 // jobApplication.companyWebsite
	
	public String getCompanyWebsite()
		{ return this.companyWebsite; }


// jobApplication.jobTitle

 	public String getJobTitle()
 		{ return this.jobTitle; }


// jobApplication.link

 	public String getLink()
 		{ return this.link; }


// jobApplication.description

 	public String getDescription()
 		{ return this.description; }


// jobApplication.createdAt

 	public Date getCreatedAt()
 		{ return this.createdAt; }


// jobApplication.updatedAt

 	public Date updatedAt()
 		{ return this.updatedAt; }


// jobApplication.contacts

 	public Set< Contact > getContacts()
 		{ return this.contacts; }


// Setters


// jobApplication.id

 	public void setId( Long id )
 		{ this.id = id; }


// jobApplication.status

 	public void setStatus( String status )
 		{ this.status = status; }


// jobApplication.offer

 	public void setOffer( String offer )
 		{ this.offer = offer; }


// jobApplication.interviews

 	public void setInterviews( int interviews )
 		{ this.interviews = interviews; }


// jobApplication.companyName

 	public void setCompanyName( String companyName )
 		{ this.companyName = companyName; }


// jobApplication.companyWebsite

  	public void setCompanyWebsite( String companyWebsite )
  		{ this.companyWebsite = companyWebsite; }


// jobApplication.jobTitle

 	public void setJobTitle( String jobTitle )
 		{ this.jobTitle = jobTitle; }


// jobApplication.link

 	public void setLink( String link )
 		{ this.link = link; }


// jobApplication.description

 	public void setDescription( String description )
 		{ this.description = description; }


// jobApplication.contacts

 	public void setContacts( Set< Contact > contacts )
 		{ this.contacts = contacts; }


// Constructors


 	public JobApplication() {}

 	public JobApplication(

 		String companyName,
 		String companyWebsite,
 		String jobTitle,
 		String link,
 		String description

 	) {

 		this.status = "open";
 		this.offer = "";
 		this.interviews = 0;
 		this.companyName = companyName;
 		this.companyWebsite = companyWebsite;
 		this.jobTitle = jobTitle;
 		this.link = link;
 		this.description = description;

 	}
}