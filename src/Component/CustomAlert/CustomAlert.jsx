import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography, Card, Divider, Collapse, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from "react-redux";

import { Alert, Color } from "@material-ui/lab";

const CustomAlert: React.FC<{
    severity: Color,
    displayText: string,
}> = (props) => {

    return (
        <React.Fragment>
            <Alert
                severity={props.severity}
            >
                {props.displayText}
            </Alert>
        </React.Fragment>
    );
};

export default CustomAlert;
