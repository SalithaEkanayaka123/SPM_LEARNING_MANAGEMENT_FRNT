import React, {useEffect, useState} from 'react'
import "./CourseMgntInt.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import CustomRow from "./CustomRow/CustomRow";
import {useDispatch, useSelector} from "react-redux";
import {addCourse, deleteCourse} from "../../../Action/Courses";

function CourseMgntInt({array4}) {
    //To refresh the page when delete the file.
    const courses = useSelector((state) => state.courses);
    useEffect(()=> {

    }, [courses])

    const [postData, setPostData] = useState({
        title: '',
        description: '',
        body: '',
        price: '',
        status: "pending"
    });

    //Method to clear the Form.
    const clearForm = () => {
        setPostData({...postData, title: "", body: "", description: "", price: ""})
    }

    //Delete Item method to pass into the Custom Component.
    const deleteItem = (id) => {
        dispatch(deleteCourse(id));
        console.log('Parent Delete Method');
    }

    const dispatch = useDispatch();

    const SubmitCourse = (e) => {
        e.preventDefault();
        dispatch(addCourse(postData));
    }

    return (
        <React.Fragment>
            <div className="course-component">
                <div className="input-form-container">
                    <form className="form" onSubmit={SubmitCourse}>
                        <div className="course-component-header">
                            <div className="section-header">Course Form</div>
                            <div className="second-header">Course Form</div>
                        </div>

                        <label htmlFor="fname">Title</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                               className="form-input"
                               value={postData.title}
                               onChange={(e) => setPostData({...postData, title: e.target.value})}
                               required={true}
                        />

                        <label htmlFor="lname">Description</label>
                        <input type="text" id="lname" name="lastname" placeholder="Description.."
                               className="form-input"
                               value={postData.description}
                               onChange={(e) => setPostData({...postData, description: e.target.value})}
                               required={true}
                        />

                        <label htmlFor="lname">Body</label>
                        <input type="text" id="body" name="lastname" placeholder="Price.." className="form-input"
                               value={postData.body}
                               onChange={(e) => setPostData({...postData, body: e.target.value})}
                               required={true}
                        />

                        <label htmlFor="lname">Price</label>
                        <input type="text" id="price" name="lastname" placeholder="Description.."
                               className="form-input"
                               value={postData.price}
                               onChange={(e) => setPostData({...postData, price: e.target.value})}
                               required={true}

                        />

                        <div className="course-button-group button-row">
                            <button className="add-button" type="submit"> Submit </button>
                            <button className="light-button" type="reset" onClick={clearForm}>Reset</button>
                        </div>
                    </form>
                </div>
                <div className="course-table">
                    <div className="section-header dark-header"> Active Courses</div>
                    <div id="style-1" className="course-table-body-scrollable">
                        {array4?.map((item) => (
                            <CustomRow id={item.id} header={item.title} description={item.description} body={item.body}
                                       deleteMethod={deleteItem}/>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CourseMgntInt
