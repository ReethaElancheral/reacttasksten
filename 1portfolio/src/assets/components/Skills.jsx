

const skillsData = [
  { name: "HTML", level: "92%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "89%" },
  { name: "Python", level: "30%" },
  { name: "Oracle/Sql", level: "90%" },
  { name: "MySQL", level: "70%" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container skillcont">
        <h2 className="text-white mb-4">My Skills</h2>

        {skillsData.map((skill, index) => (
          <div className="skill mb-3" key={index}>
            <div className="d-flex justify-content-between">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
                aria-valuenow={parseInt(skill.level)}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
