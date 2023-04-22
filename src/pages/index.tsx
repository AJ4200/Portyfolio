import React from 'react';

function PersonalDetails() {
  return (
    <>
      <h1>Personal Details</h1>
      <p><strong>Surname:</strong> Majadibodu</p>
      <p><strong>Names:</strong> Abel</p>
      <p><strong>Date of Birth:</strong> 1999/04/24</p>
      <p><strong>ID Number:</strong> 990424 6018 083</p>
      <p><strong>Race:</strong> Black</p>
      <p><strong>Nationality:</strong> South African</p>
      <p><strong>Gender:</strong> Male</p>
      <p><strong>Marital Status:</strong> Single</p>
      <p><strong>Health:</strong> Excellent</p>
      <p><strong>Criminal Record:</strong> N/A</p>
      <p><strong>Home Language:</strong> Sepedi</p>
      <p><strong>Other Languages:</strong> English</p>
      <p><strong>Residential Address:</strong> 7681/265 ext 8 phagameng, Modimolle, 2092</p>
      <p><strong>Contact Number:</strong> 062 677 5823</p>
      <p><strong>Email Address:</strong> abeljackson33@gmail.com</p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abel-majadibodu-61a0a120b/">24) Abel Majadibodu | LinkedIn</a></p>
      <p><strong>Github:</strong> <a href="https://github.com/AJ4200">AJ4200 (AJ) (github.com)</a></p>
    </>
  );
}

function Education() {
  return (
    <>
      <h1>Education</h1>
      <p><strong>High School Attended:</strong> Solomon Mahlangu Secondary School</p>
      <p><strong>Highest Grade Passed:</strong> Grade 12</p>
      <p><strong>Subjects:</strong> Sepedi, English, Geography, Life Orientation, Mathematics, Physical Sciences, Life Sciences</p>
      <p><strong>Year Passed:</strong> 2018</p>
      <p><strong>Higher Education:</strong></p>
      <ul>
        <li>Institution: University of Johannesburg</li>
        <li>Year: 2019 - Present</li>
        <li>Programme: Bachelor of IT in BSc in Computer Sciences and Informatics</li>
        <li>Completed Courses:
          <ul>
            <li>Informatics 1 (Introduction: algorithms and data structures [VB])</li>
            <li>Informatics 2 (Database design and Internet e-commerce)</li>
            <li>Informatics 3 (Software Engineering)</li>
            <li>Computer Science 1 (algorithms and data structures [C++])</li>
            <li>Computer Science 2 (OOP and Data Communications)</li>
            <li>IT Management 1</li>
            <li>IT Management 2</li>
            <li>Mathematics 1A (Calculusand Linear Algebra)</li>
<li>Mathematics 1B (Discrete Mathematics and Probability Theory)</li>
<li>Mathematics 2A (Multivariable Calculus and Differential Equations)</li>
<li>Mathematics 2B (Linear Algebra and Optimization)</li>
</ul>
</li>
</ul>
</>
);
}

function WorkExperience() {
return (
<>
<h1>Work Experience</h1>
<h2>Intern, Software Developer</h2>
<p><strong>Company:</strong> XYZ Solutions</p>
<p><strong>Duration:</strong> June 2021 - Present</p>
<ul>
<li>Assist with development of web applications using React and Node.js</li>
<li>Collaborate with team members on project requirements and timelines</li>
<li>Participate in code reviews and debugging sessions</li>
<li>Learn new technologies and techniques to improve development skills</li>
</ul>
<h2>Freelance Web Developer</h2>
<p><strong>Duration:</strong> January 2020 - Present</p>
<ul>
<li>Design and develop websites for small businesses and individuals</li>
<li>Communicate with clients to understand project requirements and provide updates on progress</li>
<li>Manage project timelines and budgets</li>
<li>Implement SEO techniques to improve website visibility and traffic</li>
</ul>
</>
);
}

function App() {
return (
<>
<PersonalDetails />
<Education />
<WorkExperience />
</>
);
}

export default App;
