"use client";
import React from "react";

export default function EnquiriesSection({ data, location }) {
  if (!data) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center border border-white/5 mx-auto rounded-3xl mt-12 opacity-10">
        <div className="font-mono text-[10px] tracking-[.5em]">CONTENT NOT CONFIGURED FOR {location?.toUpperCase()}</div>
      </div>
    );
  }

  return (
    <section className="w-[90%] md:w-[88%] bg-black min-h-[80vh] mx-auto md:ml-[7vw] mt-[10vw] md:mt-[7vw] rounded-[4vw] md:rounded-[2vw] text-white font-mono flex flex-col md:flex-row overflow-hidden shadow-2xl border border-[#1F2739]">

      {/* LEFT SIDE - Info & Events */}
      <div className="w-full md:w-[32vw] border-b md:border-b-0 md:border-r border-[#1F2937] px-[8vw] md:px-[4vw] py-[8vw] md:py-[4vw] flex flex-col justify-start bg-[#080808]">
        <div className="mb-8 opacity-90 transition-all hover:opacity-100">
          <svg src="/logo.svg" className="w-[60vw] md:w-[200px] h-auto" />
          {/* Using a placeholder SVG stroke or the logo if available */}
        </div>

        <p className="text-white/50 text-[3.5vw] md:text-[.95vw] mb-[8vw] md:mb-[5vw] font-light leading-relaxed">
          <strong className="text-white text-lg block mb-4 font-peakers tracking-wider">{data.heading || "Planning a celebration?"}</strong>
          {data.description}
        </p>

        <div className="flex flex-col gap-[3vw] md:gap-[1.5vw]">
          {data.events?.map((event, idx) => (
            <div key={idx} className="flex items-center gap-[4vw] md:gap-[1.2vw] group transition-all">
              <div className="w-[8vw] md:w-[32px] h-[8vw] md:h-[32px] flex items-center justify-center bg-white/5 rounded-md group-hover:bg-white/10 group-hover:scale-110 transition-all">
                <div className="w-1 h-1 bg-white opacity-20 group-hover:opacity-100 rounded-full" />
              </div>
              <span className="text-[3.5vw] md:text-[1.1vw] tracking-[0.2em] font-light uppercase group-hover:pl-2 transition-all">{event.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - Contact Form */}
      <div className="w-full md:w-[57vw] px-[6vw] md:px-[5vw] py-[8vw] md:py-[4vw] flex flex-col bg-black">

        <div className="flex items-center gap-[4vw] mb-[8vw] md:mb-[3vw]">
          <h2 className="text-[6vw] md:text-[2.2vw] tracking-[0.1em] font-bold whitespace-nowrap font-peakers">
            GET IN TOUCH
          </h2>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        <form className="flex flex-col gap-[6vw] md:gap-[2.5vw]">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vw] md:gap-[2vw]">
            {data.formFields?.filter(f => f.type !== 'textarea').map((field, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <label className="text-[2.8vw] md:text-[0.7vw] tracking-[0.2em] font-medium text-white/40 uppercase">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="bg-transparent text-[4vw] md:text-[1.1vw] border-b border-white/10 px-0 py-3 text-white placeholder-white/10 focus:outline-none focus:border-white/40 transition-all font-light"
                />
              </div>
            ))}
          </div>

          {/* Textareas */}
          {data.formFields?.filter(f => f.type === 'textarea').map((field, idx) => (
            <div key={idx} className="flex flex-col gap-3 mt-4">
              <label className="text-[2.8vw] md:text-[0.7vw] tracking-[0.2em] font-medium text-white/40 uppercase">
                {field.label}
              </label>
              <textarea
                rows={3}
                placeholder={field.placeholder}
                className="bg-transparent border-b border-white/10 py-3 text-white placeholder-white/10 resize-none focus:outline-none focus:border-white/40 transition-all font-light"
              />
            </div>
          ))}

          {/* SUBMIT BUTTON */}
          <div className="mt-[6vw] md:mt-[2vw]">
            <button
              type="submit"
              className="w-full md:w-auto bg-white text-black px-[8vw] md:px-[3vw] py-[4vw] md:py-[1.2vw] rounded-full text-[3.8vw] md:text-[1vw] tracking-[0.3em] font-bold hover:bg-white/90 active:scale-95 transition-all shadow-[0_20px_40px_-5px_rgba(255,255,255,0.1)] uppercase"
            >
              {data.buttonText || "Send Inquiry"}
            </button>
          </div>

        </form>
      </div>

    </section>
  );
}