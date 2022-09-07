import React from 'react'

const Button = ({children,className,onClick,disabled}:any) => {
  return (
    <button
        disabled={disabled}
        onClick={onClick}
        type="button"
        className={`px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      >
        {children}
    </button>
  )
}

export default Button