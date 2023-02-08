let url = new URL(window.location.href)
let par = new URLSearchParams(url.search);
const youtubeKey = 'AIzaSyDL17yoxjSlO_4SaniFwIi8Vm89hdX-aG4';
const youtubeUser = par.get("id");
const subCount = document.getElementById('subCount');
const delay = 1000; // 10 min
let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {return response.json()})
    .then(data => {subCount.innerHTML = `<span id="subs">${data["items"][0].statistics.subscriberCount}</span>`;
        console.info(`Подписчиков: ${data["items"][0].statistics.subscriberCount}`)})
}
console.info(`YouTube ID канала: ${par.get("id")}`)
getSubscribers();

let loop = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        subCount.innerHTML = `<span id="subs">${data["items"][0].statistics.subscriberCount}</span>`;
    })
}
setInterval(() => {loop();}, delay);
console.warn = () => {};