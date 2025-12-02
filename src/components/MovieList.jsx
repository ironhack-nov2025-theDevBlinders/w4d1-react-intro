import moviesArr from "../data/movies.json"


function MovieList() {    
    return (
        <>
            <h2>List of movies:</h2>

            { moviesArr.map( (movieObj, i, arr) => {
                return (
                    <div key={movieObj.id} className="box">
                        <p>{movieObj.title}</p>
                        <p>{movieObj.rating}</p>
                    </div>
                )
            }) }
        </>
    )
}

export default MovieList