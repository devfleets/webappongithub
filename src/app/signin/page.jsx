"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, firestore } from "@/firebase/firebase"; // Adjust the import path as necessar
// import { doc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState('admin');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

     const handleLogin = async (event) => {
        event.preventDefault();
        setError(null);

    //     try {
    //         const userCredential = await signInWithEmailAndPassword(
    //             auth,
    //             email,
    //             password
    //         );
    //         const user = userCredential.user;

    //         if (user.emailVerified) {
    //             //Retrieve user data from local storage
    //             const registrationData = localStorage.getItem("registrationData");
    //             const {
    //                 firstName = "",
    //                 lastName = "",
    //                 gender = "",
    //             } = registrationData ? JSON.parse(registrationData) : {};

    //             //Check if user data exists in Firestore
    //             const userDoc = await getDoc(doc(firestore, "users", user.uid));
    //             if (!userDoc.exists()) {
    //                 //Save user data to Firestore after email verification
    //                 await setDoc(doc(firestore, "users", user.uid), {
    //                     firstName,
    //                     lastName,
    //                     gender,
    //                     email: user.email,
    //                 });
    //             }
    //             router.push("/signup")
    //         } else {
    //             setError("Please verify your email before logging in.");
    //         }
    //     }
    //     catch (error) {
    //         if (error instanceof Error) {
    //             setError(error.message);
    //         } else {
    //             setError("An unknown error occurred");
    //         }
    //     }
     };
    return (
        <> <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <div className="flex justify-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-2xl">NM</span>
                            </div>
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to DevFleets
                        </h2>

                    </div>


                    <div className="mt-8 space-y-6">
                        {/* Role Selection */}
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={() => setRole('admin')}
                                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${role === 'admin'
                                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                                    }`}
                            >
                                <span className="text-sm font-medium">Admin</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('accountant')}
                                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${role === 'accountant'
                                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                                    }`}
                            >

                                <span className="text-sm font-medium">Accountant</span>
                            </button>
                        </div>
                      

               <form className="space-y-6" onSubmit={handleLogin}>
                           <div className="flex flex-col">
                                 <label htmlFor='email' className="text-sm font-medium text-gray-700 mb-1">
                                     Email Address <span className="text-red-500 ml-1">*</span>
                                 </label>
                                 <input
                                     id='email'
                                     type="email"
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                                    placeholder={role === 'admin' ? 'admin@devfleets.com' : 'accountant@devfleets.com'}
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
                                     placeholder="Enter your password"
                                     required
                                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm pr-12"
                            />
                            </div>


                            {error && (
                                 <div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-xl border border-red-200">
                                    {error}
                                </div>
                             )}


                            <button
                               type="submit"
                                disabled={isLoading}
                                className="w-full inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 px-6 py-3 text-base shadow-lg transform hover:scale-105"
                            >
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </button>

                             <p>Don&apos;t, have an account?{""}
                                 <Link href="/signup">
                                     Sign Up
                                 </Link>
                             </p>
                       </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signin;