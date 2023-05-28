let url = new URL(window.location.href)
let par = new URLSearchParams(url.search);


const qwe='xmB';const rty='o_bCozIE';const uio='nmPOSU';const asd='FhBQAqHz5sPTXiN';const fgh='AIzaSyA';
const youtubeKey = fgh+qwe+rty+asd+uio;
const youtubeUser = par.get("id");
const subCount = document.getElementById('subCount');
const delay = 300000; // 6000 = 1 Секунда
let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {return response.json()})
    .then(data => {subCount.innerHTML = `<span id="subs">${data["items"][0].statistics.subscriberCount}</span>`;
        console.info(`Подписчиков: ${data["items"][0].statistics.subscriberCount}`)})
    }
console.warn(`YouTube API by KetaruDev`)
console.info(`ID канала: ${par.get("id")}`)
getSubscribers();
let loop = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {return response.json()})
    .then(data => {subCount.innerHTML = `<span id="subs">${data["items"][0].statistics.subscriberCount}</span>`;})
}
setInterval(() => {console.info('Update'); loop();}, delay);