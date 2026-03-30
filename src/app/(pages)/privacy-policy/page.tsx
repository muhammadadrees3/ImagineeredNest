"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell, Mail, Database, RefreshCw, Phone } from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: "We only collect the basic information you choose to provide through our contact form or direct communication: name, email address, phone number (if you want us to call you). We do not require login accounts, and we do not collect unnecessary personal information."
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: "We use your information only to respond to your inquiries, answer your questions, and arrange calls or discuss our services. We do not use your information for unrelated purposes."
  },
  {
    icon: Shield,
    title: "Data Sharing",
    content: "Your information is kept confidential. We do not sell your personal data, nor share your data with third parties. Only our internal team may access your information. We may disclose information only if required by law or a legal authority."
  },
  {
    icon: Database,
    title: "Data Retention",
    content: "We keep your information only for as long as it is needed to respond to your request or complete communication. After that, we delete it securely."
  },
  {
    icon: RefreshCw,
    title: "Your Rights",
    content: "You may request to access, update, or delete your personal information at any time by contacting us at privacy@imagineerednest.com."
  },
  {
    icon: Shield,
    title: "Security",
    content: "We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure."
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at: support@imagineerednest.com or call us at +92 3480550152."
  }
];

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Last updated: March 30, 2026
          </p>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
            Welcome to Imagineerednest. We are an IT services company committed to protecting your privacy and handling your personal information responsibly.
          </p>
          <div className="mt-8 h-1 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.section
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8  rounded-3xl bg-muted/5 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex md:flex-row flex-col items-start gap-6">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {section.title}
                    </h2>
                    <p className="text-foreground/70 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
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
          This Privacy Policy is effective as of March 30, 2026 and may be updated from time to time. Any changes will be posted here.
        </motion.div>
      </div>
    </main>
  );
}