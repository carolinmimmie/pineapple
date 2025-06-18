import { FaPen, FaTrashAlt } from "react-icons/fa";
import type { Booking } from "../../models/interfaces";

interface IBookingList {
  bookings: Booking[];
}

const BookingList = ({ bookings }: IBookingList) => {
  return (
    <div className="booking-list">
      <nav>
        <input type="date" />
        <h3>Alla bokningar</h3>
        <button>Lägg till ny bokning</button>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Förnamn</th>
            <th>Efternamn</th>
            <th>E-postadress</th>
            <th>Gäster</th>
            <th>Tid</th>
            <th>Datum</th>
            <th>Hantera bokning</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.firstName}</td>
              <td>{booking.lastName}</td>
              <td>{booking.email}</td>
              <td>{booking.guests}</td>
              <td>{booking.time}</td>
              <td>{booking.date}</td>
              <td>
                <div className="icons">
                  <div>
                    <FaPen />
                  </div>
                  <div>
                    <FaTrashAlt />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
