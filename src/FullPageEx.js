import { FullPage, Slide } from "react-full-page";

function FullPageEx() {
  return (
    <FullPage controls>
      <Slide>
        <h1>First page</h1>
      </Slide>
      <Slide>
        <h2>Second page</h2>
      </Slide>
      <Slide>
        <h2>Third page</h2>
      </Slide>
    </FullPage>
  );
}

export default FullPageEx;
