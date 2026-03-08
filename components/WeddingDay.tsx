import React from 'react';

const WeddingDay: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">The Wedding Day</h2>
             <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-center space-y-6">
                 <div className="font-montserrat text-gray-800 space-y-2">
                    <p className="font-semibold text-xl">Sunday, September 6th</p>
                    <h3 className="font-gaegu text-3xl text-brand-orange">Wedding Ceremony</h3>
                    <p className="text-lg">CK Events, 4:00pm</p>
                    <p className="text-sm italic">Shuttles from the Octant provided</p>
                 </div>
                 <div className="font-montserrat text-gray-800 space-y-2">
                    <h3 className="font-gaegu text-3xl text-brand-orange">Reception</h3>
                    <p className="text-lg">Immediately to follow until midnight</p>
                    <p className="text-sm italic">Transportation back to hotel provided.</p>
                 </div>
            </div>
        </section>
    );
};

export default WeddingDay;