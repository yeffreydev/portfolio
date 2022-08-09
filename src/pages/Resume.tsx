import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "./../assets/Resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Resume = () => {
  const [width, setWidth] = useState(1200);
  const resumeLink =
    "https://raw.githubusercontent.com/yeffreycode/portfolio/main/src/assets/media/cv.pdf";
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="main scroll-y">
      <div className="main-contet">
        <div className="cv-button-container">
          <a href={resumeLink}>
            <AiOutlineDownload />
            Download Cv
          </a>
        </div>
        <div className="container-for-pdf">
          <Document file={resumeLink} className="pdf-cv">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
        <div className="cv-button-container">
          <a href={resumeLink}>
            <AiOutlineDownload />
            Download Cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
