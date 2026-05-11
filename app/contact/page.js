"use client"
import React, { useState } from 'react'

function page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!name || !email || !message) {
      setStatus({ type: 'error', text: 'Please fill in all fields.' })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit feedback.')
      }

      setStatus({ type: 'success', text: result.message })
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setStatus({ type: 'error', text: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen relative px-4 py-1'>
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
                <strong>Instagram:</strong> <a href="https://www.instagram.com/thewolfcoder" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">thewolfcoder</a>
              </div>
              <div>
                <strong>GitHub:</strong> <a href="https://github.com/Vimal-79" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Vimal-79</a>
              </div>
              <div>
                <strong>X:</strong> <a href="https://x.com/Vimal_764" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Vimal_764</a>
              </div>
              <div>
                <strong>Response Time:</strong> We aim to respond within 24-48 hours.
              </div>
            </div>
          </div>
          <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 ">Send a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full px-3 py-2 bg-gray-600/50 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full px-3 py-2 bg-gray-600/50 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-600/50 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-2 px-4 rounded-md transition-colors ${isSubmitting ? 'bg-purple-600 cursor-not-allowed' : 'bg-purple-800 hover:bg-purple-700 cursor-pointer'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        {status && (
          <div className={`text-center text-sm ${status.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
            {status.text}
          </div>
        )}
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