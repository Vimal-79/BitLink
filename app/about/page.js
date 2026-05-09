import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen relative px-4'>
      <img className='absolute z-[-1] top-0 w-full h-full object-cover' src="/background_2.webp" alt="Background" />
      <div className='flex flex-col gap-4 sm:gap-6 py-8 sm:py-10 mx-auto w-full max-w-4xl px-6 sm:px-10 rounded-lg border border-gray-400/40 backdrop-blur-2xl shadow-2xl bg-gray-600/20'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center">About BitLink</h1>
        <p className="text-base sm:text-lg text-gray-200 text-center leading-relaxed px-4">
          BitLink is a powerful and user-friendly URL shortener designed to make sharing links easier and more efficient.
          Whether you're a developer, marketer, or just someone who wants to share long URLs without cluttering your messages,
          BitLink has you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">Features</h2>
            <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
              <li>• Custom short URLs</li>
              <li>• Fast and reliable redirection</li>
              <li>• Secure link management</li>
              <li>• Easy-to-use interface</li>
              <li>• Copy to clipboard functionality</li>
            </ul>
          </div>
          <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">How It Works</h2>
            <ol className="text-gray-300 space-y-2 text-sm sm:text-base">
              <li>1. Enter your long URL</li>
              <li>2. Choose a custom short URL</li>
              <li>3. Click Generate</li>
              <li>4. Share your shortened link</li>
            </ol>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            Built with modern web technologies including Next.js, MongoDB, and Tailwind CSS.
          </p>
          <a href="/shorten" className="inline-block bg-purple-800 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base">
            Start Shortening URLs
          </a>
        </div>
      </div>
    </div>
  )
}

export default page
