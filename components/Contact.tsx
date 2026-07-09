"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import IconBadge from "./IconBadge";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

const infoIcons = [Mail, Phone, MapPin];

export default function Contact({ hideHeader }: { hideHeader?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { dict } = useLanguage();
  const t = dict.contact;
  const info = t.info.map((item, i) => ({ ...item, icon: infoIcons[i] }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "100px 0px 0px 0px" }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          email_subject: `[Rad Science 문의] ${form.org || "미기재"} - ${form.name}`,
          receiver_email: "contact@radscience.ai.kr",
          from_name: form.name,
          from_org: form.org || "미기재",
          from_email: form.email,
          user_message: `연락처: ${form.phone || "-"}\n\n${form.message}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.form.errorDefault);
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm text-gray-800 placeholder-gray-400";

  return (
    <section id="contact" className="py-20 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <div ref={ref} className="section-reveal text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100 mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.subtitle}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {info.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <IconBadge icon={item.icon} />
                <div>
                  <p className="text-xs font-semibold text-gray-400 mb-0.5">{item.title}</p>
                  <p className="font-semibold text-gray-900">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t.success.title}</h3>
                <p className="text-gray-500 text-sm">{t.success.desc}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold"
                >
                  {t.success.resetButton}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t.form.nameLabel}</label>
                    <input
                      required
                      className={inputCls}
                      placeholder={t.form.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t.form.orgLabel}</label>
                    <input
                      className={inputCls}
                      placeholder={t.form.orgPlaceholder}
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t.form.emailLabel}</label>
                    <input
                      required
                      type="email"
                      className={inputCls}
                      placeholder={t.form.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t.form.phoneLabel}</label>
                    <input
                      className={inputCls}
                      placeholder={t.form.phonePlaceholder}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t.form.messageLabel}</label>
                  <textarea
                    required
                    rows={5}
                    className={inputCls + " resize-none"}
                    placeholder={t.form.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold rounded-xl transition-colors shadow-md hover:shadow-blue-300 text-sm"
                >
                  {submitting ? t.form.submitting : t.form.submit}
                </button>
                <p className="text-xs text-gray-400 text-center">{t.form.footNote}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
