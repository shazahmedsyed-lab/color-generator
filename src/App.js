import { useState } from 'react';
import ColorField from './colorField';
import SearchBox from './SearchBox';
import Header from './Header';
// import colorNames from 'colornames';
import Footer from './Footer';

function App() {
  const[colorValue, setColorValue] = useState('')
  const[hexValue,setHexValue] = useState('')

  return (
    <div className="App">
      <Header/>

       <ColorField 
       colorValue = {colorValue}
       hexValue = {hexValue}
       />
       <SearchBox
       colorValue = {colorValue}
       setColorValue = {setColorValue}
       setHexValue = {setHexValue}
       />
       <Footer/>
     </div>
  );
}

export default App;
