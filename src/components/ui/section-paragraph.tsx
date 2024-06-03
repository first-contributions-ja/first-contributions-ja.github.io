interface SectionParagraphProps {
  className?: string;
  children: React.ReactNode;
}
function SectionParagraph(props: SectionParagraphProps) {
  return (
    <>
      <p className={`lg:text-lg lg:leading-loose ${props.className}`}>
        {props.children}
      </p>
    </>
  );
}

export default SectionParagraph;
