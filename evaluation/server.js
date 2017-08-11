const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
let cors = require('cors');
var  bp  =  require('body-parser');




let app = express();
app.use(cors());
app.use(express.static('./data/images'));


app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
var  bp  =  require('body-parser');
app.get("/bvc", function (req, res) {
  fs.readFile("data/data.json", 'utf-8', (error , data) => {
    let r = error ? error : data;
    res.send(JSON.parse(r));
  });
});


app.post('/Post', function (req, res) {
    let fileData;
    console.log(req.body);
    fs.readFile('data/data.json', 'utf-8', function (err, data)   {
          newdata = JSON.parse(data);
          let edited = req.body;
          for (let  i = 0; i < newdata.length; i++)       {
              if (edited.id == newdata[i].id)         {
              newdata[i] = edited;
                  break;
              }
          }
          fs.writeFile('data/data.json', JSON.stringify(newdata), function (err)       {
              if  (err)
                return  console.log(err);
                console.log('Completed');
          });
    });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
