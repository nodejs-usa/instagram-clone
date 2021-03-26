const { request } = require("express")


module.exports = {

    async store( request, response ) {
        const { name, email, username, password } = request.body;
        response.json({name});
    }
}