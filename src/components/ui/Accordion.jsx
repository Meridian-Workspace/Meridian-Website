import { useId, useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items, defaultOpenIndex = 1 }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.title}>
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-base font-semibold text-[#052a83] md:text-lg">
                {item.title}
              </span>
              <ChevronDown
                className={clsx(
                  "shrink-0 transition",
                  isOpen ? "rotate-180" : "rotate-0",
                )}
                size={20}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={clsx("px-6 pb-6", isOpen ? "block" : "hidden")}
            >
              <p className="text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>

              {item.cta ? <div className="mt-5">{item.cta}</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
