import { Outlet } from "react-router-dom"
import { HeaderComponent } from "../../Components/Header/HeaderComponent";
import "./BaseScreen.css"

export const BaseScreen =()=>{

    return(
        <>
        <HeaderComponent/>
            <main>
                <Outlet />
            </main>
            {/* <div id="BaseScreenBottomContainer">
                <div id="baseScreenBottomItem1"></div>
                <div id="baseScreenBottomItem2"></div>
                <div id="baseScreenBottomItem3"></div>
                <div id="baseScreenBottomItem4"></div>
                <div id="baseScreenBottomItem5"></div>
                <div id="baseScreenBottomItem6"></div>
            </div>   */}
        </>
    )
}