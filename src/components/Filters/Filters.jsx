import React, { useRef } from 'react';
import { useGetCinemasQuery } from '@/redux/services/movieApi';
import DropDownFilter from '../DropDownFilter/DropDownFilter';

export default function Filters() {
  const { data: cinemasData, isLoading: cinemasIsLoading } =
    useGetCinemasQuery();

  return (
    <div id="filters">
      <h4>Фильтр поиска</h4>
      <DropDownFilter
        title="Кинотеатр"
        placeholder="Выберите кинотеатр"
        data={cinemasData}
        isLoading={cinemasIsLoading}
      />
    </div>
  );
}
