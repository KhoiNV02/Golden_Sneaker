//đường dẫn vì sử dụng trong folder
const path = require('path');
//gọi thư viện express để dùng các thứ có trong nó
const express = require('express');
// import { engine } from 'express-handlebars';
//morgan được sử dụng để thông báo cho trạng thái của server hiện tại
const morgan = require('morgan');
//handlebars để tải các trang, cấu trúc trang
const { engine } = require('express-handlebars');

// import engine  from 'express-handlebars';
const app = express();
const cors = require('cors');

app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const handlebars = require('express-handlebars')
const port = 3001;
const methodOverride = require('method-override')
app.use(express.static(path.join(__dirname, 'Resouses/public')));

//gọi ra để sử dụng
app.use(morgan('combined'));

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers:{
      sum: (a,b) => a+b, 
      json: function (context) {
        return JSON.stringify(context);
    },
    if_eq: function (a, b, opts) {
      return a == b ? opts.fn(this) : opts.inverse(this);
    }
    }
  }),
);
app.use(methodOverride('_method'))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'Resouses','views'));
//sửa link đường dẫn mặc định thành link đường dẫn hợp lệ
//render đến các trang đó thông qua đường dẫn

const route = require('./routes/');

const db=require('./config/db');
db.connect();
app.use(express.urlencoded({
  extended:true
 }));
//  app.locals.local = 'http://localhost:3001';
//  app.use(express.json);
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

