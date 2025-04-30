'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Tentang Kami */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">KingBus.Com</h3>
          <p className="text-sm">
            KingBus menyediakan layanan pemesanan tiket bus yang cepat, mudah, dan terpercaya. 
            Nikmati perjalanan nyaman dengan berbagai pilihan bus populer.
            <br /><br />
            Tersedia dalam: <br />
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/appstore.png" alt="App Store" width={120} height={40} />
            </a>
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Beranda</a></li>
            <li><a href="#" className="hover:text-white transition">Rute</a></li>
            <li><a href="#" className="hover:text-white transition">Tiket</a></li>
            <li><a href="#" className="hover:text-white transition">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@KingBus.com</li>
            <li>Telepon: +62 812-3456-7890</li>
            <li>Alamat: Bekasi, Indonesia</li>
          </ul>
        </div>
      </div>

      {/* Apps & Pembayaran */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pembayaran */}
        <div>
          <div className="flex rounded-sm items-center bg-amber-50/70 p-2  gap-4 flex-wrap">
            <Image src="/bank/bca.png" alt="BCA" width={60} height={30} />
            <Image src="/bank/bni.png" alt="BNI" width={60} height={30} />
            <Image src="/bank/cimb.png" alt="CIMB" width={60} height={30} />
            <Image src="/bank/bri.png" alt="BRI" width={60} height={30} />
            <Image src="/bank/mandiri.png" alt="Mandiri" width={60} height={30} />
            <Image src="/bank/gopay.png" alt="Gopay" width={60} height={30} />
            <Image src="/bank/dana.png" alt="Dana" width={60} height={30} />
          </div>
        </div>

        {/* Kosongkan jika belum ada konten untuk app download tambahan */}
        <div />
      </div>

      {/* Copyright */}
      <div className="mt-1 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} KingBus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
