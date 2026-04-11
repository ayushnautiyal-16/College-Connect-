"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { trackGoogleAdsFormConversion } from "@/lib/trackGoogleAdsConversion";

export default function EnquiryTogglePanel() {
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
                trackGoogleAdsFormConversion();
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
            {/* 1️⃣ MOVING BUTTON */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 
          bg-blue-600 hover:bg-green-500 text-white text-xs font-semibold 
          px-2 py-6 rounded-r-lg shadow-md transition-all duration-300 ease-in-out
          flex items-center justify-center group
          ${isOpen ? "translate-x-[340px]" : "translate-x-0"}`}
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                aria-label="Toggle Enquiry Form"
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    <X className="rotate-90 text-white w-4 h-4 mb-2" />
                ) : (
                    <span className="rotate-180 tracking-widest whitespace-nowrap group-hover:tracking-wider transition-all">
                        ENQUIRE NOW
                    </span>
                )}
            </button>

            {/* 2️⃣ SLIDING FORM PANEL */}
            <div
                className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 
          w-[90%] md:w-[340px] max-h-[85vh] md:max-h-[520px] 
          bg-white rounded-r-2xl shadow-xl p-6 overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="h-full flex flex-col">
                    {isSubmitting ? (
                        <div className="flex flex-col items-center justify-center flex-grow py-12">
                            <svg className="animate-spin h-10 w-10 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                            </svg>
                            <div className="text-blue-600 font-semibold">Submitting...</div>
                        </div>
                    ) : submitStatus === "success" ? (
                        <div className="flex flex-col items-center justify-center flex-grow py-12">
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
                            <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">Submit Your Enquiry</h3>
                            <p className="text-xs text-gray-500 text-center mb-6">We'll get back to you shortly.</p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                {/* Full Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        placeholder="Full Name"
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-gray-50 placeholder-gray-400"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        pattern="[0-9]{10}"
                                        placeholder="Phone Number"
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-gray-50 placeholder-gray-400"
                                    />
                                </div>

                                {/* Email (optional) */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email (optional)"
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-gray-50 placeholder-gray-400"
                                    />
                                </div>

                                {/* Course Selection */}
                                <div className="relative">
                                    <select
                                        required
                                        name="course"
                                        value={selectedCourse}
                                        onChange={(e) => setSelectedCourse(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-gray-50 text-gray-700"
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
                                        <div className="animate-fade-in-up">
                                            <input
                                                type="text"
                                                name="customCourse"
                                                required
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow placeholder-gray-400 bg-gray-50"
                                                placeholder="Specify Course"
                                            />
                                        </div>
                                        <div className="animate-fade-in-up">
                                            <input
                                                type="text"
                                                name="customCollege"
                                                required
                                                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow placeholder-gray-400 bg-gray-50"
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

                            {/* Submission Error */}
                            {submitStatus === "error" && (
                                <div className="text-red-600 text-center mt-3 text-sm">Submission failed. Please try again.</div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
