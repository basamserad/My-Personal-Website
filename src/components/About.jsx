import { bill } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>ABOUT ME</h2>
      <p className={`${styles.paragraph} lg:max-w-[530px] mt-5`}>
        Motivated graduated student working toward Information Technology
        Degree. Hardworking and resourceful individual commended for first-rate
        collaboration, organizational and time management abilities. Committed
        to develop career path and expanding knowledge.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles={`mt-10`} />
      </div>
    </div>
  </section>
  
);

export default About;
