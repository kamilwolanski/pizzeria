export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="
        relative inline-block
        font-heading text-3xl font-bold uppercase sm:text-4xl
        after:absolute
        after:left-0
        after:-bottom-3
        after:h-[2px]
        after:w-24
        after:rounded-full
        after:bg-brand-gold
        after:shadow-[0_0_8px_rgba(212,175,55,.25)]
      "
    >
      {children}
    </h2>
  );
}
