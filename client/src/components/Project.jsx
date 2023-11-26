export default function Project(props) {
  return (
    <div className="box-projects">
      <div className="grow-up-box-projects">
        {props.pro.buttonWeb ? (
          <a href={props.pro.hrefPlay} >
            <img src={props.pro.srcGif} alt="gif of the game" />{" "}
          </a>
        ) : (
          <img src={props.pro.srcGif} alt="gif of the game" />
        )}

        <h2>{props.pro.textH2}</h2>

        <div>
          <a href={props.pro.hrefGit} className="github-button">
            <spen>Visit GitHub</spen>
          </a>
        </div>
        {props.pro.buttonWeb ? (
          <a href={props.pro.hrefPlay} className="github-button">
            <spen>Play</spen>
          </a>
        ) : null}
        <p className="p-projects">{props.pro.textProject}</p>
      </div>
    </div>
  );
}
