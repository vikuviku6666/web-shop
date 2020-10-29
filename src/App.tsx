import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import GlobalStyle from './styles/Global';

const App: React.FC = () => {
  return (
    <>
    <GlobalStyle/>
    <div className="layout">
      <Header/>
      <Main/>
      <Footer/>
      </div>
      </>
  );
};

export default App;
