import { useState,useEffect } from "react";
import ConnectLinks from "./ConnectLinks";

const pathServerTest = "http://localhost:5050";


function Links() {
  const [isIntersectingLinks, setIsIntersectingLinks] = useState(false);

  const upLinks = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsIntersectingLinks(true);
      } else {
        setIsIntersectingLinks(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(upLinks, {
      threshold: 0.2,
    });
    observer.observe(document.querySelector(".div-end"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div
        className={"div-end"}
        style={{ marginBottom: isIntersectingLinks ? "175px" : "0px" }}
      >
        <div className="div-end">
            <h3>Contact me</h3>

            <div className="linke-to-connect">
              <ConnectLinks />
            </div>
            <div className="linkes-in-page">
              <a href="/#resume">resume</a>
              <a href="/#about-me">About me</a>
              <a href="/#skills">skills</a>
              <a href="/#Projects">Projects</a>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Links;
