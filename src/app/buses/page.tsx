'use client';

import Link from 'next/link';
import { FaStar, FaCalendarAlt, FaChair } from 'react-icons/fa';
import Navbar from '../material/page/Navbar';
import Footer from '../material/page/Footer';
import { useEffect, useState } from 'react';

const buses = [
  { id: 1, name: 'Kian Jaya', route: 'Jakarta - Bandung', from: 'Jakarta', to: 'Bandung', departure: '08:00', date: '2025-05-01', price: 100000, seatsAvailable: 30, rating: 4.5 },
  { id: 2, name: 'Surya Kencana', route: 'Bandung - Surabaya', from: 'Bandung', to: 'Surabaya', departure: '09:30', date: '2025-05-01', price: 250000, seatsAvailable: 25, rating: 4.7 },
  { id: 3, name: 'Harapan Jaya', route: 'Jakarta - Yogyakarta', from: 'Jakarta', to: 'Yogyakarta', departure: '10:00', date: '2025-05-02', price: 150000, seatsAvailable: 15, rating: 4.0 },
  { id: 4, name: 'Sumber Alam', route: 'Surabaya - Bali', from: 'Surabaya', to: 'Bali', departure: '12:30', date: '2025-05-01', price: 300000, seatsAvailable: 50, rating: 4.8 },
  { id: 5, name: 'Rosalia Indah', route: 'Bandung - Semarang', from: 'Bandung', to: 'Semarang', departure: '14:00', date: '2025-05-03', price: 200000, seatsAvailable: 40, rating: 4.3 },
  { id: 6, name: 'Handoyo', route: 'Jakarta - Surabaya', from: 'Jakarta', to: 'Surabaya', departure: '15:00', date: '2025-05-01', price: 220000, seatsAvailable: 20, rating: 4.6 },
  { id: 7, name: 'Kramat Djati', route: 'Bali - Jakarta', from: 'Bali', to: 'Jakarta', departure: '16:30', date: '2025-05-02', price: 280000, seatsAvailable: 35, rating: 4.2 },
  { id: 8, name: 'Sinar Jaya', route: 'Surabaya - Malang', from: 'Surabaya', to: 'Malang', departure: '17:00', date: '2025-05-01', price: 180000, seatsAvailable: 30, rating: 4.4 },
];

const cities = [...new Set(buses.flatMap(bus => [bus.from, bus.to]))];

export default function BusList() {
  const [isClient, setIsClient] = useState(false);
  const [filters, setFilters] = useState({ name: '', date: '', from: '', to: '' });

  const filteredBuses = buses.filter(bus => {
const matchName = filters.name === '' || bus.name === filters.name;
    const matchDate = filters.date === '' || bus.date === filters.date;
    const matchFrom = filters.from === '' || bus.from === filters.from;
    const matchTo = filters.to === '' || bus.to === filters.to;
    return matchName && matchDate && matchFrom && matchTo;
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="p-4 mt-10 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-center text-gray-800">Pilihan Bus Tersedia</h1>

        {/* Filter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
       <select
            className="text-sm border rounded-sm p-1"
            value={filters.name}
            onChange={e => setFilters(prev => ({ ...prev, name: e.target.value }))}
          >
            <option value="">Nama Bus</option>
            {[...new Set(buses.map(bus => bus.name))].map((name, i) => (
              <option key={i} value={name}>{name}</option>
            ))}
          </select>
          <input
            type="date"
            className="text-sm border rounded-sm p-1"
            value={filters.date}
            onChange={e => setFilters(prev => ({ ...prev, date: e.target.value }))}
          />
          <select
            className="text-sm border rounded-sm p-1"
            value={filters.from}
            onChange={e => setFilters(prev => ({ ...prev, from: e.target.value }))}
          >
            <option value="">Dari</option>
            {cities.map((city, i) => (
              <option key={i} value={city}>{city}</option>
            ))}
          </select>
          <select
            className="text-sm border rounded-sm p-1"
            value={filters.to}
            onChange={e => setFilters(prev => ({ ...prev, to: e.target.value }))}
          >
            <option value="">Ke</option>
            {cities.map((city, i) => (
              <option key={i} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Bus Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredBuses.map(bus => (
            <Link key={bus.id} href={`/buses/${bus.id}`} passHref>
              <div className="flex flex-col justify-between h-full  border rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-gray-50 p-4 cursor-pointer">
                <div>
                  <h2 className="text-sm font-semibold text-gray-800">{bus.name}</h2>
                  <p className="text-xs text-gray-600">{bus.route}</p>

                  <div className="flex items-center mt-2 text-yellow-500 text-sm">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={index < Math.floor(bus.rating) ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                    <span className="ml-2 text-gray-500 text-xs">{bus.rating}</span>
                  </div>

                  <div className="flex justify-between items-center mt-3 text-gray-600 text-xs">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-gray-500" />
                      <span>{bus.departure}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaChair className="text-gray-500" />
                      <span>{bus.seatsAvailable}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-800">
                    {isClient ? `Rp ${bus.price.toLocaleString()}` : `Rp ${bus.price}`}
                  </p>
                  <button className="mt-2 w-full text-xs bg-blue-950 text-white py-1 rounded-lg hover:bg-yellow-700 transition">
                     Detail
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
