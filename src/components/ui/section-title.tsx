interface SectionTitleProps {
  label: string;
  children: React.ReactNode;
}
function SectionTitle(props: SectionTitleProps) {
  return (
    <>
      <p className="text-lg uppercase text-red-600">{props.label}</p>
      <h2 className="mt-8 text-3xl font-bold leading-snug lg:text-5xl lg:leading-normal">
        {props.children}
      </h2>
    </>
  );
}

export default SectionTitle;
