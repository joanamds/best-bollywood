import React from 'react';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <MoviesList />
      </>
    );
  }
  
}

export default App;
