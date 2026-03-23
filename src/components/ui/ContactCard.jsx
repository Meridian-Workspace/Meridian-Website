import { useState, useEffect } from "react"; 
import clsx from "clsx";
import Button from "./Button";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import FormToast from "./FormToast"; 

const inputStyles =
  "w-full h-8 rounded-3xl bg-[#e9e9e9] px-5 py-3 text-slate-900 " +
  "shadow-[inset_6px_6px_12px_#d1d1d1,inset_-6px_-6px_12px_#ffffff] " +
  "outline-none transition focus:ring-2 focus:ring-[#143a8c]";

const ErrorText = ({ message }) => (
  <p className="mt-1 text-[10px] xl:text-xs text-[#ef532f] font-medium ml-2">
    {message}
  </p>
);

export default function ContactCard() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const [toast, setToast] = useState({
    visible: false,
    type: "success",
    message: "",
  });

  // ✅ AUTO HIDE TOAST
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "E-mail is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.company.trim())
      newErrors.company = "Company/Organization Name is required.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    if (!isAgreed)
      newErrors.agree = "Please accept the Privacy Policy to continue.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSending(true);

    const apiBase = process.env.REACT_APP_API_URL || "";
    const sendEmailUrl = apiBase
      ? `${apiBase}/send-email`
      : "/api/send-email";

    try {
      const res = await fetch(sendEmailUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // ✅ SUCCESS TOAST
        setToast({
          visible: true,
          type: "success",
          message: "We'll get back to you shortly through your email.",
        });

        setFormData({ name: "", email: "", company: "", message: "" });
        setIsAgreed(false);
        setErrors({});
      } else {
        // ✅ ERROR TOAST
        setToast({
          visible: true,
          type: "error",
          message:
            "There is a problem on our end, please try again later.",
        });
      }
    } catch (error) {
      console.error(error);

      setToast({
        visible: true,
        type: "error",
        message:
          "There is a problem on our end, please try again later.",
      });
    }

    setIsSending(false);
  };

  return (
    <>
      <div className="flex justify-center mb-12 xl:mb-24">
        <div className="w-[351px] h-max xl:w-[586px] rounded-[28px] bg-[#f3f3f3] px-6 py-8 xl:px-14 xl:py-16 overflow-hidden">
          {/* Header */}
          <div className="xl:mb-3">
            <p className="text-xs xl:text-[22px] text-[#143a8c]">
              Ready to bring your vision to life?
            </p>
            <h2 className="text-[22px] xl:text-[40px] font-extrabold text-[#143a8c]">
              Write us a message.
            </h2>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-3 xl:gap-2"
          >
            <div className="flex flex-col gap-3 xl:grid xl:grid-cols-2 xl:gap-8">
              <div>
                <label
                  className={clsx(
                    "mb-2 text-xs xl:text-base",
                    errors.name ? "text-[#ef532f]" : "text-[#032982]"
                  )}
                >
                  Full Name*
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={clsx(
                    inputStyles,
                    errors.name &&
                      "border border-[#ef532f] ring-1 ring-[#ef532f]"
                  )}
                />
                {errors.name && <ErrorText message={errors.name} />}
              </div>

              <div>
                <label
                  className={clsx(
                    "mb-2 text-xs xl:text-base",
                    errors.email ? "text-[#ef532f]" : "text-[#032982]"
                  )}
                >
                  E-mail*
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={clsx(
                    inputStyles,
                    errors.email &&
                      "border border-[#ef532f] ring-1 ring-[#ef532f]"
                  )}
                />
                {errors.email && <ErrorText message={errors.email} />}
              </div>
            </div>

            <div>
              <label
                className={clsx(
                  "mb-2 text-xs xl:text-base",
                  errors.company ? "text-[#ef532f]" : "text-[#032982]"
                )}
              >
                Company/Organization Name*
              </label>
              <input
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className={clsx(
                  inputStyles,
                  errors.company &&
                    "border border-[#ef532f] ring-1 ring-[#ef532f]"
                )}
              />
              {errors.company && <ErrorText message={errors.company} />}
            </div>

            <div>
              <label
                className={clsx(
                  "mb-2 text-xs xl:text-base",
                  errors.message ? "text-[#ef532f]" : "text-[#032982]"
                )}
              >
                Message*
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={clsx(
                  inputStyles,
                  "resize-none h-[220px]",
                  errors.message &&
                    "border border-[#ef532f] ring-1 ring-[#ef532f]"
                )}
              />
              {errors.message && <ErrorText message={errors.message} />}
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => {
                    setIsAgreed(e.target.checked);
                    if (e.target.checked)
                      setErrors((prev) => ({ ...prev, agree: null }));
                  }}
                  className={clsx(
                    "h-4 w-4 xl:h-5 xl:w-5 accent-[#143a8c]",
                    errors.agree &&
                      "outline outline-1 outline-[#ef532f]"
                  )}
                />
                <p
                  className={clsx(
                    "text-xs xl:text-base",
                    errors.agree ? "text-[#ef532f]" : "text-[#032982]"
                  )}
                >
                  I Agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="underline hover:text-[#143a8c]"
                  >
                    Privacy Policy
                  </button>
                  .*
                </p>
              </div>
              {errors.agree && <ErrorText message={errors.agree} />}
            </div>

            <Button
              type="submit"
              disabled={isSending}
              className="mt-2 rounded-2xl py-3 xl:py-5 text-base xl:text-xl font-semibold text-white transition bg-[#ef532f] hover:opacity-90"
            >
              {isSending ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>

      <FormToast
        type={toast.type}
        message={toast.message}
        isVisible={toast.visible}
      />

      <PrivacyPolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAgree={() => {
          setIsAgreed(true);
          setErrors((prev) => ({ ...prev, agree: null }));
        }}
        onDecline={() => setIsAgreed(false)}
      />
    </>
  );
}