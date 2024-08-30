Node.js Technical Test
Problem Statement
You are required to build a Node.js application with an Express.js API endpoint that fetches specific data from a relational database. The application should meet the following requirements:
Create a GET API Endpoint:
The endpoint should be /api/getVendorUsers and it should accept two query parameters: prId and custOrgId.
Database Schema:
Assume there are two tables in the database:
PrLineItems with columns suppliers, custOrgId, and purchaseRequestId.
VendorUsers with columns VendorOrganizationId, UserName, Name, and Role.
Operation Requirements:
Use prId and custOrgId to filter records in the PrLineItems table.
Extract the suppliers column which contains comma-separated supplier IDs.
From the filtered records, collect unique supplier IDs.
Fetch UserName, and Name from the VendorUsers table where VendorOrganizationId matches the extracted unique supplier IDs and Role is "Admin".
Return the result as a JSON response containing an array of objects with the fields supplierId, UserName, and Name.
Single SQL Query Requirement:
Perform all operations using a single SQL query.
Error Handling:
Ensure that the application handles errors gracefully, including issues with database connectivity and invalid parameters.
Postman Screenshot:
Test the API using Postman and include a screenshot of a successful response in the repository.
Instructions
Set up a new Node.js project and initialise it with a package.json file.
Use Express.js to create the GET API endpoint.
Write clean and well-documented code.
Ensure your code is modular and easy to understand.
Provide instructions on how to run the application and set up the database in a README.md file.
Include a Postman screenshot of the API response in the GitHub repository.
 
Evaluation Criteria
Correctness: The API should meet all the specified requirements.
Code Quality: The code should be clean, modular, and well-documented.
Efficiency: The SQL query should be efficient and perform the required operations in a single query.
Error Handling: The application should handle errors gracefully.
Documentation: The repository should include clear instructions and a Postman screenshot of the response.
Submission
Create a GitHub repository for your project. 
Commit your code and the Postman screenshot to the repository. 
Include a README.md file with instructions on how to set up and run the application.
Provide the repository URL for evaluation.
 
myphpAdmin - https://db-technical-test.conqt.com/
DB User - candidate
DB Pass - NoTeDeSt^C10.6?SxwY882}
DB Host - nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com
Port  - 3306
 
Note : Checkout the Table before starting the Test, All the provided details should be in the response.