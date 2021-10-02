import React, {useEffect, useState} from 'react'
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {fetchTeachers, upDateUser} from "../../../../Action/Users";
import {useDispatch, useSelector} from "react-redux";
import {getClasses, updateClass} from "../../../../Action/Class";

function PopUpUpdate(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tutorName, setTutorName] = useState('name1');
    const [teacherOptions, setTeacherOptions] = useState(null);
    const teacherResponse = useSelector((state) => state.userDetails1?.UserDetails?.teacherRecords?.data);

    function popupView() {
        const classData = {
            name,
            description,
            tutorName,
        }
        console.log(classData);
        dispatch(updateClass(props.popupData.id, classData))
        setTimeout(function(){
            dispatch(getClasses());
            props.setTrigger(false)
        }, 50);
        props.setTrigger(false);
    }

    useEffect(() => {
        dispatch(fetchTeachers());
        setName(props.popupData?.name);
        setDescription(props.popupData?.description);
        setTutorName(props.popupData?.tutorName);
    },[props.trigger])

    async function getTeachersData() {
        const data = teacherResponse;
        console.log('Calling get tacher method 2', teacherResponse);
        const options = teacherResponse?.map((item) => (
            console.log('ITEM', item),
                {
                    "value" : item?.name,
                    "label" : item?.name
                }))
        setTeacherOptions(options);
        console.log('OPTIONS',options);
    }
    console.log('OPTIONS',teacherOptions);
    console.log('Calling popup',props.popupData);
    //get teacher data
    useEffect(() => {
        getTeachersData();
    },[props.trigger])

    function popupView1() {
        props.setTrigger(false);
    }

    return (props.trigger) ? (
    // return(
    <div className="modal-confirm-4">
        <div className="class-component-2">
            <div className="input-form-container">
                <div className="form p-5">
                    <div className="success-main-2">
                        <h1 className="success-main-3 modal-title ">Class Data Update</h1>
                    </div>
                    <div className="pb-2">
                    <label htmlFor="name">Class Name</label>
                    <input
                        type="text"
                        id="name" name="classname"
                        placeholder="class name(eg:Grade 10)"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    </div>
                    <div className="pb-2">
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
                    </div>
                    <div className="pb-2">
                        <InputLabel id="label">Teacher Name</InputLabel>
                        <div className="class-form-teacher-input">
                            {/*<Select*/}
                            {/*    options={teacherOptions}*/}
                            {/*    menuPlacement="auto"*/}
                            {/*    menuPosition="fixed"*/}
                            {/*    onChange={(e) => setTutorName(e.label)}*/}
                            {/*    style={{width:'500px'}}*/}
                            {/*/>*/}

                            <Select
                                name={tutorName}
                                value={tutorName}
                                style={{width:'500px'}}
                                onChange={(e) => setTutorName(e.target.value)}
                            >

                                {teacherOptions?.map(option => {
                                    console.log(option)
                                    return (
                                        <MenuItem key={option.name} value={option?.value}>
                                            {option?.label ?? option?.value}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </div>

                    </div>
                    <div className="modal-footer-1">
                        <button className="btn btn-success btn-block w-100" onClick={popupView}>OK</button>
                    </div>
                    <br/>
                    <div className="modal-footer-1">
                        <button className="btn btn-danger btn-block w-100" onClick={popupView1}>Cancel</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    ) : <div></div>;
}

export default PopUpUpdate;
