
var express = require('express');
var router = express.Router();
var {createUser,getUser,updateUser,deleteUser} = require('../models/users.js')

router.post('/create', function(req, res, next) {
  const { name, email, address } = req.body;
            createUser({ name, email, address }, function (err, resp) {
            if ((resp === false) || (typeof (resp) === 'undefined') || err) {
              res.send({
                message: "user Creation Error",
                data: err || "Error"
              });
            } else {
              res.send({
                message: "user Created Success",
                data: resp
              });
            }
          })
});

router.get('/', function(req, res, next) {
            getUser(req, function (err, resp) {
            if ((resp === false) || (typeof (resp) === 'undefined') || err) {
              res.send({
                message: "Get user Error",
                data: err || "Error"
              });
            } else {
              res.send({
                message: "Get user Success",
                data: resp
              });
            }
          })
});

router.put('/:id', function(req, res, next) {
  const { name, email, address } = req.body;
  const { id } = req.params;
            updateUser({ id,name, email, address }, function (err, resp) {
            if ((resp === false) || (typeof (resp) === 'undefined') || err) {
              res.send({
                message: "update user Error",
                data: err || "Error"
              });
            } else {
              res.send({
                message: "update user Success",
                data: resp
              });
            }
          })
});

router.delete('/delete', function(req, res, next) {
  const { email } = req.body;
            deleteUser({email}, function (err, resp) {
            if ((resp === false) || (typeof (resp) === 'undefined') || err) {
              res.send({
                message: "delete user Error",
                data: err || "Error"
              });
            } else {
              res.send({
                message: "delete user Success",
                data: resp
              });
            }
          })
});


module.exports = router;
