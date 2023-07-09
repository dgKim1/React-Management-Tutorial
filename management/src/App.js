import Customer from './components/Customer';
import './App.css';

const customers =
[
{
  'id':1,
  'image': 'https://picsum.photos/64/64',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
}
,
{
  'id':2,
  'image': 'https://picsum.photos/64/64',
  'name': '김도경',
  'birthday': '000813',
  'gender': '남자',
  'job': '대학생'
}
,
{
  'id':3,
  'image': 'https://picsum.photos/64/64',
  'name': 'park',
  'birthday': '001222',
  'gender': '여자',
  'job': '프로그래머'
}
]

function App() {
  return (
    <div>
    {
      customers.map(c => {
        return(
        <Customer
          key = {c.id}//교유의 키값을 정해줘야햄(map함수 특징)
          id = {c.id}
          image = {c.image}
          name={c.name}
          birthday={c.birthday}
          gender ={c.gender}
          job={c.job}
        />
        )
      })
    }
    </div>
  );
}

export default App;
