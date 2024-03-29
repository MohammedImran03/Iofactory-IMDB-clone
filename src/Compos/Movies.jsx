import React,{useEffect,useState} from 'react';
import MovieCard from './MovieCards';
import axios from 'axios';

const Movies = () => {

    const [MoviesData, setMoviesData] = useState([]); 
    useEffect(() => {
        getdata();
      }, []);
  
        
      const getdata = async () => {
          try {
            let MoviesList = await axios.get("https://testingserver-9nwm.onrender.com/movies/allmovies");
            setMoviesData(MoviesList.data);
            console.log(MoviesList.data);
          } catch (error) {
            console.log(error);
          }
        };

  return (
    <div className='bg-slate-300'>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* hi */}
        {MoviesData.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
    </div>)
}

export default Movies;