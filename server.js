const express = require(`express`);
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/register', (req, res) => {
    res.render('register', {title: 'Регистрация на портале', user: null});
});

app.post('/register', (req, res) => {
    res.render('register', {title: 'Регистрация на портале', user: req.body});
});

app.get('/login', (req, res) => {
    res.render('login', {title: 'Авторизация'});
});

app.post('/login', (req, res) => {
    res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: 'Мои заявки',
        user: { fio: 'Иванов Иван' },
        requests: [
            { room_name: 'Аудитория 403', status: 'Новая' },
            { room_name: 'Альянсг', status: 'Завершено' }
        ]
    });
});

app.get(`/`, (req, res) => {
    res.send(`<h1> Конференция Рф</h1> <a href="/register"> Регистрация</a>`);
});

app.get(`/about`, (req, res) => {
    res.send(`<h1> О портале</h1><p> Портал для бронирования помещений и проведения конференций</p>`);
});

app.get(`/contact`, (req, res) => {
    res.send(`<h1> Контакты</h1><p>Email: support@conference-rf.ru</p><p> Тел: 7(999)-123-45-67</p>`);
});

app.get(`/rooms`, (req, res) => {
    res.send(`<h1> Список помещений</h1><ul><li>Аудитория 401 - 30 чел.</li><li>Аудитория 402 - 10 чел.</li><li>Аудитория 403 - 32 чел.</li></ul>`);
});

app.get(`/help`, (req, res) => {
    res.send(`<h1>помощь</h1><ul><li>Как забронировать помещение?</li><li>Как зарегестрироваться?</li><li>Как связаться с админом?</li></ul>`);
});


app.get(`/register`, (req, res) => {
    res.send(`<h1>Регистрация</h1>
<form method="POST" action="/register">
<p>Имя: <input type="text" name="name" required></p>
<p>Email: <input type="email" name="email" required></p>
<p>Пароль: <input type="password" name="password" required></p>
<p>Город: <input type="text" name="city" required></p>
<button type="submit">Зарегистрироваться</button>
<button type="reset">Очистить форму</button>
</form>
`);
});


app.post(`/register`, (req, res) => {
    res.send(`Пользователь ${req.body.name} зарегистрирован в городе ${req.body.city}`);
});

app.listen(PORT, () => {
    console.log(`Сервер: http://localhost:${PORT}`);
});