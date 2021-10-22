const Nightmare = require('nightmare');
const randomUserAgent = require('random-user-agent');
const CronJob = require('cron').CronJob;

let ua = randomUserAgent();

const nightmare = Nightmare({
    executionTimeout: 1000000, // in ms
    waitTimeout: 1000000, // in ms		

    show: false
});

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
}

function randomTimeFromInterval(min, max) { // min and max included 
    return (Math.floor(Math.random() * (max - min + 1) + min) * 6000) / 6;
}

let px = [100,200,300,400,500]

let scHeight = px.randomElement()
let scWidth = px.randomElement()

let time = 'random'
let miliseconds = (time == 'random') ? randomTimeFromInterval(10, 60) : (time * 6000) / 6;
let blacklist = ['https://twitter.com/intent/tweet/?text=%e0%b8%99%e0%b9%8a%e0%b8%ad%e0%b8%99%e0%b9%82%e0%b8%99%e0%b9%80%e0%b8%81%e0%b8%b5%e0%b8%a2&url=https%3a%2f%2fufapro888s.info%2fposts%2f2021%2f%25E0%25B8%2599%25E0%25B9%258A%25E0%25B8%25AD%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B5%25E0%25B8%25A2%2f&hashtags=','https://facebook.com/sharer/sharer.php?u=https%3a%2f%2fufapro888s.info%2fposts%2f2021%2f%25E0%25B8%2599%25E0%25B9%258A%25E0%25B8%25AD%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B5%25E0%25B8%25A2%2f','https://www.linkedin.com/shareArticle?mini=true&url=https%3a%2f%2fufapro888s.info%2fposts%2f2021%2f%25E0%25B8%2599%25E0%25B9%258A%25E0%25B8%25AD%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B5%25E0%25B8%25A2%2f&title=%e0%b8%99%e0%b9%8a%e0%b8%ad%e0%b8%99%e0%b9%82%e0%b8%99%e0%b9%80%e0%b8%81%e0%b8%b5%e0%b8%a2&summary=%e0%b8%99%e0%b9%8a%e0%b8%ad%e0%b8%99%e0%b9%82%e0%b8%99%e0%b9%80%e0%b8%81%e0%b8%b5%e0%b8%a2&source=https%3a%2f%2fufapro888s.info%2fposts%2f2021%2f%25E0%25B8%2599%25E0%25B9%258A%25E0%25B8%25AD%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B5%25E0%25B8%25A2%2f','https://line.me/R/ti/p/%40276yjfvc','https://dooball24hd.com/','https://24hdfree.com/','https://ufatop1.net/index.html','https://facebook.com/ufax249999','https://ufapro888s.info/index.xml','https://line.me/R/ti/p/@ufax24','https://www.youtube.com/channel/UC-bBTpDT0btr-agrcnsLYJQ', 'https://instagram.com/', 'https://www.superlivescore.com/', 'https://apps.apple.com/', 'https://twitter.com/','https://member.ufarec.com/register/?s=%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C-ufax24&lang=th','https://member.ufarec.com/login/'];

const URL = 'http://urlblone.herokuapp.com/ufax';
console.log('Welcome to UFAPRO888s traffic\n==========');

nightmare
    .cookies.clearAll()
    .useragent(ua)
    .goto(encodeURI(URL))
    .wait('.post-title')
    .evaluate(() => document.querySelector('.post-title').textContent)
    .wait(2000)
    .scrollTo(scHeight, scWidth)
    .wait(miliseconds)
    .scrollTo(scHeight, scWidth)
    .evaluate((blacklist) => {
        let allLinksB = Array.from(document.querySelectorAll("a")).map(a => a.href),
            randomUrlB, indexB;
        for (indexB = 0; indexB <= blacklist.length; ++indexB) {
            allLinksB = allLinksB.filter(e => e !== blacklist[indexB]);
        }
        randomUrlB = allLinksB[Math.floor(Math.random() * allLinksB.length)];
        document.location.href = randomUrlB;
    }, blacklist)
    .scrollTo(scHeight, scWidth)
    .wait(miliseconds)
    .scrollTo(scHeight, scWidth)
    .evaluate((blacklist) => {
        let allLinksC = Array.from(document.querySelectorAll("a")).map(a => a.href),
            randomUrlC, indexC;
        for (indexC = 0; indexC <= blacklist.length; ++indexC) {
            allLinksC = allLinksC.filter(e => e !== blacklist[indexC]);
        }
        randomUrlC = allLinksC[Math.floor(Math.random() * allLinksC.length)];
        document.location.href = randomUrlC;
    }, blacklist)
    .scrollTo(scHeight, scWidth)
    .wait(miliseconds)
    .scrollTo(scHeight, scWidth)
    .evaluate((blacklist) => {
        let allLinksD = Array.from(document.querySelectorAll("a")).map(a => a.href),
            randomUrlD, indexD;
        for (indexD = 0; indexD <= blacklist.length; ++indexD) {
            allLinksD = allLinksD.filter(e => e !== blacklist[indexD]);
        }
        randomUrlD = allLinksD[Math.floor(Math.random() * allLinksD.length)];
        document.location.href = randomUrlD;
    }, blacklist)
    .scrollTo(scHeight, scWidth)
    .wait(miliseconds)
    .scrollTo(scHeight, scWidth)
    .evaluate((blacklist) => {
        let allLinksE = Array.from(document.querySelectorAll("a")).map(a => a.href),
            randomUrlE, indexE;
        for (indexE = 0; indexE <= blacklist.length; ++indexE) {
            allLinksE = allLinksE.filter(e => e !== blacklist[indexE]);
        }
        randomUrlE = allLinksE[Math.floor(Math.random() * allLinksE.length)];
        document.location.href = randomUrlE;
    }, blacklist)
    .scrollTo(scHeight, scWidth)
    .wait(miliseconds)
    .scrollTo(scHeight, scWidth)
    .evaluate((blacklist) => {
        let allLinksF = Array.from(document.querySelectorAll("a")).map(a => a.href),
            randomUrlF, indexF;
        for (indexF = 0; indexF <= blacklist.length; ++indexF) {
            allLinksF = allLinksF.filter(e => e !== blacklist[indexF]);
        }
        randomUrlF = allLinksF[Math.floor(Math.random() * allLinksF.length)];
        document.location.href = randomUrlF;
    }, blacklist)
    .wait(miliseconds)
    .end()
    .then((result) => {
        console.log(result);
        console.log('=========\nAll done');
    })
    .catch((error) => {
        console.error('an error has occurred: ' + error);
    })
    .then(() => (console.log('process exit'), process.exit()));
