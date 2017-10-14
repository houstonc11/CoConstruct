var db = require('../models');
var Users = db.Users;
var path = require('path');
var Cookies = require("cookies");
var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var CLIENT_ID = "188220526935-1cg1r7gmee8bsg399av8i9teg93b9ql8.apps.googleusercontent.com";
var client = new auth.OAuth2(CLIENT_ID, '', '');

module.exports = function (app) {
    
    function authenticate(token, successCallback, failureCallback) {
        client.verifyIdToken(
            token,
            CLIENT_ID,
            function (e, login) {
                if (login != null) {
                    var payload = login.getPayload();
                    var userid = payload['sub'];
                    db.Users.findOne({
                        where: {
                            client_id: userid
                        }
                    }).then(function (dbUser) {
                        if (dbUser) {
                            console.log("askfjbaskfjbaskfjbasf");
                            console.log(dbUser);
                            successCallback(dbUser);
                        } else {
                            db.Users.create({
                                first_name: payload['given_name'],
                                last_name: payload['family_name'],
                                email: payload['email'],
                                client_id: userid
                            }).then(function (newDbUser) {
                                successCallback(newDbUser);
                            });
                        }
                    });
                } else {
                    failureCallback();
                }
            });
        }}