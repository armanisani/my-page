var
  express = require('express'),
  app = express(),
  path = require('path')


app.use(express.static(path.join(__dirname, '/views')))
app.use(express.static('/views'))
app.get('/', function(req,res){
  res.sendFile(__dirname, '/index.html')
})


app.listen(3000, function(err){
  if(err) throw err
  console.log("Listening to port 3000");
})
