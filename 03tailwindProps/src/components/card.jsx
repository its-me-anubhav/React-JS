import React from 'react'

export function Card({username,ttltxt="visit me"}) {   //we can also use props then we will have to use props.username
    console.log(username)                             //here we have also used the default value of ttltxt
 
    return (
        <>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src="birdimage.jpg"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <button className="block text-sm font-medium font-mono tracking-widest uppercase text-black-400">
              {ttltxt}
            </button>
            <h2 className="text-xl font-semibold tracking-wide p-6">{username}</h2>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
          </p>
        </div>
        </>
    )
}
