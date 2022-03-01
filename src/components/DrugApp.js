import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import styles from "./DrugApp.module.css";
function DrugApp() {
  //const [show, setShow] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.txt}>
        하루가 멀다 하고 새로운 의약품과 건강기능식품이 쏟아지고 있는 요즘,
        수없이 출시되는 의약품과 건강기능식품을 의사처방 없이 쉽게 구입할 수
        있어짐에 따라 소비자들의 딜레마 또한 피해갈 수 없습니다. 이는 잘못된
        의약품 선택과 오남용에 대한 우려, 그로 인한 건강악화를 의미합니다. 약은
        복용시간과 복용기간을 정확하게 지켰을 때 그 효과가 커집니다. 그러나
        현대인들은 바쁜 생활 속에서 복용중인 약의 복용시간 및 복용기간을 놓치기
        쉽습니다.
        <br />
        <br />
        따라서 사용자가 설정해놓은 약물 복용시간을 알려주고, 증상에 따른 약
        추천으로 더욱 편리한 약 복용을 가능하게 하며, GPS를 통해 가까운 약국의
        위치를 보여주어 약국 이용을 편리하게 하고자 합니다. 또한 리뷰기능을
        적용하여 다양한 사용자가 자신의 경험을 작성할 수 있게 합니다.
      </div>
      <div className={styles.imgContainer}>
        <a href="https://github.com/ekdmss31/DrugApp_android" target="_blank">
          <Fade right>
            <img className={styles.img} src="img/DrugApp.png" alt="DrugApp" />
          </Fade>
        </a>
      </div>
    </div>
  );
}
export default DrugApp;
