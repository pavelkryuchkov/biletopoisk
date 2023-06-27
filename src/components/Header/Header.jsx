'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { SelectTotalAmount } from '@/redux/features/cart/selector';
import styles from '@/components/Header/style.module.css';

export default function Header() {
  const totalAmount = useSelector((state) => SelectTotalAmount(state));

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link href="/" className={styles.logo}>
          <h1>Билетопоиск</h1>
        </Link>
        <div className={styles.basket}>
          <span className={styles.basketCount}>{totalAmount}</span>
          <Link href="/cart">
            <Image
              src="/basket.svg"
              width="32"
              height="32"
              alt="basket"
            ></Image>
          </Link>
        </div>
      </div>
    </header>
  );
}
