class Notification {
    /**
     * Creates a new instance of a Notification.
     * @param {number} idNotification - The unique ID of the notification.
     * @param {string} dateNotification - The date the notification was made.
     * @param {string} messageNotification - The message of the notification.
     * @param {Reservation} reservation - The reservation that the notification is for.
     */
    constructor(idNotification, dateNotification, messageNotification, reservation) {
        this.idNotification = idNotification;
        this.dateNotification = dateNotification;
        this.messageNotification = messageNotification;
        this.reservation = reservation;
    }
}

exports.Notification = Notification;
