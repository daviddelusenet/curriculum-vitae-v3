type DetailsTableProps = {
  items: { label: string; value: string }[];
};

export const DetailsTable = ({ items }: DetailsTableProps) => {
  return (
    <dl className="text-base leading-normal md:text-xl">
      {items.map(({ label, value }) => (
        <div key={label} className="flex">
          <dt className="w-45 shrink-0 pr-5 md:w-60">{label}</dt>
          <dd className="grow font-light italic">{value}</dd>
        </div>
      ))}
    </dl>
  );
};
