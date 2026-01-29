import { Briefcase } from 'lucide-react';

const Exptimeline = ({ experiencias = [] }) => {

  
    return (
        <div className="relative py-10">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-800"></div>
        
        <div className="space-y-12">
          {experiencias.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between w-full">
              {/* Left Content (or right if even) */}
              <div className={`w-[45%] ${index % 2 === 0 ? 'text-right' : 'order-last text-left'}`}>
                <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-orange-500/50 transition-all">
                  <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-orange-500 text-sm font-semibold mb-2">{exp.company}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
  
              {/* Center Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-orange-600 p-2 rounded-full border-4 border-black text-white">
                  <Briefcase size={18} />
                </div>
              </div>
  
              {/* Right Date (or left if even) */}
              <div className={`w-[45%] ${index % 2 === 0 ? 'text-left pl-8' : 'pr-8 text-right'}`}>
                <span className="text-neutral-500 font-medium text-sm">{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Exptimeline