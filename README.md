# READ ME
## Job Application Tracker

### Applications

- **Java API** ( *jobApplications* )

    - Uses **Spring Boot** and **MariaDB** to act as a **Back-End** ( ***MySQL** Configuration Included* )
    - Built with **Java 1.8** for compatibility with **Raspberry Pi OS**, *may be packaged with more recent versions for different systems*

    - **JobApplicationAPI** ( */api/JobApplication* )

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

    - **ContactAPI** ( */api/Contact* )

    - Routes
        - */create* **POST**
        - */all* **GET**
        - */id/{id}* **GET**
        - */companyName/{companyName}* **GET**
        - */name/{name}* **GET**
        - */email/{email}* **GET**
        - */update/{id}* **PUT**
        - */delete/{id}* **DELETE**

- **Electron Client** ( *client* ) *WIP*

    - Uses **Electron** and **React** to act as a **Front-End**
    - May be packaged into an executable or used solely as a **React Application**.