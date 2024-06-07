interface SectionParagraphProps {
  className?: string;
  children: React.ReactNode;
}
function SectionParagraph(props: SectionParagraphProps) {
  return (
    <>
      <p className={`${props.className}`}>{props.children}</p>
    </>
  );
}

export default SectionParagraph;
