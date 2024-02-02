import axios from "axios";
import { User } from "../models/User";

export class UserService {
    instance;
    /**
     * Gets the instance of the UserService
     * @returns {UserService} - The instance of the UserService
     */
    getInstance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    }

    /**
     * Registers a new user
     * @param {string} firstname
     * @param {string} lastname
     * @param {string} email
     * @param {string} userPassword
     * @returns {json} - a JSON containing the JWT token
     */
    register(firstname, lastname, email, userPassword) {
        return axios.post("http://localhost:3000/auth/register", { firstname, lastname, email, userPassword });
    }

    /**
     * Connects a user
     * @param {string} email
     * @param {string} userPassword
     * @returns {json} - a JSON containing the JWT token
     */
    login(email, userPassword) {
        return axios.post("http://localhost:3000/auth/login", { email, userPassword });
    }

    /**
     * Gets all users
     * @returns {User[]} - an array of all users
     */
    getAllUsers() {
        const json = axios.get("http://localhost:3000/users");
        var users = [];
        for (var i = 0; i < json.data.length; i++) {
            users.push(
                new User(
                    json.data[i].iduser,
                    json.data[i].firstname,
                    json.data[i].lastname,
                    json.data[i].email,
                    json.data[i].userpassword,
                    json.data[i].addressline1,
                    json.data[i].addressline2,
                    json.data[i].city,
                    json.data[i].province,
                    json.data[i].zip,
                    json.data[i].country
                )
            );
        }
        return users;
    }

    /**
     * Gets a user by ID
     * @param {number} id
     * @returns {User} - a user
     */
    async getUserById(id) {
        const json = await axios.get("http://localhost:3000/users/" + id);
        return new User(
            json.data.iduser,
            json.data.firstname,
            json.data.lastname,
            json.data.email,
            json.data.userpassword,
            json.data.addressline1,
            json.data.addressline2,
            json.data.city,
            json.data.province,
            json.data.zip,
            json.data.country
        );
    }

    /**
     * Updates a user
     * @param {User} user
     * @returns {User} - the updated user
     */
    updateUser(user) {
        return axios.put("http://localhost:3000/users/" + user.idUser, {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            userPassword: user.userPassword,
            addressLine1: user.addressLine1,
            addressLine2: user.addressLine2,
            city: user.city,
            province: user.province,
            zip: user.zip,
            country: user.country,
        });
    }

    /**
     * Deletes a user
     * @param {number} id
     */
    deleteUser(id) {
        axios.delete("http://localhost:3000/users/" + id);
    }
}

module.exports = { }