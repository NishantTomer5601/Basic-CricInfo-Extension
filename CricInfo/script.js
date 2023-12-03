async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=45a6c694-4f24-4917-ad79-4054371632ab&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "c44453dd-704b-4c8c-906b-9efa57c0be93").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();