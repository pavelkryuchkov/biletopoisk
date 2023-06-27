import MovieCard from '@/components/MovieCard/MovieCard';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import styles from './page.module.css';

export default async function MoviePage({ params: { movieId } }) {
  const movieData = await fetch(
    `http://localhost:3001/api/movie?movieId=${movieId}`
  ).then((response) => response.json());
  const reviews = await fetch(
    `http://localhost:3001/api/reviews?movieId=${movieId}`
  ).then((response) => response.json());

  return (
    <main className={styles.main}>
      <MovieCard
        movieId={movieData.id}
        movieImg={movieData.posterUrl}
        movieGenre={movieData.genre}
        movieTitle={movieData.title}
        releaseYear={movieData.releaseYear}
        rating={movieData.rating}
        description={movieData.description}
        director={movieData.director}
      />
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.name}
          content={review.text}
          rating={review.rating}
        />
      ))}
    </main>
  );
}
