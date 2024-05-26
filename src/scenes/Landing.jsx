  import { motion } from "framer-motion";
  import { AiOutlineMail } from 'react-icons/ai';
  import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

  const Landing = ({ setSelectedPage }) => {
    return (
      <div id='home' className='w-full h-screen text-center flex flex-col justify-center items-center'>
        <div className='max-w-[1240px] w-full mx-auto p-2 flex flex-col justify-center items-center'>
          <div>
            <div className="flex justify-center items-center mb-4">
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 max-w-[100px] md:max-w-[100px]"
                src="assets/profile-image--modified (1).png"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className='py-4 text-white'>
                Hello, I&#39;m <span className='text-[#e551cc]'>ROUMAYSAE EL AMRANI</span>
              </h1>
              <h1 className='py-2 text-white'>Software Engineering student</h1>
              <p className='uppercase text-sm font-bold tracking-widest text-[#f5f4f3] m-6'>
                LET&#39;S BUILD SOMETHING TOGETHER
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className='flex items-center justify-between max-w-[250px] mb-6 m-auto'>
                <a
                  href='https://www.linkedin.com/in/roumaysae-el-amrani-092793208/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/roumaysae'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='mailto:roumaysaeelamrani2002@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <div className='flex flex-wrap justify-center items-center'>
                <div className='w-full flex justify-center'>
                  <a href="assets/Roumaysae_ELAMRANI_Resume.pdf" download="Roumaysae_ELAMRANI_Resume.pdf">
                    <button className='m-2 p-2 bg-[#e551cc] text-white rounded-lg'>Download Resume</button>
                  </a>
                  <a href="assets/Cover letter Roumaysae EL AMRANI.pdf" download="Cover letter Roumaysae EL AMRANI.pdf">
                    <button className='m-2 p-2 bg-[#e551cc] text-white rounded-lg'>Download Cover Letter</button>
                  </a>
                </div>
                <div className='w-full flex justify-center'>
                  <a href="assets/ESSAY OF GEIW 24.pdf" download="ESSAY OF GEIW 24.pdf">
                    <button className='m-2 p-2 bg-[#e551cc] text-white rounded-lg'>Download GEIW 24 Essay</button>
                  </a>
                  <a href="assets/Professional_Communication_S4_Essay.pdf" download="Professional_Communication_S4_Essay.pdf">
                    <button className='m-2 p-2 bg-[#e551cc] text-white rounded-lg'>Download Professional Communication S4 Essay</button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  export default Landing;
