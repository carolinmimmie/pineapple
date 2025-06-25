import { useEffect, useState } from "react";
import BookingForm from "../components/bookings/BookingForm";
import BookingList from "../components/bookings/BookingList";
import type { Booking } from "../models/interfaces";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  // vilken rad som redigeras (editingBookingId)
  const [editingBookingId, setEditingBookingId] = useState<string | null>(null);
  // värdena under redigeringen (editedBooking)
  const [editedBooking, setEditedBooking] = useState<Partial<Booking>>({});

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

  const toggleAdminTable = () => {
    if (showAdmin === true) {
      setShowAdmin(false);
    } else {
      setShowAdmin(true);
    }
  };

  const handleDeleteBooking = (id: string) => {
    axios
      .delete(`https://685298890594059b23ce43ac.mockapi.io/bookings/${id}`)
      .then(() => {
        setBookings((prev) => prev.filter((b) => b.id !== id));
      })
      .catch((err) => console.error("Fel vid borttagning av bokning", err));
  };

  const handleSaveEdit = (id: string) => {
    axios
      .put(
        `https://685298890594059b23ce43ac.mockapi.io/bookings/${id}`,
        editedBooking
      )
      .then((res) => {
        setBookings((prev) => prev.map((b) => (b.id === id ? res.data : b)));
        setEditingBookingId(null);
        setEditedBooking({});
      })
      .catch((err) => console.error("Fel vid uppdatering av bokning", err));
  };
  return (
    <div className="page-content">
      <section className="bookings">
        <h2>Boka bord</h2>
        {!showAdmin && (
          <BookingForm handleBooking={handleBooking} bookings={bookings} />
        )}
        {!showAdmin && (
          <button className="admin-button" onClick={toggleAdminTable}>
            Visa adminpanelen
          </button>
        )}

        {showAdmin && (
          <BookingList
            toggleAdminTable={toggleAdminTable}
            bookings={bookings}
            handleDeleteBooking={handleDeleteBooking}
            handleSaveEdit={handleSaveEdit}
            editingBookingId={editingBookingId}
            setEditingBookingId={setEditingBookingId}
            editedBooking={editedBooking}
            setEditedBooking={setEditedBooking}
          />
        )}
      </section>
    </div>
  );
};

export default Bookings;
