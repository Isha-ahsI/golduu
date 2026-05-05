import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { cn } from '../../lib/utils';

// navlink component
export const Navlink = ({ word1, word2, to, className, onActiveChange }) => {
    const [hovered, setHovered] = useState(false);

    const letters1 = word1.split("");
    const letters2 = word2.split("");

    const maxLength = Math.max(letters1.length, letters2.length);

    const padded1 = [...letters1, ...Array(maxLength - letters1.length).fill("")];
    const padded2 = [...letters2, ...Array(maxLength - letters2.length).fill("")];
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                const customActive =
                    to === "/home"
                        ? location.pathname === "/" ||
                        location.pathname === "/home"
                        : isActive;

                return cn(
                    "text-gold-300 text-lg font-medium transition-all duration-500 hover:text-gold",
                    customActive && "text-gold"
                );
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {padded1.map((letter, index) => (
                <span
                    key={index}
                    className={cn(
                        "inline-block transition-all duration-300 text-center",
                        "transform",
                        hovered ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    )}
                    style={{ transitionDelay: `${index * 25}ms` }}
                >
                    {letter}
                </span>
            ))}
            <span
                className="absolute inset-0 flex justify-center items-center"
            >
                {padded2.map((letter, index) => (
                    <span
                        key={index}
                        className={cn(
                            "inline-block transition-all duration-300",
                            "transform",
                            hovered ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                        )}
                        style={{ transitionDelay: `${index * 25}ms` }}
                    >
                        {letter}
                    </span>
                ))}
            </span>
        </NavLink>
    );
}
