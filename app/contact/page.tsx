"use client";

import { Metadata } from "next";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="kanye-text text-5xl md:text-7xl mb-12">
          GET IN
          <br />
          TOUCH
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              Have questions, suggestions, or want to contribute to this project?
              We'd love to hear from you.
            </p>

            <div className="border-l-4 border-foreground pl-6 space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@aihistory.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@aihistory.com
                </a>
              </div>
            </div>

            <div className="bg-card border-2 border-border p-6 space-y-4">
              <h3 className="text-xl font-black uppercase">Contribute</h3>
              <p className="text-sm text-muted-foreground">
                If you'd like to suggest additional milestones or corrections to our
                timeline, please include detailed information and sources in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border-2 border-border bg-background focus:border-foreground outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border-2 border-border bg-background focus:border-foreground outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-border bg-background focus:border-foreground outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full minimal-button px-6 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
