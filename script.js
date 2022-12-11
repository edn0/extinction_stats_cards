// let player_avatar = "https://cdn.discordapp.com/avatars/" + player + "/" + interaction.user.avatar + ".png"





async function get_extinction_data(user) {

 
    console.log("////////////////")
    console.log("/////////////////////")
    console.log("////////////////")

    url = "https://api.gtaliferp.fr:8443/v1/extinction/profiles/discord/" + user

    const response = await fetch(url, {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
            "Alt-Used": "api.gtaliferp.fr:8443",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "If-None-Match": "W/\"91f-/zAcFce4XlbkMEztNPhLGROj5gI\""
        },
        "method": "GET",
        "mode": "no-cors"
    });
    const data = await response.json();

    let stats = {
    
        zombie : data["stats"][12]["value"],
        pvp_kill : data["stats"][9]["value"],
        death : data["stats"][11]["value"],
        ratio : data["stats"][29]["value"],
        zombie_redzone : data["stats"][6]["value"],
        kill_redzone : data["stats"][4]["value"],
        death_redzone : data["stats"][8]["value"],
        ratio_redzone : data["stats"][30]["value"],
        played_time : parseInt(data["stats"][1]["value"]/3600),
        level : data["rank"],
        player_name : data["name"]

    }; // player stats 

    for (i in stats) {

        console.log(i)
        console.log(i[value])
        document.querySelector(i.name).innerHTML = i.value;
    }

}

setInterval(get_extinction_data("304629682769494026"), 5*60)