import './Styles/App.css';
import React from 'react';
import EduBlock from './Components/EduBlock';
import NameBlock from './Components/NameBlock';


class App extends React.Component{

  render(){
    return(
    <div id='app'>
      <NameBlock/>
      <h2>Education</h2>
      <EduBlock/>
      
    </div>
  )}


}

export default App;
