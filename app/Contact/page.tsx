'use client'
import React from 'react'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { RollLink } from '@/components/RollLink'

function page() {
  return (
    <main className='h-full'>
    <NavBar/>
    <Navigation/>
    <div className='flex flex-col justify-between h-[70vh]'>
    <div className='md:px-16 sm:px-12 px-4 pb-8 font-ppNeueMontreal flex flex-col gap-4'>
        <h1 className='  md:text-5xl sm:text-4xl text-3xl'>
            Get in Touch
        </h1>
        <p className=''>
            For new project inquiries, you can reach us by filling out the form below.
        </p>
    </div>
    <div className='flex md:flex-row flex-col justify-between md:px-16 sm:px-12 px-4'>
      <Form/>
      <div className='flex gap-12 flex-col'>
          <div className='flex flex-col items-end gap-2 justify-end  sm:text-md text-sm font-ppNeueMontreal'>
            <RollLink  href="https://www.instagram.com/modernwalls.pk/" >
                {"Instagram"}
            </RollLink>
            <RollLink href="https://www.tiktok.com/@modernwall.pk" >
                {"Tiktok"}
            </RollLink>
          </div>
          <h1 className='md:text-4xl sm:text-5xl text-3xl mix-blend-difference self-end pl-8'>
              moderwalls@gmail.com
          </h1>
          <div className='flex flex-col items-end gap-2 justify-end  sm:text-md text-sm font-ppNeueMontreal'>
              <p>We welcome your inquiries by DM or e-mail</p>
          </div>
      </div>
    </div>
    </div>
    </main>
  )
}


function Form() {
    return (
        <div className="contact-form-container font-ppNeueMontreal  flex-1">
      <h2 className="text-3xl mb-4 ">Contact</h2>
      <form className="flex flex-col gap-2 ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <input
          type="tel"
          name="number"
          placeholder="Number"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-4 w-fit px-4 border border-black hover:bg-black hover:text-white transition-all focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
    )
}

export default page