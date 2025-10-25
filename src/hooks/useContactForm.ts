import { useState } from "react";
import emailjs from "emailjs-com";
import { ContactFormData } from "../types";

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateMobile = (mobile: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(mobile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateMobile(formData.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError(""); // Clear any previous errors

    emailjs
      .send(
        "service_hyun7bp", // Replace with your EmailJS Service ID
        "template_ue9h976", // Replace with your EmailJS Template ID
        formData as unknown as Record<string, unknown>,
        "3S6NM-4fBa5NUTFWQ" // Replace with your EmailJS User ID
      )
      .then(() => {
        setIsSubmitting(true);
      })
      .catch(() => {
        alert("Failed to send the message. Please try again.");
      });

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset form
    }, 2000);
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit,
  };
};
