import Image from 'next/image';
import styles from './style.module.css';

export default function ReviewCard({ name, content, rating }) {
  return (
    <div className={styles.card}>
      <Image
        src="/avatar.jpg"
        alt="Avatar"
        width="100"
        height="100"
        className={styles.card__image}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.card__description}>
        <h3>{name}</h3>

        <p>{content}</p>
      </div>
      <div className={styles.rating}>
        <span className={styles.rating__heading}>Оценка: </span>
        <span className={styles.rating__value}>{rating}</span>
      </div>
    </div>
  );
}
