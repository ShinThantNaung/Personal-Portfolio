import React from 'react';
import capoo from '../public/capoo-sad.png';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src={capoo} alt="Capoo Sad" className="w-64 h-64 mb-8" />
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-600">Page Not Found</p>
        </div>
    );
}