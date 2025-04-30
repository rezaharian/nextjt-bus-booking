    'use client';

    import { useState } from 'react';
    import MitraSection from './MitraSection';

    const routes = [
    'Surabaya Ke Yogyakarta',
    'Surabaya Ke Magelang',
    'Surabaya Ke Denpasar',
    'Jakarta Ke Surabaya',
    'Yogyakarta Ke Jakarta',
    'Bandung Ke Yogyakarta',
    'Jakarta Ke Yogyakarta',
    'Surabaya Ke Solo',
    'Malang Ke Denpasar',
    'Surabaya Ke Purworejo',


    ];


    const RutePopuler = () => {
    const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

    return (
        <div className=" sm:relative sm:max-w-6xl sm:mx-auto sm:mt-10 sm:w-11/12 px-2">
            <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Terpopuler di <span className="text-blue-900">KingBus!</span>
            </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
    Di sini kamu bisa melihat daftar <strong>rute bus populer</strong> dan juga berbagai <strong>PO Bus terpercaya</strong> pilihan penumpang.
    </p>

            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Rute Populer */}
            <div className=" rounded-sm p-4 ">
            <h6 className="text-lg font-semibold text-blue-950 text-center mb-4">Rute Bus Populer</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {routes.map((route, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedRoute(route)}
                    className={`cursor-pointer p-2  rounded-sm text-x text-gray-700 shadow-2xs hover:bg-blue-200 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out ${
                    selectedRoute === route ? 'bg-yellow-700' : ''
                    }`}
                >
                    {route}
                </div>
                ))}
            </div>
            </div>

            {/* Card Bus Populer */}
            <div className=" rounded-lg p-4 ">
            <h6 className="text-lg font-semibold text-blue-950 text-center mb-4">PO Bus Populer</h6>
        
        <MitraSection/>
            </div>
        </div>
        </div>
    );
    };

    export default RutePopuler;
