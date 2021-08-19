# READ ME
## Job Application Tracker

### Applications

- **Java API** ( *jobApplications* )
    <br>
    - Uses **Spring Boot** and **MariaDB** to act as a **Back-End** ( ***MySQL** Configuration Included* )
    - Built with **Java 1.8** for compatibility with **Raspberry Pi OS**, *may be packaged with more recent versions for different systems*
    <br>
    - **JobApplicationAPI** ( */api/JobApplication* )
    <br>
    - Routes
        - */create* **POST**
        - */all* **GET**
        - */id/{id}* **GET**
        - */status/{status}* **GET**
        - */companyName/{companyName}* **GET**
        - */jobTitle/{jobTitle}* **GET**
        - */contact/{contact}* **GET**
        - */notContact/{contact}* **GET**
        - */update/{id}* **PUT**
        - */delete/{id}* **DELETE**
        - */addContact/{jobApplicationId}/{contactId}* **POST**
    <br>
    - **ContactAPI** ( */api/Contact* )
    <br>
    - Routes
        - */create* **POST**
        - */all* **GET**
        - */id/{id}* **GET**
        - */companyName/{companyName}* **GET**
        - */name/{name}* **GET**
        - */email/{email}* **GET**
        - */update/{id}* **PUT**
        - */delete/{id}* **DELETE**
    <br>
- **Electron Client** ( *client* )
TODO