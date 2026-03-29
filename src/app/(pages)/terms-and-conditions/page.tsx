"use client";

import { motion } from "framer-motion";
import { Scale, FileCheck, AlertCircle, Ban, HelpCircle, Landmark } from "lucide-react";

const terms = [
  {
    icon: Scale,
    title: "Acceptance of Terms",
    content: "By accessing and using Imagineerednest's services, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services."
  },
  {
    icon: FileCheck,
    title: "Services Provided",
    content: "Imagineerednest provides digital solutions including, but not limited to, web development, app development, UI/UX design, and digital marketing. We reserve the right to modify or discontinue any service at any time without notice."
  },
  {
    icon: AlertCircle,
    title: "User Responsibilities",
    content: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
  },
  {
    icon: Ban,
    title: "Intellectual Property",
    content: "All content provided as part of our services, including text, graphics, logos, and software, is the property of Imagineerednest or its content suppliers and is protected by international copyright laws."
  },
  {
    icon: HelpCircle,
    title: "Limitation of Liability",
    content: "Imagineerednest shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services."
  },
  {
    icon: Landmark,
    title: "Governing Law",
    content: "These terms shall be governed by and construed in accordance with the laws of Pakistan. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts of Pakistan."
  }
];

export default function TermsAndConditions() {
  return (
    <main className="pt-32 pb-20 px-5 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
          <div className="mt-8 h-1 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {terms.map((term, index) => {
            const Icon = term.icon;
            return (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-muted/5 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 mb-6">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {term.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {term.content}
                </p>
              </motion.section>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border text-center text-foreground/50 text-sm"
        >
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </motion.div>
      </div>
    </main>
  );
}
