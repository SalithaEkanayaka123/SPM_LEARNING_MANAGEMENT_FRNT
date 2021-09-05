import React from 'react'
import './styles.css'
import {useHistory} from "react-router";

const CustomizeSection = ({main_topic, sub_topic, backgroundcl, btn_text, btn_color, textcolor, children,navigationPath}) => {

    const history = useHistory();
    const setPath = () => {
        history.push(`/${navigationPath}`);
    }

    const backgroundStyle = {backgroundColor: backgroundcl};
    const textparagraphcolor = {color: textcolor};
    const buttonStyle = {backgroundColor: btn_color};

    return (
        <div className='section-main-wrapper' style={backgroundStyle}>
            <div className='section-header'>
                <div className='topic-section'>
                    <div className='main-topic'>{main_topic}</div>
                    <div className='sub-topic' style={textparagraphcolor}>{sub_topic}</div>
                </div>
                <button className='view-all-btn' style={buttonStyle} onClick={setPath}>{btn_text}</button>
            </div>
            <div className='section-body'>
                {children}
            </div>
        </div>
    )


}

export default CustomizeSection;