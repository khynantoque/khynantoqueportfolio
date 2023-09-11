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
            I am a Junior Front-End Developer with a strong foundation in HTML, 
            CSS, JavaScript, React, Tailwind, and SCSS. I am skilled in designing 
            and maintaining responsive websites that provide a seamless user experience. 
            I am also an expert in creating dynamic and engaging interfaces through 
            clean and optimized code, as well as cutting-edge development tools and 
            techniques. I am a team player who enjoys collaborating with cross-functional 
            teams to create outstanding web applications.
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