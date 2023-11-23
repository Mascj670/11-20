const faker = require('faker');
const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public')); 


app.get('/faker-data', (req, res) => {
    const data = {
        name: faker.name.findName(),
        address: faker.address.streetAddress(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        catchPhrase: faker.company.catchPhrase(),
        company: faker.company.companyName()
    };
    res.json(data);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
