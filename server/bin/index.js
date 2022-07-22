const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('../routes/productsRoutes')
const usersRouter = require('../routes/usersRoutes')
const users = require('../authBD.json')
const cors = require('../middlewares/cors')

const jwt = require('jsonwebtoken');

const accessTokenSecret = 'youraccesstokensecret';


const app = express(); 

const PORT = 4001;

app.use(bodyParser.json())

app.use(cors)
app.post('/login', (req, res) => {
    // Считывание имени пользователя и пароля из тела запроса
    const { username, password } = req.body;

    // Фильтр пользователей из массива users по имени пользователя и паролю
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Сгенерируйте маркер доступа
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});

app.use(productsRouter) // Заходит в роутер и выполняет все роуты по порядку

app.use('/auth', usersRouter)

app.listen(PORT, () => {console.log('App started and listen port', PORT)});