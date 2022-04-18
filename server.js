var http = require('http');
var fs = require('fs');
var cust = require('data-sevice.js') 

http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('home.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  fs.readFile('/about.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  res.json(employees)
  res.json({ user: 'michael' })
  res.status(500).json({ error: 'message' })

  res.json(departments)
  res.json({ user: 'michael' })
  res.status(500).json({ error: 'message' })

  res.json(employees)
  app.set('jsonp callback name', 'managers')
  res.status(500).json({ error: 'message' })

  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  res.type('txt').send('Not found');

  fs.readFile('somefile.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
   });
}).listen(8080);