import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const inputStyles =
  "w-full h-8 rounded-3xl bg-[#e9e9e9] px-5 py-3 text-slate-900 " +
  "shadow-[inset_6px_6px_12px_#d1d1d1,inset_-6px_-6px_12px_#ffffff] " +
  "outline-none transition focus:ring-2 focus:ring-[#143a8c]";

export default function ContactCard() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div
          className="
          w-[351px] h-max
          xl:w-[586px] xl:h-max
          rounded-[28px]
          mb:rounded-[48px]
          bg-[#f3f3f3]
          px-6 py-8 xl:px-14 xl:py-16
          overflow-hidden
        "
        >
          {/* Header */}
          <div className="xl:mb-3">
            <p className="text-xs font-[Inter] xl:text-[22px] text-[#143a8c]">
              Ready to bring your vision to life?
            </p>

            <h2 className="text-[22px] font-[Epilogue] xl:text-[40px] font-extrabold text-[#143a8c]">
              Write us a message.
            </h2>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-3 xl:gap-2">
            {/* Row 1 */}
            <div className="flex flex-col gap-3 xl:grid xl:grid-cols-2 xl:gap-8">
              <div>
                <label className="mb-2 text-xs font-[Inter] xl:text-base font-normal text-[#032982]">
                  Full Name*
                </label>
                <input type="text" className={inputStyles} />
              </div>

              <div>
                <label className="mb-2 text-xs font-[Inter] xl:text-base font-normal text-[#032982]">
                  E-mail*
                </label>
                <input type="email" className={inputStyles} />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="mb-2 text-xs font-[Inter] xl:text-base font-normal text-[#032982]">
                Company/Organization Name*
              </label>
              <input type="text" className={inputStyles} />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 text-xs font-[Inter] xl:text-base font-normal text-[#032982]">
                Message*
              </label>
              <textarea
                rows={4}
                className={clsx(inputStyles, "resize-none h-[220px]")}
              />
            </div>

            {/* Privacy */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="h-4 w-4 xl:h-5 xl:w-5 accent-[#143a8c]"
              />

              <p className="text-xs font-[Inter] xl:text-base font-normal text-[#032982]">
                I Agree to the{" "}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="underline font-[Inter] hover:text-[#143a8c]"
                >
                  Privacy Policy
                </button>
                .*
              </p>
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={!isAgreed}
              className={clsx(
                "mt-2 rounded-2xl py-3 xl:py-5 text-base xl:text-xl font-semibold text-white transition",
                isAgreed
                  ? "bg-[#ef532f] hover:opacity-90"
                  : "bg-[#ef532f]/50 cursor-not-allowed",
              )}
            >
              Send
            </Button>
          </form>
        </div>
      </div>

      {/* Privacy Modal */}
      <PrivacyPolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAgree={() => setIsAgreed(true)}
      />
    </>
  );
}
