import PhotoUpload from '../components/photo';
import Input from '../components/input';
import Autres from '../components/autres';
import Select from '../components/select';
import RadioButtons from '../components/radiobuttons';
import CheckboxGroup from '../components/checkboxes';
import Submit_function from '../components/submit';


import './App.css';




function MyForm (){
    return(
      < div className="body_pr">
      <div className="body">
        <form>
        <div className="Fieldsets_container">
        <fieldset className="personal_info_fieldset">
           <legend className="personal_info">Informations personnelles</legend>
           <PhotoUpload/>
           <br/>
           <Input 
              Username= "Prenom:" 
              type="text"
              ph="Steve"
              regex={/^[A-Z][a-zA-Z]*$/}
            />
            <Input 
              Username= "Nom:" 
              type="text"
              ph="Jobs"
              regex={/^[A-Z][A-Z][A-Z]*$/}
            />
            <Input 
              Username= "Date de naissance:" 
              type="date"
              ph=""
              regex={/^$/ }


            />
            <Input 
              Username= "Adresse:" 
              type="adresse"
              ph="Hay riad 2,Rabat"
              regex={/[^a-zA-Z0-9\s]/}
            />
            <br/>
            <RadioButtons value= "Situation familiale:" option1="Mariee" option2 ="Divorcee" option3="Celibataire" />
            <br/>
            <label>Description de profil:</label>
            <textarea placeholder="Decrire votre profil"> </textarea>

            
            
        </fieldset>  
        <br/>
        <fieldset className="professional_info_fieldset">
           <legend className="professional_info">Informations professionelles</legend>
           <Input 
              Username= "Type de Baccalaureat:" 
              type="text"
              ph="Sciences Physiques"
              regex={/^$/}
            />
            < Select/>
            <label>Competences techniques:</label>
            <textarea placeholder="Competent en languages de developpemnt full-stack..."> </textarea>

            <CheckboxGroup title= "Competences linguistqiues:"/>
            <Autres/>



        </fieldset>
        <br/>
        <fieldset className="contact_info_fieldset">
           <legend className="contact_info">Contact</legend>
           <Input 
              Username= "Entrer votre e-mail:" 
              type="email"
              ph="example@domain"
              regex={/^[A-Za-z0-9](\.?[A-Za-z0-9]){5,}@gmail\.com$/}
            />
            <Input 
              Username= "Entrer votre numero de telephone:" 
              type="number"
              ph="+212 6 66 77 88 99"
              regex = {/^\+212\s\d{9}$/}
            
            />
            <Input 
              Username= "Entrer votre lien Linked-in:" 
              type="url"
              ph=""
              regex={/^$/}
            />
            <Input 
              Username= "Entrer votre Github: " 
              type="url"
              ph=""
              regex={/^$/}
            />


        </fieldset><br/>
        
        <div className="Submit_buttons">
            <Submit_function type="Submit" className="submit"/> <br/><br/>
            <Submit_function type="Reset" className="reset"/>

        </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
