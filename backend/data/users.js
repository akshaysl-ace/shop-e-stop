import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin USer',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Akshay',
        email: 'akshay@email.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: false,
    },
    {
        name: 'Piyush',
        email: 'piyush@email.com',
        password: bcrypt.hashSync('1234568', 10),
        isAdmin: false,
    }
];

export default users;