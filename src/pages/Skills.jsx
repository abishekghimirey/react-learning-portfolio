function Skills() {

  const skills = [

    "React Router",
    "useState",
    "useEffect",
    "List Rendering",
    "JavaScript ",
    "CSS Styling",
    "localStorage"

  ];

  return (

    <div>

      <h1>Skills Learned</h1>

      <div className="project-container">

        {skills.map((skill, index) => (

          <div
            className="project-card"
            key={index}
          >

            <h2>{skill}</h2>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Skills;