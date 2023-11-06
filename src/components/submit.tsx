
function Submit_function(props : any){
 
    const handleSubmit = () =>{
        console.log("Vous avez clicker sur button de soumission");// Pour le moment  mais apres je serais cense d'envoyer data 
    }

    const HandleSubmitButton = () => {
        {props.type === "Submit" && handleSubmit();} 
        {props.type === "Reset" && alert("Veuillez rafrachir votre page");} 
    }

    return(
        <button className="button" onClick={HandleSubmitButton}> {props.type}</button>
    )
    
}

export default Submit_function