import React from 'react';
import Heart from './Heart';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 mt-12 border-t border-gray-200 flex flex-col items-center space-y-4">
            <div className="flex justify-center items-center space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Heart key={i} className="w-5 h-5 text-brand-orange/80" />
                ))}
            </div>
            <p className="font-gaegu text-2xl sm:text-3xl text-gray-700">
                See you in São Miguel!
            </p>
            <p className="font-montserrat text-lg text-gray-600">
                Mila & Roberto
            </p>
        </footer>
    );
};

export default Footer;