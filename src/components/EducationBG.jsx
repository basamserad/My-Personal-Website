import { education } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const EducationCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row sm:py-6 md:p-6 rounded-[20px] ${
      index !== education.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  bg-dimBlue`}
    >
      <img
        src={icon}
        alt="university"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const EducationBG = () => (
  <section id="education" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        EDUCATIONAL <br className="sm:block hidden" /> BACKGROUND
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I had the privilege of obtaining my Bachelor of Science in Information
        Technology from the esteemed Mindanao State University, where I honed my
        skills and developed a strong foundation in the field from 2018 to 2023.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col justify-items-start`}>
      {education.map((feature, index) => (
        <EducationCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default EducationBG;
