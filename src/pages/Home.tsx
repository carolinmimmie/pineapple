const Home = () => {
  const images = [
    "/assets/home1.jpg",
    "/assets/home2.jpg",
    "/assets/home3.jpg",
    "/assets/home4.jpg",
    "/assets/home5.jpg",
    "/assets/home6.jpg",
    "/assets/home7.jpg",
    "/assets/home8.jpg",
    "/assets/home9.jpg",
    "/assets/home10.jpg",
    "/assets/home11.jpg",
    "/assets/home12.jpg",
  ];
  return (
    <div className="home">
      {images.map((src, index) => (
        <div key={index} className={`image-item image-item--${index + 1}`}>
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Home;
