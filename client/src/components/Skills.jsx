import Skill from "./Skill";

export default function Skills() {
  let listSkills = [
    {
      skill: "Python",
      alt: "",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    },
    {
      skill: "C#",
      alt: "",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png",
    },
    {
      skill: "HTML",
      alt: "",
      src: "https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png",
    },
    {
      skill: "CSS",
      alt: "",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    },
    {
      skill: "SQL",
      alt: "",
      src: "https://storage.needpix.com/rsynced_images/database-149760_1280.png",
    },
    {
      skill: "Assembly",
      alt: "",
      src: "https://www.powerandcables.com/wp-content/uploads/2021/02/ASM-Symbol-Blue-Tight-002-min.png",
    },
    {
      skill: "JavaScript",
      alt: "",
      src: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
    },
  ];

  return (
    <div id="skills" className="type-text">
      <h1 className="titles-text">skills:</h1>
      <div className="box-skills">
        {listSkills.map((item, index) => {
          return <Skill key={index} objectSkill={item} />;
        })}
      </div>
    </div>
  );
}
