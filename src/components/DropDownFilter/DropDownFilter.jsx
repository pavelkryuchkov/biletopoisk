import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export default function DropDownFilter({
  title,
  placeholder,
  data,
  isLoading,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const options = isLoading ? (
    <div>Loading...</div>
  ) : (
    data.map((cinema) => <div key={cinema.id}>{cinema.name}</div>)
  );
  return (
    <div>
      <h5>{title}</h5>
      <div onClick={() => setIsOpen(!isOpen)}>{placeholder}</div>
      {isOpen && createPortal(options, document.getElementById('filters'))}
    </div>
  );
}
