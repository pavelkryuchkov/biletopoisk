import React from 'react';
import TicketCard from '@/components/TicketCard/TicketCard';
import styles from './style.module.css';

export default function TicketsList({ data, showClose = false }) {
  return (
    <div className={styles.list}>
      {data.map((movie) => (
        <TicketCard
          key={movie.id}
          movieId={movie.id}
          movieImg={movie.posterUrl}
          movieTitle={movie.title}
          movieGenre={movie.genre}
          showClose={showClose}
        />
      ))}
    </div>
  );
}
