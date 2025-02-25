import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin } from "lucide-react";
import Swal from 'sweetalert2'; // Import SweetAlert2

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_yk1mr6u', 'template_c9ozus8', form.current, {
                publicKey: '-KlgDyeN2DcGB3PGO',
            })
            .then(() => {
                // Success alert with SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Your message has been sent successfully.',
                    confirmButtonColor: '#6a4c9c',
                });
            }, (error) => {
                // Failure alert with SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: `Something went wrong: ${error.text}`,
                    confirmButtonColor: '#d9534f',
                });
            });

        e.target.reset(); // Reset form after submission
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#0F0A1F] text-white">
            {/* Contact Form Section */}
            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <form ref={form} onSubmit={sendEmail} className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg">
                    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
                        Contact Us
                    </h2>
                    
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Name</label>
                        <input type="text" name="from_name" required className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none" />
                    </div>
                    
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input type="email" name="from_email" required className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none" />
                    </div>
                    
                    {/* Message Field */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Message</label>
                        <textarea name="message" rows="4" required className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition-all">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Contact Info Section */}
            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="bg-[#0F0A1F] p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6">
                    <h3 className="text-2xl font-semibold text-center mb-4">Get in Touch</h3>
                    <div className="space-y-6">
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Phone</p>
                                <p className="text-white font-medium">+01759037951</p>
                            </div>
                        </div>
                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <p className="text-white font-medium">sadman.sakib@gmail.com</p>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Address</p>
                                <p className="text-white font-medium">
                                   Tangail
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
