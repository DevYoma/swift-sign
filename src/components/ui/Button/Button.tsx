import "./Button.scss";

type ButtonProps = {
  text: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  color?: string;
};

const Button = ({ text, backgroundColor, size, color }: ButtonProps) => {
  const buttonClass = size ? `button-${size}` : "button";
  return (
    <button className={buttonClass} style={{ backgroundColor, color }}>
      {text}
    </button>
  );
};

export default Button;
