"use client";
import Image from "next/image";
import { white, lightGreen, darkGray } from "../utils/colors";

const supportCards = [
  { id: 1, label: "PTCL Directory Services",        image: "/icons/directory.png"      },
  { id: 2, label: "Bill Inquiry",                   image: "/icons/bill.png"           },
  { id: 3, label: "International / Domestic Tariff",image: "/icons/domestic.png"         },
  { id: 4, label: "Complaints & Troubleshoot",      image: "/icons/complaints.png"     },
  { id: 5, label: "Complaint Status",               image: "/icons/status.png"         },
  { id: 6, label: "Video Tutorials",                image: "/icons/tutorials.png"      },
];

export default function Support() {
  return (
    <section className="relative w-full overflow-hidden">

      <Image
        src="/images/support-bg.jpg"
        alt="Support Background"
        fill
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-12 md:py-16">

        <div className="flex items-center  gap-3 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shrink-0">
            <Image
              src="/images/girl.png"
              alt="Support Agent"
              fill
              className="object-cover"
            />
          </div>
          <span
            className="text-lg md:text-xl font-semibold font-swiss"
            style={{ color: white }}
          >
            Support Center
          </span>
        </div>

        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold font-swiss mb-3"
          style={{ color: white }}
        >
          How can we help you?
        </h2>

        <p className="font-swiss text-base md:text-lg mb-1" style={{ color: white }}>
          Call 1218
        </p>
        <p className="font-swiss text-base md:text-lg mb-1" style={{ color: white }}>
          Email: care@ptcl.net.pk
        </p>
        <p className="font-swiss text-base md:text-lg mb-10" style={{ color: white }}>
          WhatsApp 03312181218
        </p>

        <div className="grid  grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-4xl mx-auto">
          {supportCards.map((card) => (
            <button
              key={card.id}
              className="flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="w-16 h-16  md:w-20 md:h-20 rounded-md border-1 border-[lightGreen] flex items-center justify-center shrink-0"
                style={{ backgroundColor: darkGray }}
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  width={36}
                  height={36}
                  className="object-contain w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <span
                className="font-swiss text-xs md:text-sm font-medium leading-tight text-center line-clamp-2"
                style={{ color: white }}
              >
                {card.label}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}