import React, { useState, ChangeEvent } from "react";

interface InputProps {
  username: string;
  type: string;
  ph: string;
  regex: RegExp;
}

function Input(props: InputProps) {
  const [input, setInput] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);

  const isValueValid = (input: string) => {
    return props.regex.test(input);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const valid = isValueValid(value);

    setInput(value);
    setIsValidInput(valid);
  };

  const handleBlur = () => {
    if (!isValidInput) {
      switch (props.type) {
        case 'text':
          alert(
            'Format de texte invalide, le nom doit être tout en majuscule et le prénom la première lettre en majuscule'
          );
          break;
        case 'email':
          alert('Format email invalide');
          break;
        case 'adresse':
          alert("Format d'adresse invalide, veuillez ne pas utiliser des caractères spéciaux");
          break;
        case 'number':
          alert('Format numéro de téléphone invalide');
          break;
        default:
          // Handle other input types if needed
      }
    }
  };

  return (
    <div>
      <label className='label_area'>{props.username}</label>
      <input
        type={props.type}
        value={input}
        className='input_area'
        placeholder={props.ph}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Input;
