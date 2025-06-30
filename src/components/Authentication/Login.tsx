"use client"

import type React from "react"
import { useState } from "react"
import { EyeSlashDuotoneDark, EyeDuotoneDark, Lock1BoldDark, UserBoldDark, ArrowRight1BoldDark, Lock1BoldLight, EyeSlashDuotoneLight, EyeDuotoneLight } from "../../../public/RootIcon/COCO/icons"
import { MailSendEnvelopeStreamlineFlex, MailSendEnvelopeStreamlineFlexLight } from "../../../public/RootIcon/SmoothIcons/icons"
import GradientButton from "../Buttons/GradientButton"
import MorphingButton from "../Buttons/MorphingButton"
import PulseHeartButton from "../Buttons/PulseHeartButton"
import ElectrifyButton from "../Buttons/NeonGlowButton"
import ThreeDTransformButton from "../Buttons/ThreeDTransformButton"
import RippleEffectButton from "../Buttons/RippleEffectButton"
import SlideTextButton from "../Buttons/SlideTextButton"



export default function AnimatedLogin() {
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 p-4">
            <div className="relative">
                {/* Animated background elements */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                {/* <div className="border-black border-2 p-1 rounded-3xl"> */}
                    <div className="relative bg-black/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 w-full max-w-md">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 animate-pulse">
                                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-stone-800 mb-2">{isLogin ? "Welcome Back" : "Create Account"}</h2>
                            <p className="text-stone-800/70">{isLogin ? "Sign in to your account" : "Join us today"}</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {!isLogin && (
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <UserBoldDark className="h-5 w-5 text-stone-800/50 group-focus-within:text-purple-400 transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                    />
                                </div>
                            )}

                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MailSendEnvelopeStreamlineFlexLight className="h-5 w-5 text-white/50 group-focus-within:text-purple-400 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                />
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock1BoldLight className="h-5 w-5 text-white/50 group-focus-within:text-purple-400 transition-colors" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeSlashDuotoneLight className="h-6 w-6 text-white/50 hover:text-white transition-colors" />
                                    ) : (
                                        <EyeDuotoneLight className="h-6 w-6 text-white/50 hover:text-white transition-colors" />
                                    )}
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full relative cursor-pointer overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                <span
                                    className={`flex items-center justify-center transition-all duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                                >
                                    {isLogin ? "Sign In" : "Create Account"}
                                    <ArrowRight1BoldDark className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {isLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    </div>
                                )}
                            </button>
                        </form>

                        {/* Toggle */}
                        <div className="mt-6 text-center">
                            <button onClick={() => setIsLogin(!isLogin)} className="text-black/70 cursor-pointer hover:text-black transition-colors">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <span className="text-purple-400 font-semibold">{isLogin ? "Sign Up" : "Sign In"}</span>
                            </button>
                        </div>
                                
                               <SlideTextButton UpperText={"Want SVG"} DownText={"There We Go"} />

                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}
