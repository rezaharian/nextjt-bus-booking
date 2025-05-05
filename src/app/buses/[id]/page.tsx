'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FaChair } from 'react-icons/fa';
import Navbar from '../../material/page/Navbar';
import Footer from '../../material/page/Footer';

const seatCount = 40; // Total kursi
const bookedSeats = [5, 12, 18]; // Kursi yang sudah dibooking (dummy)

// Dummy data bus
const busData = {
  id: 1,
  name: 'Kian Jaya',
  route: 'Jakarta - Bandung',
  departure: '08:00',
  date: '2025-05-01',
};

export default function SeatMap() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string; // ambil ID dari URL

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSelect = (seat: number) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const handleNext = () => {
    if (selectedSeats.length === 0) return;
    router.push(`/booking?busId=${id}&seats=${selectedSeats.join(',')}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 mt-9 py-8 max-w-3xl mx-auto">
        <h1 className="text-2xl mt-10 sm:text-3xl font-bold mb-2 text-center text-gray-800">
          Pilih Kursi
        </h1>

        <div className="shadow-md rounded-lg p-4 mb-6 text-sm sm:text-base">
          <p><strong>Bus:</strong> {busData.name}</p>
          <p><strong>Rute:</strong> {busData.route}</p>
          <p><strong>Keberangkatan:</strong> {busData.date} - {busData.departure}</p>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-5 gap-4 justify-items-center mb-8">
          {[...Array(seatCount)].map((_, idx) => {
            const seatNumber = idx + 1;
            const isBooked = bookedSeats.includes(seatNumber);
            const isSelected = selectedSeats.includes(seatNumber);

            return (
              <div
                key={seatNumber}
                onClick={() => handleSelect(seatNumber)}
                className={`flex flex-col items-center text-xs cursor-pointer ${
                  isBooked
                    ? 'text-gray-300'
                    : isSelected
                    ? 'text-yellow-500'
                    : 'text-green-500'
                }`}
              >
                <FaChair
                  size={28}
                  className={`transition-all ${
                    isBooked
                      ? 'text-red-400 cursor-not-allowed'
                      : isSelected
                      ? 'text-yellow-500'
                      : 'text-green-500 hover:text-green-400'
                  }`}
                  aria-label={`Seat ${seatNumber}`}
                />
                <span>{seatNumber}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleNext}
            className={`bg-blue-900 ${
              selectedSeats.length === 0
                ? 'cursor-not-allowed opacity-50'
                : 'hover:bg-yellow-600'
            } text-white font-medium py-2 px-6 rounded transition`}
            disabled={selectedSeats.length === 0}
          >
            Lanjutkan ({selectedSeats.length} kursi)
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
