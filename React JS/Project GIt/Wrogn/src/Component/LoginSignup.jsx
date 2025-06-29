import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen z-50 relative bg-white flex items-center justify-center px-4">
                <div className=" relative bg-white z-0 p-8 rounded-xl shadow-2xl w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        {isLogin ? "Login to WROGN" : "Create your Account"}
                    </h2>

                    <form className="space-y-4">
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </motion.button>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <span
                            className="text-purple-600 font-semibold cursor-pointer"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </span>
                    </p>
                </div>
        </div >
    );
};

export default LoginSignup;
