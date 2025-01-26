import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"


export default function Favorites(){

     const {favorites } = useMovieContext()

    if (favorites) {
        return (
            <div className="favorite">
                <h2>Your Favorite</h2>
                <div className="movies-grid">
                    { favorites.map((movie) => ( 
                        <MovieCard movie={movie} key={movie.id}/>

                    ))}    
                    
                </div>

            </div>
        )
    } 
    return (
        <div className="favorites-empty">
            <h2>No Favorites movies yet</h2>
            <p>Star add movies to your favorites and they appear here!</p>
        </div>
    )
}
