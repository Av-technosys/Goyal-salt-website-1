"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconSend,
  IconLoader2,
  IconBuildingStore,
  IconClock,
  IconShieldCheck,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const ContactFormPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({
    type: null,
    msg: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    const payload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.phone,
      message: formData.message,
      enquiryFor: "Distributor Enquiry From Website",
    };

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.flag !== 0) {
        setStatus({
          type: "success",
          msg: "Message sent successfully we will reach you shortly in 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(result.msg || "Failed to send email. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Submit Error:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please check your connection and try again.";
      setStatus({ type: "error", msg: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-slate-50/50 to-white min-h-screen relative overflow-hidden">
      
      {/* Decorative Ambient Halos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[450px] bg-gradient-to-b from-red-500/10 via-rose-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-red-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-rose-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 relative z-10">

        {/* ================= HERO HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/90 shadow-2xs mb-4"
          >
            <Sparkles className="w-4 h-4 text-red-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-700">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight"
          >
            Request a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700 font-extrabold">
              Call Back
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Fill out the form below and our team will reach out to you shortly.
          </motion.p>
        </div>

        {/* ================= 3 TOP INTERACTIVE CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
          
          {/* Card 1: Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs">
                <IconMapPin size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Corporate Office</h3>
              <p className="text-sm font-bold text-red-600 mt-1">Jaipur, Rajasthan </p>
              <p className="text-xs text-gray-500 mt-1">Visit us at our headquarters</p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="https://maps.google.com/?q=26.9060079,75.7486966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-red-600 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs">
                <IconPhone size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
              <p className="text-sm font-bold text-red-600 mt-1">+91 7568018883</p>
              <p className="text-xs text-gray-500 mt-1">Mon-Sat 9am to 6pm</p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <a
                href="tel:+917568018883"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-red-600 transition-colors"
              >
                <span>Call Now</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/917568018883?text=Hello%20Goyal%20Salt,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200 transition-colors"
              >
                <IconBrandWhatsapp size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Card 3: Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs">
                <IconMail size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
              <p className="text-sm font-bold text-red-600 mt-1">info@goyalsalt.in</p>
              <p className="text-xs text-gray-500 mt-1">Online support 24/7</p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a
                href="mailto:info@goyalsalt.in"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-red-600 transition-colors"
              >
                <span>Send Email</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* ================= MAIN SPLIT INQUIRY & MAP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT FORM PANEL (Desktop: 7 cols) - STRICT 4 FIELDS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-xl shadow-slate-100 relative overflow-hidden"
          >
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Request a Call Back
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Fill out the form below and our team will reach out to you shortly.
              </p>
            </div>

            {/* Status Alert Notification */}
            <AnimatePresence>
              {status.msg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-2xl text-sm font-semibold flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">{status.msg}</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form with 4 Clean Fields */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* 1. Full Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-800">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all outline-none"
                  />
                </div>

                {/* 2. Email Address */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-800">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all outline-none"
                  />
                </div>

              </div>

              {/* 3. Phone Number with fixed +91 */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-800">
                  Phone Number *
                </label>
                <div className="flex items-center rounded-xl bg-gray-50 border border-gray-200 overflow-hidden focus-within:bg-white focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                  <span className="px-4 py-3 text-sm font-medium text-gray-600 bg-gray-100 border-r border-gray-200">
                    +91
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setFormData((prev) => ({ ...prev, phone: val }));
                    }}
                    placeholder="Enter 10 digit mobile number"
                    className="w-full px-4 py-3 bg-transparent text-sm font-medium text-gray-900 placeholder:text-gray-400 outline-none"
                  />
                </div>
              </div>

              {/* 4. Message */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-800">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you ...."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all outline-none resize-y min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <IconLoader2 className="w-5 h-5 animate-spin" />
                      <span>GET IN TOUCH...</span>
                    </>
                  ) : (
                    <>
                      <IconSend className="w-5 h-5" />
                      <span>GET IN TOUCH</span>
                    </>
                  )}
                </button>
              </div>

              {/* Security Trust Note */}
              <p className="text-center text-[11px] text-gray-500 flex items-center justify-center gap-1.5 pt-1">
                <IconShieldCheck size={15} className="text-emerald-600" />
                <span>100% Confidential & Secure. Your contact details are never shared.</span>
              </p>

            </form>
          </motion.div>

          {/* RIGHT LOCATION & TRUST PANEL (Desktop: 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Corporate Location Details Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-red-600 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                
                <div>
                  <p className="text-xs font-bold text-red-200 uppercase tracking-wider mb-1">
                    VISIT US
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Location</h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1 leading-relaxed">
                    We&apos;re located in Jaipur, India - the heart of India&apos;s salt industry.
                  </p>
                </div>

                <div className="space-y-4 pt-1 text-sm text-white">
                  
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white mt-0.5">
                      <IconMapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Corporate Office</p>
                      <p className="text-xs text-white/90 leading-relaxed">
                        Jaipur, Rajasthan 
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white">
                      <IconPhone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white">+91 7568018883</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white">
                      <IconMail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white">info@goyalsalt.in</p>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/917568018883?text=Hello%20Goyal%20Salt,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white text-red-600 hover:bg-red-50 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                  >
                    <IconBrandWhatsapp size={18} className="text-emerald-600" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-gray-200/80 shadow-md bg-white p-2">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=26.9060079,75.7486966&z=18&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Goyal Salt Office Location"
                  className="w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-gray-800 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  <span>Jaipur Headquarters</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ContactFormPage;
