import "./PackageAndStep.css";
import { Step } from "../Step/Step";

export const PackageAndStep =({step,library})=> {
    const tab = step;
   
    return(
        <div id="packageAndScreenContainer">
           {tab.map( (el, index) =>{
                return <Step key={index} 
                language={library[0].language}
                title={el.title}
                desc={el.description}
                imageAfterDesc={el.imageafterdesc}
                code={el.code}
                imageAfterCode={el.imageaftercode}
                explication={el.explication}
                imageAfterExplain={el.imageafterexplain}
                />
            })}   
        </div>
    )
}