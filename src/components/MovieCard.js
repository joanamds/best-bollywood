import React from 'react'; 
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render(){
        const { movie: {title, poster, releaseYear, directedBy, sinopsis, runningTime, available, watchNow } } = this.props; 
        const { logoUrl, stream } = available;
        const altPoster = `Poster do filme ${ title }`;
        const altLogo = `O filme está disponível em: ${ stream }`;
        return(
            <div className="bg-white flex-col px-16 py-12 rounded-2xl shadow-lg items-center justify-center w-100 mt-20">
                <img className="poster" src={ poster } alt={ altPoster } />
                <p className="mb-10 mt-10">
                    { title }
                </p>
                <p className="release-year">
                    Ano:  { releaseYear }
                </p>
                <p className="directed-by">
                    Direção: { directedBy }
                </p>
                <p className="text">
                    Sinopse: { sinopsis }
                </p>
                <p className="running-time">
                    Duração: { runningTime }
                </p>
                <div className="where-watch">
                    <p>Onde assistir:</p>
                    <img className="availability" src={ logoUrl } alt={ altLogo } width="50"/>
                    <a href={watchNow} target="_blank" rel="noopener noreferrer"><button pointer>Assistir agora!</button></a>
                </div>
                
            </div>
        );
    }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    releaseYear: PropTypes.string,
    directedBy: PropTypes.string,
    sinopsis: PropTypes.string,
    runningTime: PropTypes.string,
    available: PropTypes.shape({
      logoUrl: PropTypes.string,
      stream: PropTypes.string,
    }),
    watchNow: PropTypes.string,    
  }).isRequired,
};

export default MovieCard;