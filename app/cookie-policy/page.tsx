import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: November 2, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They are widely
                used to make websites work more efficiently and provide information to website owners. Cookies allow
                websites to remember your actions and preferences over a period of time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">We use cookies for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Understanding how visitors use our website</li>
                <li>Improving website functionality and user experience</li>
                <li>Analyzing website traffic and performance</li>
                <li>Remembering your preferences and settings</li>
                <li>Providing personalized content and features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-white mb-3">3.1 Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page
                navigation and access to secure areas. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Analytics Cookies</h3>
              <p className="mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting
                information anonymously. We may use services like Google Analytics to track:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Number of visitors to our website</li>
                <li>Pages visited and time spent on pages</li>
                <li>Traffic sources and navigation patterns</li>
                <li>Device and browser information</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.3 Functionality Cookies</h3>
              <p className="mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set
                by us or by third-party providers whose services we use on our pages.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">3.4 Performance Cookies</h3>
              <p>
                These cookies collect information about how you use our website to help us improve its performance and
                design. All information collected is aggregated and anonymous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4">
                We may use third-party services that set cookies on your device. These third parties may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing content</li>
                <li>Content delivery networks for performance optimization</li>
                <li>Email service providers for contact form functionality</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy policies and cookie policies. We recommend reviewing their
                policies to understand how they use cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookie Duration</h2>

              <h3 className="text-xl font-semibold text-white mb-3">5.1 Session Cookies</h3>
              <p className="mb-4">
                These are temporary cookies that remain on your device until you close your browser. They are
                automatically deleted when you end your browsing session.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">5.2 Persistent Cookies</h3>
              <p>
                These cookies remain on your device for a set period (as specified in the cookie) or until you delete
                them. They help us recognize you as a returning visitor and remember your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Managing Cookies</h2>

              <h3 className="text-xl font-semibold text-white mb-3">6.1 Browser Settings</h3>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Block all cookies</li>
                <li>Accept only first-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Notify you when a cookie is set</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">6.2 Browser-Specific Instructions</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                <li>Firefox: Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                <li>Safari: Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li>Edge: Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.3 Opt-Out Tools</h3>
              <p className="mb-4">You can opt out of specific third-party cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-400 hover:text-blue-300">Google Analytics Opt-out Browser Add-on</a></li>
                <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org" className="text-blue-400 hover:text-blue-300">NAI Opt-out Tool</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Impact of Disabling Cookies</h2>
              <p>
                Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or
                not function properly. Certain features may not work as intended, and your user experience may be
                affected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Do Not Track Signals</h2>
              <p>
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want to
                be tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not
                currently respond to DNT signals, but we are committed to respecting your privacy preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or
                our business practices. We will notify you of any significant changes by posting the updated policy on
                this page and updating the &quot;Last Updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="mb-4">If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
              <ul className="space-y-2 ml-4">
                <li>Email: [Your Email Address]</li>
                <li>Address: [Your Business Address]</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
