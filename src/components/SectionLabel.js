const SectionLabel = ({ index, title, subtitle, align = 'left', className = '' }) => (
  <header className={`relative mb-12 md:mb-14 ${align === 'center' ? 'text-center' : ''} ${className}`}>
    {index && (
      <span
        className={`section-index ${align === 'center' ? 'left-1/2 -translate-x-1/2' : ''}`}
        aria-hidden
      >
        {index}
      </span>
    )}
    <h2 className={`section-title relative z-[1] ${align === 'center' ? 'mx-auto' : ''}`}>{title}</h2>
    {subtitle && (
      <p className={`mt-3 text-stone max-w-xl relative z-[1] ${align === 'center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </header>
);

export default SectionLabel;
