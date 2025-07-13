// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Navbar() {
//   const location = useLocation();
//   return (
//     <nav className="w-full bg-white shadow">
//       <ul className="flex justify-end items-center space-x-8 p-4">
//         <li>
//           <Link
//             to="/"
//             className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600 font-semibold' : ''}`}
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/Models"
//             className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/Models' ? 'text-blue-600 font-semibold' : ''}`}
//           >
//             Models
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/services"
//             className={`text-gray-700 hover:text-blue-600 ${location.pathname === '/services' ? 'text-blue-600 font-semibold' : ''}`}
//           >
//             Why Choose us
//           </Link>
//         </li>
//         <li className="border-r border-gray-300 pr-4">
//           <Link
//             to="/agent"
//             className={`border-2 border-blue-500 rounded-lg px-6 py-2 ml-2 text-lg font-bold hover:text-white hover:bg-blue-500 transition-colors ${location.pathname === '/agent' ? 'text-white bg-blue-500' : 'text-blue-600'}`}
//           >
//             Spent to an agent
//           </Link>
//         </li>
//         <li className="border-2 border-blue-500 rounded-lg px-6 py-2 ml-2" style={{ backgroundColor: '#48545f' }}>
//           <Link
//             to="/test-drive"
//             className={`text-white text-lg font-bold hover:text-blue-200 ${location.pathname === '/test-drive' ? 'ring-2 ring-blue-300' : ''}`}
//           >
//             Book a test drive
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const models = [
        { name: 'E 07', brand: 'DEEPAL', color: 'text-gray-600' },
        { name: 'S 07', brand: 'DEEPAL', color: 'text-blue-600' },
        { name: 'L 07', brand: 'DEEPAL', color: 'text-blue-600' },
        { name: 'Lumin', brand: 'CHANGAN', color: 'text-green-600' }
    ];

    return (
        <nav className="bg-white shadow-sm flex justify-end">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end items-start h-16">
                    <div className="hidden md:block ml-auto">
                        <div className="flex flex-row items-start space-x-6 py-2 pr-2">
                            <Link
                                to="/"
                                className={`px-4 py-2 mx-1 rounded transition-colors text-gray-700 hover:text-blue-600 ${location.pathname === '/' ? 'bg-blue-100 text-blue-700 font-bold' : ''}`}
                            >
                                Home
                            </Link>
                            {/* Models Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className={`px-4 py-2 mx-1 rounded transition-colors text-gray-700 hover:text-blue-600 flex items-center ${location.pathname.startsWith('/Models') ? 'bg-blue-100 text-blue-700 font-bold' : ''}`}
                                >
                                    Models
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-auto bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                        <div className="flex flex-row gap-2 px-4 py-2">
                                            {models.map((model, index) => (
                                                <Link
                                                    key={index}
                                                    to={`/Models/${model.name.replace(' ', '')}`}
                                                    className={`flex flex-col items-center px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${model.color}`}
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    <span className="text-xs text-gray-500 mb-1">{model.brand}</span>
                                                    <span className={`text-sm font-medium ${model.color}`}>{model.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link
                                to="/services"
                                className={`px-4 py-2 mx-1 rounded transition-colors text-gray-700 hover:text-blue-600 ${location.pathname === '/services' ? 'bg-blue-100 text-blue-700 font-bold' : ''}`}
                            >
                                Why Choose us
                            </Link>
                            <Link
                                to="/agent"
                                className={`border-r border-gray-300 pr-4 border-2 border-blue-500 rounded-lg px-6 py-2 ml-2 text-lg font-bold hover:text-white hover:bg-blue-500 transition-colors ${location.pathname === '/agent' ? 'text-white bg-blue-500' : 'text-blue-600'}`}
                            >
                                Spent to an agent
                            </Link>
                            <Link
                                to="/test-drive"
                                className={`border-2 border-blue-500 rounded-lg px-6 py-2 ml-2 text-white text-lg font-bold hover:text-blue-200 ${location.pathname === '/test-drive' ? 'ring-2 ring-blue-300' : ''}`}
                                style={{ backgroundColor: '#48545f' }}
                            >
                                Book a test drive
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-gray-900 p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;