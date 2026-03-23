import { useId, useState } from "react";
import clsx from "clsx";

/**
 * Updated Accordion Component
 * Matches Figma styling with smooth height transitions and multi-open support.
 */
export default function Accordion({
  items,
  defaultOpenIndex = 0,
  className,
  titleClassName,
  contentClassName,
  activeIcon,
  inactiveIcon,
}) {
  const baseId = useId();

  // State as an array allows multiple items to be open simultaneously
  const [openIndices, setOpenIndices] = useState([defaultOpenIndex]);

  const toggleItem = (index) => {
    setOpenIndices(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Close item
          : [...prev, index], // Open item
    );
  };

  return (
    <div
      className={clsx(
        "divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.title} className="relative">
            <button
              id={buttonId}
              type="button"
              className={clsx(
                "flex w-full items-center justify-between gap-4 transition-colors text-left focus:outline-none",
                titleClassName,
              )}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.title}</span>

              {/* Icon Container with subtle rotation/scaling transition */}
              <div className="shrink-0 transition-all duration-300 transform">
                {isOpen ? activeIcon : inactiveIcon}
              </div>
            </button>

            {/* Smooth Height Transition Wrapper using CSS Grid */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={clsx(
                "grid transition-all duration-300 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={clsx(
                    "text-base leading-relaxed",
                    contentClassName,
                  )}
                >
                  {item.description}

                  {/* Optional CTA within the accordion item */}
                  {item.cta && <div className="mt-5">{item.cta}</div>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
