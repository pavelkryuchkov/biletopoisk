import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '@/redux/features/cart';

import CardButtons from '@/components/CardButtons/CardButtons';

const GENRE_LOCAL = {
  fantasy: 'Фэнтези',
  horror: 'Ужасы',
  action: 'Боевик',
  comedy: 'Комедия',
};

export default function TicketCard({
  movieId,
  movieImg,
  movieTitle,
  movieGenre,
  showClose = false,
}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <Image
        src={movieImg}
        alt="Movie image"
        width="100"
        height="120"
        className={styles.card__image}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.card__description}>
        <Link href={`/movies/${movieId}`}>
          <h3>{movieTitle}</h3>
        </Link>
        <span className={styles.card__movieGenre}>
          {GENRE_LOCAL[movieGenre]}
        </span>
      </div>
      <CardButtons
        movieId={movieId}
        className={
          showClose ? styles.card__buttons_close : styles.card__buttons
        }
      />
      {showClose && (
        <Image
          src="/close.svg"
          alt="close"
          width="20"
          height="20"
          className={styles.card_close}
          onClick={() => dispatch(cartSlice.actions.delete(movieId))}
        ></Image>
      )}
    </div>
  );
}
