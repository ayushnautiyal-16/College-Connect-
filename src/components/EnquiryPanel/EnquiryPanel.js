"use client";

import React, { useState } from "react";
import { X } from "lucide-react";


const [isOpen, setIsOpen] = useState(false);
const [selectedCourse, setSelectedCourse] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    let course = formData.get("course");
    let otherCourse = "";
    let otherCollege = "";
    if (course === "Other") {
        otherCourse = formData.get("customCourse") || "Other";
        otherCollege = formData.get("customCollege") || "";
    }

    const data = {
        name: formData.get("fullName"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        course,
        otherCourse,
        otherCollege,
    };

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.success) {
            setSubmitStatus("success");
        } else {
            setSubmitStatus("error");
            console.error("Form submission failed:", result.message || result);
        }
    } catch (error) {
        setSubmitStatus("error");
        console.error("Form submission error:", error);
    } finally {
        setIsSubmitting(false);
    }
};

return (
    <>
        {/* 1️⃣ LEFT SIDE VERTICAL BUTTON (Visible when panel is closed) */}
        <div
            className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 ${isOpen ? "-translate-x-full" : "translate-x-0"}`}
        >
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center bg-blue-600 hover:bg-green-500 text-white font-semibold py-6 px-2 rounded-r-lg shadow-md transition-all duration-300 hover:shadow-lg group"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                aria-label="Enquire Now"
            >
                <span className="rotate-180 tracking-widest text-xs whitespace-nowrap group-hover:tracking-wider transition-all">
                    ENQUIRE NOW
                </span>
            </button>
        </div>

        {/* 2️⃣ OVERLAY BACKGROUND */}
        <div
            className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
        />

        {/* 3️⃣ FLOATING COMPACT PANEL */}
        <div
            className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 
                    w-[90%] md:w-[340px] max-h-[85vh] md:max-h-[480px] 
                    bg-white rounded-r-2xl shadow-2xl 
                    transform transition-transform duration-300 ease-in-out 
                    overflow-y-auto aspect-[3/4] md:aspect-auto
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            {/* Close Button */}
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors z-10"
                aria-label="Close"
            >
                <X className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <div className="p-6 h-full flex flex-col">
                {isSubmitting ? (
                    <div className="flex flex-col items-center justify-center flex-grow">
                        <svg className="animate-spin h-10 w-10 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                        <div className="text-blue-600 font-semibold">Submitting...</div>
                    </div>
                ) : submitStatus === "success" ? (
                    <div className="flex flex-col items-center justify-center flex-grow">
                        <svg className="h-12 w-12 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <div className="text-green-600 text-xl font-bold mb-2">Thank you!</div>
                        <div className="text-gray-700 text-center">Your enquiry has been submitted.<br />We will contact you soon.</div>
                        <button
                            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                            onClick={() => {
                                setIsOpen(false);
                                setSelectedCourse("");
                                setSubmitStatus(null);
                            }}
                        >Close</button>
                    </div>
                ) : (
                    <>
                        <div className="mb-4 text-center">
                            <h3 className="text-lg font-bold text-gray-800">Submit Your Enquiry</h3>
                            <p className="text-xs text-gray-500 mt-1 leading-tight">We'll get back to you shortly.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow justify-center">
                            {/* Full Name */}
                            <div>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-gray-400 bg-gray-50"
                                    placeholder="Full Name"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    pattern="[0-9]{10}"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-gray-400 bg-gray-50"
                                    placeholder="Phone Number"
                                />
                            </div>

                            {/* Email (optional) */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-gray-400 bg-gray-50"
                                    placeholder="Email (optional)"
                                />
                            </div>

                            {/* Course Selection */}
                            <div className="relative">
                                <select
                                    required
                                    name="course"
                                    value={selectedCourse}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-gray-50 text-gray-700"
                                >
                                    <option value="">Select Course</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="MBA">MBA</option>
                                    <option value="BBA">BBA</option>
                                    <option value="BCA">BCA</option>
                                    <option value="Medical">Medical</option>
                                    <option value="Law">Law</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>

                            {/* Conditional Other Input */}
                            {selectedCourse === "Other" && (
                                <>
                                    <div className="animate-fade-in-up mb-2">
                                        <input
                                            type="text"
                                            name="customCourse"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-gray-400 bg-gray-50"
                                            placeholder="Specify Course"
                                        />
                                    </div>
                                    <div className="animate-fade-in-up">
                                        <input
                                            type="text"
                                            name="customCollege"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-gray-400 bg-gray-50"
                                            placeholder="Enter College Name"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                                disabled={isSubmitting}
                            >
                                Submit
                            </button>
                        </form>
                        {/* Submission Status */}
                        {submitStatus === "error" && (
                            <div className="text-red-600 text-center mt-2">Submission failed. Please try again.</div>
                        )}
                    </>
                )}
            </div>
        </div>
    </>
);
