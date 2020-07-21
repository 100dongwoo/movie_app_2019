import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"
//import PropTypes from "prop-types"
// function renderFood(dish) {
// console.log(dish)
//     return (
//         <Food name={dish.name} picture={dish.image}/>
//     )
// }
class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: {             //data안에 있는 data data안에있는 movies
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json" +
            "?sort_by=rating");
        // this.setState({movies}) 14 20 줄 movies
        this.setState({movies, isLoading: false})        //위와같다

    }

    componentDidMount() {
        this.getMovies();
    }

//    "https://yts-proxy.now.sh/list_movies.json"
    render() {
        const {isLoading, movies} = this.state//this.state.movies
        return (

            <section className="container">
                {
                    isLoading ? (

                        <div className="loader">
                            <span className="Loader__text">"Londing"</span>
                        </div>

                    ) : (
                        <div className="movies">
                            {movies.map(movie =>(

                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                            ))}
                        </div>
                    )}
            </section>
        )
    }
}

export default App;
