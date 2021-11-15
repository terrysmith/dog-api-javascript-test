const api_url = "https://dog.ceo/api/breeds/image/random";

async function getapi(url) {

    const response = await fetch(url);

    const data = await response.json();
 
    if (response) {
        hideloader();
    }
    show(data);
}

getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}


function show(data) {
    var checkForTwoNamedog = false;
    var str = data.message;
    var dogname = str.match("/breeds/(.*?)/n");
    console.log("DogName= " + dogname);
    var dognamellong = dogname[1].split('-');
    if(dogname[1] !=='undefined'){
      dogname=  dognamellong.reverse().join(' ');
    } 

    let dataItems = `<p>${dogname}</p><img src="${data.message}" alt="${dogname}" width="500" height="600">`;

    document.getElementById("container").innerHTML = dataItems;
}
