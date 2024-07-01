"use client"

// RegisterPage.jsx

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [creatingUser,setCreatingUser] = useState(false);
    const [userCreated,setUserCreated] = useState(false);
    const [error,setError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission

        setCreatingUser(true);
        setUserCreated(false);
        setError(false);

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to register");
            }
            setUserCreated(true);
        } catch (error) {
            console.error("Registration error:", error);   
            setUserCreated(false);
            setError(true)
        }

        setCreatingUser(false);
    }

    return (
        <section className='mt-8'>
            <h1 className='text-center text-4xl text-primary mb-4'>
                Register
            </h1>
            {
                userCreated && (
                    <div className='text-center my-4'>
                        User Created , <br />
                        Now you can <Link className='underline' href={"/login"}>Login....</Link>
                    </div>
                )
            }
            {
                error && (
                    <div className='my-4 text-center'>
                        Erroorrr , <br/>
                        Please try again later
                    </div>
                )
            }
            <form className='block max-w-xs mx-auto' onSubmit={handleSubmit}>
                <input disabled={creatingUser} type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                <input disabled={creatingUser} type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
                <button type='submit' disabled={creatingUser}>Register</button>
                <div className='my-4 text-center text-gray-500'>
                    or login with provider
                </div>
                <button className='flex items-center gap-3 p-2 justify-center'>
                    <Image src={'/google.png'} height={24} width={24} alt="" />
                    Login with Google
                </button>
                
            </form>
        </section>
    );
}
