'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { SelectProductAmount } from '@/redux/features/cart/selector';
import { cartSlice } from '@/redux/features/cart';
import styles from './style.module.css';
import { createPortal } from 'react-dom';
import Modal from '@/components/Modal/Modal';

export default function CardButtons({ movieId, showClose = false, className }) {
  const amount = useSelector((state) => SelectProductAmount(state, movieId));
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  function onYes() {
    setShowModal(false);
    dispatch(cartSlice.actions.delete(movieId));
  }

  function onNo() {
    setShowModal(false);
  }

  return (
    <div className={`${className} ${styles.wrapper}`}>
      <Image
        src="/left.svg"
        alt="remove button"
        width="20"
        height="20"
        className={styles.button}
        onClick={() => {
          if (showClose && amount === 1) {
            setShowModal(true);
          } else {
            dispatch(cartSlice.actions.remove(movieId));
          }
        }}
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
      {showClose && (
        <Image
          src="/close.svg"
          alt="close"
          width="20"
          height="20"
          className={styles.close}
          onClick={() => setShowModal(true)}
        ></Image>
      )}
      {showModal &&
        createPortal(
          <Modal onYes={onYes} onNo={onNo} />,
          document.getElementById('modal')
        )}
    </div>
  );
}
