import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './CourseContent.css';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '90%',
            marginLeft:'3%',

        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '80.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.primary.dark,
        },
    }),
);

export default function CourseContent() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="content-body">
            <div className="content-body-header">Course Content</div>
            <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon"/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>English-Course</Typography>
                        <Typography className={classes.secondaryHeading}>Click Here display the tutors name for the english class</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <h7>T.K.T.A.CHNADRASENA</h7><br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon  className="icon"/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>Maths-Course</Typography>
                        <Typography className={classes.secondaryHeading}>Click Here display the tutors name for the maths class</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <h7>K.Prasad de Silva</h7><br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon"/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>Chemistry</Typography>
                        <Typography className={classes.secondaryHeading}>Click Here display the tutors name for the music class</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <h7>M.N.Thilakarathna</h7><br/>
                            <h7>Charith Disanayka</h7><br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon"/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>History-Course</Typography>
                        <Typography className={classes.secondaryHeading}>Click Here display the tutors name for the history class</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <h7>N.Gamage</h7><br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon"/>}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography className={classes.heading}>Physics-Course</Typography>
                        <Typography className={classes.secondaryHeading}>Click Here display the tutors name for the physics class</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <h7>T.Deepthi Chandralal</h7><br/>
                            <h7>T.K.T.A.CHNADRASENA</h7><br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>

    );
}



