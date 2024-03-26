import "./HeroPage.css";

const HeroPage = () => {
  return (
    <section id="beranda">
      <div className="hero-content">
        <div className="hero-title">
          <h2>Selamat datang</h2>
          <h1>DumStore</h1>
        </div>

        <h2 className="hero-subtitle">
          Pilihan pertama sobat belanja anda
          <br />
          Extra-ordinary fashion style made affordable
        </h2>
        <div className="button" id="button-3">
          <a href="/#produk">Telusuri</a>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
