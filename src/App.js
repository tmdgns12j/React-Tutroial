import React, { Component } from 'react';

import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '960530',
  'gender': '남자',
  'job': '학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '정승훈',
  'birthday': '960530',
  'gender': '남자',
  'job': '학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '정안나',
  'birthday': '960530',
  'gender': '남자',
  'job': '학생'
}
]

class App extends Component{
  render() {
    return (
      <div>{
      customers.map(c => {
        return (
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          />
        );
      })
    }
    </div>
    );
  }
}
    export default App;