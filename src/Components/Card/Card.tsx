import React from 'react'
import { PhoneIcon } from '@heroicons/react/solid'
import EnvelopeIcon from '../EnvelopeIcon/EnvelopeIcon'


const Card = ({user}:any) => {
    
    const {email,imageUrl,name,gender,national,phone} = user  
  return (
      <li
        key={email}
        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div className="flex flex-1 flex-col p-8">
          <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={imageUrl} alt="" />
          <h3 className="mt-6 text-sm font-medium text-gray-900">{name}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">gender</dt>
            <dd className="text-sm text-gray-500">{gender}</dd>
            <dt className="sr-only">National</dt>
            <dd className="mt-3">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {national}
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={`mailto:${email}`}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                <span className="ml-3">Email</span>
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={`tel:${phone}`}
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">Call</span>
              </a>
            </div>
          </div>
        </div>
      </li>
  )
}

export default Card