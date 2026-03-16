import React from "react";

export default function PrivacyPolicyModal({ isOpen, onClose, onAgree }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">
        {/* Title */}
        <h2 className="text-xl font-bold font-[Epilogue] text-[#143a8c] mb-4">
          Privacy Notice: Contacting Meridian
        </h2>

        {/* Scrollable content */}
        <div className="h-64 overflow-y-auto font-[Inter]  text-sm text-gray-700 space-y-3 mb-6">
          <p>
            At Meridian, we believe that clear navigation begins with trust.
            When you reach out to us, you are sharing your information with the
            expectation that it will be handled with integrity and security.
            This notice explains exactly how we manage the data you provide
            through our contact forms.
          </p>

          <h4 className="text-lg font-bold">1. Information We Collect</h4>

          <p>
            When you fill out our contact form, we collect the following
            specific data points to ensure we can provide an accurate and
            professional response:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              <strong>Full Name:</strong> To address you personally and maintain
              a professional record of our correspondence.
            </li>
            <li>
              <strong>Email Address:</strong> To respond to your inquiry and
              provide any requested documentation or follow-up.
            </li>
            <li>
              <strong>Company/Organization Name:</strong> To understand the
              professional context of your request and tailor our services to
              your industry's specific needs.
            </li>
            <li>
              <strong>Message Content:</strong> To understand the nature of your
              inquiry and direct it to the appropriate department within our
              team.
            </li>
          </ul>

          <h4 className="text-lg font-bold">2. How We Use Your Information</h4>

          <p>
            The data you provide is used exclusively for the purpose of
            <strong>communication and service delivery.</strong> Specifically:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              To process and respond to your specific questions or requests.
            </li>
            <li>
              To provide information about Meridian’s services that are relevant
              to your organization.
            </li>
            <li>
              To maintain an internal record of business leads and client
              interactions.
            </li>
          </ul>

          <p>
            <strong>
              We do not sell, rent, or lease our contact lists to third parties.
            </strong>
            Your information stays within the Meridian ecosystem.
          </p>

          <h4 className="text-lg font-bold">3. Data Security & Storage</h4>

          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information. Your data is stored on secure servers
            and is only accessible by a limited number of persons who have
            special access rights to such systems and are required to keep the
            information confidential.
          </p>

          <h4 className="text-lg font-bold">4. Consent and Control</h4>

          <p>
            By clicking "I Agree to the Privacy Policy." on our contact form,
            you are providing your explicit consent for Meridian to contact you
            regarding your inquiry.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              <strong>Right to Access:</strong> You may request a copy of the
              data we have on file for you at any time.
            </li>
            <li>
              <strong>Right to Erasure:</strong> If you would like us to delete
              your contact information from our records after our conversation
              has concluded, simply let us know, and we will purge your data
              from our active systems.
            </li>
          </ul>

          <h4 className="text-lg font-bold">5. Updates to This Policy</h4>

          <p>
            As our services evolve, we may update this description to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300"
          >
            Decline
          </button>

          <button
            onClick={() => {
              onAgree();
              onClose();
            }}
            className="rounded-xl px-4 py-2 text-sm font-medium text-white bg-[#143a8c] hover:opacity-90"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}
