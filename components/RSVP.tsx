import React, { useState } from 'react';

// The new URL for the deployed Google Apps Script.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx0DqgIv9LjD0Y1ccXhV1gj6bSeFMJANvYIyRtZ1iuMlfn8xWWJE-XPDDWYzn2EpdmN/exec';

type FormState = {
    name: string;
    email: string;
    attending: 'yes' | 'no' | '';
    guests: string;
    plusOneName: string;
    dietary: string;
};

type Errors = {
    [key in keyof FormState]?: string;
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


    const validate = (): boolean => {
        const newErrors: Errors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.attending) newErrors.attending = 'Please select an option.';
        if (formData.attending === 'yes' && formData.guests === '2' && !formData.plusOneName.trim()) {
            newErrors.plusOneName = "Please enter your guest's full name.";
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
        if (attendingValue === 'no') {
            setFormData(prev => ({ ...prev, attending: attendingValue, guests: '1', plusOneName: '' }));
        } else {
            setFormData(prev => ({ ...prev, attending: attendingValue }));
        }
        if (postSubmitMessage) setPostSubmitMessage('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        
        setIsProcessing(true);
        setErrors({});
        setPostSubmitMessage('');
        setIsSuccess(false);
        
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value as string);
        });
        
        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                setPostSubmitMessage("Thank you! Your RSVP has been submitted successfully.");
                setIsSuccess(true);
                setFormData(initialFormState);
            } else {
                const errorText = await response.text();
                console.error("Google Script execution error:", errorText);
                setPostSubmitMessage("An error occurred while submitting. Please try again.");
                setIsSuccess(false);
            }

        } catch (error: any) {
            console.error("RSVP Submission Fetch Error:", error);
            setPostSubmitMessage(`A network error occurred. Please check your connection and try again.`);
            setIsSuccess(false);
        } finally {
            setIsProcessing(false);
        }
    };
    
    return (
        <section className="flex flex-col items-center space-y-6 w-full">
            <h2 className="font-gaegu text-4xl sm:text-5xl text-gray-800">RSVP</h2>
            <div className="w-full max-w-2xl bg-white/60 p-6 sm:p-8 rounded-lg shadow-md text-left">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-montserrat">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                            required
                            placeholder="As it appears on your invitation"
                        />
                        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                            required
                        />
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
                                <select
                                    name="guests"
                                    id="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm rounded-md"
                                >
                                    <option value="1">1 (Just Me)</option>
                                    <option value="2">2 (Me + My Guest)</option>
                                </select>
                            </div>
                            
                            {formData.guests === '2' && (
                                 <div className="transition-opacity duration-500">
                                    <label htmlFor="plusOneName" className="block text-sm font-medium text-gray-700 font-montserrat">Guest's Full Name</label>
                                    <input
                                        type="text"
                                        name="plusOneName"
                                        id="plusOneName"
                                        value={formData.plusOneName}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                                        required
                                    />
                                    {errors.plusOneName && <p className="mt-2 text-sm text-red-600">{errors.plusOneName}</p>}
                                </div>
                            )}
                        </div>
                    )}

                    <div>
                        <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 font-montserrat">Dietary Restrictions or Allergies</label>
                        <textarea
                            name="dietary"
                            id="dietary"
                            rows={3}
                            value={formData.dietary}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
                            placeholder="Let us know of any allergies or dietary needs for your party."
                        ></textarea>
                    </div>
                    <div>
                        {postSubmitMessage && <p className={`mb-4 text-sm text-center font-semibold ${isSuccess ? 'text-green-700' : 'text-red-600'}`}>{postSubmitMessage}</p>}
                         <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors duration-300 font-montserrat"
                        >
                            {isProcessing ? 'Submitting...' : 'Submit RSVP'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RSVP;