// Настройка записи пользователя в бд при запросе к серверу 
const User = require('../authBD');
//Для хеширования пароля импортируем модуль 
const bcrypt = require('bcryptjs')

//Внутри createUser мы получим почту и пароль, которые пришли в запросе,
//запишем их в базу
exports.createUser = (req, res) => {
    //Хешируем пароль, за это отвечает метод hash
    bcrypt.hash(req.body.password, 10)
    .then(hash => User.create({
        email: req.body.email,
        password: hash,

    }))
    .then((user) => res.send(user))
    //Если польз. с такой почтой уже есть, сработает метод catch
    .catch((err) => res.status(400).send(err));

};
    


module.exports.login = (req, res) => {
    const {email, password} = req.body;
    //Проверим, есть ли польз в бд
    User.findOne({email})
    .then((user) => {
        if(!user) {
            return Promise.reject(new Error('Неправильные почта или пароль'))
        }
        //если польз найдет, проверим пароль захешируем его и мравним с хешем в базе
        //Для этого есть метод bcrypt.compare-он принимает на вход пароль и его хеш.
        //метод bcrypt.compare работает асинхронно, поэтому результат нужно вернуть и обработать в след then 
            
            return bcrypt.compare(password, user.password)
    })
    .then((matched) => {
        if (!matched) {
            //хеши не совпали - отклоняем промис
            return Promise.reject(new Error('Неправильные почта или пароль'))
        }
        //ауентификация прошла успешна

        res.send({massage: 'Все верно!'})
    })

    .catch((err)=> {
        res
            .status(401)
            .send({ message: err.message })
    })
}