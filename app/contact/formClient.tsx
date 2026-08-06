"use client";
import React, { useState } from "react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconSend,
  IconLoader2,
} from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  note: string;
}

const ContactFormPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({
    type: null,
    msg: "",
  });

  const handleSubmit = async (e: React.FormEvent<ContactFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    const form = e.currentTarget;

    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      mobile: form.elements.phone.value,
      message: form.elements.message.value,
      enquiryFor: "Distributor Enquiry From Website",  
    };

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Message sent successfully we will reach you shortly in 24 hours." });
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send email");
      }
    } catch (err: unknown) {
      console.error("Submit Error:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setStatus({ type: "error", msg: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard
              icon={<IconMapPin className="h-6 w-6" />}
              title="Corporate Office"
              value="Jaipur, Rajasthan "
              note="Visit us at our headquarters"
            />
            <InfoCard
              icon={<IconPhone className="h-6 w-6" />}
              title="Call Us"
              value="+91 7568018883"
              note="Mon-Sat 9am to 6pm"
            />
            <InfoCard
              icon={<IconMail className="h-6 w-6" />}
              title="Email Us"
              value="info@goyalsalt.in"
              note="Online support 24/7"
            />
          </div>
        </div>

        <div className="bg-[#F8FAFC] min-h-screen py-16 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="rounded-3xl border-none shadow-xl bg-white">
                <CardContent className="p-10 md:p-16">
                  <h1 className="text-sm font-bold text-red-600 uppercase tracking-wider">
                    Get in Touch
                  </h1>
                  <h2 className="mt-4 text-4xl font-serif font-bold text-[#111827]">
                    Request a Call Back
                  </h2>
                  <p className="mt-4 text-gray-500 text-lg">
                    Fill out the form below and our team will reach out to you
                    shortly.
                  </p>

                  {status.msg && (
                    <div
                      className={`mt-6 p-4 rounded-xl text-sm font-medium ${
                        status.type === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {status.msg}
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-10 grid gap-6 md:grid-cols-2"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="bg-gray-50 border-gray-100 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="bg-gray-50 border-gray-100 h-12"
                      />
                    </div>

                   <div className="md:col-span-2 space-y-2">
  <label className="text-sm font-semibold">Phone Number</label>

  <div className="flex items-center bg-gray-50 border border-gray-100 rounded-md h-12 overflow-hidden">
    {/* +91 fixed */}
    <span className="px-4 text-gray-600 font-medium border-r border-gray-200">
      +91
    </span>

    {/* number input */}
    <input
      name="phone"
      type="text"
      placeholder="Enter 10 digit mobile number"
      className="flex-1 h-full px-4 bg-transparent outline-none"
      inputMode="numeric"
      maxLength={10}
      onInput={(e) => {
        const input = e.currentTarget;
        input.value = input.value.replace(/\D/g, "").slice(0, 10);
      }}
      required
    />
  </div>
</div>


                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-semibold">Message *</label>
                      <Textarea
                        name="message"
                        required
                        placeholder="How can we help you ...."
                        className="bg-gray-50 border-gray-100 min-h-120px"
                      />
                    </div>

                    <Button
                      disabled={loading}
                      type="submit"
                      className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white h-14 text-lg rounded-xl flex gap-2 transition-all"
                    >
                      {loading ? (
                        <IconLoader2 className="animate-spin" />
                      ) : (
                        <IconSend size={20} />
                      )}
                      {loading ? "GET IN TOUCH..." : "GET IN TOUCH"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-4">
                  VISIT US
                </p>
                <h2 className="text-5xl font-serif font-bold text-[#111827] mb-6">
                  Our Location
                </h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                  We&apos;re located in Jaipur, India - the heart of India&apos;s
                  salt industry.
                </p>

                <div className="bg-red-600 text-white p-10 rounded-3xl shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <IconMapPin className="mt-1 shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-lg leading-tight">
                          Corporate Office
                        </p>
                        <p>
                          
                          Jaipur, Rajasthan 
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <IconPhone size={22} />
                      <p className="font-medium">+91 7568018883</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IconMail size={22} />
                      <p className="font-medium">info@goyalsalt.in</p>
                    </div>
                  </div>
                </div>

<div className="mt-8 overflow-hidden rounded-3xl shadow-lg h-64">
  <iframe
    src="https://www.google.com/maps?q=26.9060079,75.7486966&z=18&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>
                      

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoCard = ({ icon, title, value, note }: InfoCardProps) => (
  <Card className="rounded-2xl text-center border-none shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-8">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-red-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 font-medium text-red-600">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{note}</p>
    </CardContent>
  </Card>
);

export default ContactFormPage;
