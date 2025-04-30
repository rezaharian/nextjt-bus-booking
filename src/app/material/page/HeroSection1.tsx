'use client';

import React, { useState, useEffect } from 'react';
import Select, { StylesConfig } from 'react-select';

type OptionType = {
  value: string;
  label: string;
};

const cityOptions: OptionType[] = [
  { value: 'Jakarta', label: 'Jakarta' },
  { value: 'Bandung', label: 'Bandung' },
  { value: 'Surabaya', label: 'Surabaya' },
  { value: 'Medan', label: 'Medan' },
  { value: 'Yogyakarta', label: 'Yogyakarta' },
  { value: 'Semarang', label: 'Semarang' },
  { value: 'Makassar', label: 'Makassar' },
  { value: 'Denpasar', label: 'Denpasar' },
  { value: 'Palembang', label: 'Palembang' },
  { value: 'Balikpapan', label: 'Balikpapan' },
];

const customSelectStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    borderRadius: '0.375rem',
    minHeight: '36px',
    padding: '0 4px',
    fontSize: '0.875rem',
    borderColor: '#d1d5db',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': { borderColor: '#2563eb' },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '0.875rem',
    color: '#9ca3af',
  }),
};

const HeroSection = () => {
  const [fromCity, setFromCity] = useState<OptionType | null>(null);
  const [toCity, setToCity] = useState<OptionType | null>(null);
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      from: fromCity?.value,
      to: toCity?.value,
      date,
      returnDate: isRoundTrip ? returnDate : null,
      passengers,
    });
  };

  if (!isClient) return null;

  return (
    <section
      className="pt-16"
      style={{
        backgroundImage: "url('/hero-bus4.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto py-16 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl mx-auto bg-blue-900/90 p-4 md:p-6 rounded-2xl shadow-lg grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          <div className="col-span-full flex items-center gap-2 text-white text-sm">
            <input
              type="checkbox"
              checked={isRoundTrip}
              onChange={() => setIsRoundTrip(!isRoundTrip)}
              className="accent-yellow-500"
            />
            <label className="font-medium">Tiket Pulang Pergi</label>
          </div>

          <div>
            <label className="block text-white text-xs mb-1">Dari</label>
            <Select
              options={cityOptions}
              value={fromCity}
              onChange={(selected) => setFromCity(selected)}
              placeholder="Kota Asal"
              styles={customSelectStyles}
            />
          </div>

          <div>
            <label className="block text-white text-xs mb-1">Ke</label>
            <Select
              options={cityOptions}
              value={toCity}
              onChange={(selected) => setToCity(selected)}
              placeholder="Kota Tujuan"
              styles={customSelectStyles}
            />
          </div>

          <div>
            <label className="block text-white text-xs mb-1">Tanggal</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-9 px-2 text-sm bg-white border text-gray-500   border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-white text-xs mb-1">Jumlah Penumpang</label>
            <input
              type="number"
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              min="1"
              className="w-full bg-white h-9 px-2 text-sm border text-gray-500 border-gray-300 rounded focus:ring-1 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-white text-xs mb-1">Tanggal Pulang</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={!isRoundTrip}
              className={`w-full h-9 px-2 text-sm border rounded focus:ring-1 focus:ring-blue-400 ${
                isRoundTrip
                  ? 'border-gray-300 bg-white text-black'
                  : 'border-gray-400 bg-gray-400 text-gray-500 cursor-not-allowed'
              }`}
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold px-4 py-2 rounded-md transition">
              Cari Bus
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
