const InputEl = ({
  className,
  inputName,
  onChange,
  value,
  type,
  placeholder,
}) => (
  <input
    type={type}
    name={inputName}
    id={inputName}
    className={className}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

InputEl.defaultProps = {
  type: "text",
  className: "blue-input",
  value: "",
  inputName: "",
  onChange: () => {},
  placeholder: "",
};

export default InputEl;
