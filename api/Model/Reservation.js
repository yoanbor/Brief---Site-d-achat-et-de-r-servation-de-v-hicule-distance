class Reservation {
    /**
     * Creates a new instance of a Reservation.
     * @param {*} idReservation - The unique ID of the reservation.
     * @param {*} reservationDate - The date the reservation was made.
     * @param {*} isPaid - Whether the reservation is paid or not.
     * @param {*} deliveryDate - The date the car will be delivered.
     * @param {*} reservationState - The current state of the reservation.
     * @param {*} user - The user that made the reservation.
     * @param {*} car - The car that the reservation is for
     */
    constructor(idReservation, reservationDate, isPaid, deliveryDate, reservationState, user, car) {
        this.idReservation = idReservation;
        this.reservationDate = reservationDate;
        this.isPaid = isPaid;
        this.deliveryDate = deliveryDate;
        this.reservationState = reservationState;
        this.user = user;
        this.car = car;
    }
}

exports.Reservation = Reservation;
