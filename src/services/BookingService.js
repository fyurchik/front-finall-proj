class BookingService {
  static STORAGE_KEY = 'bookings';

  static _loadAll() {
    try {
      const json = localStorage.getItem(this.STORAGE_KEY);
      return json ? JSON.parse(json) : {};
    } catch {
      return {};
    }
  }

  static _saveAll(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  static getReservedSeats(movieId) {
    const all = this._loadAll();
    return all[movieId] || [];
  }

  static saveBooking(movieId, { seats, name, phone, email }) {
    const all = this._loadAll();
    const existing = all[movieId] || [];
    const newSeats = seats.map(seat => ({ seat, name, phone, email }));
    all[movieId] = [...existing, ...newSeats];
    this._saveAll(all);
  }
}

export default BookingService;