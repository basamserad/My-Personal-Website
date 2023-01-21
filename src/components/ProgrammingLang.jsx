import { prolang } from '../constants';
import styles from '../style';
import ProlangCard from './ProlangCard';

const ProgrammingLang = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    

    <div className="w-full text-center align-center sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Programming Language I Use</h2>
    </div>

    <div className="flex flex-wrap justify-center w-full relative z-[1]">
      {prolang.map((card) => (
        <ProlangCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default ProgrammingLang;
