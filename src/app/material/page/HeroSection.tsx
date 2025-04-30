'use client';

import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from next
import SearchBus from './SearchBus';
import StepHero from './StepHero';

const Select = dynamic(() => import('react-select'), { ssr: false }); // Disable SSR for react-select

const HeroSection = () => {
const cities = [
  // Accessible by land (Primary cities first)
  'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Yogyakarta', 'Makassar', 'Denpasar', 'Semarang', 'Palembang',
  'Batam', 'Tangerang', 'Bekasi', 'Depok', 'Cirebon', 'Solo', 'Malang', 'Maluku', 'Ambon', 'Cirebon',
  'Banjarmasin', 'Pontianak', 'Samarinda', 'Balikpapan', 'Bandar Lampung', 'Padang', 'Tasikmalaya', 'Jambi',
  'Cilegon', 'Madiun', 'Magelang', 'Probolinggo', 'Tulungagung', 'Pasuruan', 'Sidoarjo', 'Wonogiri',
  'Pekalongan', 'Klaten', 'Surakarta', 'Mojokerto', 'Bojonegoro', 'Ngawi', 'Blitar', 'Ponorogo', 'Kediri',
  'Banyuwangi', 'Sukabumi', 'Serang', 'Bengkulu', 'Tulungagung', 'Cimahi', 'Batang', 'Bojonegoro', 'Sukabumi',
  'Pekalongan', 'Sidoarjo', 'Malang', 'Pekalongan', 'Tulungagung', 'Probolinggo', 'Tulungagung', 'Magelang',
  
  // Cities that require travel by boat or crossing
  'Mataram', 'Kupang', 'Pontianak', 'Balikpapan', 'Gorontalo', 'Banjarmasin', 'Manado', 'Makassar',
  'Samarinda', 'Kupang', 'Bali', 'Ternate', 'Tidore', 'Jayapura', 'Palu', 'Luwuk', 'Selayar', 'Buleleng',
  'Sumbawa', 'Singkawang', 'Ternate', 'Jayapura', 'Labuan Bajo', 'Wakatobi', 'Bintan', 'Labuan Bajo'
];

  const options = cities.map(city => ({ value: city, label: city }));

  const handleSubmit = () => {
    alert('Button clicked!');
    // You can add logic to handle the submission (e.g., form submission or state change)
  };

  return (
    <section className="py-25 bg-">
      <div className="max-w-7xl w-full md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Teks (Kiri) */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 leading-tight">
              Selamat Datang di <span className="text-blue-950">KingBus.com</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Platform pemesanan bus antarkota dan antarprovinsi seluruh Indonesia. Mudah, cepat, dan terpercaya.
            </p>
            <div className="mb-4">
              <label htmlFor="destination" className="block text-blue-950 text-lg mb-2">
                Mau pergi kemana?
              </label>
              <div className="flex items-center space-x-2">
                {/* React Select Component */}
                <Select
                  id="destination"
                  options={options}
                  placeholder="Pilih Kota Tujuan..."
                  className="w-full text-lg text-gray-700"
                  classNamePrefix="react-select"
                  isSearchable={true} // Enable searching
                />
                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-950 text-white font-semibold text-sm rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Cari
                </button>
              </div>
            </div>

            <div className="text-lg text-gray-700 mt-1">
              {/* <div className="flex flex-wrap gap-2 mt-1">
                {cities.slice(0, 16).map((city, index) => (
                  <button key={index} className="px-3 py-1 text-sm border-1 border-blue-600 text-blue-600 rounded-full bg-transparent hover:bg-blue-600 hover:text-white">
                    {city}
                  </button>
                ))}
              </div> */}
              <StepHero/>
            </div>
          </div>

          {/* Gambar (Kanan) */}
          {/* <div className="hidden md:block">
            <Image
              src="/kingbus.png"
              alt="Bus KingBus"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl "
              priority
            />
          </div> */}
          <div>
          <SearchBus />
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
