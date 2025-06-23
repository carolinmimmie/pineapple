const Home = () => {
  const images = [
    "/assets/home1.webp",
    "/assets/home2.webp",
    "/assets/home3.webp",
    "/assets/home4.webp",
    "/assets/home5.webp",
    "/assets/home6.webp",
    "/assets/home7.webp",
    "/assets/home8.webp",
    "/assets/home9.webp",
    "/assets/home10.webp",
    "/assets/home11.webp",
    "/assets/home12.webp",
    "/assets/home13.webp",
    "/assets/home14.webp",
    "/assets/home15.webp",
    "/assets/home16.webp",
    "/assets/home17.webp",
    "/assets/home18.webp",
    "/assets/home19.webp",
    "/assets/home20.webp",
  ];
  return (
    <div className="home">
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt="images of the restaurant pineapple"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
