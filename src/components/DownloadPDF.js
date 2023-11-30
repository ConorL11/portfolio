import React from "react";
// import pdf from "../static/resume.pdf";

const DownloadPDF = () => {
    return (
        <div className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group">
            <a target="_blank" rel="noreferrer" href="/resume.pdf" download="resume.pdf">
                Download PDF
            </a>
        </div>
    );
};

export default DownloadPDF;