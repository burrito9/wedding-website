import React from 'react';

const WeddingDay: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">The Wedding Day</h2>
             <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-left space-y-6">
                  <div className="font-montserrat text-gray-800 space-y-4">
                     <div className="space-y-1 border-b border-brand-orange/20 pb-2">
                        <p className="font-semibold text-xl">Sunday, September 6th</p>
                        <h3 className="font-gaegu text-3xl text-brand-orange">The Celebration at CK Events</h3>
                     </div>

                     <div className="space-y-1 pl-4 border-l-2 border-brand-orange/30">
                        <p className="font-semibold text-lg">Shuttles to CK Events</p>
                        <p className="text-gray-600">3:00pm</p>
                        <p className="text-sm text-gray-600">Departing from Octant Furnas. Mingle with drinks upon arrival at CK Events.</p>
                     </div>

                     <div className="space-y-1 pl-4 border-l-2 border-brand-orange/30">
                        <p className="font-semibold text-lg">Wedding Ceremony</p>
                        <p className="text-gray-600">4:30pm–5:00pm</p>
                        <p className="text-sm text-gray-600">Our ceremony will begin promptly at 4:30pm.</p>
                     </div>

                     <div className="space-y-1 pl-4 border-l-2 border-brand-orange/30">
                        <p className="font-semibold text-lg">Wedding Reception & Party</p>
                        <p className="text-gray-600">5:00pm–Midnight</p>
                        <p className="text-sm text-gray-600">Time to party! Dinner and drinks will be served. Transportation back to the Octant hotel is provided at the end of the night.</p>
                        <p className="text-sm italic text-brand-orange">Attire: Island formal, suits and dresses. Linens and colors encouraged.</p>
                     </div>
                  </div>
             </div>
        </section>
    );
};

export default WeddingDay;
