import { CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FormToast({ type, message, isVisible }) {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
          className="fixed top-24 right-6 z-[9999]"
        >
          <div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg text-white ${
              isSuccess ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isSuccess ? <CheckCircle size={24} /> : <XCircle size={24} />}

            <div className="text-sm">
              <p className="font-semibold">
                {isSuccess
                  ? "Message sent successful"
                  : "Message sent unsuccessful"}
              </p>
              <p className="text-xs opacity-90">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}