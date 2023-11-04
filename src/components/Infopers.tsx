import Cmlg from "./Cmlg";
import Profile from "./assets/profilepic.jpg";

type Cvprops = {
  name: string;
  bdate: string;
  bloca: string;
  sf: string;
};
function InfoPers(props: Cvprops) {
  return (
    <div className="card">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <img className="card-pic" alt="Profile picture" src={Profile}></img>
      <h3 className="name">{props.name}</h3>
      <ul className="infos">
        <li>Date de naissance: {props.bdate}</li>
        <li>Lieu de naissance: {props.bloca}</li>
        <li>Situation Familiale: {props.sf}</li>
        <li>
          {" "}
          Élève ingénieur officier de réserve, en première année à l'École
          Mohammadia d'Ingénieurs (EMI).
        </li>
      </ul>
      <Cmlg/>
      <a href="https://www.linkedin.com" target="_blank">
        <i className="fa fa-linkedin-square" id="linkedin"></i><br></br>
      </a>
      <a href="https://www.github.com" target="_blank">
        <i className="fa fa-github-square" id="github"></i><br></br>
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <i className="fa fa-twitter-square" id="twitter"></i><br></br>
      </a>
      <a href="mailto:salahexample@gmail.com" target="_blank">
        <i className="material-icons" id="mail">
          mail
        </i><br></br>
      </a>
      
    </div>
  );
}
export default InfoPers;
