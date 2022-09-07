import React, { useState } from 'react'

const Input = ({className,onChange}:any) => {


  return (
    <div className={className}>
      <label htmlFor="name" className="ml-px block pl-4 text-sm font-medium text-gray-700">
        Name
      </label>
      <div className="mt-1">
        <input
          onChange={(event) => (onChange(event?.target.value))}
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-full border-gray-300 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Jane Smith"
        />
      </div>
    </div>
  )
}

export default Input