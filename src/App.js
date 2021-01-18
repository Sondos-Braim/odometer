import React from 'react';
import './App.css';

function Header(props){
  return(
      <header className= 'App'>
         <h1>{props.welcome}</h1>
      </header>
  )
}

class Odometer extends React.Component{
  constructor(){
      super();
      this.state = {
          counter : 0,
      };
  }
  addToOdometer(num){
    this.state.counter+= num
    if (this.state.counter >= 9999){
      this.state.counter -= 9999
    }
    this.setState( { 
      counter: this.state.counter
    });
  };
  render(){
    return(
        <>
            <h1 className= 'counter'>{String(this.state.counter).padStart(4,0)}</h1>
            <div className='main'>
              <button className= 'counter' onClick={ () => this.addToOdometer(1)}>1</button>
              <button className= 'counter' onClick={ () => this.addToOdometer(10)}>10</button>
              <button className= 'counter' onClick={ () => this.addToOdometer(100)}>100</button>
              <button  className= 'counter'onClick={ () => this.addToOdometer(1000)}>1000</button>
            </div>
        </>
    )
}
}

function Footer(props){
  return(
      <footer className="App">
          <p>{props.copyright}</p>
      </footer>
  )
}
function App() {
  return (
  <>
    <Header welcome = "Hello everyone"/>
    <Odometer />
    <Footer copyright= 'Copy Right @ ASAC'/>
  </>
  );
}

export default App;
