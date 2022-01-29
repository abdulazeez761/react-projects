import React , {Component} from 'react';
import './App.css';
import {Button} from './buttom'
const colorResut = []
class App extends Component{

  constructor(props){
    super(props)
    this.state = {color : ''}
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const url = 'https://unpkg.com/color-name-list@8.38.0/dist/colornames.json';
    const colors =  await fetch(url);
    const data =  await colors.json()
    for (let i =0; i<data.length; i++){
      colorResut.push(data[i].hex)
    }
    // console.log(colorResut)
  }
  handleClick() {
    let randColor = colorResut[Math.floor(Math.random() * colorResut.length)];
    this.setState({color : randColor})

  }
  // console.log(data[i].hex[Math.floor(Math.random() * data[i].length)])
  render(){ 
    
    return (
    <section className="App" style={{
      backgroundColor: this.state.color 
    }} >
      <Button  onClick={this.handleClick}  />
    </section>
  );
  }
}

export default App;
