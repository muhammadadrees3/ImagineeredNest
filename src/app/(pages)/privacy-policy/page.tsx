"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Bell, Mail } from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, request a service, or communicate with us. This may include your name, email address, phone number, and business details."
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Imagineerednest and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads."
  },
  {
    icon: Shield,
    title: "Data Security",
    content: "We work hard to protect Imagineerednest and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We restrict access to personal information to Imagineerednest employees, contractors, and agents who need to know that information."
  },
  {
    icon: FileText,
    title: "Information We Share",
    content: "We do not share personal information with companies, organizations, or individuals outside of Imagineerednest unless one of the following circumstances applies: with your consent, for external processing, or for legal reasons."
  },
  {
    icon: Bell,
    title: "Changes to This Policy",
    content: "Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of privacy policy changes)."
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at support@imagineerednest.com."
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
            Your privacy is important to us. This policy outlines how Imagineerednest collects, uses, and protects your personal information.
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
                className="group p-8 rounded-3xl bg-muted/5 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
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
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </motion.div>
      </div>
    </main>
  );
}
