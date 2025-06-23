import { useEffect, useState } from "react";
import BookingForm from "../components/bookings/BookingForm";
import BookingList from "../components/bookings/BookingList";
import type { Booking } from "../models/interfaces";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    axios
      .get("https://685298890594059b23ce43ac.mockapi.io/bookings")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error("Fel vid hämtning av bokningar:", err));
  }, []);
  console.log(bookings);

  const handleBooking = (booking: Booking) => {
    axios
      .post("https://685298890594059b23ce43ac.mockapi.io/bookings", booking)
      .then((res) => {
        setBookings((prev) => [...prev, res.data]);
      })
      .catch((err) => console.error("Fel vid skapande av ny bokning", err));
  };
  return (
    <div className="bookings">
      <section>
        <h2>Boka bord</h2>
        <BookingForm handleBooking={handleBooking} bookings={bookings} />
        <BookingList bookings={bookings} />
      </section>
    </div>
  );
};

export default Bookings;
