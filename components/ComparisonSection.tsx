import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const data = [
    {
      need: "Delivery time",
      agency: "2–4 weeks",
      freelancer: "Unpredictable",
      mergelith: "48 hours",
      mergelithHighlight: true
    },
    {
      need: "Monthly cost",
      agency: "$3,000–$10,000+",
      freelancer: "Per project, variable",
      mergelith: "$997 or $1,999 flat",
      mergelithHighlight: true
    },
    {
      need: "Contract required",
      agency: "6–12 months",
      agencyIcon: <X className="w-4 h-4 text-red-500 inline mr-1" />,
      freelancer: "None",
      freelancerIcon: <Check className="w-4 h-4 text-green-500 inline mr-1" />,
      mergelith: "Month-to-month",
      mergelithIcon: <Check className="w-4 h-4 text-green-500 inline mr-1" />,
      mergelithHighlight: true
    },
    {
      need: "Commercial strategy depth",
      agency: "Varies (often thin)",
      freelancer: "Execution only",
      freelancerIcon: <X className="w-4 h-4 text-red-500 inline mr-1" />,
      mergelith: "20+ years GTM expertise",
      mergelithIcon: <Check className="w-4 h-4 text-green-500 inline mr-1" />,
      mergelithHighlight: true
    },
    {
      need: "Consistency of quality",
      agency: "Depends on account team",
      freelancer: "Highly variable",
      freelancerIcon: <X className="w-4 h-4 text-red-500 inline mr-1" />,
      mergelith: "Same senior strategist every time",
      mergelithIcon: <Check className="w-4 h-4 text-green-500 inline mr-1" />,
      mergelithHighlight: true
    },
    {
      need: "Corporate grade output",
      agency: "Sometimes",
      freelancer: "Rarely",
      freelancerIcon: <X className="w-4 h-4 text-red-500 inline mr-1" />,
      mergelith: "Every deliverable",
      mergelithIcon: <Check className="w-4 h-4 text-green-500 inline mr-1" />,
      mergelithHighlight: true
    },
    {
      need: "Cancel anytime",
      agency: "Locked in",
      agencyIcon: <X className="w-4 h-4 text-red-500 inline mr-1" />,
      freelancer: "Yes",
      freelancerIcon: <Check className="w-4 h-4 text-green-500 inline mr-1" />,
      mergelith: "Yes",
      mergelithIcon: <Check className="w-4 h-4 text-green-500 inline mr-1" />,
      mergelithHighlight: true
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-navy italic">How Mergelith Compares</h2>
          <p className="text-navy/60 max-w-2xl mx-auto font-light">
            Not all marketing services are the same. Here's an honest look at how Mergelith stacks up against the two most common alternatives.
          </p>
        </div>

        <div className="overflow-x-auto shadow-2xl border border-navy/10 rounded-sm">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-navy text-pearl uppercase tracking-wider text-[10px] font-black">
                <th className="p-6 text-left border-r border-pearl/10">What You Need</th>
                <th className="p-6 text-left border-r border-pearl/10">Traditional Agency</th>
                <th className="p-6 text-left border-r border-pearl/10">Fiverr / Freelancer</th>
                <th className="p-6 text-left bg-gold/90 text-navy">Mergelith</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-navy/5">
                  <td className="p-6 text-navy/80 border-r border-navy/5">{row.need}</td>
                  <td className="p-6 text-navy/60 border-r border-navy/5">
                    {row.agencyIcon}
                    <span className={row.agency === '6–12 months' || row.agency === 'Locked in' ? 'text-red-600' : ''}>{row.agency}</span>
                  </td>
                  <td className="p-6 text-navy/60 border-r border-navy/5">
                    {row.freelancerIcon}
                    <span className={row.freelancer === 'Highly variable' || row.freelancer === 'Rarely' || row.freelancer === 'Execution only' ? 'text-red-600' : ''}>{row.freelancer}</span>
                  </td>
                  <td className="p-6 text-navy font-black bg-gold/5">
                    {row.mergelithIcon}
                    {row.mergelith}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
