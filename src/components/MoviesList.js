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
      <div>
        <div className="grid place-items-center bg-orange-500 p-5">
          {/* input font: https://tailwindcomponents.com/component/search-input-with-integrated-icon-and-button */}
            <form method="GET">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </span>
              <input
                type="search"
                name="q"
                className="w-100 py-2 text-sm text-white rounded-md pl-10 outline-none focus:text-gray-900"
                placeholder="Procure aqui..."
                autocomplete="off"
                onChange={ this.handleFilter }
              />
              </div>
            </form>
      <h4 className="text-center"> O termo pesquisado é: { filterName } </h4>
      </div>
        <div className="bg-orange-50 flex flex-wrap justify-evenly">
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