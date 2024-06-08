interface SectionTitleProps {
  label: string;
  children: React.ReactNode;
}
function SectionTitle(props: SectionTitleProps) {
  return (
    <>
      <p className="text-sm uppercase text-red-600 lg:text-base">
        {props.label}
      </p>
      <h2 className="mt-2 text-2xl font-bold leading-snug lg:mt-2 lg:text-4xl lg:leading-normal">
        {props.children}
      </h2>
    </>
  );
}

export default SectionTitle;
