import React from "react";
import PaymentForm from "../../Component/Payment/PaymentForm";
import  './styles.css'

function ClassCourseview() {

    const rows = [
        {"CID": 'C00E1',"CName": 'English',"Teacher": 'Salitha Ekanayake',"Description": 'Spoken English',"Syllabus": '2012',"Duration": '48hr',"Amount": '99.99$'},
        {"CID": 'C00M1',"CName": 'Maths',"Teacher": 'Akash Anwarathe',"Description": 'Combine maths grade 12/13',"Syllabus": '2016',"Duration": '48hr',"Amount": '99.99$'},
        {"CID": 'C00S1',"CName": 'Sinhala',"Teacher": 'Taneesha Chandrasena',"Description": 'Sinhala language grade 1',"Syllabus": '2020',"Duration": '48hr',"Amount": '99.99$'}
    ];

// des character 25
    return (
        <div className='class-course-view-container'>
            <div className='class-course-view-wrapper'>
                <div className='class-course-header'>Course and Material Page</div>
                <div className='search-course-header'>Search Course</div>
                <div className='search-form'>
                    <input className='input-field' type='text' placeholder='Search course...'/>
                    <button className='Subscribe-btn'>Search</button>
                </div>
            </div>
            <table className='course-table-container'>
                <tr className='course-table-header'>
                    <th className='table-head-row-col'>Course Name</th>
                    <th className='table-head-row-col'>Teacher</th>
                    <th className='table-head-row-col'>Course Description</th>
                    <th className='table-head-row-col'>Syllabus</th>
                    <th className='table-head-row-col'>Duration</th>
                    <th className='table-head-row-col'>Amount</th>
                    <th className='table-head-row-col'>Enroll</th>
                </tr>
                {rows.map((row,index) => (
                    <tr className='course-table-data' key={index}>
                        <td className='table-data-row-col'>{row.CName}</td>
                        <td className='table-data-row-col'>{row.Teacher}</td>
                        <td className='table-data-row-col text-align'>{row.Description}</td>
                        <td className='table-data-row-col'>{row.Syllabus}</td>
                        <td className='table-data-row-col'>{row.Duration}</td>
                        <td className='table-data-row-col'>{row.Amount}</td>
                        <td className='table-data-row-col'><PaymentForm row={row}/></td>
                    </tr>

                ))}
            </table>
            <div>

            </div>
        </div>
    )
}

export  default  ClassCourseview;
