import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen relative px-4'>
      <img className='absolute z-[-1] top-0 w-full h-full object-cover' src="/background_2.webp" alt="Background" />
      <div className='flex flex-col gap-4 sm:gap-6 py-8 sm:py-10 mx-auto w-full max-w-4xl px-6 sm:px-10 rounded-lg border border-gray-400/40 backdrop-blur-2xl shadow-2xl bg-gray-600/20'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center">Contact Us</h1>
        <p className="text-base sm:text-lg text-gray-200 text-center leading-relaxed px-4">
          Have questions, feedback, or need support? We'd love to hear from you!
          Reach out to us through the channels below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">Get in Touch</h2>
            <div className="text-gray-300 space-y-3 text-sm sm:text-base">
              <div>
                <strong>Email:</strong> <a href="mailto:twilight.roger.dx@gmail.com" className="text-blue-400 hover:underline">twilight.roger.dx@gmail.com</a>
              </div>
              <div>
                <strong>GitHub:</strong> <a href="https://github.com/Vimal-79" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Vimal-79</a>
              </div>
              <div>
                <strong>Response Time:</strong> We aim to respond within 24-48 hours.
              </div>
            </div>
          </div>
          <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full px-3 py-2 bg-gray-600/50 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 bg-gray-600/50 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Message</label>
                <textarea rows="4" className="w-full px-3 py-2 bg-gray-600/50 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-200 text-sm sm:text-base">
            Thank you for using BitLink! Your feedback helps us improve.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page