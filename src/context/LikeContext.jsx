import React, { createContext,  useContext, useState } from 'react'

// like context
const LikeContext = createContext();

export const LikeProvide = ({ children }) => {
    const [like, setLike] = useState({});

    const handleLike = (index) => {
        setLike((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };
    return (
        <LikeContext.Provider value={{
            like,
            setLike,
            handleLike
        }}>
            {children}
        </LikeContext.Provider>
    )
}

export const useLike = () => useContext(LikeContext);