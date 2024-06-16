import React, { useState } from 'react';
import { FaEnvelope, FaPhoneVolume, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    name: '',
    email: '',
    message: ''
}

export default function Contact() {
    const [formData, setFormData] = useState(initialState);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        name: null,
        email: null,
        message: null,
    });

    const handOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        // Reset errors on each submission attempt
        setErrors({
            name: null,
            email: null,
            message: null,
        });

        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Client-side validation
        let formIsValid = true;

        if (formData.name.length < 3) {
            setErrors(prevErrors => ({
                ...prevErrors,
                name: 'The name is too short (minimum 3 characters).'
            }));
            formIsValid = false;
        }

        if (!regex.test(formData.email)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Please enter a valid email address.'
            }));
            formIsValid = false;
        }

        if (formData.message.length < 10) {
            setErrors(prevErrors => ({
                ...prevErrors,
                message: 'The message is too short (minimum 10 characters).'
            }));
            formIsValid = false;

        } else if (formData.message.length > 400) {
            setErrors(prevErrors => ({
                ...prevErrors,
                message: 'The message is too long (maximum 400 characters).'
            }));
            formIsValid = false;
        }

        if (formIsValid) {
            setIsSubmitted(true);

            const form_data = new FormData(event.target);
            form_data.append("access_key", "20a364bb-6f45-470c-b0e3-abea90521032");

            const object = Object.fromEntries(form_data);
            const json = JSON.stringify(object);

            try {
                const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: json
                });

                const data = await res.json();
                if (res.ok && data.success) {
                    successNotify();
                    setFormData(initialState); // Reset form fields
                } else {
                    handleApiError(res, data);
                }
            } catch (err) {
                console.log("Error ", err);
                errorNotify("Failed to submit. Please try again later.");
            } finally {
                setIsSubmitted(false);

            }
        }
    }

    const handleApiError = (res, data) => {
        let errorMessage = "Failed to submit. Please try again later.";

        if (res.status === 429) {
            errorMessage = "Too many requests. Please try again later.";
        } else if (res.status >= 400 && res.status < 500) {
            errorMessage = data?.message || "Submission error. Please check your input and try again.";
        } else if (res.status >= 500 && res.status < 600) {
            errorMessage = "Server error. Please try again later.";
        }

        errorNotify(errorMessage);
    }

    const successNotify = () => {
        toast.success("Message sent successfully!", {
            autoClose: 3000 // Close notification after 3 seconds
        });
    }

    const errorNotify = (errorMessage) => {
        toast.error(errorMessage, {
            autoClose: 3000 // Close notification after 3 seconds
        });
    }

    return (
        <div className='mb-[80px]' id='contact'>
            <div className='relative mx-auto mb-8 w-fit'>
                <h2 className='px-2 text-xl md:text-2xl font-bold tracking-wider'>Get in Touch</h2>
                <img src="/assets/theme_pattern.svg" alt="profile" className='w-[70%] h-full absolute right-0 bottom-0 -z-10' />
            </div>
            <div className='flex justify-between w-[90%] mx-auto flex-col md:flex-row'>
                <div className='w-full md:w-[48%]'>
                    <h4 className='text-xl md:text-2xl font-bold leading-10 text-transparent bg-clip-text bg-custom-gradient'>Let's Talk</h4>
                    <p className="max-w-[95%] md:max-w-[90%] text-[#D8D8D8] text-sm">
                        I am currently available for new projects! Feel free to reach out with any ideas or work you have in mind. I'm here to help, and you can contact me anytime.
                    </p>
                    <address className='flex flex-col mb-8 mt-3 md:mt-5 md:mb-0 space-y-2.5 md:space-y-5 text-[#D8D8D8]'>
                        <a href="mailto:bilalbeny735@gmail.com?subject=Project%20Inquiry&body=Hi%20Bilal,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks!" className='flex items-center space-x-3' target='_blank' rel="noreferrer" >
                            <FaEnvelope />
                            <p className='font-medium transition hover:underline'>bilalbeny735@gmail.com</p>
                        </a>
                        <a href='tel:+212664897030' target='_blank' rel="noreferrer" className='flex items-center space-x-3'>
                            <FaPhoneVolume />
                            <p className='font-medium transition hover:underline'>0664897030</p>
                        </a>
                        <a href='https://maps.app.goo.gl/1ahuvniAz33bkmq49' target='_blank' rel="noreferrer" className='flex items-center space-x-3'>
                            <FaMapMarkerAlt />
                            <p className='font-medium transition hover:underline'>Morocco, Chafchouen</p>
                        </a>
                    </address>
                </div>

                <div className='w-fll md:w-[48%]'>
                    <form method='post' className='flex flex-col w-full space-y-3' onSubmit={handleOnSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder='Enter your name...'
                                name='name'
                                aria-label='name'
                                className={`w-full px-3 py-2 rounded-sm bg-[#32323c] ${errors.name ? 'border-red-500 outline-red-500 ring-red-500' : ''}`}
                                onChange={handOnChange}
                                value={formData.name}
                                minLength={3}
                                maxLength={30}
                                required
                                disabled={isSubmitted} // Disable input during submission
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Enter your email...'
                                name='email'
                                aria-label='email'
                                className={`w-full px-3 py-2 rounded-sm bg-[#32323c] ${errors.email ? 'border-red-500 outline-red-500 ring-red-500' : ''}`}
                                required
                                onChange={handOnChange}
                                value={formData.email}
                                disabled={isSubmitted} // Disable input during submission
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <textarea
                                rows="6"
                                placeholder='Enter your Message...'
                                name='message'
                                aria-label='message'
                                className={`py-1.5 px-2 w-full max-h-[400px] min-h-[100px] rounded-sm bg-[#32323c] ${errors.message ? 'border-red-500 outline-red-500 ring-red-500' : ''}`}
                                onChange={handOnChange}
                                value={formData.message}
                                required
                                minLength={10}
                                maxLength={400}
                                disabled={isSubmitted} // Disable input during submission
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <div>
                            <button
                                type='submit'
                                className={`px-4 py-2 text-xs font-semibold text-white transition rounded-3xl bg-custom-gradient hover:scale-[1.05] ring-white ${isSubmitted ? 'ring-2' : ''}`}
                                disabled={isSubmitted} // Disable button during submission
                            >{isSubmitted ? 'Submitting...' : 'Submit Now'}</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position='top-center'
                theme="colored"
                closeOnClick
                autoClose={3000} // Close all notifications after 3 seconds
            />
        </div>
    )
}