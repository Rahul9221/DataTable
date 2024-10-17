import React from 'react';

const StudentRegistrationForm = ({ handleForm, handleSubmit }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-10">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 my-5">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Student Registration</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg  "
                            placeholder="Full Name"
                            onChange={handleForm} 
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            placeholder="Email Address"
                            onChange={handleForm} 
                        />
                    </div>


                    {/* Course Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course</label>
                        <input
                            type="text"
                            name="course"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            placeholder="Course Name"
                            onChange={handleForm} 
                        />
                    </div>

    
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-black text-white font-bold "
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentRegistrationForm;
