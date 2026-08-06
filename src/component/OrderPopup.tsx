"use client";

import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import Image from "next/image";

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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-[2px] z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-[95%] max-w-3xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-lg text-gray-500 z-10"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="hidden md:block relative ">
          <Image
            src="/Images/goyalsalt.png"   
            alt="Contact"
            fill
            className="object-fit "
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute bottom-6 left-6 text-black">
            <h3 className="text-xl font-semibold">Let’s Talk</h3>
            <p className="text-sm opacity-90">
              We usually reply within 24 hours
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-5">
          <p className="text-red-600 text-xs font-semibold mb-1 tracking-wide">
            GET IN TOUCH
          </p>

          <h2 className="text-2xl font-semibold mb-1">
            Request a Call Back
          </h2>

          <p className="text-gray-600 mb-4 text-sm">
            Fill out the form below and our team will reach out to you shortly.
          </p>

          {status.msg && (
            <div
              className={`mb-3 p-2 rounded text-xs font-medium ${
                status.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium">Full Name *</label>
                <input
                  name="name"
                  required
                  className="w-full mt-1 border rounded-lg px-3 h-10 outline-none text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-medium">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full mt-1 border rounded-lg px-3 h-10 outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium">Phone Number</label>
              <div className="flex items-center border rounded-lg h-10 mt-1">
                <span className="px-3 text-gray-600 border-r text-sm">+91</span>
                <input
                  name="phone"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  className="flex-1 px-3 outline-none text-sm"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium">Message *</label>
              <textarea
                name="message"
                required
                rows={3}
                placeholder={`Order request for ${productName}`}
                className="w-full mt-1 border rounded-lg px-3 py-2 outline-none resize-none text-sm"
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-red-600 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
            >
              {loading && <IconLoader2 className="animate-spin" size={16} />}
              {loading ? "Submitting..." : "GET IN TOUCH"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
