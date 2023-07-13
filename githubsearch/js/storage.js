class Storagex {
    static key = "searchedUsers"

    static getSearchedUsersFromLocalStorage() {
        let users;
        if (localStorage.getItem(this.key) == null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem(this.key))
        }
        return users;
    }

    static checkUser(username) {
        const getUsers = this.getSearchedUsersFromLocalStorage()
        if (!getUsers.includes(username)) {
            return true;
        } else {
            return false;
        }
    }



    static setSearchedUsersToLocalStorage(username) {
        const users = this.getSearchedUsersFromLocalStorage()
        if (this.checkUser(username)) {
            users.push(username.trim())
            localStorage.setItem(this.key, JSON.stringify(users))
        }
    }


    static clearLocalStorage() {
        localStorage.removeItem(this.key)
    }
}