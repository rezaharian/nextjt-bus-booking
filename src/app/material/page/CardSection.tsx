'use client';

import Link from 'next/link';

export default function CardSection() {
  return (
    <section className="py-16 ">
      <h2 className="text-4xl font-bold text-center mb-8">Pilih Bus Favoritmu</h2>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <Link href="/buses/1">
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all cursor-pointer bg-white p-4">
            <img src="https://picsum.photos/seed/bus1/400/250" alt="Bus A" className="w-full h-40 object-cover rounded-lg"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Bus A</h3>
              <p className="text-gray-600 text-sm">Fasilitas nyaman, AC, WiFi, Reclining Seat.</p>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/buses/2">
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all cursor-pointer bg-white p-4">
            <img src="https://picsum.photos/seed/bus2/400/250" alt="Bus B" className="w-full h-40 object-cover rounded-lg"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Bus B</h3>
              <p className="text-gray-600 text-sm">Fasilitas nyaman, AC, WiFi, Reclining Seat.</p>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/buses/3">
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all cursor-pointer bg-white p-4">
            <img src="https://picsum.photos/seed/bus3/400/250" alt="Bus C" className="w-full h-40 object-cover rounded-lg"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Bus C</h3>
              <p className="text-gray-600 text-sm">Fasilitas nyaman, AC, WiFi, Reclining Seat.</p>
            </div>
          </div>
        </Link>

        {/* Card 4 */}
        <Link href="/buses/4">
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all cursor-pointer bg-white p-4">
            <img src="https://picsum.photos/seed/bus4/400/250" alt="Bus D" className="w-full h-40 object-cover rounded-lg"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Bus D</h3>
              <p className="text-gray-600 text-sm">Fasilitas nyaman, AC, WiFi, Reclining Seat.</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
