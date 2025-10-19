import React from 'react';

const Location: React.FC = () => {
    return (
        <section className="flex flex-col items-center space-y-6">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">To Our Friends and Family</h2>
            <div className="w-full aspect-video sm:aspect-[2/1] max-w-2xl rounded-lg overflow-hidden shadow-lg">
                <img 
                    src="https://futurismo.pt/wp-content/uploads/2023/12/Alexandre-Balas-Sao-Miguel-Ilheu-de-Vila-Franca-do-Campo-2-1-scaled.jpg" 
                    alt="Scenic view of São Miguel, Azores" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="font-montserrat text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed space-y-4">
        
                <p>
                    We are so excited to celebrate our marriage in the Azores on September 6. We fell in love with the Azores during a long layover after visiting Mila’s family in Portugal, and visit as often as we can. This is our happy place, and we can’t wait to share it with you.
                </p>
                <p>
                    While we hope to have you with us, we understand that all may not be able to make this commitment. We’ve included as much information as we can here, but please reach out with questions or concerns. Whether you are dancing with us in person or toasting us from afar, we thank you for bringing so much love into our lives as we take on our marriage!
                </p>
                <p className="font-semibold">
                    Please RSVP between now and April 30th, 2026
                </p>
            </div>
        </section>
    );
};

export default Location;