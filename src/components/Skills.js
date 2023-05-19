import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const baseSkills = {
    "Python": ["Django", "Flask", "Quart", "Tensorflow", "Keras", "Numpy", "Pandas"],
    "Java": ["Mockito", "JUnit", "Spring"],
    "JavaScript": ["React", "Node", "Express", "NextJS"],
    "TypeScript": [],
    "HTML/CSS": ["Bootstrap", "Tailwind"],
    "SQL": [],
    "Lua": [],
    "Matlab": [],
    "C++": [],
    "Cloud": {
      "AWS": ["S3", "SQS", "Lambda", "Cloudwatch", "DynamoDB"],
      "Azure": [],
      "Google Cloud": [],
    },
    "Databases": ["MongoDB", "Redis", "NoSQL", "PostgreSQL"],
    "Others": ["ChatGPT Plugins", "Docker", "Kubernetes", "LaTeX", "Git", "Photoshop", "Unity", "Sagemaker"]
  };

  const [skillsSet, setSkillsSet] = useState(new Set(Object.keys(baseSkills)));
  const [clickedSkills, setClickedSkills] = useState(new Set()); 

  const handleSkillClick = (skill) => {
    if (baseSkills[skill]) {
      clickedSkills.add(skill);
      setClickedSkills(new Set(clickedSkills));
      
      const subSkills = baseSkills[skill];
      if (Array.isArray(subSkills)) {
        subSkills.forEach(subSkill => skillsSet.add(subSkill));
      } else {
        Object.keys(subSkills).forEach(subSkill => skillsSet.add(subSkill));
      }
      setSkillsSet(new Set(skillsSet));
    }
  };

  const hasChildren = (skill) => {
    return Array.isArray(baseSkills[skill]) ? baseSkills[skill].length > 0 : false;
  };

  const skills = Array.from(skillsSet);

  return (
    <div name="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className={"skill-box" + (hasChildren(skill) ? " has-children" : "") + (clickedSkills.has(skill) ? " clicked" : "")} onClick={() => handleSkillClick(skill)}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
