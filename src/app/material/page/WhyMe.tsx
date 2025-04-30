'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const WhyMe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      title: 'Cepat & Praktis',
      description: 'Pesan tiket hanya dalam hitungan detik tanpa antre.',
      icon: '/icon/fast.png',
    },
    {
      title: 'Banyak Pilihan Bus',
      description: 'Tersedia aneka armada bus Ternama dan Terpercaya.',
      icon: '/icon/bus.png',
    },
    {
      title: 'Proses Aman',
      description: 'Transaksi terjamin aman dengan berbagai metode pembayaran.',
      icon: '/icon/secure.png',
    },
    {
      title: 'Layanan Terpercaya',
      description: 'Didukung tim customer service yang responsif dan profesional.',
      icon: '/icon/deal.png',
    },
  ];

  return (
    <section className="py-10 w-full">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Mengapa Memilih <span className="text-blue-900">KingBus?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Nikmati layanan pemesanan tiket bus yang <strong>cepat</strong>, <strong>mudah</strong>, dan <strong>terpercaya</strong>. Perjalanan nyaman bersama berbagai pilihan bus terbaik hanya di KingBus.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((feature) => (
       <div
  key={feature.title}
  className="rounded-xl shadow hover:shadow-lg transition p-3 border border-gray-100  group hover:bg-blue-950"
>
  <div className="mb-4 text-center">
    {isClient && (
      <Image
  src={feature.icon}
  alt={feature.title}
  width={100}
  height={100}
  className="mx-auto transition-transform duration-600 transform group-hover:scale-200 mb-8"
      />
    )}
  </div>
  <h3 className="font-semibold text-gray-800 group-hover:text-white text-base mb-2 text-center">
    {feature.title}
  </h3>
  <p className=" text-gray-600 group-hover:text-white text-sm text-center">
    {feature.description}
  </p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
