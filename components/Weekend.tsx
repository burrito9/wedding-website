import React from 'react';

const Weekend: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">The Weekend</h2>
            <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-center space-y-8">
                 <div className="font-montserrat text-gray-800 space-y-4">
                    <div className="space-y-2">
                        <p className="font-semibold text-xl">Friday, September 4th</p>
                        <h3 className="font-gaegu text-3xl text-brand-orange">Rehearsal & Welcome Drinks</h3>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Rehearsal Dinner</p>
                        <p className="text-gray-600">5:00pm</p>
                        <p className="text-sm italic">By invitation only</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Welcome Drinks at A Quinta</p>
                        <p className="text-gray-600">8:00–10:30pm</p>
                        <p className="text-sm italic">Short walk from the Octant — light snacks provided</p>
                    </div>
                 </div>
                 <div className="font-montserrat text-gray-800 space-y-4">
                    <div className="space-y-2">
                        <p className="font-semibold text-xl">Saturday, September 5th</p>
                        <h3 className="font-gaegu text-3xl text-brand-orange">Beach Day & Sunset Disco</h3>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Beach Day at Ribeira Quente</p>
                        <p className="text-gray-600">1:00–4:00pm</p>
                        <p className="text-sm italic">Short drive from the hotel.</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold">Sunset Disco Party</p>
                        <p className="text-gray-600">6:30–9:00pm</p>
                        <p className="text-sm italic">Food provided — come hungry</p>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default Weekend;