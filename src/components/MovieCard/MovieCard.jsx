import Image from 'next/image';
import styles from './style.module.css';

import CardButtons from '@/components/CardButtons/CardButtons';

const GENRE_LOCAL = {
  fantasy: 'Фэнтези',
  horror: 'Ужасы',
  action: 'Боевик',
  comedy: 'Комедия',
};

export default function MovieCard({
  movieId,
  movieImg,
  movieTitle,
  movieGenre,
  description,
  releaseYear,
  director,
  rating,
}) {
  return (
    <div className={styles.card}>
      <Image
        src={movieImg}
        alt="Movie image"
        width="400"
        height="500"
        className={styles.card__image}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.card__data}>
        <h2>{movieTitle}</h2>
        <div>
          <span className={styles.card__field}>Жанр: </span>
          <span className={styles.card__value}>{GENRE_LOCAL[movieGenre]}</span>
        </div>
        <div>
          <span className={styles.card__field}>Год выпуска: </span>
          <span className={styles.card__value}>{releaseYear}</span>
        </div>
        <div>
          <span className={styles.card__field}>Рейтинг: </span>
          <span className={styles.card__value}>{rating}</span>
        </div>
        <div>
          <span className={styles.card__field}>Режиссер: </span>
          <span className={styles.card__value}>{director}</span>
        </div>
        <div>
          <span className={styles.card__descriptionHeading}>Описание</span>
          <p className={styles.card__description}>{description}</p>
        </div>
      </div>

      <CardButtons movieId={movieId} className={styles.card__buttons} />
    </div>
  );
}
