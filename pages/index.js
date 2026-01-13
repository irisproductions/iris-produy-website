// pages/index.js
import Link from "next/link";
import { motion } from "framer-motion";
import events from "../data/events";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* HERO */}
      <div className="relative h-screen overflow-hidden">
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-red-600">
            IRIS PRODUY
          </h1>
          <p className="mt-4 text-xl tracking-widest">
            CREATING CINEMATIC EXPERIENCES
          </p>
        </div>
      </div>

      {/* EVENTS */}
      <section className="p-10">
        <h2 className="text-3xl text-red-500 mb-6">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map(e => (
            <Link key={e.slug} href={/events/${e.slug}}>
              <div className="bg-zinc-900 hover:scale-105 transition p-4 cursor-pointer">
                <img src={e.image} className="mb-3" />
                <h3 className="text-xl">{e.title}</h3>
                <p className="text-red-400">₹ {e.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}