import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Booking } from "../../models/interfaces";
interface IBookingForm {
  handleBooking: (booking: Booking) => void;
  bookings: Booking[];
}

const BookingForm = ({ handleBooking, bookings }: IBookingForm) => {
  const MAX_BOOKINGS_PER_TIME = 15;

  const [formData, setFormData] = useState<Booking>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const currentBookings = bookings.filter(
      (booking) =>
        booking.date === formData.date && booking.time === formData.time
    );

    if (currentBookings.length >= MAX_BOOKINGS_PER_TIME) {
      alert("Fullbokat!");
      return;
    } else {
      alert(
        `Välkommen ${formData.firstName}! Din bokning den ${formData.date} kl ${formData.time}`
      );
    }

    handleBooking({
      ...formData,
      id: crypto.randomUUID(),
    });

    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      time: "",
      guests: 1,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().slice(0, 10)}
            max={"2025-12-31"}
            required
          />
        </div>
        <div>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">-- Välj tid --</option>
            <option value="18-21">Tidig middag (18-21) </option>
            <option value="21-23">Sen middag (21-23) </option>
          </select>
        </div>
        <div>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Förnamn"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Efternamn"
            required
          />{" "}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-post"
            required
          />
        </div>
        <button type="submit">Boka</button>
      </form>
    </>
  );
};

export default BookingForm;
