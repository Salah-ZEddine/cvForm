import React, { useState, ChangeEvent } from 'react';

interface RadioButtonsProps {
  value: string;
  option1: string;
  option2: string;
  option3: string;
}

function RadioButtons(props: RadioButtonsProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="radio-container">
      <h4 className='checkbox-title'>{props.value}</h4><br/>
      <div className="radio-options">
        <label>
          <input 
            className='radio-button'
            type="radio"
            value={props.option1}
            checked={selectedOption === props.option1}
            onChange={handleOptionChange}
          />
          {props.option1}
        </label>

        <label>
          <input
            className='radio-button'
            type="radio"
            value={props.option2}
            checked={selectedOption === props.option2}
            onChange={handleOptionChange}
          />
          {props.option2}
        </label>

        <label>
          <input
            className='radio-button'
            type="radio"
            value={props.option3}
            checked={selectedOption === props.option3}
            onChange={handleOptionChange}
          />
          {props.option3}
        </label>
      </div>
    </div>
  );
}

export default RadioButtons;
