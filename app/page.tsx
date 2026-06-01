"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, Star, Smile, ShieldCheck, Sparkles, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { clinic } from "@/data/clinic";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { doctors } from "@/data/doctors";
import { treatments } from "@/data/treatments";
import { features } from "@/data/features";



export default function DentalClinicTemplate() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-sm">
              <Smile size={22} />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">{clinic.name}</p>
              <p className="text-xs text-slate-500">Dental Clinic Template</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact">
            <Button className="rounded-full bg-sky-600 px-5 hover:bg-sky-700">
              <Calendar className="mr-2 h-4 w-4" /> Book Now
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-50">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                <Star className="h-4 w-4 fill-sky-500 text-sky-500" /> {clinic.rating} rating · {clinic.reviews} Google reviews
              </div>
              <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
                {clinic.tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Replace this copy with the clinic’s main offer. Highlight friendly dentists, painless treatments, flexible payments, and easy appointment booking.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-sky-600 px-7 hover:bg-sky-700">
                    <MessageCircle className="mr-2 h-5 w-5" /> Message on WhatsApp
                  </Button>
                </a>
                <a href="#services">
                  <Button size="lg" variant="outline" className="rounded-full px-7">
                    View Services
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-600" /> {clinic.location}</span>
                <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-600" /> {clinic.phone}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-sky-600" /> Open Mon–Sat</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="relative rounded-[2rem] bg-white p-3 shadow-2xl shadow-sky-100">
                <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-slate-200 to-sky-100 p-6">
                  <div className="flex h-full flex-col justify-end rounded-[1.25rem] bg-white/40 p-6 backdrop-blur-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Hero Image Placeholder</p>
                    <p className="mt-2 text-2xl font-bold">Use a smiling patient, dentist portrait, or clean clinic interior.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map(({ Icon, title, text }) => (
              <Card key={title} className="rounded-3xl border-0 shadow-sm">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-sky-600" />
                  <h3 className="mt-4 text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-slate-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">Services</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Popular dental treatments</h2>
              <p className="mt-4 text-slate-600">Swap these services depending on the clinic. Keep the cards short and lead-focused.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg"
                >
                  <CheckCircle2 className="h-6 w-6 text-sky-600" />
                  <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Short service description goes here. Focus on comfort, results, and easy booking.</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {treatments.map((item) => (
              <Card key={item.title} className="rounded-3xl border-0 shadow-sm">
                <CardContent className="p-7">
                  <p className="text-sm font-semibold text-sky-600">Featured Treatment</p>
                  <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.text}</p>
                  <p className="mt-6 text-xl font-bold">{item.price}</p>
                  <a href="#contact">
                    <Button className="mt-6 w-full rounded-full bg-slate-950 hover:bg-slate-800">Ask About This</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="results" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Smile Results</p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">Before & after gallery</h2>
                <p className="mt-5 text-slate-300">Use this section carefully for real patient results, with consent. Great for whitening, veneers, braces, and smile makeovers.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Before', 'After', 'Clinic', 'Team'].map((label) => (
                  <div key={label} className="flex aspect-square items-end rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800 p-5">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">Reviews</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Trusted by local patients</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <Card key={review.name} className="rounded-3xl border-0 bg-slate-50 shadow-sm">
                  <CardContent className="p-7">
                    <div className="flex gap-1 text-sky-500">
                      {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="mt-5 leading-7 text-slate-700">“{review.text}”</p>
                    <p className="mt-5 font-bold">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
          <div className="grid overflow-hidden rounded-[2rem] bg-sky-600 text-white shadow-xl md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-100">Book an Appointment</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Ready for a healthier smile?</h2>
              <p className="mt-5 text-sky-50">Replace this with a short CTA. Mention flexible schedules, friendly staff, and easy booking.</p>
              <div className="mt-8 space-y-3 text-sky-50">
                <p className="flex items-center gap-3"><Phone className="h-5 w-5" /> {clinic.phone}</p>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> {clinic.location}</p>
              </div>
            </div>
            <div className="bg-white p-8 text-slate-900 md:p-12">
              <div className="space-y-4">
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Full name" />
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Phone number" />
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3">
                  <option>Select service</option>
                  <option>Cleaning</option>
                  <option>Whitening</option>
                  <option>Braces</option>
                  <option>Veneers</option>
                </select>
                <textarea className="min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Message" />
                <Button className="w-full rounded-full bg-sky-600 py-6 hover:bg-sky-700">Send Inquiry</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <p>Website template by Tripod Studio.</p>
        </div>
      </footer>

      <a
        href={clinic.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
        aria-label="Message on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
