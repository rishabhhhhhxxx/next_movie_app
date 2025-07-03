'use client';
import React from "react";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch.jsx"; // ⬅️ Make sure the path is correct

export default function Header() {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md">
      <header className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-amber-500 text-white text-2xl font-extrabold px-3 py-1 rounded-lg shadow-sm tracking-wide">
            MM
          </div>
          <span className="text-xl font-semibold text-gray-800 dark:text-gray-100 hidden sm:inline">
            MovieMeter
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav>
          <ul className="hidden sm:flex gap-6 text-lg font-medium text-gray-700 dark:text-gray-200">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Right: Dark Mode + Auth */}
        <div className="flex items-center gap-4">
          {/* ✅ Dark Mode Toggle */}
          <DarkModeSwitch />

          {/* Placeholder Sign-in */}
          <span className="text-sm sm:text-base text-blue-500 cursor-pointer hover:underline">
            Sign in
          </span>
        </div>
      </header>
    </div>
  );
}
