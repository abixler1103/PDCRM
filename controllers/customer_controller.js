var db = require('../models');
var Customer = db.Customer;


// export the routes
module.exports = function(app) {
// get the root route
app.get('api/register', function(req, res) {
    db.Customer.findAll({}).then(function(dbCustomer) {
        var responseObject = {
            register: dbCustomer
        }
        res.json(responseObject);
    });
});

app.get('/register/:id', function(req, res) {
    db.Customer.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(dbCustomer) {
        res.json(dbCustomer);
    })
});

app.put("/register/:id", function(req, res) {
    db.Customer.update({
        foster_available: req.body.dog_foster
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbCustomer) {
        res.json(dbCustomer);
    })

});

app.post("/register", function(req, res) {

        db.Customer.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            cellPhone: req.body.cellPhone,
            address: req.body.address,
            address2: req.body.address2 || "",
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            fbLink: req.body.fbLink,
            birthday: req.body.birthday,
            anniversary: req.body.anniversary,
            accessorypref: req.body.accessorypref,
            stylepref: req.body.stylepref,
            text: req.body.text,
            flex: req.body.flex,
            mixedmetals: req.body.mixedmetals,
            rosegold: req.body.rosegold,
            trendy: req.body.trendy,
            flattering: req.body.flattering,
            cpw: req.body.cpw
        }).then(function(dbCustomer) {
            // calc
            var flex_value = req.body.flex;
            var mixedmetals_value = req.body.mixedmetals;
            var rosegold_value = req.body.rosegold;
            var trendy_value = req.body.trendy;
            var flattering_value = req.body.flattering;
            var cpw_value = req.body.cpw;

            // calc
            val = +flex_value + +mixedmetals_value + +rosegold_value + +trendy_value + +flattering_value + +cpw_value;

            console.log(val);

            if (val <= 10) {
                res.json(JSON.stringify({ jewelry: 'Hoop-Hoop-Hooray', image: 'https://www.premierdesigns.com/AshleyBixler/101/retail-catalog/shop-by-style/boho/hoop' }));
            } else if (val >= 11 && val <= 15) {
                res.json(JSON.stringify({ jewelry: 'Sway', image: 'https://www.premierdesigns.com/AshleyBixler/101/retail-catalog/shop-by-style/boho/sway' }));
            } else if (val >= 16 && val <= 20) {
                res.json(JSON.stringify({ jewelry: 'Cashmere', image: 'https://www.premierdesigns.com/AshleyBixler/101/retail-catalog/shop-by-style/boho/cashmere' }));
            } else {
                res.json(JSON.stringify({ jewelry: 'Sable', image: 'https://www.premierdesigns.com/AshleyBixler/101/retail-catalog/shop-by-style/boho/sable-9b06ae7a' }));
            };


        // redirect
    })
    .error(function(err) {
        res.json(err);
    });


});
};