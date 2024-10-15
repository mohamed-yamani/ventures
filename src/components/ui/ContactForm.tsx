"use client";

import Image from "next/image";
import { Input } from "./input";
import { Button } from "./button";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {
      fullName: formData.fullName ? "" : "Full Name is required",
      email: formData.email ? "" : "Email is required",
      subject: formData.subject ? "" : "Subject is required",
      message: formData.message ? "" : "Message is required",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return; // Don't submit if there are errors
    }

    // Handle form submission (send formData to backend or API)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-primary bg-gradient-to-r from-white to-[#bbd0e1] pb-32 pt-32">
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center bg-[#e9a25d] sm:h-96 sm:w-96">
            <Image
              src="/assets/contactform.jpg"
              alt="Contact Form Illustration"
              fill={true}
              className="object-cover"
              priority // Image loads quickly without layout shifts
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute h-16 w-16 -translate-x-36 -translate-y-36 bg-primary sm:h-24 sm:w-24 sm:-translate-x-48 sm:-translate-y-48" />
          <div className="absolute h-8 w-8 -translate-x-28 -translate-y-28 bg-[#1c6fad] sm:h-16 sm:w-16 sm:-translate-x-36 sm:-translate-y-36" />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full px-4"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="sr-only">
            Contact Us
          </h2>
          <div className="mx-auto grid w-full gap-8 md:w-10/12">
            {/* Full Name */}
            <label htmlFor="full-name" className="sr-only">
              Full Name
            </label>
            <Input
              id="full-name"
              name="fullName"
              type="text"
              placeholder="FULL NAME"
              className="h-12 w-full border-b border-primary bg-transparent font-montserrat font-semibold text-primary placeholder-primary placeholder:font-medium"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            {errors.fullName && (
              <p className="text-red-600">{errors.fullName}</p>
            )}

            {/* Email Address */}
            <label htmlFor="email-address" className="sr-only">
              Email Address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              placeholder="EMAIL ADDRESS"
              className="h-12 w-full border-b border-primary bg-transparent font-montserrat font-semibold text-primary placeholder-primary placeholder:font-medium"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}

            {/* Subject */}
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="SUBJECT"
              className="h-12 w-full border-b border-primary bg-transparent font-montserrat font-semibold text-primary placeholder-primary placeholder:font-medium"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            {errors.subject && <p className="text-red-600">{errors.subject}</p>}

            {/* Message */}
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <Input
              id="message"
              name="message"
              type="text"
              placeholder="MESSAGE"
              className="h-12 w-full border-b border-primary bg-transparent font-montserrat font-semibold text-primary placeholder-primary placeholder:font-medium"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            {errors.message && <p className="text-red-600">{errors.message}</p>}

            {/* Submit Button */}
            <Button className="hover:bg-secondary-dark mt-8 h-11 w-full rounded-none bg-secondary font-medium text-white transition">
              SUBMIT MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
