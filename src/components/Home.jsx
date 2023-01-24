import styles from '../style';
import { discount, mypic } from '../assets';
import { Typewriter } from 'react-simple-typewriter';
import '../css/Home.css';

import Gmailbutton from './Gmailbutton';

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingHomeY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Welcome to my world!!!</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold md:text-[60px] ss:text-[72px] text-[25px] text-white ss:leading-[100.8px] leading-[75px]">
            Hi, I'm <br className="sm:block hidden" />
            <span className="text-gradient">Basam C. Serad</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold md:text-[42px] ss:text-[52px] text-[25px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          a
          <span>
            <Typewriter
              words={[
                ' Software Developer.',
                ' Web Developer.',
                ' Front-end Developer.',
                ' Back-end Developer.',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] mt-5 text-justify`}>
          I'm a Software Developer specializing in web development. My passion
          is creating innovative web systems and I have a strong foundation in
          technologies such as Quasar Framework, Vuejs, Reactjs, Nodejs,
          Javascript, Typescript, HTML, CSS, and MySQL. On this website, you'll
          find examples of my work and my contact information. Thank you for
          visiting!
        </p>
        <div className="md:flex flex-col hidden py-28">
          <h1 className="text-gradient font-poppins font-semibold text-[23px] text-white pb-8">
            Find Me With
          </h1>
          <Gmailbutton />
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative h-[90%]`}
      >
        <img
          src={mypic}
          alt="mypic"
          className="w-[100%] h-[100%] relative z-[5] home_pic"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className="md:hidden flex flex-col justify-center items-center">
        <h1 className="font-poppins font-semibold text-[20px] text-white">
          Find Me With
        </h1>
        <Gmailbutton />
      </div>
    </section>
  );
};

export default Home;
