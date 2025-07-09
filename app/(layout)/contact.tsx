"use client";
import React, { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    // Clear specific field error when user starts typing
    if (errors[id as keyof ContactFormData]) {
      setErrors({
        ...errors,
        [id]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: process.env.NEXT_PUBLIC_TO_EMAIL!,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="flex flex-col gap-4 px-5 mt-20">
      <h2 className=" lg:sr-only block text-text-white text-sm font-bold uppercase tracking-wide">
        Contact
      </h2>

      <p className="text-text-white">
        Are you looking for a junior full stack dev that is eager to learn and
        work? Get in touch with me.
      </p>

      <form onSubmit={handleSubmit} autoComplete="off">
        {status && (
          <div
            className={`p-3 rounded mb-4 ${
              status.includes("successfully")
                ? "bg-text-white text-bg-gray-50 border "
                : "bg-text-hover text-bg-gray-50 border "
            }`}
          >
            {status}
          </div>
        )}

        <div className="relative z-0 mt-5">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
              errors.name
                ? "border-text-hover focus:border-text-hover"
                : "border-text-brown focus:border-text-white"
            }`}
            placeholder=" "
          />
          <label
            htmlFor="name"
            className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${
              errors.name
                ? "text-text-hover peer-focus:text-text-hover"
                : "text-text-brown peer-focus:text-text-white"
            }`}
          >
            What is your name?
          </label>
          {errors.name && (
            <p className="text-text-hover text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="relative z-0 mt-8">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
              errors.email
                ? "border-text-hover focus:border-text-hover"
                : "border-text-brown focus:border-text-white"
            }`}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${
              errors.email
                ? "text-text-hover peer-focus:text-text-hover"
                : "text-text-brown peer-focus:text-text-white"
            }`}
          >
            Your email
          </label>
          {errors.email && (
            <p className="text-text-hover text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative z-0 mt-8">
          <input
            type="text"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer ${
              errors.message
                ? "border-text-hover focus:border-text-hover"
                : "border-text-brown focus:border-text-white"
            }`}
            placeholder=" "
          />
          <label
            htmlFor="message"
            className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${
              errors.message
                ? "text-text-hover peer-focus:text-text-hover"
                : "text-text-brown peer-focus:text-text-white"
            }`}
          >
            Your message
          </label>
          {errors.message && (
            <p className="text-text-hover text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex justify-between items-center my-5">
          <p className="text-text-brown">
            Please do not enter any sensitive data
          </p>

          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded-full font-medium cursor-pointer transition-all ease-in-out ${
              isLoading
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-text-white text-bg-gray-50 hover:bg-text-hover hover:text-white"
            }`}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      <p className="text-text-brown font-light text-sm w-full mt-5 mb-10">
        Designed in<span className="text-text-hover font-bold"> Figma </span>
        and built with <span className="text-text-white font-bold">NextJS</span>
         and <span className="text-text-white font-bold">Tailwind CSS</span> by
        yours truly.
      </p>
    </section>
  );
};

export default Contact;
