import React from 'react';
import Link from 'next/link';
import styles from '@/components/Footer/style.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <Link href="/questions">Вопросы-ответы</Link>
        <Link href="/about">О нас</Link>
      </div>
    </footer>
  );
}
