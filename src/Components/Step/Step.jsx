import './Step.css';
import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css";
import { useEffect } from 'react';
import { renderTextWithLinks } from '../../Helpers/renderTextWithLinks.helper';
import { library } from '../../Constant/library';


export const Step = (props) => {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    

    const title = props.title;
    const desc = props.desc;
    const imageAfterDesc = props.imageAfterDesc;
    const code = props.code;
    const imageAfterCode = props.imageAfterCode;
    const explication = props.explication;
    const imageAfterExplain = props.imageAfterExplain;
    const language = props.language;

    console.log("step", props)


    return(
        <div className='StepContainer'>
            <article>
            {title && <h2 id="StepTitle">{title}</h2>}
                {desc && <p>{renderTextWithLinks(desc)}</p>}
                {imageAfterDesc && <div className='StepImageContainer'>
                    <img className="StepImage" src={library+imageAfterDesc}/>
                </div>}
            </article>
           {code && 
           <pre className="StepCode">
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>}
            {imageAfterCode && <img className="StepImage" src={library+imageAfterCode}/>}
            <article>
                {explication && <p>{explication}</p>}
            </article>
           {imageAfterExplain && <img className="StepImage" src={library+imageAfterExplain}/>}
        </div>
    )
}