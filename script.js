// let player_avatar = "https://cdn.discordapp.com/avatars/" + player + "/" + interaction.user.avatar + ".png"

let stats = null;

async function display_data() {

    let discord_id = document.querySelector("#user_id").value;
    const fetched_data = await get_extinction_data(discord_id)

    stats = {
        
        player_name : fetched_data["name"],
        level : fetched_data["rank"],
        zombie : fetched_data["stats"][12]["value"],
        pvp_kill : fetched_data["stats"][9]["value"],
        death : fetched_data["stats"][11]["value"],
        ratio : fetched_data["stats"][29]["value"],
        played_time : parseInt(fetched_data["stats"][1]["value"]/3600),
        zombie_redzone : fetched_data["stats"][6]["value"],
        kill_redzone : fetched_data["stats"][4]["value"],
        death_redzone : fetched_data["stats"][8]["value"],
        ratio_redzone : fetched_data["stats"][30]["value"]
        
    }; // player stats 
    
    let count = 0;

    for (i in stats) {
    
        console.log(i)
        console.log(i.value)
        console.log(count)
        document.getElementsByClassName("stat")[count].innerHTML = stats[i];
        
        count = count + 1
    }

    
}
async function get_extinction_data(user) {

 
    

    url = "https://api.gtaliferp.fr:8443/v1/extinction/profiles/discord/" + user

    let response = await fetch(url, {
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
      });
    const data = await response.json();
    console.log(data)

    console.log(data["stats"][12]["value"])
    
    return data

}

let user_input = document.getElementById("user_id")
user_input.addEventListener("keypress", eventHandler);

function eventHandler(event) {
  if (event.keyCode === 13) {
    
    display_data();
  }
}