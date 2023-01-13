import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#f1f3f4')

  const shop = { url: '/shop', text: 'Shop' };
  const home = { url: '/home', text: 'Home' };
  const info = { url: '/contact-me', text: 'Contact' };
  const profile = { url: '/profile', text: 'Profile' };
  const links = [home, shop, info, profile];

  const navbarProps = {
    logo: '/logo.png',
    listOfLinks: links,
  };

  const data = [
    {
      title: 'Card with paragraph',
      children: <p>I am a paragraph</p>,
    },
    {
      title: 'Card with div',
      children: <div>I am a div</div>,
    },
    {
      title: 'Card with button',
      children: <button>I am a button</button>,
    },
  ];

  const handleCardClick = (title) => {
    console.log({ title });
  };

  return (
    <div className="App">
      <Navbar {...navbarProps} />
      <main >
        <h1>{color}</h1>
        <input type="color" value={color} onChange={(event) => {setColor(event.target.value)}}/>

        <div className="main">
          {data.map((element, i) => {
            return (
              <Card handleClick={handleCardClick} color={color} key={i}>
                {element.children}
              </Card>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
