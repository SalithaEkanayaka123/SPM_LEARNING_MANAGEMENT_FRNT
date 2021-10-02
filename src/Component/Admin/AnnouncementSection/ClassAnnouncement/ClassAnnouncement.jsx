import React, {useEffect, useState} from 'react'
import './ClassAnnouncement.css'
import CustomButton from "../../../Tutor/CourseMgntInt/CustomButtons/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {addAnnouncement, getAnnouncements} from "../../../../Action/Announcement";
import Select from "react-select";
import {InputLabel, MenuItem} from "@material-ui/core";
import {getClasses} from "../../../../Action/Class";

import {Form} from "react-bootstrap";

const customStyles = {
    menu: (provided, state) => ({
        ...provided,
       color:'black',
    })
}

const ClassAnnouncement = () =>{

    const[header, setHeader] = useState('');
    const[body, setBody] = useState('');
    const[name, setName] = useState('');
    const[classOptions, setClassOptions] = useState(null);

    const dispatch = useDispatch();
    const classResponse = useSelector((state) => state.classes.classRecords.records);

    useEffect(() => {
        dispatch(getClasses());
    },[])

    async function getClass() {
        const data = classResponse;
        console.log('Calling get tacher method 2', classResponse);
        const options = classResponse?.map((item) => (
            console.log('ITEM', item),
                {
                    "value" : item.id,
                    "label" : item.name
                }))
        setClassOptions(options);
        console.log('OPTIONS',options);
    }

    //get teacher data
    useEffect(() => {
        getClass();
    },[classResponse])


    const validationData = () => {
        if(header === null){

        }else if(body === null){

        }else if(name === null){

        }else{

        }
    }

    const resetForm = () => {
        setHeader('');
        setBody('');
        setName('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('CALLING')
        // if(validationData()){
            const announcementData = {
                header,
                body,
                name
            }
        console.log('DATA ', announcementData)
            dispatch(addAnnouncement(announcementData));
        setTimeout(function(){
            dispatch(getAnnouncements());
            //props.setTrigger(false)
        }, 100);
            resetForm();
            console.log('DATA added')
        // }
        // setTimeout(() => dispatch(getAnn()), 1000);
    }

    return (
        <React.Fragment>
        <div className="class-announcement-container">
            <div className="class-announcement-header">
                <div className="class-announcement-section-header light">
                    Announcements
                </div>
                <div className="class-announcement-second-header">
                    Latest
                </div>
                <div className="class-announcement-body">
                    <div className="input-form-container">
                        <Form className="form" onSubmit={handleSubmit}>
                            <label> Heading</label>
                            <div>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="Announcement Heading Comes here..."
                                    className="form-input"
                                    value={header}
                                    onChange={(e) => setHeader(e.target.value)}
                                    required
                                />
                            </div>
                            <label> Body</label>
                            <div>
                            <textarea
                                type="text"
                                id="fname" name="firstname"
                                placeholder="Announcement body comes here..."
                                className="form-area"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            />
                            </div>
                            <InputLabel id="label">Class name</InputLabel>
                            <div className="clz-input">
                                <Select
                                    styles={customStyles}
                                    menuPlacement="auto"
                                    menuPosition="fixed"
                                    onChange={(e) => setName(e.label)}
                                    options={classOptions}
                                >
                                </Select>
                            </div>
                            {/*<div className="class-announcement-body-button-group">*/}
                            {/*    <div className="class-announcement-button">*/}
                            {/*        <CustomButton name={"Discard"} color={"#FF5050"}/>*/}
                            {/*    </div>*/}
                            {/*    <div className="class-announcement-button">*/}
                            {/*        <CustomButton  name={"Send"} color={"#e4bf5e"}/>*/}
                            {/*        /!*<button type="submit" style={{color:"#e4bf5e", paddingBottom:"8px"}} className="custom-button">Submit</button>*!/*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="course-button-group button-row">
                                <button className="add-button" type="submit">Submit</button>
                                <button className="reset-button" onClick={resetForm}>Reset</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default ClassAnnouncement