'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '@/redux/services/movieApi';
import TicketsList from '@/components/TicketsList/TicketsList';
import {
  SelectTotalAmount,
  SelectCartModule,
} from '@/redux/features/cart/selector';

export default function Home() {
  const { data: moviesData, isLoading } = useGetMoviesQuery();
  const totalAmount = useSelector((state) => SelectTotalAmount(state));
  const cart = useSelector((state) => SelectCartModule(state));

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <main className={styles.main}>
      <TicketsList data={moviesData.filter((movie) => movie.id in cart)} />
      <div className={styles.total}>
        <span>Итого билетов:</span>
        <span>{totalAmount}</span>
      </div>
    </main>
  );
}
