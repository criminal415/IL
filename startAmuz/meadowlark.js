const { resolveSoa } = require('dns');
const express = require('express');
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
const fortune = require('./lib/fortune.js');

const app = express();

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
    res.render('about', { fortune: fortune.getFortune() });
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
