//Add another object to the start of our gardenPlants array using the unshift method:

let gardenPlants = [ 
    {
        name: 'roses', 
        origin: 'China'
    },
    {
        name: 'tulips', 
        origin: 'Asia'
    },
]

gardenPlants.unshift({
    name:'Sunflower',
    origin: 'North America'
})
console.log(gardenPlants)