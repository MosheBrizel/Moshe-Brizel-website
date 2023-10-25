import { useState, useEffect } from "react";

const pathServerTest = "https://node-api-image-moshe-brizel-website.vercel.app";

function ResumePage() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const resumeData = [
    {
      title: "English",
      href: pathServerTest + "/English Resums Moshe Brisel.pdf",
      download: "English Resums Moshe Brisel.pdf",
      imgSrc: pathServerTest + "/PDF_file_icon.svg.png",
      imgAlt: "PDF file",
    },
    {
      title: "עברית",
      href: pathServerTest + "/קורות חיים בעברית.pdf",
      download: "קורות חיים בעברית.pdf",
      imgSrc: pathServerTest + "/PDF_file_icon.svg.png",
      imgAlt: "PDF file",
    },
  ];

  const growDiv = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(growDiv, {
      threshold: 0.2,
    });
    observer.observe(document.querySelector(".resume-page"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="resume"
      className="resume-page"
      style={{ width: isIntersecting ? "350px" : "20px" }}
    >
      {isIntersecting && (
        <div className="resume">
          {resumeData.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <a href={item.href} download={item.download}>
                <img src={item.imgSrc} alt={item.imgAlt} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResumePage;
