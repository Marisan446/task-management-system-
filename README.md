# Application Service 
Rest Data Access

# Pre-requisites software tools
```
Node – V18.16.0 
Microsoft Visual Studio Code – V1.83.1
pgAdmin - v7.8
postgreSQL - v16.0 
```

# Description
This codebase handles all the postgreSQL database interacts needed for the  application, this uses prisma ORM to connect with the postgreSQL database. It is the base code.

# Version
Current version is 1.0.0

# Commands
Make sure to replace the develop branch with your feature branch name
Please use this below commands to clone the code

```yml
git clone {clone-url} -b {branch-name}
```

To install the required NPM packages run the following command
```yml
npm install
```
To build the application use the following command

```yml
npm run build
```

To run the service run the following command
```yml
npm run local
```

# Dependencies
The Gateway-Layer receives input and forwards the request to the Data-Access-Layer and then the Data-Access-Layer passes the data to the database.
```
[Gateway-Layer]<->[Data-Access-Layer]<->[Database]
```
