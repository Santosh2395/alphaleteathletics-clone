import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <hh1 className="text-3xl font-bold text-center mb-8">Privacy Policy</hh1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="text-sm text-gray-500 mb-4">
          Last updated: {new Date().toLocaleString()}
        </p>{" "}
        {/* Replace with the last updated date */}
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to [Your Website Name]. We respect your privacy and are
          committed to protecting your personal data. This privacy policy will
          inform you as to how we collect, use, and protect your personal data
          when you visit our website and tell you about your privacy rights and
          how the law protects you.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          2. Data We Collect About You
        </h2>
        <p className="text-gray-700 mb-2">
          We may collect, use, store, and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            **Identity Data:** includes first name, last name, username or
            similar identifier.
          </li>
          <li>
            **Contact Data:** includes billing address, delivery address, email
            address, and telephone numbers.
          </li>
          <li>
            **Financial Data:** includes bank account and payment card details.
          </li>
          <li>
            **Transaction Data:** includes details about payments to and from
            you and other details of products and services you have purchased
            from us.
          </li>
          <li>
            **Technical Data:** includes internet protocol (IP) address, your
            login data, browser type and version, time zone setting and
            location, browser plug-in types and versions, operating system and
            platform, and other technology on the devices you use to access this
            website.
          </li>
          <li>
            **Profile Data:** includes your username and password, your
            purchases or orders made by you, your interests, preferences,
            feedback, and survey responses.
          </li>
          <li>
            **Usage Data:** includes information about how you use our website,
            products, and services.
          </li>
          <li>
            **Marketing and Communications Data:** includes your preferences in
            receiving marketing from us and our third parties and your
            communication preferences.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          We also collect, use, and share Aggregated Data such as statistical or
          demographic data for any purpose. Aggregated Data could be derived
          from your personal data but is not considered personal data in law as
          this data will not directly or indirectly reveal your identity.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Use Your Personal Data
        </h2>
        <p className="text-gray-700 mb-4">
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Where we need to perform the contract we are about to enter into or
            have entered into with you.
          </li>
          <li>
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests.
          </li>
          <li>Where we need to comply with a legal obligation.</li>
          <li>Where you have given your consent.</li>
        </ul>
        <p className="text-gray-700 mb-4">We may use your personal data to:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Process and deliver your order.</li>
          <li>Manage your account.</li>
          <li>Manage our relationship with you.</li>
          <li>
            Enable you to participate in a prize draw, competition, or complete
            a survey.
          </li>
          <li>Improve our website, products, and services.</li>
          <li>
            Recommend products or services that may be of interest to you.
          </li>
          <li>Comply with legal or regulatory obligations.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">
          4. Disclosures of Your Personal Data
        </h2>
        <p className="text-gray-700 mb-4">
          We may share your personal data with the parties set out below for the
          purposes described in section 3:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Internal Third Parties: Other companies in our group acting as joint
            controllers or processors.
          </li>
          <li>
            External Third Parties:
            <ul className="list-circle list-inside ml-4">
              <li>
                Service providers who provide IT and system administration
                services.
              </li>
              <li>
                Professional advisors including lawyers, bankers, auditors, and
                insurers.
              </li>
              <li>
                Regulators and other authorities who require reporting of
                processing activities in certain circumstances.
              </li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          We require all third parties to respect the security of your personal
          data and to treat it in accordance with the law. We do not allow our
          third-party service providers to use your personal data for their own
          purposes and only permit them to process your personal data for
          specified purposes and in accordance with our instructions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorized way, altered or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors, and
          other third parties who have a business need to know. They will only
          process your personal data on our instructions and they are subject to
          a duty of confidentiality.
        </p>
        <p className="text-gray-700 mb-4">
          We have put in place procedures to deal with any suspected personal
          data breach and will notify you and any applicable regulator of a
          breach where we are legally required to do so.
        </p>
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p className="text-gray-700 mb-4">
          We will only retain your personal data for as long as reasonably
          necessary to fulfil the purposes we collected it for, including for
          the purposes of satisfying any legal, regulatory, tax, accounting or
          reporting requirements. We may retain your personal data for a longer
          period in the event of a complaint or if we reasonably believe there
          is a prospect of litigation in respect to our relationship with you.
        </p>
        <p className="text-gray-700 mb-4">
          To determine the appropriate retention period for personal data, we
          consider the amount, nature and sensitivity of the personal data, the
          potential risk of harm from unauthorized use or disclosure of your
          personal data, the purposes for which we process your personal data
          and whether we can achieve those purposes through other means, and the
          applicable legal, regulatory, tax, accounting or other requirements.
        </p>
        <h2 className="text-2xl font-semibold mb-4">7. Your Legal Rights</h2>
        <p className="text-gray-700 mb-4">
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data. These include the right to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>
            Withdraw consent at any time where we are relying on consent to
            process your personal data.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          If you wish to exercise any of the rights set out above, please
          contact us.
        </p>
        <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
        <p className="text-gray-700 mb-4">
          Our website uses cookies to distinguish you from other users of our
          website. This helps us to provide you with a good experience when you
          browse our website and also allows us to improve our site. For
          detailed information on the cookies we use and the purposes for which
          we use them see our [Link to your Cookie Policy - if separate].
        </p>
        <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
        <p className="text-gray-700 mb-4">
          This website may include links to third-party websites, plug-ins, and
          applications. Clicking on those links or enabling those connections
          may allow third parties to collect or share data about you. We do not
          control these third-party websites and are not responsible for their
          privacy statements. When you leave our website, we encourage you to
          read the privacy policy of every website you visit.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          10. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We keep our privacy policy under regular review. This version was last
          updated on the date stated at the top of this policy.
        </p>
        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this privacy policy or our privacy
          practices, please contact us in the following ways:
        </p>
        <p className="text-gray-700 mb-2">
          Email: [Your Contact Email Address]
        </p>
        <p className="text-gray-700 mb-4">Address: [Your Contact Address]</p>
        <p className="text-gray-700">Phone: [Your Contact Phone Number]</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
