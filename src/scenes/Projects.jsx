import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-8 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative max-w-[400px] max-h-[400px]">
      <a href={link} target="_blank" rel="noopener noreferrer" className={overlayStyles}>
        <div>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-2">{description}</p>
        </div>
      </a>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} className="w-full h-full object-cover" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-20 bg-light-gray">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-white-700">
          Through these projects, I have gained extensive experience and honed my skills with various technologies. 
          From building RESTful APIs to developing recommendation systems. 
         Each project has helped me grow as a developer and broaden my understanding of full-stack development.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red text-white
              w-full h-full text-2xl font-playfair font-semibold max-w-[400px] max-h-[400px]"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project 
            title="BLOG API" 
            description="A RESTful API for a blog platform built with Node.js and Express."
            link="https://github.com/roumaysae/Projet-WEB.git" 
          />
          <Project 
            title="Food Recommendation System" 
            description="A system that recommends food recipes based on user preferences and nutritional needs."
            link="https://github.com/roumaysae/Recommendation-systemOfFood.git" 
          />

          {/* ROW 2 */}
          <Project 
            title="E-banking Application Web" 
            description="A secure and user-friendly web application for managing e-banking transactions."
            link="https://github.com/roumaysae/E-banking-APP.git" 
          />
          <Project 
            title="Patient Management App"
            description="An application to manage patient records and appointments using Spring framework."
            link="https://github.com/roumaysae/PatientApp-Spring.git" 
          />
          
          <div
            className="flex justify-center text-center items-center p-10 bg-blue text-white
              w-full h-full text-2xl font-playfair font-semibold max-w-[400px] max-h-[400px]"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
