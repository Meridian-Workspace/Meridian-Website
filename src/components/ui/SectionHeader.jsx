import clsx from "clsx";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  const isCentered = align === "center";

  return (
    <div className={clsx(isCentered ? "text-center" : "text-left")}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
          {eyebrow.toUpperCase()}
        </p>
      ) : null}

      <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#052a83] md:text-3xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
