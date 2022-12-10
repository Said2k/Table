import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  let users = [{
    lastName: 'Naim',
    age: '20',
    id: 1
  },
{
  lastName: 'Homa',
  age: '21',
  id: 2,
}]
// console.log(users.);

  return (
    <div>
      <main style={{minHeight: '80vh'}}>
      <Header/>
      {users.map((item)=>
      <Section lastName = {item.lastName} age = {item.age} id = {item.id}/>
      )}
      </main>
      <Footer/>

      
    </div>

  );
};

export default App;