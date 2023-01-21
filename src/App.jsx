import styles from './style';
import {
  About,
  EducationBG,
  CardDeal,
  Clients,
  Footer,
  Navbar,
  ProgrammingLang,
  Home,
  Contact,
} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <EducationBG />
        <ProgrammingLang />
        <CardDeal />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
