import React from 'react';

const Stay: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6 text-left">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800 text-center">Where to Stay</h2>
            <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="font-montserrat text-2xl sm:text-3xl font-bold text-brand-orange mb-4">Octant Hotels Furnas</h3>
                <div className="font-montserrat text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed space-y-4">
                    <p>
                        We have secured a hotel block at Octant Hotels Furnas. This hotel has breakfast included and will be in the same town as Friday/Saturday’s events. We will be running wedding day transportation from this hotel as well.
                    </p>
                    <p className="font-semibold">If you are interested in booking under our wedding block, please do the following:</p>
                    <ol className="list-decimal list-inside space-y-2 pl-4">
                        <li>Email <a href="mailto:events-furnas@octanthotels.com" className="text-brand-orange underline hover:text-orange-700">events-furnas@octanthotels.com</a> requesting your room(s) under the block.</li>
                        <li>Note that you are booking for <strong>Mila & Roberto’s wedding</strong>.</li>
                        <li>You will receive a follow up email with further instructions.</li>
                    </ol>

                     <a 
                        href="https://furnas.octanthotels.com/en/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-6 bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                    >
                        Visit Hotel Website
                    </a>
                </div>
            </div>
            <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md">
                <h3 className="font-montserrat text-2xl sm:text-3xl font-bold text-brand-orange mb-4">Other Hotel Suggestions</h3>
                <div className="font-montserrat text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
                    <p>
                        There are plenty of hotel and Airbnb options in Furnas.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <a href="https://www.bensaudehotels.com/en/terranostragardenhotel?utm_source=triptease_attract&utm_medium=paid_search&utm_campaign=google_search&gad_source=1&gad_campaignid=20622428042&gbraid=0AAAAABfgVgVZWsnAc__V1evOD9Pk7LADD&gclid=CjwKCAjwxrLHBhA2EiwAu9EdM5Rr_56ATmbeMeaAPv095Y1PHRs_89axPHa-KbsQsdgvsdJbPYW6vhoC1xcQAvD_BwE" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange underline hover:text-orange-700">Terra Nostra Garden Hotel</a> - 4 min drive / 15 min walk from the Octant
                        </li>
                        <li>
                            <a href="https://cantosgreengarden.pt/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange underline hover:text-orange-700">Cantos Green Garden</a> - 3 min drive / 18 min walk from the Octant, good for groups
                        </li>
                        <li>
                            <a href="https://www.vistadovale.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange underline hover:text-orange-700">Vista do Vale</a> - 4 min drive / 20 min walk from the Octant
                        </li>
                    </ul>
                    <p>
                        Check out the areas of Caloura and Vila Franco do Campo if you want to be by the ocean and close to the wedding venue.
                    </p>
                </div>
            </div>
             <div className="w-full aspect-video sm:aspect-[2/1] max-w-2xl rounded-lg overflow-hidden shadow-lg">
                <img 
                    src="https://media.cntraveller.com/photos/64c8f00185033ddee17cab44/16:9/w_2240,c_limit/Azores-GettyImages-944487332.jpeg" 
                    alt="Scenic view of the Azores coast" 
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default Stay;