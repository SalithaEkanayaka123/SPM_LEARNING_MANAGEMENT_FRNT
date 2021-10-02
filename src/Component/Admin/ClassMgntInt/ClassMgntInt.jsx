import React, {useEffect, useState} from 'react';
import './ClassMgntInt.css'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import {useDispatch, useSelector} from "react-redux";
import {addClass, getClasses} from "../../../Action/Class";
import CustomAlert from '../../CustomAlert/CustomAlert'
import {Grid} from "@material-ui/core";
import Select from "react-select";
import data from "bootstrap/js/src/dom/data";
import {fetchTeachers} from "../../../Action/Users";
import axios from "axios";
function ClassMgntInt() {


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tutorName, setTutorName] = useState('');

    const dispatch = useDispatch();

    //Progress Tracking State.
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(file?.name);
    const [downloadUri, setDownloadUri] = useState(0);
    const [teacherOptions, setTeacherOptions] = useState(null);
    console.log('teacherOptions',teacherOptions);
    //teacher data
    const teacherResponse = useSelector((state) => state.userDetails1?.UserDetails?.records?.data);
    console.log('teacherResponse',teacherResponse);

    useEffect(() => {
        console.log('calling')
        dispatch(fetchTeachers());
    },[])


    const formRefresh = () => {
        console.log('form referesh calling');
        setName('');
        setDescription('');
    }

    const uploadedImage = (e) => {
        let file = e.target.files[0];
        console.log(file.name)
        setFile(file.name)
    }


    //Error message
    const errorMessage = useSelector((state: any) => state.classes.classDetails.error);


    const [errorDisplay, setErrorDisplay] = useState("");

    React.useEffect(() => {
        setErrorDisplay(errorMessage);
        setTimeout(() => setErrorDisplay(""), 5000);
    }, [errorMessage]);

    //Success message after inserting leaves
    const successMessage = useSelector((state: any) => state.classes.classDetails.success);

    const [successMessageDisplay, setSuccessMessageDisplay] = useState(successMessage);
    const [errorMessageDisplay, setErrorMessageDisplay] = useState(null);


    React.useEffect(() => {
        setSuccessMessageDisplay(successMessage);
        setTimeout(() => setSuccessMessageDisplay(""), 3000);
    }, [successMessage]);


    async function getTeachers() {
         console.log('Calling get tacher method');
        const data = teacherResponse;
         console.log('Calling get tacher method 2', teacherResponse);
         const options = teacherResponse?.map((item) => (
            console.log('ITEM', item),
            {
            "value" : item.id,
            "label" : item.name
            }))
        setTeacherOptions(options);
         console.log('OPTIONS',options);
    }

    //get teacher data
    useEffect(() => {
        getTeachers();
        setImage(file?.name);
    },[teacherResponse])


    const validation = () => {
        if (tutorName === null) {
            setErrorMessageDisplay("Please select a Tutor");
            return false;
        }else{
            return true;
        }
    }

    //File attachment logic, saved the file in state.
    const onDrop = React.useCallback((selectedFile) => {
        let image = selectedFile.target.files[0];
        setImage(image?.name)
        setFile(image);
        console.log('IMG',image);
        setSuccess(false);
        setProgress(0);
    })

    useEffect(() => {
        if(data){
            const {name,description, tutorName} = data;
            setName(data.name);
            setDescription(data.description);
            setTutorName(data.tutorName);
        }

    }, [data])

    //File Uploading method.
    const handleSubmit =  (e) => {
        e.preventDefault();
        try {
            setSuccess(false);
            setLoading(true);
            const formData = new FormData();
            formData.append("file", file);
            formData.append("name", name);
            formData.append("description", description);
            formData.append("tutorName", tutorName);
            console.log(file);
            console.log(formData);
            const API_URL_REQ = "http://localhost:8073/api/single/upload/image";
            const response =  axios.post(API_URL_REQ, formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(percentCompleted);
                },
            });
            setDownloadUri(response.data);
            console.log('IMG',image);
            if (validation()) {
                const classData = {
                    name,
                    description,
                    tutorName,
                    image
                }
                console.log('CLZ', classData);
                dispatch(addClass(classData));
            }
            setTimeout(() => dispatch(getClasses()), 1000);
            setSuccess(true);
            setLoading(false);
            setSuccess(false);
        } catch (error) {
            alert(error.message);
        }
    };


    // const handleSubmit = (e) => {
    //         e.preventDefault();
    //         setErrorMessageDisplay(null);
    //         handleSubmit1()
    //         if (validation()) {
    //             const classData = {
    //                 name,
    //                 description,
    //                 tutorName,
    //             }
    //             dispatch(addClass(classData));
    //         }
    //         setTimeout(() => dispatch(getClasses()), 1000);
    //     }


        return (
            <React.Fragment>
                <div className="class-component">
                    < div className="input-form-container">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="class-component-header">
                                <div className="class-section-header">Class Form</div>
                                <div className="class-second-header">New class room add here</div>
                            </div>
                            <label htmlFor="name">Class Name</label>
                            <input
                                type="text"
                                id="name" name="classname"
                                placeholder="class name(eg:Grade 10)"
                                className="form-input"
                                value={name}
                                // onChange={(e) => setClassData({...classData, name: e.target.value})}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="description..."
                                className="form-input"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />

                            <label htmlFor="lname">Teacher name</label>
                            <div className="class-form-teacher-input">
                                <Select
                                options={teacherOptions}
                                menuPlacement="auto"
                                menuPosition="fixed"
                                onChange={(e) => setTutorName(e.label)}
                                /></div>

                            {/*<Autocomplete*/}
                            {/*    value={teamName}*/}
                            {/*    id="combo-box-demo"*/}
                            {/*    size="small"*/}
                            {/*    options={teamRecord.data}*/}
                            {/*    getOptionLabel={(option: any) => option.teamName}*/}
                            {/*    onChange={selectTeamName}*/}
                            {/*    disabled={teamDisable}*/}
                            {/*    renderInput={(params) => (*/}
                            {/*        <TextField style={{ width: "100%" }} {...params} label="Team *" variant="outlined" />*/}
                            {/*    )}*/}
                            {/*/>*/}

                            <label htmlFor="lname">Attach the Image</label>
                            <input style={{height: "30px", fontSize: "10px", paddingBottom: "30px", color: "black", fontWeight: "bold"}} onChange={onDrop}  type="file" id="file" name="file" placeholder="Number of Chapters.."
                                   className="class-form-teacher-input"/>
                            <div className="msg">
                            <Grid item direction="column" md={6}>
                                {errorDisplay ? (
                                    <CustomAlert displayText={errorDisplay} severity="warning"/>
                                ) : null}
                                {successMessageDisplay ? (
                                    <CustomAlert
                                        displayText={successMessageDisplay}
                                        severity="success"
                                    />
                                ) : null}
                            </Grid>
                            </div>
                            <div className="course-button-group button-row">
                                <button className="add-button" type="submit">Submit</button>
                                <button className="reset-button" onClick={formRefresh}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
}
export default ClassMgntInt;
