import React from 'react';
import Image from 'next/image';
import styles from './style.module.css';

export default function Modal({ onYes, onNo }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3>Удаление билета</h3>
        <p>Вы уверены, что хотите удалить билет?</p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => onYes()}>
            Да
          </button>
          <button
            className={`${styles.button} ${styles.button_transparent}`}
            onClick={() => onNo()}
          >
            Нет
          </button>
        </div>
        <Image
          src="/close.svg"
          alt="close"
          width="20"
          height="20"
          className={styles.close}
          onClick={() => onNo()}
        ></Image>
      </div>
    </div>
  );
}
