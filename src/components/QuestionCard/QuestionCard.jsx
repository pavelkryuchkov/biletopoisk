'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

export default function QuestionCard({ question, answer, className }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${styles.card} ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${styles.question} ${isOpen ? styles.question_open : ''}`}
      >
        <h2>{question}</h2>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width="32"
          height="32"
          className={styles.arrow}
        ></Image>
      </div>
      <div className={`${styles.answer} ${isOpen ? styles.answer_open : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
