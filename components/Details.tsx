import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2026-09-06T17:00:00') - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }
    return timeLeft;
};

const Details: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <section className="flex flex-col items-center space-y-12">
            <div className="font-gaegu text-gray-800 text-center">
                <h2 className="text-5xl sm:text-6xl">WE'RE GETTING MARRIED</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-3xl text-gray-700">
                <div className="flex flex-col items-center text-center">
                    <h3 className="font-gaegu text-4xl sm:text-5xl text-brand-orange mb-2">When</h3>
                    <p className="font-montserrat text-2xl sm:text-3xl font-semibold">September 6, 2026</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h3 className="font-gaegu text-4xl sm:text-5xl text-brand-orange mb-2">Where</h3>
                     <p className="font-montserrat text-2xl sm:text-3xl font-semibold">São Miguel, Azores</p>
                    <p className="font-montserrat text-lg">Portugal</p>
                </div>
            </div>

            <div className="flex flex-row justify-center items-baseline gap-6 sm:gap-10 text-center pt-8">
                {timeLeft.days !== undefined ? (
                    <>
                        <div className="flex flex-col">
                            <span className="font-montserrat text-5xl sm:text-6xl font-bold text-brand-orange">{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className="font-gaegu text-2xl text-gray-600 mt-1">Days</span>
                        </div>
                         <div className="flex flex-col">
                            <span className="font-montserrat text-5xl sm:text-6xl font-bold text-brand-orange">{String(timeLeft.hours!).padStart(2, '0')}</span>
                            <span className="font-gaegu text-2xl text-gray-600 mt-1">Hours</span>
                        </div>
                         <div className="flex flex-col">
                            <span className="font-montserrat text-5xl sm:text-6xl font-bold text-brand-orange">{String(timeLeft.minutes!).padStart(2, '0')}</span>
                            <span className="font-gaegu text-2xl text-gray-600 mt-1">Minutes</span>
                        </div>
                         <div className="flex flex-col">
                            <span className="font-montserrat text-5xl sm:text-6xl font-bold text-brand-orange">{String(timeLeft.seconds!).padStart(2, '0')}</span>
                            <span className="font-gaegu text-2xl text-gray-600 mt-1">Seconds</span>
                        </div>
                    </>
                ) : (
                    <span className="font-gaegu text-4xl text-brand-orange">The day is here!</span>
                )}
            </div>
        </section>
    );
};

export default Details;