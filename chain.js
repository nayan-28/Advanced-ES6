const data = [{
    id: 1,
    name: 'Nayan',
    address: 'Dharmatala'
}]

console.log(data[0].address);


const products = [{
    count: 5000,
    data: [{
            id: 1,
            name: 'Lenovo laptop',
            price: 65000
        },
        {
            id: 2,
            name: 'Hp laptop',
            price: 50000
        }
    ]
}]

console.log(products[0].data[1].price);

const user = {
    id: 5001,
    name: 'President',
    address: {
        street: {
            first: 'Khulna',
            second: 'Jashore',
            third: 'Dharmatala'
        },
        city: 'Dhaka'
    }
}


console.log(user.address.street.first);
