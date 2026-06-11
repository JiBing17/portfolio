import { useInView } from '../hooks/useInView';

const SectionReveal = ({ children, className = '', threshold = 0.08 }) => {
  const [ref, visible] = useInView(threshold);

  return (
    <div ref={ref} className={`section-reveal ${visible ? 'section-in' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default SectionReveal;
