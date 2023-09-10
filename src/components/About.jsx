import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({index, title, icon}) => (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <p className={styles.sectionHeadText}>Overview.</p>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)}>
                I am a skilled full stack developer with experience in programming Python
                scripts, React, and Node.js. I am always eager to learn new technologies 
                and frameworks, and to improve my coding and problem-solving skills. 
                I am a highly motivated and results-oriented individual, with a strong 
                work ethic and a team player attitude.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                { services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} /> 
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")