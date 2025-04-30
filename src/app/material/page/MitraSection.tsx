import Image from 'next/image';
import React from 'react';

const logos = [
  'damri',
  'haryanto',
  'agramas',
  'handoyo',
  'harapanjaya',
  'sumberalam',
  'rosaliaindah',
  'kramatdjati',
  'sinarjaya',
];

const MitraSection: React.FC = () => {
  return (
    <>
      {/* TAMPILAN UNTUK PC / DESKTOP */}
      <section className="hidden md:block w-full md:w-[90%] mx-auto p-4">
        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '20px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          {logos.map((name) => (
            <div
              key={name}
              className="transition-all duration-300 transform opacity-70 hover:opacity-100 hover:scale-120"
            >
              <Image
                src={`/logopo/${name}.png`}
                alt={name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="px-4 py-1 text-sm text-white  border border-gray-400 rounded-lg bg-yellow-700  hover:bg-blue-950 hover:text-white transition">
            More
          </button>
        </div>
      </section>

      {/* TAMPILAN UNTUK MOBILE / HP */}
      <section className="block md:hidden w-full mx-auto p-4">
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
          {logos.map((name) => (
            <Image
              key={name}
              src={`/logopo/${name}.png`}
              alt={name}
              width={100}
              height={100}
              className="object-contain"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MitraSection;
