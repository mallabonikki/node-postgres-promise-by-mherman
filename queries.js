var promise = require('bluebird');

var options = { promiseLib: promise };

var pgp = require('pg-promise')(options);

var connectionString = 'postgres://postgres:postgres@localhost:5432/puppies';
var db = pgp(connectionString);

function getAllPuppies(req, res, next) {
    db.any('select * from pups')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved All Puppies'
                });
        })
        .catch(function (err) {
            return next(err);
        })
}

function getSinglePuppy(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.one('select * from pups where id = $1', pupID)
        .then(function (data) {
            res.status(200).json({ status: 'success', data: data, message: 'Retrieved one puppy' });
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllPuppies: getAllPuppies,
    getSinglePuppy: getSinglePuppy
    createPuppy: createPuppy,
    // updatePuppy: updatePuppy,
    // removePuppy: removePuppy
};