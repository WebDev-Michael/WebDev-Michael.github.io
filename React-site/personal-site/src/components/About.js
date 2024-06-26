import Image from "../images/Profile_picture.JPG"
export default function About() {
    return (
        <>
            <div className="about-section">

                <div className="header-image">
                    <img
                        className="image"
                        src={Image}
                        alt="Michael Wilcox Profile Picture"
                    />
                </div>                

                <h1>About Me</h1>

                <p>I began my development journey in February of 2021, self teaching myself HTML and CSS with <a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a>, <a href="https://w3schools.com">W3schools</a>, and <a href="https://freecodecamp.org">FreeCodeCamp</a>, where I received my first certification in responsive web design. In July of 2022, I decided to go for a career change and take my education to the next level by enrolling in <a href="https://bloomtech.com">Bloom Institute of Technology</a> (BloomTech) as a full stack web developer, where I graduated and received a certificate of completion.</p>
                <p>Since then I have been expanding my knowledge in the tech field by practicing core concepts of front and back end development as well trying to learn more coding languages such as Python, C++ and Vue.js. I am a firm believer that you are never truly done learning and that there will always be something new to learn.</p>
            </div>

            <div className="about-section">
                <h1>Technical Experience</h1>
                <div className="about-card">
                    <h3 className="experience-header">Web Learning Assistant</h3>
                    <h4>BloomTech</h4>
                    <p>Assist with computer setup requirements</p>
                    <p>Proactive academic support to help learners get unblocked</p>
                    <p>Progress documentation to keep track of learner success</p>
                    <p>One-on-one instruction sessions via Zoom</p>
                    <p>Lead multiple cohort programs that hold students to a higher accountability and success rate</p>
                </div>

                <div className="about-card">
                    <h3 className="experience-header">Fullstack Development Manager</h3>
                    <h4>Tony LLC</h4>
                    <p>Lead multiple teams in the best development practices of new websites</p>
                    <p>Review code and pull requests to be merged into a repository</p>
                    <p>Ensure high-quality and legible code is being written</p>
                    <p>Ensure deadlines are being met and resolving any conflicts that may arise otherwise</p>
                    <p>Teach team members the values of the company and the skills they need to succeed</p>
                </div>
            </div>
        </>
    )
}