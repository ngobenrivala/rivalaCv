// src/CV.js
import React from 'react';
import './CV.css'; // Import the CSS file for styling

const CV = () => {
    return (
        <div className="cv-container">
            <header className="cv-header">
                <h1>NGOBENI MATIMBA POWER CURRICULUM VITAE</h1>
                <p>Email: Ngobenrivala@gmail.com | Phone: (073) 671-3522</p>
            </header>
            <section className="cv-section">
                <h2>Objective</h2>
                <p>As qualified Information and Communication Technology with a keen interest in the ICT industry. I am particularly drawn to companies known for their exceptional problem-solving capabilities and fostering an environment of growth and progress. Flexibility is a key aspect, both in terms of the responsibilities of role and working hours. I am open to exploring opportunities in various settings, provided the company aligns with my values and offers a supportive and innovative work culture.
                Should the interview process progress to later stages, I am prepared to make travel arrangements and am willing and able to relocate. I am eager to contribute my skills and expertise to a dynamic and forward-thinking organization.</p>
            </section>

<section className="cv-section">
    <h2>Career Summary</h2>
    <table className="career-summary-table">
        <thead>
            <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>BritelinkMCT</td>
                <td>Applications Developer</td>
                <td>January 2022 – June 2024</td>
            </tr>
            <tr>
                <td>UVU Africa</td>
                <td>Java Developer</td>
                <td>October 2018 – December 2021</td>
            </tr>
            <tr>
                <td>Gijima</td>
                <td>System Support Engineer</td>
                <td>September 2016 – August 2018</td>
            </tr>
        </tbody>
    </table>
</section>
<section className="cv-section">
    <h2>Qualification</h2>
    <table className="qualification-table">
        <thead>
            <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>National Diploma Information Technology</td>
                <td>Tshwane University Of Technology</td>
                <td>January 2007 - December 2019</td>
            </tr>
            <tr>
                <td>Matric</td>
                <td>Ndhambi Secondary School</td>
                <td>2006</td>
            </tr>
        </tbody>
    </table>
</section>

<section className="cv-section">
    <h2>Certificates and Courses</h2>
    <table className="certificates-table">
        <thead>
            <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>NQF Level 5 IT System Support</td>
                <td>Gijima</td>
                <td>2017</td>
            </tr>
            <tr>
                <td>NQF Level 4 IT Technical Support</td>
                <td>EOH</td>
                <td>2016</td>
            </tr>
        </tbody>
    </table>
</section>
            <section className="cv-section skills-section">
    <h2>Technical Skills</h2>
    
    <div className="skills-category">
        <h3>Front-end:</h3>
        <ul className="skills-list">
            <li className="skill-item">HTML</li>
            <li className="skill-item">CSS</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">TypeScript</li>
            <li className="skill-item">React</li>
            <li className="skill-item">React Native</li>
            <li className="skill-item">Xamarin</li>
            <li className="skill-item">Angular</li>
            <li className="skill-item">jQuery</li>
            <li className="skill-item">Bootstrap</li>
            <li className="skill-item">JSF</li>
            <li className="skill-item">Responsive Web Design</li>
            <li className="skill-item">Xamarin Forms</li>
            <li className="skill-item">Android UI</li>
        </ul>
    </div>

    <div className="skills-category">
        <h3>Back-end:</h3>
        <ul className="skills-list">
            <li className="skill-item">Data Structures and Algorithms</li>
            <li className="skill-item">Server-side languages: Java, C#, VB.net</li>
            <li className="skill-item">Data serialization languages: YAML, XML, JSON</li>
            <li className="skill-item">Frameworks: Spring Boot, Hibernate, JPA, .Net Core</li>
            <li className="skill-item">Databases: MySQL, Oracle, PostgreSQL</li>
            <li className="skill-item">Web servers: Apache, IIS</li>
            <li className="skill-item">Operating Systems: Windows, Linux, iOS, Android</li>
            <li className="skill-item">IDEs: Visual Studio, Android Studio</li>
            <li className="skill-item">Testing: JUnit, Selenium</li>
            <li className="skill-item">Application servers: JBoss, WebSphere</li>
            <li className="skill-item">Design Patterns: MVC, Singleton</li>
        </ul>
    </div>

    <div className="skills-category">
        <h3>Development Methodologies:</h3>
        <ul className="skills-list">
            <li className="skill-item">Agile development methodologies</li>
            <li className="skill-item">Project management tools: Jira, DevOps</li>
            <li className="skill-item">Version control: SVN, GIT</li>
            <li className="skill-item">Communication tools: Slack, Zoom</li>
        </ul>
    </div>

    <div className="skills-category">
        <h3>Microsoft Applications:</h3>
        <ul className="skills-list">
            <li className="skill-item">Microsoft 365 Admin</li>
            <li className="skill-item">Microsoft Office: Word, Excel, PowerPoint</li>
        </ul>
    </div>

    <div className="skills-category">
        <h3>Learning Management Systems:</h3>
        <ul className="skills-list">
            <li className="skill-item">Google Classroom</li>
            <li className="skill-item">360Learning</li>
            <li className="skill-item">Blackboard Learn</li>
            <li className="skill-item">Moodle</li>
            <li className="skill-item">Brightspace Pulse</li>
            <li className="skill-item">Blackboard</li>
            
        </ul>
    </div>
            </section>
            <section className="cv-section">
            <h2>Employment Record</h2>
            <p><strong>Applications Developer</strong><br />BritelinkMCT<br />January 2022 – June 2024</p>
            <ul>
                <li>Develops and enhances software applications to improve functionality and performance.</li>
                <li>Ensures top-tier software quality by devising comprehensive unit test plans and conducting thorough code testing.</li>
                <li>Utilizes QuickBase data repository to construct forms, generate reports, establish workflows, and automate various processes.</li>
                <li>Establishes automated pipelines, webhooks, and Actions.</li>
                <li>Seamlessly integrates JotForm, Salesforce, Sage300, Centricity, and Sagex with Quick Base for enhanced functionality.</li>
                <li>Leverages the QuickBase data repository to streamline form creation, report generation, workflow setup, and process automation.</li>
            </ul>
            <p><strong>Java Developer</strong><br />UVU Africa<br />October 2018 – December 2021</p>
            <ul>
                <li>Develops and enhances software applications to maximize their capabilities.</li>
                <li>Patterns for optimal solutions.</li>
                <li>Ensures the delivery of top-quality software through the creation of comprehensive unit test plans and rigorous code testing.</li>
                <li>Proficient in a wide range of tools, applications, and processes essential for software development.</li>
                <li>Executes all database administration (DBA) tasks, including the development of functions, stored procedures, SQL queries, views, and more using Oracle.</li>
                <li>Expertise in both frontend and backend application development utilizing Java.</li>
                <li>Designs and creates applications on Java EE platforms.</li>
                <li>Applies object-oriented analysis and design techniques, incorporating common design.</li>
            </ul>
            <p><strong>System Support Engineer</strong><br />Gijima<br />September 2016 – August 2018</p>
            <ul>
                <li>Diagnosing and resolving technical issues across various systems, including software applications, network connectivity, hardware malfunctions, and user errors.</li>
                <li>Answering technical queries from users, providing guidance on system functionality, and resolving user-related problems.</li>
                <li>Setting up new systems, configuring software applications, and ensuring proper integration with existing infrastructure.</li>
                <li>Monitoring system performance, identifying potential issues, implementing updates and patches, and performing routine maintenance tasks.</li>
                <li>Providing user training on new system features and functionalities, as needed.</li>
                <li>Monitoring system performance metrics to identify areas for improvement and optimize system efficiency.</li>
                <li>Logging and tracking technical issues, prioritizing critical problems, escalating issues to relevant teams when needed.</li>
                <li>Working with other IT teams like Development, network administration, and security to address complex issues and coordinate system upgrades.</li>
            </ul>
            </section>
            <section className="cv-section">
    <h2>References</h2>
    <table className="references-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Contact</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Muxe Central Maluleke</td>
                <td>Team Leader at BritelinkMCT</td>
                <td>0838979645</td>
            </tr>
            <tr>
                <td>Shakira Mzwanele</td>
                <td>Team Leader at UVU Africa</td>
                <td>0743002688</td>
            </tr>
            <tr>
                <td>Duston Seluwa</td>
                <td>IT Manager at Birchwood Hotel</td>
                <td>0711988359</td>
            </tr>
        </tbody>
    </table>
</section>
        </div>    
    );
}

export default CV;