"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

/**
 * CustomDropdown — Premium, animated, searchable dropdown.
 * • Always drops DOWN on desktop
 * • Opens as a bottom-sheet overlay on mobile (< 640px)
 * • Smooth scroll, search filter, keyboard navigation
 */
export default function CustomDropdown({
    options = [],
    value = "",
    onChange,
    placeholder = "Select an option",
    name,
    required = false,
    error = false,
    variant = "light",
    icon = null,
    searchable,
    maxHeight = 260,
    className = "",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const listRef = useRef(null);
    const searchInputRef = useRef(null);

    const showSearch = searchable !== undefined ? searchable : options.length > 8;

    const filtered = search
        ? options.filter((o) =>
              o.toLowerCase().includes(search.toLowerCase())
          )
        : options;

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Close on outside click (desktop only)
    useEffect(() => {
        if (isMobile) return;
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                closeDropdown();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobile]);

    // Lock body scroll on mobile when open
    useEffect(() => {
        if (isMobile && isOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "";
            };
        }
    }, [isMobile, isOpen]);

    // Focus search when opened
    useEffect(() => {
        if (isOpen && showSearch) {
            setTimeout(() => searchInputRef.current?.focus(), 120);
        }
    }, [isOpen, showSearch]);

    // Scroll highlighted item into view
    useEffect(() => {
        if (highlightIndex >= 0 && listRef.current) {
            const items = listRef.current.querySelectorAll("[data-option]");
            if (items[highlightIndex]) {
                items[highlightIndex].scrollIntoView({ block: "nearest" });
            }
        }
    }, [highlightIndex]);

    const closeDropdown = useCallback(() => {
        setIsOpen(false);
        setSearch("");
        setHighlightIndex(-1);
    }, []);

    const handleToggle = useCallback(() => {
        setIsOpen((prev) => {
            if (prev) {
                setSearch("");
                setHighlightIndex(-1);
            }
            return !prev;
        });
    }, []);

    const handleSelect = useCallback(
        (opt) => {
            onChange(opt);
            closeDropdown();
        },
        [onChange, closeDropdown]
    );

    const handleKeyDown = useCallback(
        (e) => {
            if (!isOpen) {
                if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                    e.preventDefault();
                    setIsOpen(true);
                }
                return;
            }

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    setHighlightIndex((prev) =>
                        prev < filtered.length - 1 ? prev + 1 : 0
                    );
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setHighlightIndex((prev) =>
                        prev > 0 ? prev - 1 : filtered.length - 1
                    );
                    break;
                case "Enter":
                    e.preventDefault();
                    if (highlightIndex >= 0 && filtered[highlightIndex]) {
                        handleSelect(filtered[highlightIndex]);
                    }
                    break;
                case "Escape":
                    e.preventDefault();
                    closeDropdown();
                    break;
                default:
                    break;
            }
        },
        [isOpen, filtered, highlightIndex, handleSelect, closeDropdown]
    );

    const isDark = variant === "dark";

    // Style tokens
    const styles = {
        trigger: isDark
            ? `bg-[#0b1b2b] border-white/10 text-white hover:bg-[#132840] focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-500/10 ${error ? "border-red-400/50" : ""}`
            : `bg-white border-blue-100 text-slate-700 hover:border-blue-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 ${error ? "border-red-300 focus-within:border-red-400 focus-within:ring-red-100" : ""}`,
        dropdown: isDark
            ? "bg-[#0f2238] border-white/10 shadow-2xl shadow-black/50"
            : "bg-white border-gray-200 shadow-2xl shadow-indigo-100/40",
        item: isDark
            ? "text-gray-300 hover:bg-indigo-500/15 hover:text-white"
            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700",
        itemActive: isDark
            ? "bg-indigo-500/20 text-indigo-300"
            : "bg-indigo-50 text-indigo-700",
        itemHighlight: isDark
            ? "bg-white/10"
            : "bg-blue-50",
        search: isDark
            ? "bg-[#0b1b2b] border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-400"
            : "bg-gray-50 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:border-indigo-400",
        placeholder: isDark ? "text-gray-500" : "text-gray-400",
        chevron: isDark ? "text-gray-400" : "text-gray-400",
        checkmark: isDark ? "text-cyan-400" : "text-indigo-600",
        noResult: isDark ? "text-gray-500" : "text-gray-400",
    };

    // ─── Shared list content (used in both desktop dropdown & mobile bottom sheet) ───
    const renderSearch = () =>
        showSearch && (
            <div className={`p-2.5 sm:p-2 border-b ${isDark ? "border-white/10" : "border-gray-100"}`}>
                <div className="relative">
                    <svg
                        className={`absolute left-3 sm:left-2.5 top-1/2 -translate-y-1/2 w-4 sm:w-3.5 h-4 sm:h-3.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        ref={searchInputRef}
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setHighlightIndex(-1);
                        }}
                        placeholder="Type to search..."
                        className={`
                            w-full pl-9 sm:pl-8 pr-3 py-2.5 sm:py-2 text-sm sm:text-xs rounded-lg border outline-none
                            transition-colors duration-200
                            ${styles.search}
                        `}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            </div>
        );

    const renderOptions = (mobileMode = false) => (
        <ul
            ref={listRef}
            className="overflow-y-auto overscroll-contain custom-dropdown-scroll"
            style={{ maxHeight: mobileMode ? "50vh" : `${maxHeight}px` }}
        >
            {filtered.length === 0 ? (
                <li className={`px-4 py-8 sm:py-6 text-center text-sm sm:text-xs ${styles.noResult}`}>
                    <svg className="w-8 sm:w-6 h-8 sm:h-6 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    No results found
                </li>
            ) : (
                filtered.map((opt, idx) => {
                    const isSelected = opt === value;
                    const isHighlighted = idx === highlightIndex;
                    return (
                        <li
                            key={opt}
                            data-option
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => handleSelect(opt)}
                            className={`
                                flex items-center gap-3 sm:gap-2.5 px-4 sm:px-3.5 py-3.5 sm:py-2.5 cursor-pointer
                                text-sm sm:text-[13px] font-medium transition-all duration-150
                                ${isSelected ? styles.itemActive : styles.item}
                                ${isHighlighted && !isSelected ? styles.itemHighlight : ""}
                                active:scale-[0.98]
                            `}
                        >
                            {/* Checkmark indicator */}
                            <span className={`w-5 sm:w-4 h-5 sm:h-4 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200 ${
                                isSelected
                                    ? `${isDark ? "bg-cyan-500/20" : "bg-indigo-100"}`
                                    : "opacity-0"
                            }`}>
                                {isSelected && (
                                    <svg
                                        className={`w-3.5 sm:w-3 h-3.5 sm:h-3 ${styles.checkmark}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </span>
                            <span className="truncate">{opt}</span>
                        </li>
                    );
                })
            )}
        </ul>
    );

    const renderFooter = () =>
        showSearch && filtered.length > 0 && (
            <div className={`px-3 py-2 sm:py-1.5 text-[11px] sm:text-[10px] font-medium border-t ${
                isDark
                    ? "border-white/5 text-gray-600 bg-[#0a1628]"
                    : "border-gray-100 text-gray-400 bg-gray-50/50"
            }`}>
                {filtered.length} option{filtered.length !== 1 ? "s" : ""}
                {search && ` matching "${search}"`}
            </div>
        );

    // ─── Mobile Bottom Sheet (Portal) ────────────────────────────────────
    const renderMobileSheet = () => {
        if (typeof document === "undefined") return null;
        return createPortal(
            <div
                className="fixed inset-0 z-[9999] flex flex-col justify-end"
                onClick={closeDropdown}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    style={{ animation: "ddFadeIn 0.2s ease-out" }}
                />

                {/* Sheet */}
                <div
                    className={`relative rounded-t-2xl overflow-hidden border-t ${styles.dropdown}`}
                    style={{ animation: "ddSheetUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Drag handle */}
                    <div className="flex justify-center pt-3 pb-2">
                        <div className={`w-10 h-1 rounded-full ${isDark ? "bg-white/20" : "bg-gray-300"}`} />
                    </div>

                    {/* Header */}
                    <div className={`px-4 pb-2 flex items-center justify-between`}>
                        <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                            {placeholder}
                        </span>
                        <button
                            type="button"
                            onClick={closeDropdown}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                isDark ? "hover:bg-white/10 text-gray-400" : "hover:bg-gray-100 text-gray-500"
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {renderSearch()}
                    {renderOptions(true)}
                    {renderFooter()}

                    {/* Safe area bottom padding for iOS */}
                    <div className="h-[env(safe-area-inset-bottom,0px)]" />
                </div>
            </div>,
            document.body
        );
    };

    // ─── Desktop Dropdown (absolute positioned, always drops DOWN) ────────
    const renderDesktopDropdown = () => (
        <div
            className={`
                absolute left-0 right-0 z-50 border rounded-xl overflow-hidden
                top-full mt-1.5
                ${styles.dropdown}
            `}
            style={{
                animation: "ddSlideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            role="listbox"
        >
            {renderSearch()}
            {renderOptions(false)}
            {renderFooter()}
        </div>
    );

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            onKeyDown={handleKeyDown}
        >
            {/* Hidden input for form submission */}
            {name && (
                <input type="hidden" name={name} value={value} />
            )}

            {/* Trigger Button */}
            <button
                type="button"
                onClick={handleToggle}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className={`
                    w-full flex items-center gap-2 border rounded-xl px-3 py-3 text-sm
                    cursor-pointer transition-all duration-200 outline-none
                    ${styles.trigger}
                `}
            >
                {icon && (
                    <span className="flex-shrink-0 opacity-60">{icon}</span>
                )}
                <span
                    className={`flex-1 text-left truncate font-medium ${
                        !value ? styles.placeholder : ""
                    }`}
                >
                    {value || placeholder}
                </span>
                <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    } ${styles.chevron}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown / Bottom Sheet */}
            {isOpen && (isMobile ? renderMobileSheet() : renderDesktopDropdown())}

            {/* Scoped styles */}
            <style jsx>{`
                @keyframes ddSlideDown {
                    from { opacity: 0; transform: translateY(-8px) scale(0.98); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes ddFadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes ddSheetUp {
                    from { opacity: 0; transform: translateY(100%); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .custom-dropdown-scroll::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-dropdown-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-dropdown-scroll::-webkit-scrollbar-thumb {
                    background: ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.12)"};
                    border-radius: 10px;
                }
                .custom-dropdown-scroll::-webkit-scrollbar-thumb:hover {
                    background: ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"};
                }
            `}</style>
        </div>
    );
}
