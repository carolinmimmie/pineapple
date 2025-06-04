const Home = () => {
  const images = [
    "../../public/assets/home1.jpg",
    "../../public/assets/home2.jpg",
    "../../public/assets/home3.jpg",
    "../../public/assets/home4.jpg",
    "../../public/assets/home5.jpg",
    "../../public/assets/home6.jpg",
    "../../public/assets/home7.jpg",
    "../../public/assets/home8.jpg",
    "../../public/assets/home9.jpg",
    "../../public/assets/home10.jpg",
    "../../public/assets/home11.jpg",
    "../../public/assets/home12.jpg",
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
