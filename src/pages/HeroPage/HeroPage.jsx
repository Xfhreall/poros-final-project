import "./HeroPage.css";

const HeroPage = () => {
  return (
    <section id="beranda">
      <div
        className="hero-content"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="1700"
        data-aos-delay="500"
      >
        <div className="hero-title">
          <p>Hai, Sobat</p>
          <h1>Majalah Art Times</h1>
        </div>

        <h2 className="hero-subtitle">
          Halaman Web Art Times
          <br />
          "The Source Of Ar-Rahmat Information"
          <br />
          Made by - Risqi Fahreal
        </h2>
        <div className="button" id="button-3">
          {/* <div id="circle"></div> */}
          <a href="#komposisi">Telusuri</a>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
