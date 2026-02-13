"use client";

import { EVENTS_CONTENT } from "@/lib/constants";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  return { day, month };
}

export function EventsSection() {
  return (
    <section id="agenda" className="py-24 md:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-title text-white/50">{EVENTS_CONTENT.title}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight">
            {EVENTS_CONTENT.subtitle}
          </h2>
        </div>

        {/* Events List */}
        <div className="space-y-0">
          {EVENTS_CONTENT.events.map((event) => {
            const { day, month } = formatDate(event.date);
            return (
              <div
                key={event.id}
                className="group border-t border-white/10 py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-white/5 transition-colors px-4 -mx-4"
              >
                {/* Date */}
                <div className="flex items-baseline gap-2 md:w-32 shrink-0">
                  <span className="text-3xl md:text-4xl font-bold text-white">{day}</span>
                  <span className="text-sm text-white/50 uppercase">{month}</span>
                </div>

                {/* Venue & City */}
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {event.venue}
                    {"note" in event && (
                      <span className="ml-2 text-sm font-normal text-white/40">
                        ({event.note})
                      </span>
                    )}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {event.city}, {event.country}
                  </p>
                </div>

                {/* Ticket Button */}
                <div className="md:w-40 shrink-0">
                  {event.soldOut ? (
                    <span className="text-sm uppercase tracking-widest text-white/30">
                      Sold Out
                    </span>
                  ) : (
                    <a
                      href={event.ticketUrl}
                      className="inline-block text-sm uppercase tracking-widest text-[#00f5ff] hover:text-white transition-colors"
                    >
                      Tickets →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
