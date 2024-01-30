class User {
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
