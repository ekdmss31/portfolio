import { FullPage, Slide } from "react-full-page";
import Protfolio from "./Portfolio";
import MovieApp from "./MovieApp";
import Navigation from "routes/Navigation";
function AppRouter() {
  return (
    <>
      <Navigation />
      <FullPage controls>
        <Slide>
          <Protfolio />
        </Slide>
        <Slide>
          <MovieApp />
        </Slide>
        <Slide>
          <h2>Third page</h2>
        </Slide>
      </FullPage>
    </>
  );
}
export default AppRouter;
