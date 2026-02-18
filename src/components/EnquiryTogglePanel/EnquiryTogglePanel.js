"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function EnquiryTogglePanel() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            alert("Enquiry Submitted!");
            setIsOpen(false);
        }, 500);
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
                    <X className="rotate-90 text-white w-4 h-4 mb-2" /> // Rotate X to match vertical orientation
                ) : (
                    <span className="rotate-180 tracking-widest whitespace-nowrap group-hover:tracking-wider transition-all">
                        ENQUIRE NOW
                    </span>
                )}
            </button>

            {/* 2️⃣ SLIDING FORM PANEL */}
            <div
                className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 
          w-[340px] max-h-[480px] 
          bg-white rounded-r-2xl shadow-xl p-6 overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="h-full flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">Submit Your Enquiry</h3>
                    <p className="text-xs text-gray-500 text-center mb-6">We'll get back to you shortly.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                required
                                placeholder="Full Name"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-gray-50"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <input
                                type="tel"
                                required
                                pattern="[0-9]{10}"
                                placeholder="Phone Number"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-gray-50"
                            />
                        </div>

                        {/* Course */}
                        <div>
                            <select
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow bg-gray-50 text-gray-700"
                            >
                                <option value="">Select Course</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="MBA">MBA</option>
                                <option value="BBA">BBA</option>
                                <option value="Medical">Medical</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Overlay for closing when clicking outside? User didn't ask for overlay, but it's good UX.
          "No full-screen modal" implies maybe no overlay? 
          "Button must move together with form". 
          I'll skip overlay to strictly follow "No full-screen modal".
       */}
        </>
    );
}
