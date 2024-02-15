import {VisuallyHiddenInput} from '../../styled';

export default function Checkbox({
  text,
  value,
  isChecked,
  onChange,
  name,
  labelComponent,
  onClick,
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type='checkbox'
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </label>
  );
}
