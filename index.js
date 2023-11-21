const faker = require('faker');

// Generate and log a random name
const randomName = faker.name.findName();
console.log(`Random Name: ${randomName}`);

// Generate and log a random address
const randomAddress = faker.address.streetAddress();
console.log(`Random Address: ${randomAddress}`);

// Generate and log a random phone number
const randomPhoneNumber = faker.phone.phoneNumber();
console.log(`Random Phone Number: ${randomPhoneNumber}`);

// Generate and log a random email address
const randomEmail = faker.internet.email();
console.log(`Random Email: ${randomEmail}`);

// Generate and log a random job title
const randomJobTitle = faker.name.jobTitle();
console.log(`Random Job Title: ${randomJobTitle}`);

// Generate and log a random catch phrase
const randomCatchPhrase = faker.company.catchPhrase();
console.log(`Random Catch Phrase: ${randomCatchPhrase}`);

// Generate and log a random company name
const randomCompany = faker.company.companyName();
console.log(`Random Company: ${randomCompany}`);