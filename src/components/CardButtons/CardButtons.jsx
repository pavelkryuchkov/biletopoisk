'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { SelectProductAmount } from '@/redux/features/cart/selector';
import { cartSlice } from '@/redux/features/cart';
import styles from './style.module.css';

export default function CardButtons({ movieId, className }) {
  const amount = useSelector((state) => SelectProductAmount(state, movieId));
  const dispatch = useDispatch();
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <Image
        src="/left.svg"
        alt="remove button"
        width="20"
        height="20"
        className={styles.button}
        onClick={() => dispatch(cartSlice.actions.remove(movieId))}
      ></Image>
      <span className={styles.amount}>{amount}</span>
      <Image
        src="/right.svg"
        alt="remove button"
        width="20"
        height="20"
        className={styles.button}
        onClick={() => dispatch(cartSlice.actions.add(movieId))}
      ></Image>
    </div>
  );
}
