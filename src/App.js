import React from 'react';
import Header from './components/Header';
import MoviesList from './components/MoviesList';

class App extends React.Component {
  render() {
    return (
      <div className="bg-slate-300">
      <Header />
      <MoviesList />
      </div>
    );
  }
  
}

export default App;
