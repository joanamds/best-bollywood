import React from 'react';
import Header from './components/Header';
import MoviesList from './components/MoviesList';

class App extends React.Component {
  render() {
    return (
      <div className="bg-orange-100">
      <Header />
      <MoviesList />
      </div>
    );
  }
  
}

export default App;
