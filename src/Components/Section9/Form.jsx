import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom'

const Form = () => {
    const [role, setRole] = useState("Looking to Hire");
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ih0fqc7',
            'template_y07gaxu',
            formRef.current,
            '3mPXz475psLzwUMDk'
        ).then(
            (result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                formRef.current.reset();
            },
            (error) => {
                console.log(error.text);
                alert("Something went wrong!");
            }
        );

    };

    return (
        <div className="max-w-md  mx-auto my-10 bg-white p-6 rounded-lg shadow-2xl">
            <div className='flex justify-between items-start'>
                <h1 className="text-lg font-semibold mb-4">I am interested as:</h1>
                <Link to='/'> <button className='w-6 h-auto cursor-pointer border-2 border-gray-100'>X</button></Link>
            </div>


            <div className="flex gap-2 mb-6">
                <button
                    type="button"
                    className={`flex-1 py-2  border border-gray-300 rounded-lg cursor-pointer ${role === "Looking to Hire"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                        }`}
                    onClick={() => setRole("Looking to Hire")}
                >
                    👤 Looking to Hire
                </button>
                <button
                    type="button"
                    className={`flex-1 py-2 border border-gray-300 rounded-lg cursor-pointer ${role === "Available for Hire"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                        }`}
                    onClick={() => setRole("Available for Hire")}
                >
                    🙋 Available for Hire
                </button>
            </div>

            <h2 className="text-md font-semibold mb-1">Submit your application</h2>
            <p className="text-sm text-gray-500 mb-4">
                The following is required and will only be shared with Nomad
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="role" value={role} />

                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="w-full border border-gray-300 px-3.5 py-1.5 outline-0 rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="w-full border border-gray-300 px-3.5 py-1.5 outline-0 rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full border border-gray-300 px-3.5 py-1.5 outline-0 rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="city" className="block text-sm font-medium  text-gray-700 mb-1">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter your city"
                        className="w-full border border-gray-300 px-3.5 outline-0 py-1.5 rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                    </label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Enter your state"
                        className="w-full border border-gray-300 px-3.5 outline-0 py-1.5 rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-1">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        placeholder="Enter your zipcode"
                        className="w-full border border-gray-300 outline-0 px-3.5 py-1.5 rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea name="message" placeholder="Enter your message here..." className="w-full border border-gray-300 outline-0 px-4 py-2 rounded-lg" required />
                </div>
                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                    Submit
                </button>
            </form>


            <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting the request you confirm acceptance of our{" "}
                <span className="text-blue-600 underline cursor-pointer">
                    Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-600 underline cursor-pointer">
                    Privacy Policy
                </span>.
            </p>
        </div>
    );
};

export default Form;
