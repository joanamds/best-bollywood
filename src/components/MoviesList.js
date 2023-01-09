import React from 'react'; 
import movies from '../data/Movies';
import MovieCard from './MovieCard';

class MoviesList extends React.Component{
  constructor(){
    super(); 

    this.state = {
      filterName: '',
    }
  }
  
  handleFilter = (event) => {
    console.log(event.target.value);

    this.setState({
      filterName: event.target.value,
    });
  }

  render() {
    const { filterName } = this.state; 
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(filterName.toLowerCase()));

    return(
      <>
      <div className='input-movie'>
      <input type="text" placeHolder="Pesquise aqui" onChange={ this.handleFilter } />
      <h4> O termo pesquisado é: { filterName } </h4>
      </div>
      <div className="movies-list">
      { filteredMovies.map((currentMovie) => (
      <MovieCard 
      key={ currentMovie.title }
      movie={ currentMovie }
      />)) }
      </div>
      </>
      );
    }
}

export default MoviesList;