import styles from "./WarangEdu.module.css";
function WarangEdu() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {/* <Link to="https://ekdmss31.github.io/movie_app"></Link> */}
        <a
          href="https://github.com/ekdmss31/AR_TensorflowLite_Final"
          target="_blank"
        >
          <img className={styles.img} src="img/WarangEdu.PNG" alt="WarangEdu" />
        </a>

        {/* <img
      className={styles.img2}
      src="img/movieApp2.PNG"
      alt="movieAppImg"
    /> */}
      </div>
      <div className={styles.txt}>
        현재 코로나로 인해 아이들이 학교를 가지 못하게 되면서 홈스쿨링이 주목을
        받아 다양한 수단이 등장하고 있습니다. 현 시대의 아이들은 학습 도구로
        미디어를 많이 사용하고 있기 때문에 저희는 미디어, 교육, 놀이라는
        키워드에 집중하였습니다. <br />
        <br />
        시중에는 다양한 교육 어플이 출시되어 있지만 이 어플들은 단어카드 위주의
        학습으로 카드에 그려진 하나의 이미지로만 학습이 가능하며 새로운 사물에
        대한 학습이 불가하다는 단점이 있습니다. <br />
        <br />
        따라서 저희는 다양화된 학습에 초점을 맞추어 주변 사물을 실시간으로
        공부할 수 있게 하고 AR 애니메이션을 통해 시각적인 학습 효과도 주고자
        합니다. 또한 학습한 단어들은 게임에 적용하여 복습 또한 재미있게 할 수
        있게 합니다.
      </div>
    </div>
  );
}
export default WarangEdu;
