import React, { useState } from 'react';
import Heart from './Heart';

const faqData = [
  {
    question: "Do I need to stay at The Octant?",
    answer: (
        <>
            <p>
                No. However, the Sunset party will be at the hotel, it has free breakfast, and transportation will all be coordinated from there. Best to be close! There are tons of Airbnbs and hotels on the island. We’ll provide some recommendations on our website.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-700">
                    Block Pricing: September 4-7
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                    <li>Single (one person in room): 310 euro/night</li>
                    <li>Double (two people in room): 330 euro/night</li>
                </ul>
            </div>
        </>
    )
  },
  {
    question: "Do I need to rent a car?",
    answer: (
        <>
            <p>
                No, there will be transportation from The Octant to all official events. However, if you want to explore the island (and we suggest you do), a car makes it much easier. <a href="https://savedspots.com/posts/quick-guide-renting-a-car-in-the-azores" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline hover:text-orange-700">Check out this link for more info</a>.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-700">
                    We have secured a discount with a local car rental company!
                </p>
                <p className="mt-2">
                    Use promo code <strong className="font-bold text-brand-orange text-lg tracking-wider bg-orange-50 px-2 py-1 rounded">#glamazores</strong> when booking with <a href="https://autatlantis.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline hover:text-orange-700">Autatlantis Rent-a-Car</a>.
                </p>
            </div>
        </>
    )
  },
  {
    question: "What is the dress code?",
    answer: (
        <ul className="list-disc list-inside space-y-2">
         <li><span className="font-semibold">Welcome Drinks:</span> Casual, but look good.</li>
            <li><span className="font-semibold">Sunset Party:</span> Island Disco</li>
            <li><span className="font-semibold">Wedding:</span> Island Formal</li>
        </ul>
    )
  },
  {
    question: "When should I book my flights?",
    answer: (
        <>
            <p>The best time to book is 6-8 months out, but you can usually find good deals as close as 3-4 months out. There are direct flights daily from NYC and Boston. Those coming from elsewhere, you’ll likely have to connect there.</p>
            <p className="mt-4">Looking at being in mainland Portugal before the wedding? Explore <a href="https://www.flytap.com/en-us/stopover" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline hover:text-orange-700">TAP’s Stopover Program</a>.</p>
        </>
    )
  },
  {
    question: "Are children and +1's welcome?",
    answer: "We are only able to accomodate those listed on your invitation. Thank you for understanding."
  },
  {
    question: "Is there a registry?",
    answer: "Your presence is the best gift we could ask for, and we know many are traveling far and wide to attend our wedding. If you are considering a gift, we will include a registry on our website at some point."
  },
  {
    question: "What’s the weather like? What should I pack?",
    answer: (
        <>
            <p className="mb-3">September is perfect Azores weather. Highs of 75°F (24°C), lows of 62°F (17°C). It's generally sunny and breezy, but be prepared for occasional drizzle as the weather can be unpredictable.</p>
            <p>Pack for an adventure! We recommend:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Shoes you can hike in and don't mind getting a little dirty.</li>
                <li>A light rain-coat.</li>
                <li>Swimwear for hot springs and ocean dips.</li>
                <li>A hat and sunglasses for sun protection.</li>
                <li>A power adapter for our US-based friends and family.</li>
            </ul>
        </>
    )
  }
];

const mustDos = {
    "Natural Wonders": [
        "Sete Cidades (Twin Lakes) - the most iconic scene in the Azores, sitting in an ancient volcanic crater.",
        "Terra Nostra Park in Furnas - a large geothermal pool filled with iron-rich water naturally heated by volcanic activity.",
        "Waterfall hunting and hiking through lush, jungle-like landscapes.",
    ],
    "Adventure Activities": [
        "Whale watching - the Azores are one of the world's largest whale sanctuaries.",
        "Hiking Mount Pico - the highest point in all of Portugal.",
        "Kayaking in crater lakes and coastal waters.",
        "Surfing at spectacular beaches.",
        "Swimming with dolphins (where permitted).",
    ],
    "Unique Experiences": [
        "Eating traditional \"Cozido das Furnas\" - a hearty stew slow-cooked underground using volcanic heat.",
        "Exploring Europe's only commercial tea fields on São Miguel.",
        "Volcanic wine tasting on Pico Island's UNESCO-recognized vineyards.",
        "Hot springs hopping across different islands.",
        "Exploring volcanic caves and lava tubes.",
    ]
};

const FAQItem: React.FC<{ question: string; answer: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left font-montserrat text-lg font-semibold text-gray-800"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <span className="text-brand-orange text-2xl transform transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="pt-4 pr-8 text-gray-600 leading-relaxed">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="scroll-mt-20 flex flex-col items-center space-y-8 w-full max-w-2xl text-left">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800 self-center">FAQs</h2>
            <div className="w-full">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>

            <div className="flex w-full max-w-sm sm:max-w-md justify-between items-center py-4">
                <Heart className="w-6 h-6 text-brand-orange opacity-60" />
                <Heart className="w-8 h-8 text-brand-orange opacity-80" />
                <Heart className="w-12 h-12 text-brand-orange" />
                <Heart className="w-8 h-8 text-brand-orange opacity-80" />
                <Heart className="w-6 h-6 text-brand-orange opacity-60" />
            </div>

            <div className="w-full bg-white/60 p-6 sm:p-8 rounded-lg shadow-md">
                 <h3 className="font-gaegu text-3xl sm:text-4xl text-brand-orange mb-4 text-center">Must-Do's in the Azores</h3>
                 {Object.entries(mustDos).map(([category, items]) => (
                     <div key={category} className="mb-4">
                         <h4 className="font-montserrat text-xl font-bold text-gray-700 mb-2">{category}</h4>
                         <ul className="list-disc list-inside space-y-2 text-gray-600">
                             {items.map((item, index) => (
                                 <li key={index}>{item}</li>
                             ))}
                         </ul>
                     </div>
                 ))}
            </div>

        </section>
    );
};

export default FAQ;