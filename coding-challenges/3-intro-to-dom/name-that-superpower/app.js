var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

var leagueList = document.getElementById("league");

for (i=0; i < justiceLeague.length; i++) {

    let newLeague = document.createElement("li");
    newLeague.textContent = justiceLeague[i].name + " " + justiceLeague[i].superpower;
    leagueList.append(newLeague);
}