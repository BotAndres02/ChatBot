export const Title = ({ headingType, title, ...props }) => { 
const TitleTag = headingType;

return (
  <TitleTag className="text-2xl p-8" {...props}>
    {title}
  </TitleTag>
);
}