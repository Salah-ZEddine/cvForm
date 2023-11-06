import React, { useState, ChangeEvent } from 'react';

function Select(props: any) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label className='label_st' >Donner votre diplome:</label>
      <select className='Select_area' onChange={handleSelectChange}>
        <option value="DEUG" className='Select_option'>DEUG</option>
        <option value="DEUST" className='Select_option'>DEUST</option>
        <option value="LICENCE" className='Select_option'>LICENCE</option>
        <option value="MASTER" className='Select_option'>MASTER</option>
        <option value="IE" className='Select_option'>INGENIEUR D'ETAT</option>
        <option value="MS" className='Select_option'>MASTER SPECIALISE</option>
        <option value="PhD" className='Select_option'>DOCTORAT</option>
      </select>
    </div>
  );
}

export default Select;
