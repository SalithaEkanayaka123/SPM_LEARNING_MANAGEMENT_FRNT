import React, {useRef} from 'react'


// import './Report.css';

import '@progress/kendo-theme-material/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import {PDFExport, savePDF} from "@progress/kendo-react-pdf";

function ReportTesting() {

    const pdfExportComponent = useRef(null);
    const contentArea = useRef(null);

    const handleExportWithComponent = (event) => {
        console.log("Clicked");
        pdfExportComponent.current.save();
    }

    const handleExportWithMethod = (event) => {
        console.log("PDF Export with method, ");
        savePDF(contentArea.current, {paperSize: "A4"});
    }

    return (
        <div className="app-content">
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <div ref={contentArea} className={'pdf-page size-a4'}>
                    <h1> Kendo React PDF Generator.</h1>
                    <p> PDF generating tools for react.</p>
                    <div className="button-area">
                        <Button primary={true} onClick={handleExportWithComponent}>Primary Button</Button>
                        <Button onClick={handleExportWithMethod}>Export Method jsPDF</Button>
                    </div>
                </div>
            </PDFExport>
        </div>
    );
}

export default ReportTesting;
