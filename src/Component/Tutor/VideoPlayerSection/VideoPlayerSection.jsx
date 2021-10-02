import './VideoPlayerSection.scss'
import React, {useEffect, useState} from 'react'
import {Container} from "@material-ui/core";
import PlayerThumbnail from "../../../Pages/VideoResourcePage/PlayerThumbnail/PlayerThumbnail";
import CustomRow from "../CourseMgntInt/CustomRow/CustomRow";
import Grid from "@material-ui/core/Grid";
import axios from "axios";


function VideoPlayerSection() {

    /**
     * This method should be replaced by a API call.
     * **/

    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
       getVieoUrls();
    },[])

    async function getVieoUrls () {
        const response = await axios.get("http://localhost:8073/videos");
        const data = response.data;
        const options = data.map(item => ({
            "image" : item.image,
            "name": item.name,
            "url" : item.url,
        }))
        setVideoData(options);
    }


    const array1 =[
        {"image":"http://placeimg.com/640/480/arch", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/640/480/arch", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/640/480/arch", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        {"image":"http://placeimg.com/180/100/nature", "url":"https://www.youtube.com/watch?v=wGixQPuG1GY"},
        ];

    console.log(videoData);
    return (
        <div>
            <div style={{marginTop: "20px"}}/>
            <Container maxWidth="lg">
                <p className="header-video-player">Course Videos</p>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2, xl: 3}}>
                {videoData?.map((item) => (
                    <Grid item xs={8} sm={6} md={4} lg={3} xl={3} >
                        <PlayerThumbnail image={item.image} url={item.url}/>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </div>
    )
}

export default VideoPlayerSection
