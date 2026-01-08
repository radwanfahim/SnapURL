interface InputProps {
  text: string;
  type: string;
  name: string;
  customClass?: string;
}

const Input = ({ text, type, name, customClass }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={text}
      name={name}
      className={`rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-600 ${
        customClass
      }`}
      required
    />
  );
};

export default Input;
