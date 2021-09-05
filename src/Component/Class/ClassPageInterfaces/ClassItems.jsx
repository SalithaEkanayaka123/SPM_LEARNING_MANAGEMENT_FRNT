import React from 'react'
import ClassTile from "../ClassTile/ClassTile";
import './ClassItems.css'
function ClassItems() {

    const rows = [
        {"title1": 'Main Page',"title2": 'name1'},
        {"title1": 'component2',"title2": 'name2'},
        {"title1": 'component3',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'Main Page',"title2": 'name1'},
        {"title1": 'component2',"title2": 'name2'},
        {"title1": 'component3',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'Main Page',"title2": 'name1'},
        {"title1": 'component2',"title2": 'name2'},
        {"title1": 'component3',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'Main Page',"title2": 'name1'},
        {"title1": 'component2',"title2": 'name2'},
        {"title1": 'component3',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'Main Page',"title2": 'name1'},
        {"title1": 'component2',"title2": 'name2'},
        {"title1": 'component3',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'}
    ];
    return (
        <React.Fragment>
            <div className="allclassitems">
                <div>
                    <div className="home-class-container-filter row">
                        <div className="all-class-section-row">
                            {rows.slice(0,50).map((row)=> (
                                <div className="col-md-4">
                                    <ClassTile/>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default ClassItems
