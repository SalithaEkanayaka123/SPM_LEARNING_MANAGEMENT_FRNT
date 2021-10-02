import React, {useState, useRef, useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Container, Slider, Tooltip, Typography} from "@material-ui/core";
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";
import PlayerControls from "./PlayerControls";
import screenfull from 'screenfull'
import "./CustomVideoPlayerComponent.scss"
import CustomButton from "../CourseMgntInt/CustomButtons/CustomButton";
import {useLocation} from "react-router";

const useStyles = makeStyles({
    playerWrapper: {
        width: "100%",
        position: "relative"
    },
});



const format = (seconds) => {
    if(isNaN(seconds)){
        return '00:00'
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if(hh) {
        return `${hh}:${mm.toString().padStart(2,"0")}:${ss}`
    }
    return `${mm}:${ss}`
}

let count = 0;



function CustomVideoPlayerComponent() {

    const { url } = useLocation();
    const [assignedUrl, setAssignedUrl] = useState(null)



    useEffect(() => {
        if(url){
            setAssignedUrl(url.url)
        } else {
            setAssignedUrl("https://www.youtube.com/watch?v=wGixQPuG1GY");
        }

    },[])

    const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal")
    const [playerName, setPlayerName] = useState("VIDEO-01")
    const [state, setState] = useState({
        playing:true,
        muted: true,
        volume: 0.5,
        playbackRate: 1.0,
        played:0,
        seeking: false
    })

    const classes = useStyles();
    const {playing, muted, volume, playbackRate, played, seeking} = state;
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const controlRef = useRef(null);

    const handlePlayPause = () => {
        setState({...state, playing: !state.playing});
    }

    const handleRewind = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
    }

    const handleFastForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
    }

    const handleMute = () => {
        setState({...state, muted: !state.muted})
    }

    const handleVolumeChange = (e, newValue) => {
        setState({...state, volume:parseFloat(newValue /100),
        muted: newValue === 0 ? true: false,
        });
    };

    const handleVolumeSeekDown =  (e, newValue) => {
        setState({
            ...state,
            volume: parseFloat(newValue/ 100),
            muted: newValue === 0 ? true: false,
        })
    }

    const handlePlaybackRateChange = (rate) => {
        setState({...state, playbackRate: rate})
    }

    const toggleFullScreen = () => {
        screenfull.toggle(playerContainerRef.current);
    }

    const handleProgress = (changeState) => {

        if(count>3){
            controlRef.current.style.visibility = "hidden"
            count = 0
        }

        if(controlRef.current.style.visibility === "visible"){
            count+=1
        }

        if(!state.seeking){setState({...state, ...changeState});}

    };

    const handleSeekChange = (e, newValue) => {
        setState({...state, played: parseFloat(newValue/100)})
    }

    const handleSeekMouseDown = (e) => {
        setState({...state, seeking:true})
    }

    const handleSeekMouseUp = (e, newValue) => {
        setState({...state, seeking: false})
        playerRef.current.seekTo(newValue/100);
    }

    const handleMouseMove = () => {
        controlRef.current.style.visibility = "visible";
        count = 0;
    }

    const currentTime = playerRef.current ? playerRef.current.getCurrentTime(): '00:00';
    const duration = playerRef.current ? playerRef.current.getDuration():'00:00';

    const elapsedTime = timeDisplayFormat === "normal" ? format(currentTime): `-${format(duration - currentTime)}`;
    const totalDuration = format(duration)

    const handleDisplayFormat = () => {
        setTimeDisplayFormat(timeDisplayFormat==="normal" ? "remaining": "normal"
        );
    }


    return (
        <React.Fragment>
            <div style={{marginTop: "10px"}}/>
            <Container maxWidth="md">
                <div
                    ref={playerContainerRef}
                     className={classes.playerWrapper}
                    onMouseMove={handleMouseMove}

                >
                    <ReactPlayer
                        width={"100%"}
                        height="550px"
                        url={assignedUrl}
                        muted={muted}
                        playing={playing}
                        border-radius='16px'
                        overflow="hidden"
                        ref={playerRef}
                        volume={volume}
                        playbackRate={playbackRate}
                        onProgress={handleProgress}
                    />
                    <PlayerControls
                        ref={controlRef}
                        onPlayPause={handlePlayPause}
                        playing={playing}
                        onRewind={handleRewind}
                        onFastForward={handleFastForward}
                        muted={muted}
                        onMute={handleMute}
                        onVolumeChange={handleVolumeChange}
                        onVolumeSeekDown={handleVolumeSeekDown}
                        volume={volume}
                        playbackRate={playbackRate}
                        onPlaybackRateChange={handlePlaybackRateChange}
                        onToggleFullScreen ={toggleFullScreen}
                        played={played}
                        onSeekMouseUp={handleSeekMouseUp}
                        onSeekMouseDown={handleSeekMouseDown}
                        onSeek={handleSeekChange}
                        elapsedTime={elapsedTime}
                        totalDuration={totalDuration}
                        onChangeDisplayFormat={handleDisplayFormat}
                        MediaPlayerName={playerName}
                    />
                </div>
                <p className="header-video-player"> VIDEO-01 </p>
                <p className="header-video-player-comment-section"> Comment section
                </p>
                <div className="video-player-comment">
                    <input type="textarea" name="comment-input" className="comment-input"  />
                    <div style={{marginTop: "5px"}}><CustomButton name="Post"/></div>
                </div>


            </Container>
        </React.Fragment>
    );
}

export default CustomVideoPlayerComponent;
