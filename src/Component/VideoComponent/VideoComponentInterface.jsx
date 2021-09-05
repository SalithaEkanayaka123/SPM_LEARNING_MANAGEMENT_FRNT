import React from 'react'
import Iframe from 'react-iframe'
import './VideoComponentInterface.css'
import ClassTile from "../Class/ClassTile/ClassTile";

function VideoComponentInterface() {
    const rows = [
        {"title1": 'Main Page',"title2": 'name1'},
        {"title1": 'component2',"title2": 'name2'},
        {"title1": 'component3',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'component4',"title2": 'name3'},
        {"title1": 'Main Page',"title2": 'name1'}
    ];
    return (
        <div className="videocontent-background pt-5">
            <h2 className="title">Video Lecture</h2>
            <div className="VideoComponentInterface">
                <div>
                    <div className="home-videocomponentinterface-container-filter row">
                        <div className="all-videocomponentinterface-section-row">
                            {rows.slice(0,50).map((row)=> (
                                <div className="col-md-4">
                                    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                                            width="300px"
                                            height="300px"
                                            id="myId"
                                            className="myClassname"
                                            display="initial"
                                            position="relative"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoComponentInterface
