"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Skeleton from '../components/Skeleton'


function Page() {

    const [mounted, setmounted] = useState(false)
    const [url, seturl] = useState('')
    const [shortURL, setshortURL] = useState('')
    const [generatedURL, setgeneratedURL] = useState('')
    const [redirectTo, setredirectTo] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [validURL, setValidURL] = useState(false)

    const generate = async (cleanedShortURL) => {
        setisLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const shortURLToSend = cleanedShortURL ?? shortURL
        const raw = JSON.stringify({
            "url": url,
            "shortURL": shortURLToSend
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
                setgeneratedURL(`${process.env.NEXT_PUBLIC_BASE_PATH}/${shortURLToSend}`)
                setredirectTo(shortURLToSend) // redirecting to shortURL dynamic page so it can be redirect ro original URL
                toast.success('URL generated successfully', {
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
                toast.error('URL already exists', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setgeneratedURL('already exists')
            }
            setisLoading(false)
        }).catch((error) => {
            console.error(error)
            setisLoading(false)
        });
    }

    const validateShortURL = (input) => {
        const cleaned = input.replaceAll(' ', '').replaceAll('/', '_')
        if (cleaned !== input) {
            return { isValid: true, cleaned, message: 'Spaces and slashes will be removed automatically' }
        }
        return { isValid: true, cleaned: input, message: '' }
    }

    const handleClick = async (e) => {
        const validation = validateShortURL(shortURL)
        setshortURL(validation.cleaned)

        if (validation.message) {
            toast.info(validation.message, {
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

        if (url && validation.cleaned && !isLoading) {
            generate(validation.cleaned);
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
                <div className='flex flex-col justify-center items-center min-h-screen relative px-4'>
                    <img className='absolute z-[-1] top-0 w-full h-full object-cover' src="background_2.webp" alt="" onLoad={() => setImageLoaded(true)} />
                    {imageLoaded ? (
                        <div className='flex flex-col gap-3 py-8 sm:py-10 mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-120 px-6 sm:px-10 rounded-lg border border-gray-400/40 backdrop-blur-2xl shadow-2xl' >
                            <input onChange={(e) => { seturl(e.target.value) }} className='border-1 border-gray-100/60 rounded-md p-2 text-white w-full focus:outline-2 focus:outline-gray-50 bg-gray-400/10 placeholder:text-gray-100/50 ' name="url" type='text' placeholder='URL' value={url} />
                            <input onChange={(e) => { setshortURL(e.target.value) }} className='border-1 border-gray-100/60 rounded-md text-white p-2 w-full focus:outline-2 focus:outline-gray-50 bg-gray-400/10 placeholder:text-gray-100/50' name="shorUrl" type='text' placeholder='shorten URL' value={shortURL} />
                            <button
                                onClick={handleClick}
                                disabled={isLoading}
                                className={`border-1 border-purple-900 rounded-lg text-white p-2 font-semibold ${isLoading ? 'bg-purple-600 cursor-not-allowed opacity-70' : 'bg-purple-800 cursor-pointer'}`}
                            >
                                {isLoading ? 'Generating...' : 'Generate'}
                            </button>
                            {isLoading && (
                                <div className='flex flex-col gap-2'>
                                    <Skeleton className='h-4 w-32 bg-gray-500/50' />
                                    <div className='flex gap-3 items-center'>
                                        <Skeleton className='h-4 flex-1 bg-gray-500/50' />
                                        <Skeleton className='w-5 h-5 bg-gray-500/50' />
                                    </div>
                                </div>
                            )}
                            {(generatedURL && generatedURL != 'already exists') && <>
                                <span className='underline text-white'>Generated link</span>
                                <span className='flex gap-3'>
                                    <Link target='_blank' href={`/${redirectTo}`} className='text-[#00755E] font-medium'>{generatedURL}</Link>
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
                                    }} className='min-w-5 w-6 cursor-pointer hover:scale-125 hover:fill-green-400 transition ease-in-out ' fill='#ffffff'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 400L288 400C279.2 400 272 392.8 272 384L272 128C272 119.2 279.2 112 288 112L421.5 112C425.7 112 429.8 113.7 432.8 116.7L491.3 175.2C494.3 178.2 496 182.3 496 186.5L496 384C496 392.8 488.8 400 480 400zM288 448L480 448C515.3 448 544 419.3 544 384L544 186.5C544 169.5 537.3 153.2 525.3 141.2L466.7 82.7C454.7 70.7 438.5 64 421.5 64L288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L368 496L368 512C368 520.8 360.8 528 352 528L160 528C151.2 528 144 520.8 144 512L144 256C144 247.2 151.2 240 160 240L176 240L176 192L160 192z"/></svg>
                                </span>
                            </>}

                            {generatedURL === 'already exists' &&
                                <code className='text-red-600 '>{generatedURL}</code>
                            }

                        </div>
                    ) : (
                        <div className='flex flex-col gap-3 py-8 sm:py-10 mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-120 px-6 sm:px-10 rounded-lg border border-gray-400/40 backdrop-blur-2xl shadow-2xl'>
                            <Skeleton className='h-10 w-full bg-gray-500/50 rounded-md' />
                            <Skeleton className='h-10 w-full bg-gray-500/50 rounded-md' />
                            <Skeleton className='h-10 w-24 bg-gray-500/50 rounded-lg' />
                        </div>
                    )}
                </div>
            </>
        )
    }
}

export default Page
