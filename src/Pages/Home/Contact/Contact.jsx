import { useFormik } from "formik";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
    const formik = useFormik({ onSubmit: (values, { resetForm }) => { resetForm();
        },
    });

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#0F0A1F] text-white">
            {/* Contact Form Section */}
            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <form onSubmit={formik.handleSubmit} className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-lg">
                    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
                        Contact Us
                    </h2>

                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
                            {...formik.getFieldProps("name")}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
                            {...formik.getFieldProps("email")}
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-1">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
                            {...formik.getFieldProps("message")}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition-all">
                        Submit
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
                                <p className="text-white font-medium">+01 123 654 8096</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <p className="text-white font-medium">gerolddesign@mail.com</p>
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
                                    Warne Park Street Pine,
                                    <br />
                                    FL 33157, New York
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