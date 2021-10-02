import React, {useState} from 'react'
import ClassItems from "../../Component/Class/ClassPageInterfaces/ClassItems";
import Footer from "../../Component/Footer/Footer";
import ClassSearch from "../../Component/Class/ClassPageInterfaces/ClassSearch";
import './ClassPage.css'
import {useDispatch, useSelector} from "react-redux";
import {getClasses, getClassesNew} from "../../Action/Class";
import ClassTile from "../../Component/Class/ClassTile/ClassTile";
import axios from "axios";


function ClassPage() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const searchData = useSelector((state) => state.classes.classRecords.records);
    const ClzData = useSelector((state) => state.images?.classNewRecords?.records);
    console.log('#######', ClzData);

    const API_URL_REQ = "http://localhost:8073/api";
    const response = axios.get(API_URL_REQ + '/images');
    console.log('imageeeeeeeeeeeeeee',response);

    React.useEffect(() => {
        dispatch(getClasses());
        dispatch(getClassesNew());
    }, []);
    return (
     
        <div style={{backgroundColor:'#D6D6D6'}}>
            <ClassSearch searchData={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="row">
                {ClzData?.filter((val) => {
                        if(searchTerm == ""){
                            return val
                        }else if(val?.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }else if (val?.description.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    })
                    .map((row) => (
                        console.log('%%%%%%%%%%%%%%%%',row),
                            <div className="col-md-4">
                                <ClassTile rows = {row}/>
                            </div>
                    ))}
            </div>
            <Footer/>
        </div>
    )
}

export default ClassPage;
