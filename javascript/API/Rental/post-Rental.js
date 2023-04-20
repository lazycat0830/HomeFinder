const FormData = require('form-data');

const form = new FormData();
form.append('name', 'John Doe');
form.append('email', 'johndoe@example.com');
form.append('avatar', fs.createReadStream('/path/to/avatar.jpg'));

axios.post('https://example.com/api/user', form, {
    headers: {
        ...form.getHeaders(),
    
    },
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });


    method: 'post',
    url: 'http://localhost:5190/api/Home/InsertRental',
    headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        // "Authorization": `Bearer ${token}`, 
    },
