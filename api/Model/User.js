class User {
    /**
     * Creates a new instance of a User.
     * @param {number} idUser - The unique ID of the user.
     * @param {string} email - The email of the user.
     * @param {string} password - The password of the user.
     * @param {string} lastname - The last name of the user.
     * @param {string} firstname - The first name of the user.
     * @param {string} addressLine1 - The first line of the address of the user.
     * @param {string} addressLine2 - The second line of the address of the user.
     * @param {string} city - The city of the address of the user.
     * @param {string} province - The province of the address of the user.
     * @param {string} zip - The zip code of the address of the user.
     * @param {string} country - The country of the address of the user.
     */
    constructor(idUser, email, password, lastname, firstname, addressLine1, addressLine2, city, province, zip, country) {
        this.idUser = idUser;
        this.email = email;
        this.password = password;
        this.lastname = lastname;
        this.firstname = firstname;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.province = province;
        this.zip = zip;
        this.country = country;
    }
}

exports.User = User;
