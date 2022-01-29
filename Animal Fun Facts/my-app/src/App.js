
import './App.css';
import { animals } from './animal';
const title = 'Click an animal for a fun fact!'
const background = (<img className='background' alt='ocean' src = 'https://3b3a5bb9b98f47518a3ff1d557f7ec10.cc-propeller.cloud/images/ocean.jpg'/>)
let images = [];
const showBackground = false
function displayfacts(e) {
  let facts = animals[e.target.alt].facts
  document.getElementById('fact').innerHTML = facts[Math.floor(Math.random() * facts.length)]
}

for(const animal in animals){
  images.push(
    <img
    key = {animal}
    className='animal'
    alt={animal}
    src= {animals[animal].image}
    aria-label = {animal}
    role = 'button'
   onClick={displayfacts}

    />
    
    
  )
}
  function App() {
  return (
    <div>
      <h1> {title} </h1>
      
      <p id='fact'></p>
      <div className = 'animals' >{images}</div>
      {background}
    </div>
  );
}

export default App ;
