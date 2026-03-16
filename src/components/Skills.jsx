import {
    FaChartBar,
    FaCode,
    FaCss3Alt, FaDatabase,
    FaGitAlt, FaGithub,
    FaHtml5,
    FaJava, FaJs,
    FaPython,
    FaReact,
    FaTools,
    FaNodeJs
} from 'react-icons/fa';
import {
    SiAnaconda,
    SiBootstrap,
    SiC, SiCplusplus,
    SiJupyter,
    SiNumpy, SiPandas,
    SiPlotly,
    SiExpress,
    SiMongodb
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = [
    {
        icon: <FaCode />,
        iconColor: '#a78bfa',
        title: 'Programming Languages',
        skills: [
            { label: 'C', icon: <SiC />, color: '#A8B9CC' },
            { label: 'C++', icon: <SiCplusplus />, color: '#00599C' },
            { label: 'Java', icon: <FaJava />, color: '#ED8B00' },
            { label: 'Python', icon: <FaPython />, color: '#3776AB' },
            { label: 'SQL', icon: <FaDatabase />, color: '#00758F' },
            { label: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        ]
    },
    {
        icon: <FaChartBar />,
        iconColor: '#818cf8',
        title: 'Libraries & Frameworks',
        subtitle: '(Data Analysis & Visualization)',
        skills: [
            { label: 'NumPy', icon: <SiNumpy />, color: '#4DABCF' },
            { label: 'Pandas', icon: <SiPandas />, color: '#6030bc' },
            { label: 'Matplotlib', icon: <FaChartBar />, color: '#11557c' },
            { label: 'Seaborn', icon: <SiPlotly />, color: '#3F4F75' },
        ]
    },
    {
        icon: <FaCode />,
        iconColor: '#34d399',
        title: 'Web Technologies',
        skills: [
            { label: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
            { label: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
            { label: 'React.js', icon: <FaReact />, color: '#61DAFB' },
            { label: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
            { label: 'Express', icon: <SiExpress />, color: '#e2e8f0' },
            { label: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        ]
    },
    {
        icon: <FaTools />,
        iconColor: '#fb923c',
        title: 'Tools & Platforms',
        skills: [
            { label: 'VSCode', icon: <VscCode />, color: '#007ACC' },
            { label: 'Git', icon: <FaGitAlt />, color: '#F05032' },
            { label: 'GitHub', icon: <FaGithub />, color: '#e2e8f0' },
            { label: 'Power BI', icon: <FaChartBar />, color: '#F2C811' },
            { label: 'Excel', icon: <FaDatabase />, color: '#217346' },
        ]
    }
];

function SkillCategory({ cat, delay }) {
    const { ref, isVisible } = useScrollReveal(0.1);
    return (
        <div ref={ref} className="col-lg-6 col-md-6">
            <div
                className="skill-category-card h-100"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transition: `opacity 0.7s ease ${delay * 0.12}s, transform 0.7s ease ${delay * 0.12}s`
                }}
            >
                <div className="text-center mb-3">
                    <div style={{ fontSize: '1.8rem', color: cat.iconColor, marginBottom: '0.5rem' }}>{cat.icon}</div>
                    <h4 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>
                        {cat.title}
                    </h4>
                    {cat.subtitle && <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>{cat.subtitle}</p>}
                </div>

                <div className="row g-2">
                    {cat.skills.map((skill, i) => (
                        <div key={i} className="col-4">
                            <div className="skill-icon-card">
                                <span className="skill-icon-svg" style={{ color: skill.color }}>{skill.icon}</span>
                                <span className="skill-icon-label">{skill.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Skills() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);

    return (
        <section id="skills" className="py-5">
            <div className="container">

                <div
                    ref={titleRef}
                    className="text-center mb-5"
                    style={{
                        opacity: titleVisible ? 1 : 0,
                        transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease'
                    }}
                >
                    <h2 className="section-title">My <span className="accent">Skills</span></h2>
                </div>

                <div className="row g-4">
                    {categories.map((cat, i) => (
                        <SkillCategory key={i} cat={cat} delay={i + 1} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;