import moviesArr from "../data/movies.json"


function MovieList() {

    let message = ''
    if(moviesArr.length > 0) {
        message = <h2>List of movies</h2>
    } else {
        message = <h2>Sorry, no movies to display</h2>
    }


    return (
        <>
            {message}

            { moviesArr.map( (movieObj, i, arr) => {
                return (
                    <div key={movieObj.id} className="box"> 

                        { movieObj.imgURL 
                            ? <img src={movieObj.imgURL} /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }

                        <p>{movieObj.title}</p>
                        <p>{movieObj.rating}</p>

                        { movieObj.rating >=7 && <p className="badge">RECOMMENDED</p> }

                    </div>
                )
            }) }
        </>
    )
}

export default MovieList