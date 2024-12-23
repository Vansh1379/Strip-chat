import React from 'react'

const Header: React.FC = () => {
    return (
        <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 font-serif">
                STRIP CHAT
            </h1>
            <p className="text-xl mb-8 text-indigo-200 font-serif">
                Where secrets are safe and conversations disappear
            </p>
        </div>
    )
}

export default Header

