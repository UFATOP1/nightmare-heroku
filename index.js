const minimist = require('minimist');
const platform = require('platform');
const Nightmare = require('nightmare');
const randomUserAgent = require('random-user-agent');
const CronJob = require('cron').CronJob;

let ua = randomUserAgent();

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
}

function randomTimeFromInterval(min, max) { // min and max included 
    return (Math.floor(Math.random() * (max - min + 1) + min) * 6000) / 6;
}

let args = minimist(process.argv.slice(2), {
    default: {
        url:  'http://urlblone.herokuapp.com/ufax' ,//trurl.randomElement(),
        windows: '10', // windows to be opened
        time: 'random', // Total time of the section in minutes
    }
});

const venenoTrafficBot = async id => {

    'use strict';
    
    let url = args.url,
        screenArray;
    let miliseconds = (args.time == 'random') ? randomTimeFromInterval(8, 300) : (args.time * 600) / 6;
    let blacklist = ['https://twitter.com/intent/tweet/?text=%e0%b8%99%e0%b9%8a%e0%b8%ad%e0%b8%99%e0%b9%82%e0%b8%99%e0%b9%80%e0%b8%81%e0%b8%b5%e0%b8%a2&url=https%3a%2f%2fufapro888s.info%2fposts%2f2021%2f%25E0%25B8%2599%25E0%25B9%258A%25E0%25B8%25AD%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B5%25E0%25B8%25A2%2f&hashtags=','https://facebook.com/sharer/sharer.php?u=https%3a%2f%2fufapro888s.info%2fposts%2f2021%2f%25E0%25B8%2599%25E0%25B9%258A%25E0%25B8%25AD%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B5%25E0%25B8%25A2%2f','https://www.linkedin.com/shareArticle?mini=true&url=https%3a%2f%2fufapro888s.info%2fposts%2f2021%2f%25E0%25B8%2599%25E0%25B9%258A%25E0%25B8%25AD%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B5%25E0%25B8%25A2%2f&title=%e0%b8%99%e0%b9%8a%e0%b8%ad%e0%b8%99%e0%b9%82%e0%b8%99%e0%b9%80%e0%b8%81%e0%b8%b5%e0%b8%a2&summary=%e0%b8%99%e0%b9%8a%e0%b8%ad%e0%b8%99%e0%b9%82%e0%b8%99%e0%b9%80%e0%b8%81%e0%b8%b5%e0%b8%a2&source=https%3a%2f%2fufapro888s.info%2fposts%2f2021%2f%25E0%25B8%2599%25E0%25B9%258A%25E0%25B8%25AD%25E0%25B8%2599%25E0%25B9%2582%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B5%25E0%25B8%25A2%2f','https://line.me/R/ti/p/%40276yjfvc','https://dooball24hd.com/','https://24hdfree.com/','https://ufatop1.net/index.html','https://facebook.com/ufax249999','https://ufapro888s.info/index.xml','https://line.me/R/ti/p/@ufax24','https://www.youtube.com/channel/UC-bBTpDT0btr-agrcnsLYJQ', 'https://instagram.com/', 'https://www.superlivescore.com/', 'https://apps.apple.com/', 'https://twitter.com/','https://member.ufarec.com/register/?s=%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C-ufax24&lang=th','https://member.ufarec.com/login/'];

    let ua = randomUserAgent();
    let info = platform.parse(ua);
    let osFamily = info.os.family;
    if (osFamily == 'Android') {
        screenArray = [
            [240, 320],
            [320, 480],
            [480, 800],
            [412, 892],
            [360, 640],
            [768, 1024],
            [600, 1024],
            [720, 1280],
            [800, 1280],
            [2560, 1600],
            [1920, 1200],
            [1280, 800],
            [2560, 1600],
            [1400, 900],
            [1024, 600],
            [960, 540],
            [854, 480],
            [1280, 720]
        ];
    } else if (osFamily == 'IOS') {
        screenArray = [
            [375, 812],
            [414, 736],
            [375, 667],
            [414, 812],
            [414, 736],
            [320, 568],
            [1024, 1366]
        ];
    } else {
        screenArray = [
            [640, 480],
            [800, 600],
            [1024, 768],
            [1152, 864],
            [1280, 1024],
            [1366, 768],
            [1600, 1200]
        ];
    }


    let randomScreenElement = screenArray.randomElement();
    const nightmare = Nightmare({
        executionTimeout: 1000000, // in ms
        waitTimeout: 1000000, // in ms		
        width: randomScreenElement[0],
        height: randomScreenElement[1],
        show: true
    });
    let scrollToH = [randomScreenElement[1] * 2, randomScreenElement[1] * 3 ]
    let scrollToW = [randomScreenElement[0] / 2, randomScreenElement[0] / 3 ]
    let scHeight = scrollToH.randomElement()
    let scWidth = scrollToW.randomElement()
    //let word = ['แทงบอล ออนไลน์ ufapro888s.info', 'แทงบอล ufapro888s.info', 'แทงบอล ออนไลน์ ufapro888s.info', 'แทงบอล ufapro888s.info', 'ufapro888s.info เว็บไหนดี', 'ufapro888s.info สมัครสมาชิก ufabet', 'ufapro888s.info เว็บพนันบอล สมัคร แทงบอลออนไลน์', 'ufapro888s.info เครดิตฟรี', 'แทงบอล ufapro888s.info เว็บพนันบอล เว็บตรง', 'ufapro888s.info สมัครเว็บบอลออนไลน์', 'ufapro888s.info', 'ufapro888s.info สมัคร ufabet เว็บตรง', 'ufapro888s.info สมัครแทงบอลออนไลน์','แทง บอล ออนไลน์ ufapro888s.info', 'แทงบอลออนไลน์ ufapro888s.info','แทงบอลออนไลน์ ufapro888s.info', 'ufapro888s.info สมัครคาสิโนออนไลน์', 'แทงบอลออนไลน์ ufapro888s.info','ufa-pro ufapro888s.info', 'ทางเข้า ufapro888s.info', 'ufapro เครดิตฟรี', 'ufa pro ufapro888s.info', 'แทงบอล ufapro888s.info', 'ทางเข้า เว็บ ufapro888s.info', 'สมัครแทงบอล ufapro888s.info']
    //let keyword = word.randomElement()

    console.log(`Now checking ${id}`);
    console.log("OS: " + osFamily + "Browser: " + ua);
    console.log('Url: ', url);
    console.log("Width: ", randomScreenElement[0] + " Height: " + randomScreenElement[1]);
    console.log("Miliseconds per page: " + miliseconds);
    console.log("Layout: " + info.layout);
    //console.log("scrollTo: " + scHeight, scWidth);
    //console.log("keyword: " + keyword);


nightmare
    .useragent(ua)
    .goto(encodeURI(url))
    .cookies.clearAll()
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
    .then(() => (console.log('process exit'), process.exit()))
}
for (var i = 0; i < args.windows; i++) {
    venenoTrafficBot(i).then(a => console.dir(a)).catch(e => console.error(e));
    }
