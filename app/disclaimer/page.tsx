import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Disclaimer</h1>
          <p className="text-gray-400 mb-8">Last Updated: November 2, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. General Information</h2>
              <p>
                The information provided by Vertex X (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on our website and through our
                services is for general informational purposes only. All information is provided in good faith; however,
                we make no representation or warranty of any kind, express or implied, regarding the accuracy,
                adequacy, validity, reliability, availability, or completeness of any information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. No Professional Advice</h2>
              <p className="mb-4">
                The content on our website and communications should not be considered as professional advice. While we
                provide technology consulting and development services, information shared on our website is general in
                nature and should not replace:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Professional technical consultation specific to your situation</li>
                <li>Legal advice from a qualified attorney</li>
                <li>Financial advice from a certified financial advisor</li>
                <li>Any other professional advice relevant to your specific needs</li>
              </ul>
              <p className="mt-4">
                You should consult with appropriate professionals before making any decisions based on information found
                on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Website Content Disclaimer</h2>
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Accuracy of Information</h3>
              <p className="mb-4">
                While we strive to keep the information on our website accurate and up-to-date, we make no guarantees
                about the completeness, reliability, or accuracy of this information. Any reliance you place on such
                information is strictly at your own risk.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Changes to Content</h3>
              <p>
                We reserve the right to modify, update, or remove any content on our website at any time without prior
                notice. We are not obligated to update any information, and we may discontinue or change any aspect of
                our website without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. External Links Disclaimer</h2>
              <p>
                Our website may contain links to external websites that are not provided or maintained by us. We do not
                guarantee the accuracy, relevance, timeliness, or completeness of any information on these external
                websites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the
                views expressed within them. We have no control over the nature, content, and availability of external
                sites and accept no responsibility for them or for any loss or damage that may arise from your use of
                them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Service Deliverables Disclaimer</h2>
              <h3 className="text-xl font-semibold text-white mb-3">5.1 Project Outcomes</h3>
              <p className="mb-4">
                While we endeavor to deliver high-quality services, we cannot guarantee specific results or outcomes
                from our services. The success of any project depends on various factors, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Client cooperation and timely provision of information</li>
                <li>Market conditions and competition</li>
                <li>Technical limitations and third-party dependencies</li>
                <li>Changes in technology and industry standards</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">5.2 Performance</h3>
              <p>
                We do not warrant that our services will meet all of your requirements or that they will be
                uninterrupted, timely, secure, or error-free. We are not responsible for any delays, failures, or
                errors resulting from circumstances beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Technology Disclaimer</h2>
              <h3 className="text-xl font-semibold text-white mb-3">6.1 Third-Party Technologies</h3>
              <p className="mb-4">
                Our services may incorporate or rely on third-party technologies, platforms, APIs, or services. We are
                not responsible for the performance, availability, or functionality of these third-party technologies.
                Changes or discontinuation of third-party services may affect the operation of solutions we develop.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">6.2 Compatibility</h3>
              <p>
                We make reasonable efforts to ensure compatibility with current technologies and standards. However, we
                cannot guarantee that our solutions will remain compatible with all future updates, versions, or changes
                to operating systems, browsers, devices, or third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Testimonials and Case Studies</h2>
              <p>
                Testimonials and case studies displayed on our website represent the experiences of specific clients
                under particular circumstances. Results may vary, and individual results will depend on individual
                circumstances and factors. Testimonials are not guarantees of similar results for all clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. No Warranties</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR WEBSITE OR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE,
                SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL VERTEX X, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our website or services</li>
                <li>Any content obtained from our website or services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Errors and Omissions</h2>
              <p>
                While we make every effort to ensure that the information on our website is correct, errors may occur.
                If you believe you have found an error, please contact us so we can correct it. We reserve the right to
                correct any errors, inaccuracies, or omissions and to change or update information at any time without
                prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Fair Use</h2>
              <p>
                Our website may use copyrighted material that has not always been specifically authorized by the
                copyright owner. We make such material available for educational, commentary, and criticism purposes,
                which we believe constitutes fair use under copyright law. If you believe that content on our website
                infringes your copyright, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Views Expressed</h2>
              <p>
                Any views or opinions represented on our website, blog posts, or other content belong to the individual
                authors and do not necessarily represent the views of Vertex X as an organization unless explicitly
                stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Consent</h2>
              <p>
                By using our website and services, you hereby consent to this disclaimer and agree to its terms. If you
                do not agree with this disclaimer, you should not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Updates to This Disclaimer</h2>
              <p>
                We reserve the right to update, modify, or replace any part of this disclaimer at our discretion. It is
                your responsibility to check this page periodically for changes. Your continued use of our website
                following the posting of any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about this disclaimer or require clarification on any points, please contact
                us:
              </p>
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
