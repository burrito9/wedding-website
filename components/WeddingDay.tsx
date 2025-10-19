import React from 'react';

const WeddingDay: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">The Wedding Day</h2>
             <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-center">
                 <div className="font-montserrat text-gray-800">
                    <p className="font-semibold text-xl">Sunday, September 6th, 2026</p>
                    <h3 className="font-gaegu text-3xl text-brand-orange">Mila and Roberto get married!</h3>
                 </div>
                 <p className="font-montserrat text-lg text-gray-600 pt-4">
                    More details about the ceremony and reception to follow.
                </p>
            </div>
        </section>
    );
};

export default WeddingDay;