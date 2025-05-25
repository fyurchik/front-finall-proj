import React, { useState } from 'react';
import './CinemaHall.css';

const rows = ['A','B','C','D','E'];
const cols = Array.from({ length: 8 }, (_, i) => i + 1);
const bookedSeats = ['A3','B5','C2'];

const CinemaHall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div>
      <div className="selected-list">
        Обрані місця: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'немає'}
      </div>
      <div className="cinema-hall">
        {rows.map(row =>
          cols.map(col => {
            const seatId = `${row}${col}`;
            const isBooked = bookedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);
            let className = 'seat';
            if (isBooked) className += ' booked';
            else if (isSelected) className += ' selected';
            else className += ' available';

            return (
              <div
                key={seatId}
                className={className}
                onClick={() => toggleSeat(seatId)}
              >
                {seatId}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CinemaHall;