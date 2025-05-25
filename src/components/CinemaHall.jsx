import React from 'react';
import './CinemaHall.css';

const rows = ['A','B','C','D','E'];
const cols = Array.from({ length: 8 }, (_, i) => i + 1);

const CinemaHall = ({ reservedSeats = [], selectedSeats = [], onSeatToggle }) => (
  <div>
    <div className="selected-list">
      Обрані: {selectedSeats.length ? selectedSeats.join(', ') : 'немає'}
    </div>
    <div className="cinema-hall">
      {rows.map(row =>
        cols.map(col => {
          const seatId = `${row}${col}`;
          const booked = reservedSeats.includes(seatId);
          const selected = selectedSeats.includes(seatId);
          let cls = 'seat';
          if (booked) cls += ' booked';
          else if (selected) cls += ' selected';
          else cls += ' available';

          return (
            <div
              key={seatId}
              className={cls}
              onClick={() => onSeatToggle(seatId)}
            >{seatId}</div>
          );
        })
      )}
    </div>
  </div>
);

export default CinemaHall;