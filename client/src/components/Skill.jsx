export default function Skill(props) {
  return (
    <div className="skill">
      <img src={props.objectSkill.src} alt={props.objectSkill.alt} />
      <p>{props.objectSkill.skill}</p>
    </div>
  );
}
