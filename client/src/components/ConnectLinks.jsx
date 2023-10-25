import React from "react";

const pathServerTest = "https://node-api-image-moshe-brizel-website.vercel.app";

const links = [
  {
    href: "http://wa.me/972532320637",
    imgSrc: "WhatsApp.svg.png",
    alt: "WhatsApp img",
  },
  {
    href: "https://www.linkedin.com/in/moshe-brizel-80011a250",
    imgSrc: "likedin_logo.png",
    alt: "LinkedIn img",
  },
  {
    href: "https://github.com/MosheBrizel",
    imgSrc: "github_logo_icon_143772.png",
    alt: "GitHub",
  },
  {
    href: "mailto:brizelmoshe@gmail.com",
    imgSrc: "Gmail-logo.png",
    alt: "Gmail-logo",
  },
];

function ConnectLinks() {
  return (
    <div className="linke-to-connect">
      {links.map((link, index) => (
        <div key={index} className="links-conect">
          <a href={link.href}>
            <img
              className="img-links"
              src={pathServerTest + "/" + link.imgSrc}
              alt={link.alt}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default ConnectLinks;
