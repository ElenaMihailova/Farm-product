import {Ul, Li} from '../../styled/index';
import {useState} from 'react';

export default function Filter({types}) {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <Ul>
      {types.map((type, index) => (
        <Li key={index}>
          <label>
            {' '}
            {type}
            <input
              type='radio'
              name={type}
              checked={selectedType === type}
              onChange={handleTypeChange}
            ></input>
          </label>
        </Li>
      ))}
    </Ul>
  );
}
