import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  render() {


    return (
      <div className="App">
         <Header />
        <Main />
        <Footer />
        
      </div>
    );
  }
}

export default App;
