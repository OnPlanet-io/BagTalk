// app/page.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BagTalk — Coming Soon</title>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Montserrat:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="relative flex items-center justify-center min-h-screen bg-[var(--bg-color)] font-poppins overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,200,83,0.1)] to-transparent opacity-70" />

        <section className="relative z-10 flex flex-col items-center text-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 max-w-2xl mx-auto">
          {/* Logo */}
          <img
            src="/logos/BAGTALK-01.png"
            alt="BagTalk Logo"
            className="sm:w-60 lg:w-128 lg:-mt-16 "
          />

          {/* Headline */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] mb-8 lg:-mt-20 sm:-mt-20"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Join our community.
            {/* Get Ready for{' '}
            <strong className="text-[var(--brand-green)]">BagTalk</strong>! */}
          </h1>

          {/* Tagline */}
          {/* <p className="text-base sm:text-lg md:text-xl text-[var(--text-light)] mb-6 sm:mb-8 md:mb-10 px-2">
            Join our community.
          </p> */}

          {/* Signup Form */}
          <form
            action="https://formspree.io/f/xldnjyoz"
            method="POST"
            className="flex flex-col sm:flex-row justify-center gap-4 w-full px-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              aria-label="Your email address"
              className="w-full sm:flex-1 px-4 py-2 text-lg text-[var(--text-dark)] border-2 border-gray-300 rounded-lg focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[rgba(0,200,83,0.2)] transition"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[var(--brand-green)] text-white text-lg font-semibold rounded-lg transform transition hover:bg-[var(--brand-green-hover)] hover:-translate-y-1 active:translate-y-0"
            >
              Request Access
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6 sm:mt-8">
            <a
              href="https://x.com/bagtalktown"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BagTalk on X"
              className="transition-transform duration-200 hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 fill-[var(--brand-green)]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.643 4.937a9.658 9.658 0 01-2.828.775 4.93 4.93 0 002.164-2.723 
               9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.945 
               13.945 0 011.671 3.149a4.916 4.916 0 001.523 6.565 4.897 4.897 
               0 01-2.229-.616v.062a4.918 4.918 0 003.946 4.827 4.902 4.902 
               0 01-2.224.085 4.918 4.918 0 004.59 3.417 9.867 9.867 0 
               01-6.102 2.104c-.396 0-.787-.023-1.17-.068a13.945 13.945 0 
               007.557 2.212c9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-
               .425-.014-.636A10.012 10.012 0 0024 4.59a9.722 9.722 0 
               01-2.357.647z" />
              </svg>
            </a>
            {/* add more icons here as needed */}
          </div>

          {/* Footer */}
          <footer className="mt-8 sm:mt-10 text-sm text-[var(--text-light)]">
            &copy; {new Date().getFullYear()}{' '}
            <span className="font-semibold">BagTalk</span>. All rights
            reserved.
          </footer>
        </section >
      </div >
    </>
  )
}