'use client';

import React from 'react';

const steps = [
  {
    title: 'Isi Detail',
    description: 'Tentukan asal, tujuan & tanggal.',
    icon: '📝',
  },
  {
    title: 'Pilih Kursi',
    description: 'Pilih bis & tempat duduk anda.',
    icon: '🚌',
  },
  {
    title: 'Bayar Tiket',
    description: 'Tersedia berbagai metode.',
    icon: '💳',
  },
  {
    title: 'Berangkat',
    description: 'Nikmati perjalanan anda.',
    icon: '🚍',
  },
];

const StepHero = () => {
  return (
    <section className="py-2">
      <div className="max-w-5xl mx-auto text-center px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {steps.map((step, i) => (
  <div
    key={i}
    className="group relative rounded-xl p-2 shadow-sm hover:shadow-md transition-colors duration-200 text-left border border-blue-300 hover:bg-blue-950"
  >
    <div className="absolute -top-2 -left-2 w-6 h-6 text-xs bg-blue-950 text-white rounded-full flex items-center justify-center font-bold shadow">
      {i + 1}
    </div>
    <div className="text-3xl mb-2 group-hover:text-white">{step.icon}</div>
    <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-white">
      {step.title}
    </h3>
    <p className="text-gray-600 text-xs group-hover:text-gray-200">{step.description}</p>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default StepHero;
