import styles from "./AppRouter.module.css";
import { FullPage, Slide } from "react-full-page";
import Protfolio from "./Portfolio";
import MovieApp from "./MovieApp";
import Navigation from "components/Navigation";

function AppRouter() {
  return (
    <>
      <Navigation />
      <div>
        <FullPage controls controlsProps={{ className: styles.nav }}>
          <Slide>
            <div className={styles.section}>
              <Protfolio />
            </div>
          </Slide>
          <Slide>
            <div className={styles.section}>
              <MovieApp />
            </div>
          </Slide>
          <Slide>
            <div className={styles.section}>Third page</div>
          </Slide>
        </FullPage>
      </div>
    </>
  );
}
export default AppRouter;
