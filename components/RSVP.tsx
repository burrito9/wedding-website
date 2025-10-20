import React, { useState, useEffect } from 'react';

// The URL for the deployed Google Apps Script. It handles both GET and POST.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygA4iuGdrdtgtXCVI_074UGwBzla2IE2XONixfN0T5sx0Fbz1VNQza-cTjIrc06r8c/exec';

type FormState = {
    name: string;
    email: string;
    attending: 'yes' | 'no' | '';
    guests: string;
    plusOneName: string;
    dietary: string;
};

type Guest = {
    invitationName: string;
    primaryGuest: string;
    secondaryGuest: string;
    plusOneAllowed: boolean;
};

type Errors = {
    [key in keyof FormState | 'verification']?: string;
};

const RSVP: React.FC = () => {
    const initialFormState: FormState = {
        name: '',
        email: '',
        attending: '',
        guests: '1',
        plusOneName: '',
        dietary: ''
    };
    const [formData, setFormData] = useState<FormState>(initialFormState);
    const [errors, setErrors] = useState<Errors>({});
    const [isProcessing, setIsProcessing] = useState(false);
    const [postSubmitMessage, setPostSubmitMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    
    // State for guest list verification
    const [guestList, setGuestList] = useState<Guest[]>([]);
    const [isLoadingGuestList, setIsLoadingGuestList] = useState(true);
    const [nameToVerify, setNameToVerify] = useState('');
    const [verifiedGuest, setVerifiedGuest] = useState<Guest | null>(null);

    useEffect(() => {
        const fetchGuestList = async () => {
            try {
                const response = await fetch(SCRIPT_URL);
                const result = await response.json();
                if (result.result === 'success') {
                    setGuestList(result.data);
                } else {
                    console.error("Error fetching guest list:", result.error);
                    setErrors({ verification: "Could not load the guest list. Please try refreshing." });
                }
            } catch (error) {
                console.error("Fetch Guest List Error:", error);
                setErrors({ verification: "Could not connect to the guest list service." });
            } finally {
                setIsLoadingGuestList(false);
            }
        };
        fetchGuestList();
    }, []);

    const handleNameVerification = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        const nameToVerifyLower = nameToVerify.trim().toLowerCase();
        if (!nameToVerifyLower) {
            setErrors({ verification: "Please enter your full name." });
            return;
        }

        const foundGuest = guestList.find(guest =>
            (guest.primaryGuest && guest.primaryGuest.toLowerCase().includes(nameToVerifyLower)) ||
            (guest.secondaryGuest && guest.secondaryGuest.toLowerCase().includes(nameToVerifyLower))
        );

        if (foundGuest) {
            const isCouple = !!foundGuest.secondaryGuest;
            const initialGuests = isCouple ? '2' : '1';

            setVerifiedGuest(foundGuest);
            setFormData(prev => ({
                ...prev,
                name: foundGuest.invitationName,
                guests: initialGuests,
            }));
        } else {
            setErrors({ verification: "We couldn't find your name. Please check for typos and use the name from your invitation." });
        }
    };

    const validate = (): boolean => {
        const newErrors: Errors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.attending) newErrors.attending = 'Please select an option.';

        if (verifiedGuest && formData.attending === 'yes') {
            const isCouple = !!verifiedGuest.secondaryGuest;
            const canBringGuest = verifiedGuest.plusOneAllowed && !isCouple;
            if (formData.guests === '2' && canBringGuest && !formData.plusOneName.trim()) {
                 newErrors.plusOneName = "Please enter your guest's full name.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        const newFormData = { ...formData, [name]: value };

        if (name === 'guests' && value === '1') {
            newFormData.plusOneName = '';
        }

        setFormData(newFormData);
        if (postSubmitMessage) setPostSubmitMessage('');
    };

    const handleAttendingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const attendingValue = e.target.value as 'yes' | 'no';
        const isCouple = !!(verifiedGuest && verifiedGuest.secondaryGuest);

        if (attendingValue === 'no') {
            setFormData(prev => ({ ...prev, attending: attendingValue, guests: isCouple ? '2' : '1', plusOneName: '' }));
        } else {
            setFormData(prev => ({ ...prev, attending: attendingValue }));
        }
        if (postSubmitMessage) setPostSubmitMessage('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        
        setIsProcessing(true);
        setErrors({});
        setPostSubmitMessage('');
        setIsSuccess(false);
        
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value as string);
        });
        
        try {
            const response = await fetch(SCRIPT_URL, { method: 'POST', body: data });
            if (response.ok) {
                setPostSubmitMessage("Thank you! Your RSVP has been submitted successfully.");
                setIsSuccess(true);
                setFormData(initialFormState);
                setVerifiedGuest(null);
                setNameToVerify('');
            } else {
                setPostSubmitMessage("An error occurred while submitting. Please try again.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("RSVP Submission Fetch Error:", error);
            setPostSubmitMessage(`A network error occurred. Please check your connection and try again.`);
            setIsSuccess(false);
        } finally {
            setIsProcessing(false);
        }
    };

    const renderRsvpForm = () => {
        if (!verifiedGuest) return null;

        const isCouple = !!verifiedGuest.secondaryGuest;
        const canBringGuest = verifiedGuest.plusOneAllowed && !isCouple;
        const isPartyOfOne = !isCouple && !canBringGuest;
        
        let welcomeMessage = `Welcome, ${verifiedGuest.primaryGuest}!`;
        if (isCouple) {
            welcomeMessage = `Welcome, ${verifiedGuest.primaryGuest} and ${verifiedGuest.secondaryGuest}!`;
        }

        return (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="p-3 bg-orange-50 rounded-md">
                    <p className="font-semibold text-gray-800">{welcomeMessage}</p>
                    <p className="text-sm text-gray-600">Please fill out the details below to complete your RSVP.</p>
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat">Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm" required />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>

                <fieldset>
                    <legend className="text-sm font-medium text-gray-700 font-montserrat">Will you be attending?</legend>
                    <div className="mt-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-4">
                        <div className="flex items-center">
                            <input id="attending-yes" name="attending" type="radio" value="yes" onChange={handleAttendingChange} checked={formData.attending === 'yes'} className="focus:ring-brand-orange h-4 w-4 text-brand-orange border-gray-300" />
                            <label htmlFor="attending-yes" className="ml-3 block text-sm font-medium text-gray-700">Joyfully Accept</label>
                        </div>
                        <div className="flex items-center">
                            <input id="attending-no" name="attending" type="radio" value="no" onChange={handleAttendingChange} checked={formData.attending === 'no'} className="focus:ring-brand-orange h-4 w-4 text-brand-orange border-gray-300" />
                            <label htmlFor="attending-no" className="ml-3 block text-sm font-medium text-gray-700">Regretfully Decline</label>
                        </div>
                    </div>
                    {errors.attending && <p className="mt-2 text-sm text-red-600">{errors.attending}</p>}
                </fieldset>

                {formData.attending === 'yes' && (
                    <div className="space-y-6 transition-all duration-500">
                        <div>
                            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 font-montserrat">Number in Party</label>
                            {isCouple ? (
                                <select name="guests" id="guests" value={formData.guests} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm rounded-md">
                                    <option value="2">2 (Both of us)</option>
                                    <option value="1">1 (Just one of us)</option>
                                </select>
                            ) : (
                                <select name="guests" id="guests" value={formData.guests} onChange={handleChange} disabled={isPartyOfOne} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed">
                                    {canBringGuest ? (
                                        <>
                                            <option value="1">1 (Just Me)</option>
                                            <option value="2">2 (Me + My Guest)</option>
                                        </>
                                    ) : (
                                        <option value="1">1 (Just Me)</option>
                                    )}
                                </select>
                            )}
                            
                            {isPartyOfOne && (
                                <p className="mt-1 text-xs text-gray-500">
                                    Your invitation is for yourself only.
                                </p>
                            )}
                        </div>
                        
                        {formData.guests === '2' && canBringGuest && (
                             <div className="transition-opacity duration-500">
                                <label htmlFor="plusOneName" className="block text-sm font-medium text-gray-700 font-montserrat">Guest's Full Name</label>
                                <input type="text" name="plusOneName" id="plusOneName" value={formData.plusOneName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm" required />
                                {errors.plusOneName && <p className="mt-2 text-sm text-red-600">{errors.plusOneName}</p>}
                            </div>
                        )}
                    </div>
                )}

                <div>
                    <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 font-montserrat">Dietary Restrictions or Allergies</label>
                    <textarea name="dietary" id="dietary" rows={3} value={formData.dietary} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm" placeholder="Let us know of any allergies or dietary needs for your party."></textarea>
                </div>
                <div>
                     <button type="submit" disabled={isProcessing} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors duration-300 font-montserrat">
                        {isProcessing ? 'Submitting...' : 'Submit RSVP'}
                    </button>
                </div>
            </form>
        )
    }
    
    return (
        <section className="flex flex-col items-center space-y-6 w-full">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">RSVP</h2>
            <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-left">
                {isSuccess && postSubmitMessage ? (
                    <div className="text-center">
                        <div className="p-4 rounded-md bg-green-100 text-green-800 font-semibold">
                            {postSubmitMessage}
                        </div>
                        <img 
                            src="https://i.imgur.com/BxThqZW.jpeg" 
                            alt="Mila and Roberto celebrating"
                            className="mt-6 w-48 h-48 object-cover rounded-lg mx-auto shadow-md"
                        />
                    </div>
                ) : (
                    <>
                        {postSubmitMessage && !isSuccess && (
                             <div className={`mb-4 p-4 rounded-md text-center font-semibold bg-red-100 text-red-800`}>
                                {postSubmitMessage}
                            </div>
                        )}
                        {!verifiedGuest ? (
                            <form onSubmit={handleNameVerification} className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800 font-montserrat">Find Your Invitation</h3>
                                <p className="text-sm text-gray-600">Please enter your full name to begin.</p>
                                <div>
                                    <label htmlFor="name-verify" className="block text-sm font-medium text-gray-700 font-montserrat sr-only">Full Name</label>
                                    <input
                                        type="text"
                                        name="name-verify"
                                        id="name-verify"
                                        value={nameToVerify}
                                        onChange={(e) => {
                                            setNameToVerify(e.target.value);
                                            if(errors.verification) setErrors({});
                                            if(postSubmitMessage) setPostSubmitMessage('');
                                        }}
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                                        required
                                        placeholder="Your Full Name"
                                        disabled={isLoadingGuestList}
                                    />
                                </div>
                                {errors.verification && <p className="mt-2 text-sm text-red-600">{errors.verification}</p>}
                                <button
                                    type="submit"
                                    disabled={isLoadingGuestList || !nameToVerify}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors duration-300 font-montserrat"
                                >
                                    {isLoadingGuestList ? 'Loading Guest List...' : 'Find My Invitation'}
                                </button>
                            </form>
                        ) : renderRsvpForm()}
                    </>
                )}
            </div>
        </section>
    );
};

export default RSVP;