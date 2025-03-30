import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import Skillcard from './SkillCard/Skillcard';
import SkillCardInfo from './SkillCard/SkillCardInfo/SkillCardInfo';

const Skills = () => {
    const [selectedskill, setselectedskill] = useState(SKILLS[0]);

    const handleselect = (data) => {
        setselectedskill(data);
    };

    return (
        <div>
            <section className="skills-container">
                <h5>TECHNICAL PROFICIENCY</h5>
                <div className="skills-content">
                    <div className="skills">
                        {SKILLS.map((item) => (
                            <Skillcard
                                key={item.title}
                                logourl={item.icon}
                                title={item.title}
                                isActive={selectedskill.title === item.title}
                                onClick={() => handleselect(item)}
                            />
                        ))}
                    </div>
                    <div className="skills-info">
                        <SkillCardInfo
                            heading={selectedskill.title}
                            skills={selectedskill.skills}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
