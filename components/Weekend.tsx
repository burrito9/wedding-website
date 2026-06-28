import React from 'react';

const Weekend: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">The Weekend</h2>
            <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-left space-y-8">
                 <div className="font-montserrat text-gray-800 space-y-4">
                    <div className="space-y-1 border-b border-brand-orange/20 pb-2">
                        <p className="font-semibold text-xl">Friday, September 4th</p>
                        <h3 className="font-gaegu text-3xl text-brand-orange">Welcome to Furnas</h3>
                    </div>
                    <div className="space-y-1 pl-4 border-l-2 border-brand-orange/30">
                        <p className="font-semibold text-lg">Rehearsal Dinner</p>
                        <p className="text-gray-600">5:00pm</p>
                        <p className="text-sm italic text-gray-500">By invitation only</p>
                    </div>
                    <div className="space-y-1 pl-4 border-l-2 border-brand-orange/30">
                        <p className="font-semibold text-lg">Welcome Drinks @ A Quinta</p>
                        <p className="text-gray-600">8:00pm–10:30pm</p>
                        <p className="text-sm text-gray-600">Short walk from the Octant. Light bites + drinks will be served.</p>
                        <p className="text-sm italic text-brand-orange">Attire: Casual but look good</p>
                    </div>
                 </div>

                 <div className="font-montserrat text-gray-800 space-y-4">
                    <div className="space-y-1 border-b border-brand-orange/20 pb-2">
                        <p className="font-semibold text-xl">Saturday, September 5th</p>
                        <h3 className="font-gaegu text-3xl text-brand-orange">Beach & Disco</h3>
                    </div>
                    <div className="space-y-1 pl-4 border-l-2 border-brand-orange/30">
                        <p className="font-semibold text-lg">Beach Day @ Ribeira Quente</p>
                        <p className="text-gray-600">1:00pm–4:00pm</p>
                        <p className="text-sm text-gray-600">Lunch + drinks are available at local beach bars.</p>
                        <p className="text-sm text-gray-600">If you rent a car, we recommend using it. A shuttle van will also be running back and forth between the beach and the Octant.</p>
                        <p className="text-sm italic text-brand-orange">Attire: Wear your bathing suit + BYO beach towel</p>
                    </div>
                    <div className="space-y-1 pl-4 border-l-2 border-brand-orange/30">
                        <p className="font-semibold text-lg">Sunset Disco Party @ Octant Furnas</p>
                        <p className="text-gray-600">6:30pm–9:00pm</p>
                        <p className="text-sm text-gray-600">Dinner + drinks provided.</p>
                        <p className="text-sm italic text-brand-orange">Attire: 80s disco (lean into it!). Best attire wins a mystery prize.</p>
                    </div>
                    <div className="space-y-1 pl-4 border-l-2 border-brand-orange/30">
                        <p className="font-semibold text-lg">Unofficial After Party</p>
                        <p className="text-gray-600">9:00pm–onwards</p>
                        <p className="text-sm text-gray-600 italic">At bars walking distance from the hotel (you're on your own for this!)</p>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default Weekend;