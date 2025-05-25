import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import BookingService from '../services/BookingService';
import { movies } from '../data/movies';
import { toast } from 'react-toastify';
import './Booking.css';

const Booking = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movie = movies.find(m => m.id === movieId);
  const [reserved, setReserved] = useState([]);
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setReserved(BookingService.getReservedSeats(movieId));
  }, [movieId]);

  const handleSeatToggle = (seat) => {
    if (reserved.some(r => r.seat === seat)) return;
    setSelected(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Обов'язкове поле";
    if (!/^\+?\d{7,15}$/.test(form.phone)) errs.phone = 'Невірний формат телефону';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) errs.email = 'Невірний email';
    if (selected.length === 0) errs.seats = 'Оберіть хоча б одне місце';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    BookingService.saveBooking(movieId, { seats: selected, ...form });
    toast.success('Бронювання успішне!');
    setReserved(BookingService.getReservedSeats(movieId));
    setSelected([]);
    setForm({ name: '', phone: '', email: '' });
    setErrors({});
    setModalOpen(false);
  };

  if (!movie) {
    return <p>Фільм не знайдено. <Link to="/">На головну</Link></p>;
  }

  return (
    <div className="booking-page">
      <h2>{movie.title}</h2>
      <CinemaHall
        reservedSeats={reserved.map(r => r.seat)}
        selectedSeats={selected}
        onSeatToggle={handleSeatToggle}
      />

      {selected.length > 0 && (
        <button className="btn-open-modal" onClick={() => setModalOpen(true)}>
          Забронювати {selected.join(', ')}
        </button>
      )}

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Введіть ваші дані</h3>
            <form className="booking-form" onSubmit={handleSubmit} noValidate>
              {errors.seats && <p className="error">{errors.seats}</p>}
              <div>
                <label>Ім'я</label>
                <input
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <label>Телефон</label>
                <input
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div>
                <label>Email</label>
                <input
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="modal-buttons">
                <button type="submit" className="btn-book-submit">Підтвердити</button>
                <button type="button" className="btn-cancel" onClick={() => setModalOpen(false)}>Скасувати</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;