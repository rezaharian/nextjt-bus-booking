// app/booking/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function BookingForm() {
  const searchParams = useSearchParams();
  const busId = searchParams.get('busId');
  const seats = searchParams.get('seats');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simpan data booking (bisa post ke API di sini)
    alert('Booking Berhasil!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Isi Data Pemesanan</h1>
      <p>Bus ID: {busId}</p>
      <p>Kursi Dipilih: {seats}</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          required
          className="border p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Nomor HP"
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Konfirmasi Pemesanan
        </button>
      </form>
    </div>
  );
}
