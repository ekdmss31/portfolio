import styles from "./AppRouter.module.css";
import { FullPage, Slide } from "react-full-page";
import Protfolio from "components/Portfolio";
import MovieApp from "components/MovieApp";
import Navigation from "components/Navigation";
import WarangEdu from "components/WarangEdu";
import DrugApp from "components/DrugApp";

function AppRouter() {
  return (
    <>
      <Navigation />
      <div>
        <FullPage controls controlsProps={{ className: styles.nav }}>
          <Slide>
            <div className={styles.section}>
              <MovieApp />
            </div>
          </Slide>
          <Slide>
            <div className={styles.section}>
              <WarangEdu />
            </div>
          </Slide>
          <Slide>
            <div className={styles.section}>
              <DrugApp />
            </div>
          </Slide>
          <Slide>
            <div className={styles.section}>
              <Protfolio />
            </div>
          </Slide>
        </FullPage>
      </div>
    </>
  );
}
export default AppRouter;
