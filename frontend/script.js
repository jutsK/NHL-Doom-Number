$.getJSON('https://statsapi.web.nhl.com/api/v1/teams/23/stats', function(data) {
    console.log(data);
    document.getElementById("nhl").innerHTML = JSON.stringify(data.stats);
    
})



