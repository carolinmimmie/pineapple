import { FaCheck, FaPen, FaTimes, FaTrashAlt } from "react-icons/fa";
import type { Booking } from "../../models/interfaces";
import { useState } from "react";

interface IBookingList {
  bookings: Booking[];
  handleDeleteBooking: (id: string) => void;
  toggleAdminTable: () => void;
  handleSaveEdit: (id: string) => void;
  editingBookingId: string | null;
  setEditingBookingId: (id: string | null) => void;
  editedBooking: Partial<Booking>;
  setEditedBooking: (booking: Partial<Booking>) => void;
}

const BookingList = ({
  bookings,
  toggleAdminTable,
  handleDeleteBooking,
  handleSaveEdit,
  editingBookingId,
  setEditingBookingId,
  editedBooking,
  setEditedBooking,
}: IBookingList) => {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div className="booking-list">
      <nav>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <h4>Alla bokningar</h4>
        <button onClick={toggleAdminTable}>Lägg till ny bokning</button>
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
          {bookings
            .filter((booking) => !selectedDate || booking.date === selectedDate)
            .map((booking) => {
              const isEditing = editingBookingId === booking.id;
              return (
                <tr key={booking.id}>
                  <td>
                    {isEditing ? (
                      <input
                        value={editedBooking.firstName || ""}
                        onChange={(e) =>
                          setEditedBooking({
                            ...editedBooking,
                            firstName: e.target.value,
                          })
                        }
                      />
                    ) : (
                      booking.firstName
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <input
                        value={editedBooking.lastName || ""}
                        onChange={(e) =>
                          setEditedBooking({
                            ...editedBooking,
                            lastName: e.target.value,
                          })
                        }
                      />
                    ) : (
                      booking.lastName
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <input
                        value={editedBooking.email || ""}
                        onChange={(e) =>
                          setEditedBooking({
                            ...editedBooking,
                            email: e.target.value,
                          })
                        }
                      />
                    ) : (
                      booking.email
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <input
                        type="number"
                        value={editedBooking.guests || ""}
                        onChange={(e) =>
                          setEditedBooking({
                            ...editedBooking,
                            guests: Number(e.target.value),
                          })
                        }
                      />
                    ) : (
                      booking.guests
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <select
                        value={editedBooking.time || ""}
                        onChange={(e) =>
                          setEditedBooking({
                            ...editedBooking,
                            time: e.target.value,
                          })
                        }
                      >
                        <option value="">-- Välj tid --</option>
                        <option value="18-21">Tidig middag (18-21) </option>
                        <option value="21-23">Sen middag (21-23) </option>
                      </select>
                    ) : (
                      booking.time
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <input
                        type="date"
                        value={editedBooking.date || ""}
                        onChange={(e) =>
                          setEditedBooking({
                            ...editedBooking,
                            date: e.target.value,
                          })
                        }
                      />
                    ) : (
                      booking.date
                    )}
                  </td>

                  <td>
                    <div className="icons">
                      {isEditing ? (
                        <>
                          <div onClick={() => handleSaveEdit(booking.id)}>
                            <FaCheck title="Spara" />
                          </div>
                          <div
                            onClick={() => {
                              setEditingBookingId(null);
                              setEditedBooking({});
                            }}
                          >
                            <FaTimes title="Avbryt" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            onClick={() => {
                              setEditingBookingId(booking.id);
                              setEditedBooking({ ...booking });
                            }}
                          >
                            <FaPen title="Redigera" />
                          </div>
                          <div onClick={() => handleDeleteBooking(booking.id)}>
                            <FaTrashAlt title="Ta bort" />
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
