var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'database/products',
        autoload: true
    });
db2 = new Datastore({
    filename: 'database/categories',
    autoload: true
});
db3 = new Datastore({
    filename: 'database/order',
    autoload: true
});


var doc = [{
        _id: 'p1',
        name: 'blank tshirt',
        price: [{
                qt: 1,
                pr: 30000
            },
            {
                qt: 3,
                pr: 80000
            },
        ],
        category: ['men', 'woman'],
        series: ['premium', 'standard']
    },
    {
        _id: 'p2',
        name: 'galaxy fit',
        price: {
            qt: 1,
            pr: 200000
        },
        category: ['android', 'cell phone'],
        series: ['black mate', 'shining green']
    },
    {
        _id: 'p3',
        name: 'logitech mouse',
        price: [{
                qt: 1,
                pr: 50000
            },
            {
                qt: 2,
                pr: 90000
            },
            {
                qt: 3,
                pr: 130000
            },
        ],
        category: 'mouse',
        series: ['blue', 'red']
    }
];

var doc2 = [{
        name: 'electronic',
        parent: 0
    },
    {
        name: 'outfit',
        parent: 0
    },
    {
        name: 'men',
        parent: 'outfit'
    },
    {
        name: 'woman',
        parent: 'outfit'
    },
    {
        name: 'android',
        parent: 'electronic'
    },
    {
        name: 'cell phone',
        parent: 'electronic'
    },
    {
        name: 'mouse',
        parent: 'pc periperal'
    },
    {
        name: 'pc periperal',
        parent: 'electronic'
    }
];
var doc3 = [    {
    _id: 'u1',
    user: 'budi',
    product: 'galaxy fit',
    qt: 2
},
{
    _id: 'u2',
    user: 'herma',
    product: 'logitech mouse',
    qt: 1
}
];

db.insert(doc, function (err, newDoc) { // Callback is optional
    // newDoc is the newly inserted document, including its _id
});
db2.insert(doc2, function (err, newDoc) { // Callback is optional
    // newDoc is the newly inserted document, including its _id
});
db3.insert(doc3, function (err, newDoc) { // Callback is optional
    // newDoc is the newly inserted document, including its _id
});