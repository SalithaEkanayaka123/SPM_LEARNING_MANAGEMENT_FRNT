import React from 'react'
import ClassItems from "../../Component/Class/ClassPageInterfaces/ClassItems";
import Footer from "../../Component/Footer/Footer";
import ClassSearch from "../../Component/Class/ClassPageInterfaces/ClassSearch";
import './ClassPage.css'
import SucessPopUp from "../../Component/PopupModel/SucessPopUp";

function ClassPage() {
    return (
     
        <div style={{backgroundColor:'#D6D6D6'}}>
            {/*<SucessPopUp/>*/}
            <ClassSearch/>
            <ClassItems/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default ClassPage;
