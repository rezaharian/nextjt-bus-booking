import Image from 'next/image';
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-12 py-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Kiri - Deskripsi */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Tentang KingBus</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            KingBus adalah platform pemesanan tiket bus yang terpercaya dan mudah digunakan di Indonesia. 
            Kami bekerja sama dengan berbagai operator bus ternama untuk menghadirkan pengalaman perjalanan 
            darat yang nyaman, aman, dan terjangkau. Dengan antarmuka yang ramah pengguna dan sistem reservasi 
            yang efisien, KingBus menjadi pilihan utama bagi para pelancong lokal maupun antar kota.
          </p>
        </div>

        {/* Kanan - Gambar */}
        <div className="w-full h-auto flex justify-center">
          <Image 
            src="/busint.jpg" 
            alt="Bus KingBus" 
            width={500} 
            height={300} 
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
