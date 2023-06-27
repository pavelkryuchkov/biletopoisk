'use client';

import styles from './page.module.css';

import { useGetMoviesQuery } from '@/redux/services/movieApi';
import TicketsList from '@/components/TicketsList/TicketsList';
// import Filters from '@/components/Filters/Filters';

export default function Home() {
  const { data: moviesData, isLoading } = useGetMoviesQuery();

  if (isLoading) {
    return <main>Loading...</main>;
  }

  return (
    <main className={styles.main}>
      {/* <Filters /> */}
      <TicketsList data={moviesData} />
    </main>
  );
}
