type ListProps = {
  items: string[];
};

export const List = ({ items }: ListProps) => {
  return (
    <ul className="mb-6 list-disc pl-5 font-light text-lg leading-normal md:mb-10 md:pl-7 md:text-2xl">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
