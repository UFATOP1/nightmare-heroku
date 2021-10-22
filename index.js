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
