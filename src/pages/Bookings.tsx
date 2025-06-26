import { useEffect, useState } from "react";
import BookingForm from "../components/bookings/BookingForm";
import type { Booking } from "../models/interfaces";
import axios from "axios";
import BookingTable from "../components/bookings/BookingTable";

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  // vilken rad som redigeras (editingBookingId)
  const [editingBookingId, setEditingBookingId] = useState<string | null>(null);
  // värdena under redigeringen (editedBooking)
  const [editedBooking, setEditedBooking] = useState<Partial<Booking>>({});
  const MAX_BOOKINGS_PER_TIME = 3;

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
  const isSlotAvailable = (
    bookings: Booking[],
    date: string,
    time: string,
    excludeBookingId?: string // valfritt id som exkluderas i koll
  ): boolean => {
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.date === date &&
        booking.time === time &&
        booking.id !== excludeBookingId // ignorera bokningen som redigeras
    );
    return filteredBookings.length < MAX_BOOKINGS_PER_TIME;
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

  const handleSaveEdit = (bookingIdToEdit: string) => {
    // Hitta bokningen som vi håller på att redigera
    const existingBooking = bookings.find(
      (booking) => booking.id === bookingIdToEdit
    );
    if (!existingBooking) return;

    // Skapa en komplett bokning med de nya ändrade värdena
    const bookingWithUpdates = { ...existingBooking, ...editedBooking };
    alert("Bokning ändrad.");

    // Kontrollera om datum och tid för den uppdaterade bokningen är ledig,
    // men exkludera bokningen vi redigerar så den inte räknas som "bokad"
    const isTimeSlotAvailable = isSlotAvailable(
      bookings,
      bookingWithUpdates.date,
      bookingWithUpdates.time,
      bookingIdToEdit
    );

    if (!isTimeSlotAvailable) {
      alert("Det finns inte plats på det valda datumet och tiden.");
      return; // Avbryt uppdateringen om slotten är fullbokad
    }

    // Uppdatera bokningen via API och uppdatera state när det lyckas
    axios
      .put(
        `https://685298890594059b23ce43ac.mockapi.io/bookings/${bookingIdToEdit}`,
        bookingWithUpdates
      )
      .then((response) => {
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.id === bookingIdToEdit ? response.data : booking
          )
        );
        setEditingBookingId(null);
        setEditedBooking({});
      })
      .catch((error) => console.error("Fel vid uppdatering av bokning", error));
  };

  return (
    <div className="page-content">
      <section>
        <h2>{!showAdmin ? "Boka bord" : "Bokningar"}</h2>

        {!showAdmin && (
          <BookingForm
            handleBooking={handleBooking}
            bookings={bookings}
            isSlotAvailable={isSlotAvailable}
          />
        )}
        {!showAdmin && (
          <button className="admin-button" onClick={toggleAdminTable}>
            Visa adminpanelen
          </button>
        )}

        {showAdmin && (
          <BookingTable
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
