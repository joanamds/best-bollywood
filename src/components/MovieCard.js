import React from 'react'; 
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render(){
        const { movie: {title, poster, releaseYear, directedBy, sinopsis, runningTime, available, watchNow } } = this.props; 
        const { logoUrl, stream } = available;
        const altPoster = `Poster do filme ${ title }`;
        const altLogo = `O filme está disponível em: ${ stream }`;
        return(
            <div className="bg-white p-12 rounded-2xl shadow-lg mt-20 ml-30 flex-wrap">
                <div className="flex justify-center">
                    <img className="poster" src={poster} alt={altPoster} />
                </div>
                <p className="mb-10 mt-10 text-center">
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
                <div className="flex">
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