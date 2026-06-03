import { FaLongArrowAltRight } from 'react-icons/fa';

const variants = {
  primary: 'bg-red-700 text-brand-white border-red-700',
  ghost: 'border-brand-gold/80 bg-black/10 text-brand-white',
  dark: 'border-brand-gold/80 bg-brand-white text-ink',
  map: 'border-brand-gold text-brand-white',
} as const;

type ArrowLinkVariant = keyof typeof variants;

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ArrowLinkVariant;
  className?: string;
}

export function ArrowLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: ArrowLinkProps) {
  return (
    <a className={`btn-base ${variants[variant]} ${className}`} href={href}>
      {children}
      <FaLongArrowAltRight aria-hidden="true" />
    </a>
  );
}
