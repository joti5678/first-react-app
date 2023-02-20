import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Data from './data.json'

function App() {
  // let items =[];
  // for (let x = 0; x < Data.length; x++) {
  //   items.push(<Card title1={x+1+". " + Data[x].title} todotitle={Data[x].Des}/>)
  // }

  // items = Data.map((x) => <Card title1={x.title} todotitle={x.Des}/> );

  return (
      <div className="App">
          <div className="appcss">
          {Data.map((item, index) => <Card key={index} title1={index+1 + ". "+ item.title} todotitle={item.Des}/>)};
            
       </div>
            
       </div>
  );

}

export default App
