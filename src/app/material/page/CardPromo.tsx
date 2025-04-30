'use client';

import React from 'react';
import { Gift, Percent, BadgeDollarSign } from 'lucide-react'; // pakai icon dari lucide-react

const promos = [
  {
    title: 'Diskon 30%',
    description: 'Nikmati potongan harga 30% untuk perjalanan ke seluruh kota besar!',
    icon: <Percent className="w-8 h-8 text-pink-500" />,
    color: 'bg-pink-100',
  },
  {
    title: 'Cashback 20K',
    description: 'Dapatkan cashback Rp20.000 untuk pembelian tiket pertama Anda.',
    icon: <BadgeDollarSign className="w-8 h-8 text-green-500" />,
    color: 'bg-green-100',
  },
  {
    title: 'Bonus Point',
    description: 'Kumpulkan point setiap transaksi dan tukarkan dengan tiket gratis!',
    icon: <Gift className="w-8 h-8 text-yellow-500" />,
    color: 'bg-yellow-100',
  },
];

const CardPromo = () => {
  return (
    <section className="py-4 m-4">
      <div className="max-w-5xl w-[80%] mx-auto text-center">
        {/* <h2 className="text-2xl font-bold mb-6 text-gray-800">Promo Menarik untuk Anda 🎉</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${promo.color}`}
            >
              <div className="flex items-center justify-center mb-4">
                {promo.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{promo.title}</h3>
              <p className="text-sm text-gray-600">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardPromo;
