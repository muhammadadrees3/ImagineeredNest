import React from 'react'
import {Lightbulb, ClipboardList, PencilRuler, Code} from "lucide-react"
interface Step {
  icon: any;
  title: string;
  desc: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    icon: Lightbulb,
    title: 'Discover Your Vision',
    desc: 'We understand your goals, study the market, and define the project scope clearly.'
  },
  {
    icon: ClipboardList,
    title: 'Strategize & Plan',
    desc: 'We create a clear roadmap, choose the best technology, and set achievable milestones.'
  },
  {
    icon: PencilRuler,
    title: 'Craft the Design',
    desc: 'Our designers build intuitive and engaging interfaces that users love.'
  },
  {
    icon: Code,
    title: 'Develop & Launch',
    desc: 'We code carefully, test thoroughly, and deliver a reliable, high quality product.'
  },
];

function How_To_Work({ steps }: { steps?: Step[] }) {
  const displaySteps = steps && steps.length > 0 ? steps : DEFAULT_STEPS;

  return (
    <>
      {/* --- How We Work Section --- */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-muted">Our structured approach ensures that every project is delivered on time, within budget, and to the highest quality standards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displaySteps.map((step, idx) => (
              <div key={idx} className=" relative group p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <span className='absolute top-2 right-2 size-10 bg-linear-to-r from-primary to-blue-600 rounded-2xl  group-hover:opacity-50 transition duration-1000 group-hover:duration-200 flex items-center justify-center text-white text-xl'>{idx + 1}</span>
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default How_To_Work