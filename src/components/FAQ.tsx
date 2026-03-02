import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "What do you need from me to start?",
      a: "A clear understanding of your goals, any existing brand assets, and references for the direction you want to take. We'll guide you through a brief discovery questionnaire."
    },
    {
      q: "How many revisions do I get?",
      a: "Depending on the package, you receive 1 to 3 rounds of structured revisions. We focus on getting the core concept right early to minimize endless tweaking."
    },
    {
      q: "What do I receive at the end?",
      a: "You'll get a comprehensive handoff package including all source files, exported assets in necessary formats (SVG, PNG, JPG), and a clear guide on how to use them."
    },
    {
      q: "Do you write the copy?",
      a: "We provide structural copy guidance and placeholder text for landing pages. If you need full copywriting services, we can partner with a specialist or work with your existing copywriter."
    },
    {
      q: "Can you update/extend later as I grow?",
      a: "Absolutely. Our work is built to be Evolvable. We design systems that scale, so adding new pages, assets, or brand extensions later is seamless."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-bg-base relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-6 text-ink">
            FAQ.
          </h2>
          <p className="text-lg text-ink/60 font-medium max-w-2xl mx-auto text-balance">
            Tight answers to common questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: { q: string, a: string }, index: number, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-black/5 rounded-3xl bg-white overflow-hidden"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
      >
        <span className="text-xl font-semibold text-ink group-hover:text-brand-violet transition-colors pr-8">
          {faq.q}
        </span>
        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-brand-violet/10 transition-colors">
          {isOpen ? (
            <Minus className="w-5 h-5 text-ink group-hover:text-brand-violet transition-colors" />
          ) : (
            <Plus className="w-5 h-5 text-ink group-hover:text-brand-violet transition-colors" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-8 pt-2 text-ink/60 font-medium leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
