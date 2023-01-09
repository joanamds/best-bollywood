import React from 'react'; 
import movies from '../data/Movies';
import MovieCard from './MovieCard';
import { FaSearch } from "react-icons/fa";
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
      <div>
        <div className="grid place-items-center bg-orange-500 p-5">
        <input
            type="text"
            placeHolder="Pesquise aqui"
            onChange={this.handleFilter}
            className="p-2 w-100 rounded-lg border-4 border-slate-50 outline-none focus:border-blue-500 focus:rounded-lg"
          />
          <FaSearch className="absolute inset-y-44 text-xl text-slate-100"/>
      <h4 className="text-center"> O termo pesquisado é: { filterName } </h4>
      </div>
      <div className="movies-list">
      { filteredMovies.map((currentMovie) => (
      <MovieCard 
      key={ currentMovie.title }
      movie={ currentMovie }
      />)) }
      </div>
      </div>
      );
    }
}

export default MoviesList;