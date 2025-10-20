import React from 'react';

const Gift: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">Gift Registry</h2>
            <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-center space-y-6">
                 <p className="font-montserrat text-lg text-gray-600">
                    Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered for items we would love to have in our new home.
                </p>
                 <a 
                    href="https://www.zola.com/registry/milaandroberto"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-brand-orange text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 text-lg"
                >
                    View Our Registry
                </a>
            </div>
        </section>
    );
};

export default Gift;