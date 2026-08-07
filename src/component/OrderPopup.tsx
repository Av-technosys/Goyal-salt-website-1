"use client";

import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import Image from "next/image";
import SaltButton from "./SaltButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
};

export default function OrderPopup({ isOpen, onClose, productName }: Props) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      mobile: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send request");

      setStatus({
        type: "success",
        msg: "Request sent successfully!",
      });

      form.reset();

      setTimeout(() => {
        onClose();
        setStatus({ type: null, msg: "" });
      }, 1500);
    } catch (err: any) {
      setStatus({
        type: "error",
        msg: err.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-[95%] max-w-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative border border-gray-100">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:text-red-600 flex items-center justify-center z-10 transition-colors"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="hidden md:block relative bg-gray-50 p-6">
          <Image
            src="/Images/goyalsalt.png"   
            alt="Contact"
            fill
            className="object-contain p-6"
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute bottom-6 left-6 text-gray-900">
            <h3 className="text-xl font-bold">Let’s Talk</h3>
            <p className="text-xs text-gray-600 opacity-90 font-medium">
              We usually reply within 24 hours
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-6 sm:p-8">
          <p className="text-red-600 text-xs font-bold mb-1 tracking-wider uppercase">
            GET IN TOUCH
          </p>

          <h2 className="text-2xl font-bold mb-1 text-gray-900">
            Request a Call Back
          </h2>

          <p className="text-gray-600 mb-4 text-xs leading-relaxed font-normal">
            Fill out the form below and our team will reach out to you shortly.
          </p>

          {status.msg && (
            <div
              className={`mb-3 p-2.5 rounded-xl text-xs font-semibold ${
                status.type === "success"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                <input
                  name="name"
                  required
                  className="w-full mt-1 border border-gray-200 rounded-xl px-3 h-10 outline-none text-xs focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full mt-1 border border-gray-200 rounded-xl px-3 h-10 outline-none text-xs focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700">Phone Number</label>
              <div className="flex items-center border border-gray-200 rounded-xl h-10 mt-1 focus-within:border-red-500 transition-colors overflow-hidden">
                <span className="px-3 text-gray-600 border-r border-gray-200 text-xs font-medium">+91</span>
                <input
                  name="phone"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  className="flex-1 px-3 outline-none text-xs"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700">Message *</label>
              <textarea
                name="message"
                required
                rows={3}
                placeholder={`Order request for ${productName}`}
                className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2 outline-none resize-none text-xs focus:border-red-500 transition-colors"
              />
            </div>

            <div className="pt-2">
              <SaltButton
                type="submit"
                disabled={loading}
                variant="primary"
                size="md"
                className="w-full"
              >
                {loading && <IconLoader2 className="animate-spin" size={16} />}
                <span>{loading ? "Submitting..." : "GET IN TOUCH"}</span>
              </SaltButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
