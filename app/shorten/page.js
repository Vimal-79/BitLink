"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'


function Page() {

    const [mounted, setmounted] = useState(false)
    const [url, seturl] = useState('')
    const [shortURL, setshortURL] = useState('')
    const [generatedURL, setgeneratedURL] = useState('')
    const [redirectTo, setredirectTo] = useState('')

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shortURL": shortURL
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions).then((response) => response.json()).then((result) => {
            // console.log(result)
            if (result.success) {
                seturl('')
                setshortURL('')
                setgeneratedURL(`${process.env.NEXT_PUBLIC_BASE_PATH}/${shortURL}`)
                setredirectTo(shortURL) // redirecting to shortURL dynamic page so it can be redirect ro original URL
                toast.success('Url generated successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else {
                setgeneratedURL('already exists')
            }
        }).catch((error) => console.error(error));
    }

    const handleClick = async () => {
        // console.log("button was clicked");
        if (url && shortURL) {
            generate();
        }
    }

    useEffect(() => {
        setmounted(true)
    }, [])


    if (mounted) {
        return (
            <>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <div className=' flex flex-col justify-center items-center h-130 relative'>
                    <img className='absolute z-[-1] top-0' src="background_2.webp" alt="" />
                    <div className='flex flex-col gap-3 py-10 mx-auto w-120 px-10 rounded-lg border border-gray-400/40 backdrop-blur-2xl shadow-2xl' >
                        <input onChange={(e) => { seturl(e.target.value) }} className='border-1 border-gray-100/60 rounded-md p-2 text-white w-full focus:outline-2 focus:outline-gray-50 bg-gray-400/10 placeholder:text-gray-100/50 ' name="url" type='text' placeholder='URL' value={url} />
                        <input onChange={(e) => { setshortURL(e.target.value) }} className='border-1 border-gray-100/60 rounded-md text-white p-2 w-full focus:outline-2 focus:outline-gray-50 bg-gray-400/10 placeholder:text-gray-100/50' name="shorUrl" type='text' placeholder='shorten URL' value={shortURL} />
                        <button onClick={handleClick} className='border-1 border-purple-900 rounded-lg text-white p-2 cursor-pointer font-semibold bg-purple-800 '>Generate</button>
                        {(generatedURL && generatedURL != 'already exists') && <>
                            <span className='underline text-white'>Generated link</span>
                            <span className='flex gap-3'>
                                <Link target='_blank' href={`/${redirectTo}`} className='text-green-400'>{generatedURL}</Link>
                                <svg onClick={(e) => {
                                    navigator.clipboard.writeText(generatedURL);
                                    toast.success('Copied to clipboard', {
                                        position: "top-right",
                                        autoClose: 3000,
                                        hideProgressBar: false,
                                        closeOnClick: false,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                    });
                                }} className='min-w-5 w-5 cursor-pointer' fill='#ffffff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M360 160L280 160C266.7 160 256 149.3 256 136C256 122.7 266.7 112 280 112L360 112C373.3 112 384 122.7 384 136C384 149.3 373.3 160 360 160zM360 208C397.1 208 427.6 180 431.6 144L448 144C456.8 144 464 151.2 464 160L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 160C176 151.2 183.2 144 192 144L208.4 144C212.4 180 242.9 208 280 208L360 208zM419.9 96C407 76.7 385 64 360 64L280 64C255 64 233 76.7 220.1 96L192 96C156.7 96 128 124.7 128 160L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 160C512 124.7 483.3 96 448 96L419.9 96z" /></svg>
                            </span>
                        </>}

                        {generatedURL === 'already exists' &&
                            <code className='text-red-600 '>{generatedURL}</code>
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default Page
