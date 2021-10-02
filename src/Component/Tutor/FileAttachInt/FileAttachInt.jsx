import React, {useEffect, useState} from 'react'
import axios from "axios";
import "./FileAttachInt.scss"
import FileAttachmentTable from "./FileAttachmentTable/FileAttachmentTable";
import {LinearProgress} from "@material-ui/core";
import Select from 'react-select'

function FileAttachInt({array4}) {

    //Creating state for storing the meta information.
    const [metaData, setMetaData] = useState({
        name: '',
        price: '',
        description: '',
        course: ''
    });

    //Progress Tracking State.
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState(null);
    const [downloadUri, setDownloadUri] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(null);

    //React Select - Sample Data for the React select.
    const options = [
        { value: 'chocolate1', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    async function getItems () {
        const response = await axios.get("http://localhost:8073/api/courses");
        const data = response.data;
        const options = data.map(item => ({
            "value" : item.id,
            "label" : item.title
        }))
        setSelectedOptions(options);
    }


    const [currentCountry, setCurrentCountry] = useState(null);
    const onchangeSelect = (item) => {
        setCurrentCountry(null);
        setRegion(item);
    };
    const [region, setRegion] = useState("");

    useEffect(()=> {
        getItems();
    }, [])


    //File attachment logic, saved the file in state.
    const onDrop = React.useCallback((selectedFile) => {
        let files = selectedFile.target.files[0];
        setFile(files);
        console.log(file);
        setSuccess(false);
        setProgress(0);
    })

    //Meta information setter testing method.
    const onUpload = (e) => {
        e.preventDefault()
        console.log(metaData.course.label);
        console.log(metaData.name);
        console.log(metaData.price);
        console.log(metaData.description);
    }

    // Clear the Form When click on the Reset.
    const clearForm = () => {
        setMetaData({...metaData, name: "", price: "", description: "", course: ""})
    }

    /**
     * File Uploading methods.
     * **/

    //File Uploading method.
    const uploadFilesv1 =  (e) => {
        e.preventDefault();
        try {
            setSuccess(false);
            setLoading(true);
            const formData = new FormData();
            formData.append("file", file);
            formData.append("name", metaData.name);
            formData.append("price", metaData.price);
            formData.append("course", metaData.course.label);
            formData.append("description", metaData.description);
            const API_URL = "http://localhost:8073/api/single/upload";
            const response =  axios.post(API_URL, formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(percentCompleted);
                },
            });
            setDownloadUri(response.data);
            setSuccess(true);
            setLoading(false);
            setSuccess(false);
            getItems();
        } catch (error) {
            alert(error.message);
        }
    };

    //Alternative File Uplaod method using fetch API.
    const uploadFilesv2 = () => {
        fetch("https://localhost:8073/api/single/upload", {
            mode: 'no-cors',
            method: "POST",
            body: file
        }).then(function (res){
            if(res.ok) {
                alert("Done Uploading!");
            } else if (res.status === 401){
                alert("Error!")
            }
        }, function (e) {alert("Error Submitting Form!")});
    }

    //Testing upload method.
    const uploadFilesv3 = (e) => {
        e.preventDefault();
        if (!file) return;

        let formData = new FormData();
        formData.append("file", file);

        fetch("http://localhost:8073/api/single/upload", {
            method: "POST",
            body: formData
        })
            .then(data => console.log(data.json()));
    };

    /**
     * END ------------- File Uploading methods.
     * **/


    return (
        <div>
            <div className="file-component">
                <div className="input-form-container">
                    <form className="form" onSubmit={uploadFilesv1}>
                        <div className="course-component-header">
                            <div className="section-header">Course Form</div>
                            <div className="second-header">Course Form</div>
                        </div>

                        <label htmlFor="fname">Name</label>
                        <input required type="text" id="fname" name="firstname" placeholder="Your name.."
                               className="form-input"
                               value={metaData.name}
                               onChange={(e) => setMetaData({...metaData, name: e.target.value})}
                        />

                        <label htmlFor="lname">Price</label>
                        <input required type="text" id="lname" name="lastname" placeholder="Price.." className="form-input"
                               value={metaData.price}
                               onChange={(e) => setMetaData({...metaData, price: e.target.value})}
                        />

                        <label htmlFor="lname">Description</label>
                        <input required type="text" id="lname" name="lastname" placeholder="Description.."
                               className="form-input"
                               value={metaData.description}
                               onChange={(e) => setMetaData({...metaData, description: e.target.value})}
                        />

                        <label htmlFor="lname">Course</label>
                        <div className="form-input">
                            <Select options={selectedOptions}
                                    menuPlacement="auto"
                                    menuPosition="fixed"
                                    onChange={(e) => setMetaData({...metaData, course: e})}/>
                        </div>


                        <label htmlFor="lname">Attach the File</label>
                        <input required style={{height: "30px", fontSize: "10px", paddingBottom: "30px", color: "white", fontWeight: "bold"}} onChange={onDrop}  type="file" id="file" name="file" placeholder="Number of Chapters.."
                               className="form-input"/>

                        <div className="course-button-group button-row">
                            <button className="add-button" type="submit">Add</button>
                            <button className="light-button" onClick={clearForm}>Reset</button>
                        </div>
                    </form>
                        <div style={{marginLeft: "19px", marginRight: "10px", paddingBottom: "10px"}}>
                            <label style={{color: "white", fontWeight: "bold"}} htmlFor="lname">File Uploading
                                Progress </label>
                            <LinearProgress variant={"determinate"} value={progress}/>
                        </div>
                </div>
                <div className="file-table">
                    <div className="section-header dark-header"> Active Courses </div>
                    <div id="style-1" className="file-table-body-scrollable">
                        <FileAttachmentTable status={success}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FileAttachInt
