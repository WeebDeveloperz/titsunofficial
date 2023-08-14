import { useState } from "react";
import styles from "./css/Movie.module.css";
import { saveMovie } from "./../getters";

class Movie {
  constructor() {
    this.movie_title = "";
    this.submitter_name = "";
    this.submitter_college_id = "";
  }
}

export default function MoviePage() {
  const [movie, setMovie] = useState(new Movie());

  const handleSubmit = e => {
    e.preventDefault();

    saveMovie(movie,
      data => {
        console.log(data);
        alert("thank you for your suggestion")
      }, 
      err => {
        console.log(err)
        alert("an error occoured")
      }
    );
  }

  return(
    <div className={styles.moviePage}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            value={movie.submitter_name}
            onChange={e => setMovie(i => ({...i, "submitter_name": e.target.value}))}
          />
        </label>

        <label>
          College ID:
          <input 
            value={movie.submitter_college_id}
            onChange={e => setMovie(i => ({...i, "submitter_college_id": e.target.value}))}
          />
        </label>

        <label>
          Movie suggestion:          
          <input 
            value={movie.movie_title}
            onChange={e => setMovie(i => ({...i, "movie_title": e.target.value}))}
          />
        </label>
        <div className={styles.buttonWrapper}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
