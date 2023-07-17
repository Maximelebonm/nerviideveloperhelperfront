import './HomeScreen.css';
import { ButtonNeo } from '../../Components/ButtonNeo/ButtonNeo';
import { Step } from '../../Components/Step/Step';
import nerviiLogo from '../../assets/logo/nerviiBlanc.svg';
import { SelectScreen } from '../SelectScreen/SelectScreen';

export const HomeScreen = () =>{
    return (
   
        <div id="HomeScreenContainer">
            <h1>Nervii Developper Helper</h1>
            <h2>Bienvenue sur NDH et trouver les bons imports pour vos projets</h2>
            <p>
                - Verification de la compatibilité et des mises à jours. <br/>
                - Des tutoriels clair et précis.<br/>
            </p>
            <h2>Ce projet fait parti du groupe</h2>
            <img src={nerviiLogo} id="logoHome"/>
        </div>
    )
}