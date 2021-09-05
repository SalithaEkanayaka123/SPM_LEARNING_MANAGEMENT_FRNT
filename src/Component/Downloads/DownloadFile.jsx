import React from 'react'
import ClassTile from "../Class/ClassTile/ClassTile";
import './style.css'

function DownloadFile() {
    const rows = [
        {"title1": 'Main Page',"title2": 'name1'},
        {"title1": 'component2',"title2": 'name2'},
        {"title1": 'component3',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'Main Page',"title2": 'name1'}
    ];
    return (
        <div className="DownloadFileInterface">
            <div>
                <div className="home-DownloadFileinterface-container-filter row">
                    <div className="all-DownloadFileinterface-section-row">
                        {rows.slice(0,50).map((row)=> (
                            <div className="col-md-4">
                                <ClassTile/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadFile
