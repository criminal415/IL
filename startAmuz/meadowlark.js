const { resolveSoa } = require('dns');
const express = require('express');
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

const app = express();
const fortunes = [
  'Conquer your fears or they will conquer you.',
  'Rivers need springs.',
  "Do not fear what you don't know",
  'You will have a pleasant surprise.',
  'Whenever possible, keep it simple',
];
app
  .use(express.static(__dirname + '/public'))
  .set('port', process.env.PORT || 3000)
  .engine('handlebars', handlebars.engine)
  .set('view engine', 'handlebars');

app
  .get('/', (req, res) => {
    res.render('home');
  })

  .get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
  });

app.use((req, res, next) => {
  res.status(404);
  res.render('404');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), () => {
  console.log(
    'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.'
  );
});
