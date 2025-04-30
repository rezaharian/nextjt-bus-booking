'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Select from 'react-select';

const cities = [
  { value: 'jakarta', label: 'Jakarta' },
  { value: 'surabaya', label: 'Surabaya' },
  { value: 'bandung', label: 'Bandung' },
  { value: 'medan', label: 'Medan' },
  { value: 'semarang', label: 'Semarang' },
  { value: 'makassar', label: 'Makassar' },
  { value: 'palembang', label: 'Palembang' },
  { value: 'denpasar', label: 'Denpasar' },
  { value: 'bekasi', label: 'Bekasi' },
  { value: 'tangerang', label: 'Tangerang' },
  { value: 'depok', label: 'Depok' },
  { value: 'malang', label: 'Malang' },
  { value: 'yogyakarta', label: 'Yogyakarta' },
  { value: 'batam', label: 'Batam' },
  { value: 'pekanbaru', label: 'Pekanbaru' },
  { value: 'bogor', label: 'Bogor' },
  { value: 'padang', label: 'Padang' },
  { value: 'banjarmasin', label: 'Banjarmasin' },
  { value: 'manado', label: 'Manado' },
  { value: 'pontianak', label: 'Pontianak' },
];

const SearchBus = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [origin, setOrigin] = useState<{ value: string; label: string } | null>(null);
  const [destination, setDestination] = useState<{ value: string; label: string } | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Hindari render saat SSR

  return (
    <div className="relative bg-blue-950 mt-11 p-6 rounded-xl shadow-md max-w-4xl mx-auto">
      {/* Gambar */}
      <div className="absolute top-[-62px] left-[-11px] transform rotate-0 z-20">
        <Image src="/kingbus.png" alt="King Bus" width={190} height={190} className="drop-shadow-lg" />
      </div>

      <form className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-4">
        {/* Kota Asal */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Kota Asal</label>
          <Select
            options={cities}
            placeholder="Pilih kota asal"
            value={origin}
            onChange={(newValue) => setOrigin(newValue)}
            className="text-sm"
            isClearable
            styles={{ control: (base) => ({ ...base, backgroundColor: 'white' }) }}
          />
        </div>

        {/* Kota Tujuan */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Kota Tujuan</label>
          <Select
            options={cities}
            placeholder="Pilih kota tujuan"
            value={destination}
            onChange={(newValue) => setDestination(newValue)}
            className="text-sm"
            isClearable
            styles={{ control: (base) => ({ ...base, backgroundColor: 'white' }) }}
          />
        </div>

        {/* Jumlah Penumpang */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Jumlah Penumpang</label>
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tanggal Berangkat */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Tanggal Berangkat</label>
          <input
            type="date"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Pulang Pergi */}
        <div className="col-span-1 flex items-center space-x-2">
          <input
            type="checkbox"
            id="roundTrip"
            checked={isRoundTrip}
            onChange={() => setIsRoundTrip(!isRoundTrip)}
            className="h-5 w-5 text-blue-600"
          />
          <label htmlFor="roundTrip" className="text-sm text-gray-300">
            Pesan tiket pulang-pergi
          </label>
        </div>

        {/* Tanggal Pulang */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Tanggal Pulang</label>
          <input
            type="date"
            disabled={!isRoundTrip}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
              isRoundTrip
                ? 'bg-white border-gray-300 focus:ring-blue-500'
                : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          />
        </div>

        {/* Tombol Cari */}
        <div className="md:col-span-2 text-right mt-2">
          <button
            type="submit"
            className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            Cari Bus
          </button>
        </div>
      </form>
    </div>
  );
};


export default SearchBus;
