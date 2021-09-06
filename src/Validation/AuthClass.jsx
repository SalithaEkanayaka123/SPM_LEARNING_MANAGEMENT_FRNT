class Auth {
    constructor() {
        this.authenicated = false;
    }
    //Need to check before cart checkout

    login(username, usertype) {
        //API validation
        console.log(username);
        console.log(usertype);
        //if ()
        localStorage.setItem('flag', true);
        localStorage.setItem('username', username);
        localStorage.setItem('usertype', usertype);

        this.authenicated = true;
    }

    loginFail() {
        localStorage.setItem('flag', false);
        this.authenticated = false;
    }

    logout(cb) {
        //Clear the Flag upon pressing log
        localStorage.setItem('flag', false);
        this.authenticated = false;
    }

    isAuthenticated() {
        const flag = localStorage.getItem('flag')
        console.log("Localstorage Values - " + flag);
        if(flag === 'true'){
            return true;
        } else {
            return false;
        }
    }
}
export default new Auth();