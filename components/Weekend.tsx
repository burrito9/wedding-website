import React from 'react';

const Weekend: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">The Weekend</h2>
            <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-center space-y-6">
                 <div className="font-montserrat text-gray-800">
                    <p className="font-semibold text-xl">Friday, September 4th, 2026</p>
                    <h3 className="font-gaegu text-3xl text-brand-orange">Welcome Drinks in Furnas</h3>
                 </div>
                 <div className="font-montserrat text-gray-800">
                    <p className="font-semibold text-xl">Saturday, September 5th, 2026</p>
                    <h3 className="font-gaegu text-3xl text-brand-orange">Sunset Party in Furnas</h3>
                 </div>
                 <p className="font-montserrat text-lg text-gray-600 text-center pt-4">
                    More details to come soon!
                </p>
            </div>
        </section>
    );
};

export default Weekend;