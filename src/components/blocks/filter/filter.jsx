import {Ul, Li} from '../../styled/index';
import Checkbox from '../../ui/checkbox/checkbox';

export default function Filter({
  types,
  labelComponent,
  selectValues,
  name,
  onChange,
  onClickLabel = () => {},
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {types.map((type, index) => (
        <Li key={type.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(type.value)}
            name={name}
            value={type.value}
            text={type.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </Li>
      ))}
    </Ul>
  );
}
