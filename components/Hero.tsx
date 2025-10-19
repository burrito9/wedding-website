import React, { useState, useEffect } from 'react';
import CoupleOnShark from './CoupleOnShark';
import Heart from './Heart';

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

const Hero: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <header className="flex flex-col items-center space-y-8">
            <div className="flex w-full max-w-sm sm:max-w-md justify-between items-center">
                <Heart className="w-6 h-6 text-brand-orange opacity-60" />
                <Heart className="w-8 h-8 text-brand-orange opacity-80" />
                <Heart className="w-12 h-12 text-brand-orange" />
                <Heart className="w-8 h-8 text-brand-orange opacity-80" />
                <Heart className="w-6 h-6 text-brand-orange opacity-60" />
            </div>
            
            <h1 className="font-gaegu text-5xl sm:text-6xl text-gray-800 text-center">
                Mila and Roberto are getting married!
            </h1>
            
            <CoupleOnShark />

            <div className="flex flex-col items-center space-y-12 w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 w-full max-w-3xl text-gray-700">
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

                <div className="flex flex-row justify-center items-baseline gap-6 sm:gap-10 text-center">
                    {timeLeft.days !== undefined ? (
                        <>
                            <div className="flex flex-col">
                                <span className="font-gaegu text-6xl sm:text-7xl text-gray-800">{String(timeLeft.days).padStart(2, '0')}</span>
                                <span className="font-gaegu text-2xl text-gray-600 mt-1">Days</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-gaegu text-6xl sm:text-7xl text-gray-800">{String(timeLeft.hours!).padStart(2, '0')}</span>
                                <span className="font-gaegu text-2xl text-gray-600 mt-1">Hours</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-gaegu text-6xl sm:text-7xl text-gray-800">{String(timeLeft.minutes!).padStart(2, '0')}</span>
                                <span className="font-gaegu text-2xl text-gray-600 mt-1">Minutes</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-gaegu text-6xl sm:text-7xl text-gray-800">{String(timeLeft.seconds!).padStart(2, '0')}</span>
                                <span className="font-gaegu text-2xl text-gray-600 mt-1">Seconds</span>
                            </div>
                        </>
                    ) : (
                        <span className="font-gaegu text-4xl text-brand-orange">The day is here!</span>
                    )}
                </div>

                <div className="flex w-full max-w-sm sm:max-w-md justify-between items-center pt-4">
                    <Heart className="w-6 h-6 text-brand-orange opacity-60" />
                    <Heart className="w-8 h-8 text-brand-orange opacity-80" />
                    <Heart className="w-12 h-12 text-brand-orange" />
                    <Heart className="w-8 h-8 text-brand-orange opacity-80" />
                    <Heart className="w-6 h-6 text-brand-orange opacity-60" />
                </div>
            </div>
        </header>
    );
};

export default Hero;