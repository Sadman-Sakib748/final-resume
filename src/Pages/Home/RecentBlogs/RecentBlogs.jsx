import { Calendar } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const RecentBlogs = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('/blogpost.json')
            .then(res => res.json())
            .then(data => {
                const updatedData = data.map(post => ({
                    ...post,
                    date: post.date || new Date().toISOString().split('T')[0]
                }));
                setCategory(updatedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="bg-[#0F0A1F] min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
                        Recent Blogs
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.map((post, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden bg-[#1A123D] hover:bg-[#251A4D] transition-colors duration-300">
                            <div className="relative h-48">
                                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                                <h2 className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-md">
                                    {post.category}
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-6 text-sm text-gray-400 mb-3">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </div>
                                    <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                                        Comment
                                    </button>
                                </div>
                                <h3 className="text-xl font-semibold text-white hover:text-purple-400 transition-colors cursor-pointer">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;
