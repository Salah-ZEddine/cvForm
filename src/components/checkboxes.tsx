import React, { useState } from 'react';

interface Checkbox {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  title: string;
}

function CheckboxGroup(props: CheckboxGroupProps) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== value));
    }
  };

  const checkboxes: Checkbox[] = [
    { label: 'Anglais', value: 'Anglais' },
    { label: 'Arabe', value: 'Arabe' },
    { label: 'Francais', value: 'Francais' },
  ];

  return (
    <div className="checkbox-group">
      <h4 className="checkbox-title">{props.title}</h4>
      {checkboxes.map(checkbox => (
        <label key={checkbox.value} className="checkbox-label">
          <div className='checkbox-wrapper-25'>
          <input
            type="checkbox"
            value={checkbox.value}
            checked={selectedCheckboxes.includes(checkbox.value)}
            onChange={handleCheckboxChange}
          />
          </div>
          {checkbox.label}
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroup;
