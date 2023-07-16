const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PROT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res) => {
    res.send([
      {
        'id':1,
        'image': 'https://picsum.photos/id/237/64/64',
        'name': '홍길동',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
      }
      ,
      {
        'id':2,
        'image': 'https://picsum.photos/id/236/64/64',
        'name': '김도경',
        'birthday': '000813',
        'gender': '남자',
        'job': '대학생'
      }
      ,
      {
        'id':3,
        'image': 'https://picsum.photos/id/230/64/64',
        'name': 'park',
        'birthday': '001222',
        'gender': '여자',
        'job': '프로그래머'
      }
    ]);
});

app.listen(port, () => console.log(`Listening on Port ${port}`));