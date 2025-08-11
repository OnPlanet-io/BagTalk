'use client';

import React, { JSX, useEffect, useRef } from 'react';

// ===== Types =====
type Assets = {
    logo: string;
    slides: string[];
    verified: string;
};

// export const assets: Assets = {
//     logo: 'https://i.ibb.co/Z61hLZmD/BAGTALK-04.png',
//     slides: [
//         "https://i.ibb.co/LDxKLwwD/Screenshot-2025-08-11-at-4-30-11-PM.png",
//         'https://i.ibb.co/84gWR4PZ/slide1.png',
//         'https://i.ibb.co/PzPYYJnf/newslide.jpg',
//         'https://i.ibb.co/d4r8hZF4/Whats-App-Image-2025-08-11-at-16-41-20.jpg',
//     ],
//     verified: 'https://i.ibb.co/Z6v7FVY3/verified.png'
// };

const assets: Assets = {
    logo: '/images/BAGTALK-04.png',
    slides: [
        '/images/image2.png',
        '/images/image1.png',
        // '/images/slide1.png',
        // '/images/slide2.png',
        // '/images/slide3.png',
        // '/images/slide4.png',
    ],
    verified: '/images/verified.png'
};

const ACCENT = '#04990b';
const THEME_BG = '#F7F9FC';
const FONT_FAMILY = "'Inter', ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'";

export default function BagTalkLanding(): JSX.Element {
    const waitlistRef = useRef<HTMLDivElement | null>(null);
    const scrollToWaitlist = (): void => waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Smooth scroll for #anchors
    useEffect(() => {
        const prev = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = prev || 'auto';
        };
    }, []);

    // Set browser theme color & load Inter
    useEffect(() => {
        let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', 'theme-color');
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', THEME_BG);

        const id = 'gf-inter';
        if (!document.getElementById(id)) {
            const link1 = document.createElement('link');
            link1.rel = 'preconnect';
            link1.href = 'https://fonts.googleapis.com';
            document.head.appendChild(link1);
            const link2 = document.createElement('link');
            link2.rel = 'preconnect';
            link2.href = 'https://fonts.gstatic.com';
            (link2 as HTMLLinkElement).crossOrigin = '';
            document.head.appendChild(link2);
            const link3 = document.createElement('link');
            link3.id = id;
            link3.rel = 'stylesheet';
            link3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
            document.head.appendChild(link3);
        }
    }, []);

    return (
        <div id="top" className="min-h-screen text-slate-900" style={{ background: THEME_BG, fontFamily: FONT_FAMILY }}>
            <AnimatedMesh />

            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-900/5">
                <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 flex items-center justify-between">
                    <a href="#top" className="flex items-center gap-3 rounded-md focus:outline-none focus:ring-2" aria-label="BagTalk — Back to top" style={{ outlineColor: ACCENT }}>

                        <div className="w-36 h-8 flex items-center justify-center md:w-50 md:h-10">
                            <img
                                src={assets.logo}
                                alt="BagTalk logo"
                                className="w-full object-contain"
                                draggable={false}
                            />
                        </div>
                    </a>
                    <nav className="hidden md:flex items-center gap-8 text-[15px] md:text-base lg:text-lg">
                        <a href="#how" className="text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
                        <a href="#intel" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
                        <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
                    </nav>
                    <button onClick={scrollToWaitlist} className="rounded-xl px-5 py-3 text-[15px] md:text-base font-semibold text-white focus:outline-none focus:ring-2" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 22px rgba(4,153,11,0.18)' }}>
                        Join Waitlist
                    </button>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-8  grid md:grid-cols-2 gap-12 md:gap-36 lg:gap-0 xl:gap-0 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ACCENT }} /> Pre‑launch
                        </span>
                        <h1 className="mt-4 text-4xl/tight md:text-6xl font-extrabold tracking-tight">
                            Verify <span style={{ color: ACCENT }}>trading skill</span> with AI
                        </h1>
                        <p className="mt-5 text-base md:text-lg text-slate-600 max-w-xl">
                            BagTalk turns on‑chain wallet activity into objective scores and clear insights—so you can follow real alpha, not hype.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button onClick={scrollToWaitlist} className="rounded-xl px-5 py-3 font-semibold text-white focus:outline-none focus:ring-2" style={{ backgroundColor: ACCENT, boxShadow: '0 6px 18px rgba(4,153,11,0.18)' }}>Join the Waitlist</button>
                            <a href="#how" className="rounded-xl px-5 py-3 border text-slate-700/90 hover:bg-white focus:outline-none focus:ring-2" style={{ borderColor: 'rgba(2,6,23,0.12)' }}>How it works</a>
                        </div>
                    </div>

                    {/* Big verified image (fallbacks to hero1) */}
                    <HeroVerifiedImage />
                </div>
            </section>

            {/* How it works (second) */}
            <section id="how" className="py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
                    <div className="mt-8 grid md:grid-cols-3 gap-8">
                        <Step index={1} title="Connect or Search" desc="Search any wallet, or connect your own to get insights privately." />
                        <Step index={2} title="We Score Performance" desc="Our model evaluates risk, consistency, edge, and outcomes across time." />
                        <Step index={3} title="Follow Real Alpha" desc="See strengths and weaknesses, then follow high‑confidence profiles." />
                    </div>
                </div>
            </section>


            {/* Combined Feature: AI Wallet Intel */}
            <section id="intel" className="py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-36 lg:gap-48 xl:gap-0 items-center">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold">AI Wallet Intel</h3>
                        <p className="mt-3 text-slate-600">Explainable insights highlight strengths, weaknesses, and what actually drives performance for any analyzed wallet.</p>
                        <ul className="mt-5 space-y-2 text-slate-600 text-sm list-disc pl-5">
                            <li>Human‑readable summaries from raw on‑chain activity</li>
                            <li>Signal over noise: patterns, risk, and edge surfaced</li>
                            <li>In‑depth, shareable reports without revealing private data</li>
                            <li>Alpha designation for top percentile traders</li>
                        </ul>
                    </div>
                    <div>
                        <div className="relative h-[520px] md:h-[600px]">

                            <img src={assets.slides[0]} alt="App screen (background)" className="h-full w-full object-contain select-none" draggable={false} />

                            {/* <div className="absolute bottom-0 left-1/2 z-0" style={{ transform: 'translateY(-5%) translateX(-90%) rotate(-6deg)', transformOrigin: 'top center' }}>
                                <PhoneFrame title="" src={assets.slides[0]} alt="App screen (background)" className="w-[220px] md:w-[260px]" />
                            </div>
                            <div className="absolute bottom-0 left-1/2 z-0" style={{ transform: 'translateX(-8%) rotate(6deg)', transformOrigin: 'top center' }}>
                                <PhoneFrame title="" src={assets.slides[1]} alt="App screen (foreground)" className="w-[240px] md:w-[280px]" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>


            {/* Data‑Driven Social Synergy */}
            <section className="py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-36 lg:gap-0 xl:gap-0 items-center">
                    {/* Images — second on mobile, first on md+ */}
                    <div className="order-2 md:order-1">
                        <div className="relative h-[520px] md:h-[560px]">
                            <img src={assets.slides[1]} alt="App screen (background)" className="h-full w-full object-contain select-none" draggable={false} />

                            {/* <div
                                className="absolute bottom-0 left-1/2 z-0"
                                style={{ transform: 'translateY(-5%) translateX(-135%) rotate(0deg)', transformOrigin: 'top center' }}
                            >
                                <PhoneFrame title="" src={assets.slides[2]} alt="App screen (background)" className="w-[220px] md:w-[260px]" />
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                                <PhoneFrame title="" src={assets.slides[3]} alt="App screen (foreground)" className="w-[240px] md:w-[280px]" />
                            </div> */}
                        </div>
                    </div>

                    {/* Text — first on mobile, second on md+ */}
                    <div className="self-center order-1 md:order-2">
                        <h3 className="text-xl md:text-2xl font-semibold">Data-Driven Social Synergy</h3>
                        <p className="mt-3 text-slate-600">
                            Separate hype from skill. BagTalk is a dynamic crypto community where novices and experts connect, learn, and uncover
                            market trends before they happen, giving traders and market makers a predictive edge.
                        </p>
                        <ul className="mt-5 space-y-2 text-slate-600 text-sm list-disc pl-5">
                            <li>Novices learn from top traders, accelerating growth</li>
                            <li>Social interactions reveal emerging trends</li>
                            <li>Filters for chain, asset class, and risk profile</li>
                            <li>Early market signals give traders and market makers a predictive edge</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-14 md:py-20">
                <div className="mx-auto max-w-4xl px-6 md:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
                    <div className="mt-6 space-y-3">
                        <FaqItem q="When is the launch?" a="BagTalk is in active development. Join the waitlist to get early access notifications." />
                        <FaqItem q="Which chains are supported?" a="We will support all major chains. If you have a request, drop us a line at info@bagtalk.io." />
                        <FaqItem q="Do I need to connect a wallet?" a="You can connect via Google, Apple, or just browse the site as a guest — but connecting your wallet enables private, AI‑driven personalized insights." />
                        <FaqItem q="Is my data private?" a="Yes. Your data is SAFU. We focus on on‑chain public data and treat any user data with strict privacy controls." />
                    </div>
                </div>
            </section>

            {/* Final CTA / Waitlist */}
            <section ref={waitlistRef} className="py-24 md:py-32">
                <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Be first to try BagTalk</h2>
                    <p className="mt-3 text-slate-600">Join the waitlist and we’ll email you when the app is ready.</p>
                    <WaitlistForm />
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <DisabledBadge label="App Store" />
                        <DisabledBadge label="Google Play" />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">Coming soon on iOS and Android — join the waitlist for first access.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 text-slate-600">
                <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                    <p className="text-[11px] sm:text-xs md:text-sm text-center md:text-left">
                        © {new Date().getFullYear()} BagTalk. All rights reserved.
                    </p>

                    <div className="flex items-center gap-3 md:gap-4">
                        <a
                            href="https://x.com/bagtalktown"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-2 bg-black text-white text-[11px] md:text-sm font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 leading-none"
                            aria-label="Follow BagTalk on X"
                        >
                            <XIcon className="h-4 w-4" />
                            <span>Follow us</span>
                        </a>

                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] md:text-sm">
                            {/* <a href="#" className="hover:text-slate-900 leading-none">Privacy</a> */}
                            {/* <a href="#" className="hover:text-slate-900 leading-none">Terms</a> */}
                            <a href="mailto:info@bagtalk.io" className="hover:text-slate-900 leading-none">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/* ===== Components ===== */

function AnimatedMesh(): JSX.Element {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
            <style>{`
        @keyframes floaty { 0%{transform:translate3d(0,0,0)} 50%{transform:translate3d(8px,-10px,0)} 100%{transform:translate3d(0,0,0)} }
        @keyframes drift { 0%{transform:translate3d(0,0,0)} 50%{transform:translate3d(-10px,6px,0)} 100%{transform:translate3d(0,0,0)} }
      `}</style>
            <div className="absolute top-[8%] left-[4%] h-48 w-48 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(4,153,11,0.09)', animation: 'floaty 9s ease-in-out infinite' }} />
            <div className="absolute top-[45%] right-[6%] h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(4,153,11,0.06)', animation: 'drift 11s ease-in-out infinite' }} />
            <div className="absolute bottom-[10%] left-[30%] h-56 w-56 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(4,153,11,0.07)', animation: 'floaty 12s ease-in-out infinite' }} />
            <div className="absolute bottom-[25%] right-[35%] h-40 w-40 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(4,153,11,0.05)', animation: 'drift 10s ease-in-out infinite' }} />
            <div className="absolute top-[18%] right-[25%] h-28 w-28 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(4,153,11,0.08)', animation: 'floaty 13s ease-in-out infinite' }} />
        </div>
    );
}

function HeroVerifiedImage() {

    return (
        <div className="relative mx-auto w-[320px] md:w-[550px]">
            {/* Square image box — NO border */}
            <div
                className="relative rounded-2xl"
                style={{ aspectRatio: "1 / 1" }}
            >
                <img
                    src={assets.verified}
                    alt="Verified overview"
                    className="absolute inset-0 h-full w-full object-cover select-none rounded-2xl"
                    draggable={false}
                />

            </div>
        </div>
    );
}


type PhoneFrameProps = {
    title: string;
    src?: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
    aspect?: string; // CSS aspect-ratio value, e.g., '9 / 19.5'
};

function PhoneFrame({ title, src, alt, className = '', style, aspect = '9 / 19.5' }: PhoneFrameProps): JSX.Element {
    return (
        <figure className={`relative mx-auto w-[220px] md:w-[260px] ${className}`} style={style}>
            <div className="relative rounded-[2.2rem] bg-white overflow-hidden shadow-[0_20px_50px_-20px_rgba(2,6,23,0.18)]" style={{ aspectRatio: aspect }}>
                <div className="absolute inset-0 rounded-[2.2rem]" style={{ boxShadow: 'inset 0 0 0 1px rgba(2,6,23,0.08)' }} />
                {src ? (
                    <img src={src} alt={alt || title} className="absolute inset-0 h-full w-full object-cover select-none" draggable={false} />
                ) : (
                    <div className="absolute inset-0 grid place-items-center text-xs text-slate-500">{title}</div>
                )}
            </div>
            <figcaption className="sr-only">{title}</figcaption>
        </figure>
    );
}


type StepProps = { index: number; title: string; desc: string };
function Step({ index, title, desc }: StepProps): JSX.Element {
    return (
        <div className="relative rounded-2xl bg-white p-6 shadow-[0_10px_35px_rgba(2,6,23,0.06)]">
            <div className="h-8 w-8 rounded-lg text-white font-bold grid place-items-center" style={{ backgroundColor: ACCENT }} aria-hidden>
                {index}
            </div>
            <h4 className="mt-4 text-lg font-semibold">{title}</h4>
            <p className="mt-2 text-slate-600 text-sm">{desc}</p>
        </div>
    );
}

type FaqItemProps = { q: string; a: string };
function FaqItem({ q, a }: FaqItemProps): JSX.Element {
    return (
        <details className="group rounded-xl bg-white p-4 shadow-[0_6px_20px_rgba(2,6,23,0.05)]">
            <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium">{q}</span>
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-600 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600">{a}</p>
        </details>
    );
}

function WaitlistForm(): JSX.Element {
    return (
        <form action="https://formspree.io/f/xldnjyoz" method="POST" className="mt-6 mx-auto max-w-xl flex flex-col sm:flex-row justify-center gap-4 w-full px-2">
            <label htmlFor="email" className="sr-only">
                Email address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                aria-label="Your email address"
                className="w-full sm:flex-1 px-4 py-3 text-lg text-slate-900 placeholder-slate-400 bg-white rounded-xl border-2 focus:outline-none focus:ring-2"
                style={{ borderColor: '#e2e8f0' }}
            />
            <button type="submit" className="w-full sm:w-auto px-6 py-3 text-white text-lg font-semibold rounded-xl transform transition hover:-translate-y-0.5 focus:outline-none focus:ring-2" style={{ backgroundColor: ACCENT, boxShadow: '0 8px 22px rgba(4,153,11,0.18)' }}>
                Request Access
            </button>
        </form>
    );
}

type DisabledBadgeProps = { label: string };
function DisabledBadge({ label }: DisabledBadgeProps): JSX.Element {
    return (
        <button
            type="button"
            aria-disabled="true"
            title="Coming soon"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm text-slate-600 cursor-not-allowed shadow-[inset_0_0_0_1px_rgba(2,6,23,0.08),0_1px_2px_rgba(2,6,23,0.03)]"
        >
            <span className="inline-block h-3 w-3 rounded-full bg-slate-300" aria-hidden />
            <span>{label}</span>
        </button>
    );
}

type IconProps = { className?: string; style?: React.CSSProperties };
function XIcon({ className = '', style }: IconProps): JSX.Element {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
            <path fill="currentColor" d="M17.53 3H20l-6.49 7.41L21 21h-5.5l-4.3-5.15L6.2 21H4l7.02-8.02L3 3h5.6l3.95 4.74L17.53 3Zm-2.66 16h1.52L8.26 5H6.74l8.13 14Z" />
        </svg>
    );
}