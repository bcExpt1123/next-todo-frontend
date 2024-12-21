export const Input = (props: {
  id: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <input
      id={props.id}
      name={props.name}
      defaultValue={props.defaultValue}
      className="p-4 bg-primary-gray border border-secondary-gray rounded-lg text-sm placeholder-disabled-light text-secondary-light"
      placeholder={props.placeholder}
      required={props.required}
    />
  );
}