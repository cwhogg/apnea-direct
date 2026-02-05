'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"Apnea Direct","url":"https://apnea-direct.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"Apnea Direct","url":"https://apnea-direct.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can an Apple Watch help diagnose sleep apnea?","acceptedAnswer":{"@type":"Answer","text":"Apple Watch can detect potential sleep apnea signs through sleep tracking and blood oxygen monitoring. However, a medical-grade home sleep test is required for official diagnosis and treatment planning."}},{"@type":"Question","name":"Do I need a prescription for an at-home sleep apnea test?","acceptedAnswer":{"@type":"Answer","text":"Our FDA approved home sleep apnea test doesn't require a traditional doctor referral. Our licensed physicians review your case and authorize testing as part of our streamlined process."}},{"@type":"Question","name":"Is the home sleep apnea test FDA approved?","acceptedAnswer":{"@type":"Answer","text":"Yes, we use FDA cleared home sleep testing devices that provide the same diagnostic accuracy as traditional sleep labs. Results are reviewed by board-certified sleep physicians."}},{"@type":"Question","name":"How long does an Apple Watch need to detect sleep apnea?","acceptedAnswer":{"@type":"Answer","text":"Apple Watch typically needs several nights of consistent sleep tracking data to identify potential sleep apnea patterns. Our test provides definitive results after just one night of monitoring."}},{"@type":"Question","name":"Will insurance cover at home sleep apnea test?","acceptedAnswer":{"@type":"Answer","text":"Insurance coverage varies, but our direct-pay model eliminates pre-approval delays. Most patients find our $189 fee comparable to insurance copays and deductibles."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            Apnea Direct
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Apple Watch Detected Sleep Apnea? Get Tested in 3 Days
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Skip the 3-month wait for sleep lab appointments. FDA approved home sleep apnea test without doctor referral, delivered to your door with results in 48 hours.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Get My Test Kit`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why Apnea Direct?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Skip Traditional Healthcare Delays" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Skip Traditional Healthcare Delays</h3>
            <p className="text-text-secondary text-sm leading-relaxed">No referrals, no insurance pre-approvals, no months-long waits. Order today, test tonight, get results Thursday.</p>
          </section>
          <section aria-label="FDA Approved Home Testing" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">FDA Approved Home Testing</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Same medical-grade accuracy as sleep labs, but in your own bed. Our home sleep apnea test is FDA cleared and physician-reviewed.</p>
          </section>
          <section aria-label="Apple Health Integration" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Apple Health Integration</h3>
            <p className="text-text-secondary text-sm leading-relaxed">We analyze your existing Apple Watch sleep data alongside your test results for the most complete picture of your sleep health.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Can an Apple Watch help diagnose sleep apnea?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Apple Watch can detect potential sleep apnea signs through sleep tracking and blood oxygen monitoring. However, a medical-grade home sleep test is required for official diagnosis and treatment planning.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Do I need a prescription for an at-home sleep apnea test?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Our FDA approved home sleep apnea test doesn't require a traditional doctor referral. Our licensed physicians review your case and authorize testing as part of our streamlined process.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Is the home sleep apnea test FDA approved?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Yes, we use FDA cleared home sleep testing devices that provide the same diagnostic accuracy as traditional sleep labs. Results are reviewed by board-certified sleep physicians.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How long does an Apple Watch need to detect sleep apnea?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Apple Watch typically needs several nights of consistent sleep tracking data to identify potential sleep apnea patterns. Our test provides definitive results after just one night of monitoring.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Will insurance cover at home sleep apnea test?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Insurance coverage varies, but our direct-pay model eliminates pre-approval delays. Most patients find our \$189 fee comparable to insurance copays and deductibles.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 Apnea Direct. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
