import classNames from "classnames";

interface SectionProps {
  children?: React.ReactNode;
  className?: string;

  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  const SectionClass = classNames("px-16 py-8", className);

  return (
    <section id={id} className={SectionClass}>
      {children}
    </section>
  );
};

export default Section;
