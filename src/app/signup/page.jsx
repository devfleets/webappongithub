"use client"
import { useState } from "react";
 import { useRouter } from "next/navigation";
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { auth } from "@/firebase/firebase";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const router = useRouter();

    const handleRegister = async (event) => {
    //     event.preventDefault();
    //     setError(null);
    //     setMessage(null);

    //     if (password !== confirmPassword) {
    //         setError("Passwords do not match.");
    //         return;
    //     }
    //     try {
    //         const userCredential = await createUserWithEmailAndPassword(
    //             auth,
    //             email,
    //             password
    //         );
    //         const user = userCredential.user;

    //         await sendEmailVerification(user);

    //         //Temporarily store user data in local storage
    //         localStorage.setItem(
    //             "registrationData",
    //             JSON.stringify({
    //                 firstName,
    //                 lastName,
    //                 gender,
    //                 email,
    //             })
    //         );
    //         setMessage(
    //             "Registration successful. Please check your email for verification."
    //         );

    //         //clear form fields
    //         setFirstName("");
    //         setLastName("");
    //         setGender("");
    //         setEmail("");
    //         setPassword("");
    //         setConfirmPassword("");
    //     }
    //     catch (error) {
    //         if (error instanceof Error) {
    //             setError(error.message);
    //         }
    //         else {
    //             setError("An unknown error occurred.");
    //         }
    //     }
     };
    return (
        <>



            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
               <div className="max-w-md w-full space-y-8">
                    <div>
                        <div className="flex justify-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-2xl">NM</span>
                            </div>
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign up to DevFleets
                        </h2>
                    </div>

                    <div className="mt-8 space-y-6">

                        {/*     <form className="space-y-6" onSubmit={handleRegister}>
                            <div className="flex flex-col">
                                <label htmlFor='firstName' className="text-sm font-medium text-gray-700 mb-1">
                                    First Name <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='firstName'
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter your First Name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='lastName' className="text-sm font-medium text-gray-700 mb-1">
                                    Last Name <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='lastName'
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter your Last Name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor='gender' className="text-sm font-medium text-gray-700 mb-1">
                                    Gender <span className="text-red-500 ml-1">*</span>
                                </label>
                                <select
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium text-gray-700 mb-1">
                                    Email <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your Email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                            <div className="relative flex flex-col">
                                <label htmlFor='password' className="text-sm font-medium text-gray-700 mb-1">
                                    Password <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='password'
                                    type={'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your Current Password"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm pr-12"
                                />
                            </div>
                            <div className="relative flex flex-col">
                                <label htmlFor='confirmPassword' className="text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='confirmPassword'
                                    type={'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Enter your Confirm Password"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm pr-12"
                                />
                            </div>

                            {error && (
                                <div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-xl border border-red-200">
                                    {error}
                                </div>
                            )}
                            {message && (<div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-xl border border-red-200">
                                {message}
                            </div>)}

                            <button
                                type="submit"
                                // disabled={isLoading}
                                className="w-full inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 px-6 py-3 text-base shadow-lg transform hover:scale-105"
                            >
                                Sign Up {/* {isLoading ? 'Signing up...' : 'Sign up'} */}
                            {/* </button>
                        </form> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;