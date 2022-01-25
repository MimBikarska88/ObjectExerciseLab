function exercise1(input) {
    let obj = {};
    for (let i = 0; i < input.length; i += 2) {
        let productName = input[i];
        obj[productName] = Number(input[i + 1]);
    }
    console.log(obj);
}


/*

Input : 

exercise1(['Yoghurt', 48, 'Rise', 138,
    'Apple', 52
])

exercise1(['Potato', 93, 'Skyr', 63,
    'Cucumber', 18, 'Milk', 42
])



Output:
{Yoghurt: 48, Rise: 138, Apple: 52}

{Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42}
*/

function exercise2(worker) {
    if (worker.dizziness == true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    console.log(worker);
}

/*
Input : 

exercise2({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});
exercise2({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});

exercise2({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});

Output:

{weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false}
{weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false}
{weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false}

*/

function exercise3(carObj) {
    let newCarObj = Object.assign({}, carObj);
    delete newCarObj.power;
    delete newCarObj.wheelsize;
    delete newCarObj.color;

    if (carObj.power <= 90) {
        newCarObj.engine = {
            power: 90,
            volume: 1800
        };
    } else if (carObj.power <= 120) {
        newCarObj.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        newCarObj.engine = {
            power: 200,
            volume: 3500
        }
    }
    newCarObj.carriage = {
        type: carObj.carriage,
        color: carObj.color,
    }

    newCarObj.wheels = new Array(4);
    if (carObj.wheelsize % 2 == 0) {
        newCarObj.wheels.fill(carObj.wheelsize - 1, 0, 4);
    } else {
        newCarObj.wheels.fill(carObj.wheelsize, 0, 4);
    }


    //let obj = JSON.stringify(newCarObj);
    // console.log(obj);
    return newCarObj
}


/* Input : 

exercise3({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
exercise3({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})


Output : 



*/
function exercise4(heroes) {
    let heroInventory = new Array();
    for (let i = 0; i < heroes.length; ++i) {
        let heroInfo = heroes[i].split(' / ');
        let heroItems = heroInfo[2].split(', ');
        let hero = {
            name: heroInfo[0],
            level: Number(heroInfo[1]),
            items: heroItems,
        }
        heroInventory.push(hero);
    }
    return JSON.stringify(heroInventory);
}


/**
 * Input : 
 * let info = exercise4(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
console.log(info);


Output : 
[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

 * 
 * 
 * 
 * 
 * 
 */

function exercise5(info) {
    let productsInfo = new Array();
    for (let i = 0; i < info.length; ++i) {
        let townInfo = info[i].split(' | ');
        let found = productsInfo.find(product => product.name === townInfo[1]);
        if (found) {
            if (found.price > Number(townInfo[2])) {
                found.town = townInfo[0];
                found.price = Number(townInfo[2]);
            }
        } else {
            let newProduct = {
                name: townInfo[1],
                town: townInfo[0],
                price: Number(townInfo[2])
            };
            productsInfo.push(newProduct);
        }
    }
    for (let product of productsInfo) {
        console.log(`${product.name} -> ${product.price} (${product.town})`);
    }
}

/*Input : 

exercise5(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])


Output : 
Sample Product -> 1000 (Sample Town)
Orange -> 2 (Sample Town)
Peach -> 1 (Sample Town)
Burger -> 10 (New York)


*/
function exercise5(productsInfo) {
    let products = [];
    for (let i = 0; i < productsInfo.length; ++i) {
        let productInfo = productsInfo[i].split(' :');

        let newProduct = {
            name: productInfo[0],
            price: Number(productInfo[1])
        }
        products.push(newProduct);
    }
    let lastKey = '';
    products = products.sort((a, b) => a.name.localeCompare(b.name));
    for (let i = 0; i < products.length; ++i) {
        if (lastKey !== products[i].name[0]) {
            console.log(products[i].name[0].toUpperCase())
            lastKey = products[i].name[0];
        }
        console.log('  ' + products[i].name + ": " + products[i].price);
    }

}

/*Input : 

exercise5(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])

_____________________________
exercise5'(['Banana : 2',
'Rubic's Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);

Output : 
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
____________________________

B
  Banana: 2
  Barrel: 10
P
  Pesho: 0.000001
R

  Rali Car: 2000000
  Raspberry P: 4999
  Rolex: 100000
  Rollon: 10
  Rubic's Cube: 5
*/


function exercise6(input) {
    let towns = [];
    let properties = input.shift()
        .split(' |')
        .map((element) => element.replace('|', ''))
        .filter((element) => element !== '')
        .map((element) => element.trim());


    for (let i = 0; i < input.length; ++i) {
        let row = input[i].split('|').filter((element) => element !== '').map((element) => element.trim());
        let obj = {};
        obj[`${properties[0]}`] = row[0];
        obj[`${properties[1]}`] = Number(row[1]).toPrecision(2);
        obj[`${properties[2]}`] = Number(row[2]).toPrecision(2);
        console.log(obj);
        towns.push(obj);
    }
    return JSON.stringify(towns);

}
console.log(exercise6(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));