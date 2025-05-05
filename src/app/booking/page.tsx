'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function BookingForm() {
  const searchParams = useSearchParams();
  const busId = searchParams.get('busId');
  const seats = searchParams.get('seats');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simpan data booking (bisa post ke API di sini)
    alert(`Booking berhasil!\nBus ID: ${busId}\nKursi: ${seats}\nNama: ${name}\nTelepon: ${phone}\nEmail: ${email}`);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Nomor HP"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}
