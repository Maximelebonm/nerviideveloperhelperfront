import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCategoryLibrary } from "../../Api/libraryCategory/libraryCategory.api";
import { getLibraryByCategory} from "../../Api/library/library.api";
import {motsClefHelper} from "../../helpers/mots_clef.helper"

import './SelectScreen.css'
export const SelectScreen =(props)=> {
    const [isLoaded, setIsLoaded] = useState(false)
    const [selectionFramework, setSelectionFrameWork] = useState('0');
    const [listCategoryLibrary, setListCategoryLibrary]= useState([]);
    const [listCategoryFiltered, setListCategoryFiltered] = useState([])

    console.log(selectionFramework)

    useEffect(()=>{
        const fetchdata = async ()=>{
            const fecthAllCategoryLibrary = await getAllCategoryLibrary()
            // console.log('library',fecthAllCategoryLibrary)
            setListCategoryLibrary(fecthAllCategoryLibrary)
        }
        fetchdata();
        setIsLoaded(true)
        
    },[]);

    useEffect(()=>{
        if(selectionFramework != '0'){
            const fetchdata = async ()=>{
                const fecthLibraryByCategory = await getLibraryByCategory(selectionFramework)
                console.log('libraryByCategory',fecthLibraryByCategory)
                setListCategoryFiltered(fecthLibraryByCategory)
                
            }
            fetchdata();

        }
        // console.log('filter',filteredCategory)
    },[selectionFramework]);
    
    //console.log(listCategoryFiltered);

    return (
        <>
        <div id="selectedScreenButtonContainer">

        {listCategoryLibrary != 0 ? 
            listCategoryLibrary.map((item, index)=>{
                console.log(item)
                return (
                    <button className="SelectScreenButton" key={index} onClick={()=>{
                        setSelectionFrameWork(item.Id_libraryCategory
                            )}}>
                    {item.name}
                </button>
            ) 
            
        })
        : null}
        </div>
        <div id="selectedScreenListContainer">

            {listCategoryFiltered.length != 0 ? listCategoryFiltered.map((item, index)=>{
                console.log("mapSelect")
                
                return (
                    <Link key={index} to={`/library/${item.framework}/${item.name}`} state={{item}} className="SelectedScreenItemList">
                                <div>
                                  {item.name}
                                </div>
                                <div id={"selectedScreenRightContainer"}>
                                    <div>
                                    {item.language}
                                    </div>
                                    <div id="selectedScreenMotClef">
                                        {motsClefHelper(item.mots_clef)}
                                    </div>
                                </div>
                            </Link>
                    )
                }): null}
        </div>
        </>
    )
}