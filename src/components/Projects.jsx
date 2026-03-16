import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Sales from '../assest/salesDashboard.png';
import AdidasSales from '../assest/Adidas.png';
import ParkingImg from '../assest/CarParking.png';
import FitnessImg from '../assest/Fitness.png';
import Coffee from '../assest/Coffee.png';
import API from '../assest/API.png';
import Fixit from '../assest/Fixit.png';

const projects = [
  {
    title: "FIXIT",
    image: Fixit,
    description: "FIXIT is a full-stack web application that connects users with service providers such as plumbers, electricians, and other home service professionals.",
    techStack: ["JavaScript(ES6)","Express", "React", "Node", "MongoDB", "JWT", "Bcrypt"],
    githubLink: "https://github.com/praveen6235/FIXIT",
    liveLink: "https://fixit-nine-delta.vercel.app/",
    status: "Completed"
  },
  {
    title: "Superstore Sales Analysis Dashboard",
    image : Sales,
    description: "Developed an interactive Power BI dashboard analyzing sales trends, regional performance, and profitability metrics for a retail superstore.",
    techStack: ["KPI", "Power BI", "Excel"],
    githubLink: "https://github.com/praveen6235/Interactive-Sales-and-Profitability-Analysis-for-a-Retail-Superstore",
    liveLink: "https://www.linkedin.com/posts/bollam-praveen_powerbi-dataanalytics-businessintelligence-activity-7363869884499333123-nNgB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvSy_oBi6EVNVnYh7KaJR_ZJ3Iy8Xg2JEY",
    status: "Completed"
  },
  {
    title: "Adidas US Retail Data",
    image: AdidasSales,
    description: "Performed comprehensive statistical analysis on Adidas US retail dataset. Identified sales patterns and regional trends using Python.",
    techStack: ["Python", "Seaborn", "Matplotlib"],
    githubLink: "https://github.com/praveen6235/Statistical-Analysis-and-Visualization-of-Adidas-US-Retail-Data",
    liveLink: "https://www.linkedin.com/posts/bollam-praveen_python-pandas-matplotlib-activity-7340760525099704335-cZws?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvSy_oBi6EVNVnYh7KaJR_ZJ3Iy8Xg2JEY",
    status: "Completed"
  },
  {
    title: "API Explorer",
    image: API,
    description: "API Explorer is a modern web application built with React and Vite that allows users to explore and interact with public APIs.",
    techStack: ["JavaScript(ES6)", "React Router DOM", "React", "Vite"],
    githubLink: "https://github.com/praveen6235/API-Explorer",
    liveLink: "https://api-explorer-puce.vercel.app/",
    status: "Completed"
  },
  {
    title: "C++ Parking System",
    image: ParkingImg,
    description: "Built a functional parking management system using C++. Features vehicle check-in/checkout, slot management, and billing.",
    techStack: ["C++", "OOP", "File Handling"],
    githubLink: "https://github.com/praveen6235/Car-Parking-Management-System-Using-C-",
    liveLink: "https://www.linkedin.com/posts/bollam-praveen_cplusplus-project-smartparking-activity-7348726626534232065-DF5S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvSy_oBi6EVNVnYh7KaJR_ZJ3Iy8Xg2JEY",
    status: "Completed"
  },
  {
    title: "FitLife Website",
    image: FitnessImg,
    description: "FitLife is a modern, responsive fitness website that promotes a healthy lifestyle through workout programs, trainers, and fitness products. ",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/praveen6235/FitLife",
    liveLink: "http://praveen6235.github.io/FitLife",
    status: "Completed"
  },
  {
    title: "Coffee Shop Website",
    image: Coffee,
    description: "The Coffee Corner is a modern, responsive coffee shop website designed to showcase a café’s menu, products, story, and contact information.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/praveen6235/CoffeeShop",
    liveLink: "https://praveen6235.github.io/CoffeeShop/",
    status: "Completed"
  }
];

function Projects() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: rowRef, isVisible: rowVisible } = useScrollReveal(0.05);

  const revealUp = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
  });

  return (
    <section id="projects" className="py-5">
      <div className="container">

        <div ref={titleRef} className="text-center mb-5" style={revealUp(titleVisible)}>
          <h2 className="section-title">My <span className="accent">Projects</span></h2>
          <p className="section-subtitle">Real-world applications and data analysis projects</p>
        </div>

        <div ref={rowRef} className="scroll-row" style={revealUp(rowVisible, 0.1)}>
          {projects.map((project, index) => (
            <div key={index} className="scroll-card d-flex flex-column">
              
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />

              <div className="d-flex align-items-start justify-content-between mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="icon-circle flex-shrink-0" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
                    <FaCode />
                  </div>
                  <h5 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: 0, lineHeight: 1.3 }}>
                    {project.title}
                  </h5>
                </div>
                <span className="badge-completed flex-shrink-0 ms-2">{project.status}</span>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', flex: 1, marginBottom: '1rem' }}>
                {project.description}
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {project.techStack.map((t, i) => (
                  <span key={i} className="skill-tag">{t}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto d-flex gap-2">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                   className="btn-primary-purple py-2 px-3 flex-grow-1 text-center d-flex align-items-center justify-content-center gap-2" 
                   style={{ fontSize: '0.8rem' }}>
                  <FaExternalLinkAlt size={12} /> Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                   className="btn-outline-purple py-2 px-3 flex-grow-1 text-center d-flex align-items-center justify-content-center gap-2" 
                   style={{ fontSize: '0.8rem' }}>
                  <FaGithub size={14} /> GitHub Code
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;