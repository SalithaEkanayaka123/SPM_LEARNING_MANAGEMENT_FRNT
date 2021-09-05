import React from 'react'




function ClassSearch() {
    return (
        <div className="row container-row row-cols-auto justify-content-center">
                {/*<div className="classSearch-container-1">*/}
                {/*    <input className="input-field-updateemail-1"*/}
                {/*           placeholder="Enter....."*/}
                {/*           type="text"*/}
                {/*    />*/}
                {/*    <button type="submit" className="profileemailupdatebtn-1"> Update </button>*/}
                {/*</div>*/}
                <div className="input-group w-25">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                           aria-describedby="search-addon"/>
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>
                <div className="classSearch-container-2">
                    <select
                        className="form-input-classsearch"
                        aria-label="Default select example"
                    >
                        <option selected>Class name...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="classSearch-container-3">
                    <select
                        className="form-input"
                        aria-label="Default select example"
                        className="form-input-classsearch"
                    >
                        <option selected>Tutor name...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            {/*</div>*/}
        </div>
    )
}

export default ClassSearch
