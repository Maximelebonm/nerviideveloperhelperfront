import './ImportScreen.css'
import { PackageAndStep } from '../../Components/PackageAndStep/PackageAndStep'
import { useLocation } from 'react-router-dom';
import { getOneLibary } from '../../Api/library/library.api';
import { getStepByLibrary } from "../../Api/Step/step.api";
import { useEffect, useState } from 'react';


export const ImportScreen = () => {
    const location = useLocation()
    const importLoaded = location.state
    const [library, setLibrary] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [step, setStep] = useState([])

    console.log("location", location.state.item.Id_library)

    useEffect(()=>{
        const fetchdata = async ()=>{
            const fecthLibrary = await getOneLibary(location.state.item.Id_library)
            console.log('library',fecthLibrary)
            const fetchSteps = await getStepByLibrary(fecthLibrary[0].Id_library)
            setLibrary(fecthLibrary)
            setStep(fetchSteps)
        }
        fetchdata();
        setIsLoaded(true)
        
    },[]);
        return (
            <div ClassName="importScreenContainer">
               {
                isLoaded ? <PackageAndStep step={step} library={library}/> : null
               }
            </div>
        )
}