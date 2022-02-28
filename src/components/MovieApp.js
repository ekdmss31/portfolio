import styles from "./MovieApp.module.css";
function MovieApp() {
  return (
    <div className={styles.container}>
      <div className={styles.txt}>
        React.js를 공부하던 도중, 영화 정보를 보여주는 API를 활용하여 웹
        어플리케이션을 제작하게 되었습니다.
        <br />
        평소에 영화에 대한 정보들을 한번에 모아서 보여주는 홈페이지가 없음에
        불편함을 느껴 이러한 불편함을 해소시키기 위하여 제작하게 되었습니다.
      </div>
      <div className={styles.imgContainer}>
        {/* <Link to="https://ekdmss31.github.io/movie_app"></Link> */}
        <a href="https://ekdmss31.github.io/movie_app" target="_blank">
          <img
            className={styles.img}
            src="img/movieApp.PNG"
            alt="movieAppImg"
          />
        </a>

        {/* <img
          className={styles.img2}
          src="img/movieApp2.PNG"
          alt="movieAppImg"
        /> */}
      </div>
    </div>
  );
}
export default MovieApp;
