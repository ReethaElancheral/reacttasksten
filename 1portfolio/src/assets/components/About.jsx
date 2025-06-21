

const About = () => {
  return (
 <>
  <section id="about">
        <div className="container about-section">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="about-title">Hi, I'm Reetha</h1>
              <h2 className="developer">A Python Full Stack Developer</h2>
              <p className="about-description">
                Passionate full stack web developer with a strong foundation in
                front-end and database technologies. I enjoy turning ideas into
                interactive, user-friendly web experiences. I'm constantly
                learning and love building sleek, responsive designs with clean
                code.
              </p>

              <div className="skills-section">
                <h4 className="mb-3 myskill">My Skills</h4>
                <div className="d-flex flex-wrap justify-content-start">
                  {["HTML", "CSS", "JavaScript", "Bootstrap", "SQL", "Oracle", "MySQL"].map((skill, index) => (
                    <span className="skill-badge" key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="text-white text-center">
        <div className="container">
          <div className="mb-3">
            <a href="https://www.instagram.com/nisha_reetha/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/nishaneetha" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/NishaReetha/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/reetha-meganathan-88681a32/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="mb-0">&copy; 2025 Reetha's Portfolio. All rights reserved.</p>
        </div>
      </footer>
 </>
  )
}
export default About;

