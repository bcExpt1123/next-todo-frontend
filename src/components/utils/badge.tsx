export const Badge = (props: {
  children?: React.ReactNode;
}) => {
  return (
    <span className="text-xs font-bold rounded-full py-0.5 px-2 bg-secondary-gray text-secondary-light">
      {props.children}
    </span>
  );
}