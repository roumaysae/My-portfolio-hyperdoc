import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const isMobile = useMediaQuery("(max-width: 640px)");
  const skills = [
    "Angular",
    "React",
    "JavaFX",
    "MySQL",
    "MongoDB",
    "Oracle",
    "Java",
    "CSS",
    "Spring Boot",
    "Node.js",
    "Wordpress CMS",
    "Machine Learning",
    "Communication",
    "Leadership",
    "TeamWork"
  ];

  return (
    <section id="skills">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I wield a diverse set of skills, shaping the digital landscape with creativity and expertise.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* HARD SKILLS */}
        <motion.div
          className={`md:w-1/2 ${isMobile ? 'md:w-full' : 'md:order-1'}`} // For mobile, make full width or swap order
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mb-6">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
               Hard SKILLS
              </p>
              <div className="flex flex-wrap items-center justify-center mt-5 m">
                {skills.slice(0, 12).map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* SOFT SKILLS */}
        <motion.div
          className={`md:w-1/2 ${isMobile ? 'md:w-full' : 'md:order-2'}`} // For mobile, make full width or swap order
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                SOFT SKILLS
              </p>
              <div className="flex flex-wrap items-center justify-center mt-5">
                {skills.slice(12).map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        
        </motion.div>
        
      </div>
    </section>
  );
};

const SkillBadge = ({ skill }) => (
  <div className="m-3">
    <div className="rounded-full bg-blue-500 text-white text-lg font-semibold">{skill}</div>
  </div>
);

export default MySkills;
