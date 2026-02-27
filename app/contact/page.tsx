"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    workType: "",
    quantity: "",
    deadline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const workOrder = {
      ...formData,
      createdAt: new Date(),
    };

    console.log("Submitted Work Order:", workOrder);
  };

  return (
    <section className="relative bg-[#141414] py-28 overflow-hidden max-w-[1440px] mx-auto">

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Place Your Work Order
          </h1>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Select your service and provide project details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <h3 className="text-white font-semibold text-lg mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-white/70 text-sm">
                <p><span className="text-white">Email:</span> omgraphicx@gmail.com</p>
                <p><span className="text-white">Phone:</span> +91 9997830465</p>
                <p><span className="text-white">Location:</span> Haridwar, Uttarakhand</p>
              </div>
            </div>

          </div>

          {/* Work Order Form */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition"
                />
              </div>

              {/* Work Type */}
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Work Type
                </label>
                <select
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition"
                >
                  <option value="">Select Work Type</option>
                  <option value="stickers">Stickers</option>
                  <option value="carton">Carton</option>
                  <option value="wedding-cards">Wedding Cards</option>
                  <option value="event-passes">Event Passes</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition"
                />
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition resize-none"
                />
              </div>

              <button
                        data-cursor="print"

                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition"
              >
                Submit Work Order
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}