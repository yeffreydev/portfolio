import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Resume = () => {
  const [width, setWidth] = useState(1200);
  const resumeLink =
    "https://raw.githubusercontent.com/emily883/portfolio_Emily_/main/src/Assets/EmilyCruzGutierrezResume.pdf";

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="main scroll-y">
      <div className="main-contet">
        <div className="cv-button-container">
          <button>Download Cv</button>
        </div>
        <div className="container-for-pdf">
          <Document file={resumeLink} className="pdf-cv">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
        <div className="cv-button-container">
          <button>Download Cv</button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
