import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 59.3057,
  lng: 18.1095,
};

const FindUs = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCi36RM6ZvbcSWmFZG98aR8j8wAGpQ2Wzs",
  });

  if (!isLoaded) {
    return <div>Laddar karta...</div>;
  }

  return (
    <div className="find-us">
      <section>
        <h2>Hitta hit</h2>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
        <h4>Hammarbysjöstad 32, 120 30 Stockholm</h4>
      </section>
    </div>
  );
};

export default FindUs;
