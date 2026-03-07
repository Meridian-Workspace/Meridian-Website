import clsx from "clsx";

const buttonStylesByVariant = {
  primary: "bg-brand text-white hover:bg-[#d94e2c]",
  secondary: "bg-white/10 text-white hover:bg-white/15 border border-white/15",
  outline: "border border-slate-300 text-slate-900 hover:bg-slate-50",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-400/60",
        buttonStylesByVariant[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
