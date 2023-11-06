import { useState, ChangeEvent } from "react";

interface InputProps {
  Username: string;
  type: string;
  ph: string;
  regex: RegExp;
}

function Input(props: InputProps) {
  const [input, setInput] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

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
      switch (props.type) { //choix d'utilisation de switch afin de faciliter l'affichage d'une message selon le type de l'input
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
          setErrorMessage('');
      }
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <label className='label_area'>{props.Username}</label>
      <input
        type={props.type}
        value={input}
        className='input_area'
        placeholder={props.ph}
        onChange={handleInputChange}
        onBlur={handleBlur} //on'a utiliser ce eventHandler pour qu'on affiche le message qu'apres que l'utilisateur continue l'ecriture de son input
      />
    </div>
  );
}

export default Input;




