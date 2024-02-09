

const axios = require('axios');
const puppeteer = require('puppeteer');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 9000;

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
 }

async function checkRouletteStats(page) {

    let results = {};

    let prevNumbers = {
        mrNumbers204: [],
        mrNumbers227: [],
        mrNumbers240: [],
        mrNumbers230: [],
        mrNumbers225: [],
        mrNumbers545: [],
        mrNumbers203: [],
        mrNumbers201: [],
        // mrNumbers210: [],
        mrNumbers226: [],
        mrNumbers206: [],
        mrNumbers205: [],
        mrNumbers229: []
    };


    const lobby204Element = await page.$('.lobbyList.lobby-roulette.lobby-204');
        let mrNumbers204 = [];
        if (lobby204Element) {
            mrNumbers204 = await lobby204Element.$$eval('.mr_stats .mr_number', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-204 não encontrado');
        }

        const lobby227Element = await page.$('.lobbyList.lobby-roulette.lobby-227');
        let mrNumbers227 = [];
        if (lobby227Element) {
            mrNumbers227 = await lobby227Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-227 não encontrado');
        }

        const lobby240Element = await page.$('.lobbyList.lobby-roulette.lobby-240');
        let mrNumbers240 = [];
        if (lobby240Element) {
            mrNumbers240 = await lobby240Element.$$eval('.table-stats .lobby-powerup-stats .rNo', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-240 não encontrado');
        }



        const lobby230Element = await page.$('.lobbyList.lobby-roulette.lobby-230');
        let mrNumbers230 = [];
        if (lobby230Element) {
            mrNumbers230 = await lobby230Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-230 não encontrado');
        }



        const lobby225Element = await page.$('.lobbyList.lobby-roulette.lobby-225');
        let mrNumbers225 = [];
        if (lobby225Element) {
            mrNumbers225 = await lobby225Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-225 não encontrado');
        }

        const lobby545Element = await page.$('.lobbyList.lobby-roulette.lobby-545');
        let mrNumbers545 = [];
        if (lobby545Element) {
            mrNumbers545 = await lobby545Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-545 não encontrado');
        }

        const lobby203Element = await page.$('.lobbyList.lobby-roulette.lobby-203');
        let mrNumbers203 = [];
        if (lobby203Element) {
            mrNumbers203 = await lobby203Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-203 não encontrado');
        }

        const lobby201Element = await page.$('.lobbyList.lobby-roulette.lobby-201');
        let mrNumbers201 = [];
        if (lobby201Element) {
            mrNumbers201 = await lobby201Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-201 não encontrado');
        }

        const lobby210Element = await page.$('.lobbyList.lobby-roulette.lobby-210');
        let mrNumbers210 = [];
        if (lobby210Element) {
            mrNumbers210 = await lobby210Element.$$eval('.mr_stats .mr_number', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-210 não encontrado');
        }

        // const lobby226Element = await page.$('.lobbyList.lobby-roulette.lobby-226');
        // let mrNumbers226 = [];
        // if (lobby226Element) {
        //     mrNumbers226 = await lobby226Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
        //         elements.map(el => parseInt(el.textContent.trim()))
        //     );
        // } else {
        //     console.log('Elemento lobby-226 não encontrado');
        // }

        const lobby206Element = await page.$('.lobbyList.lobby-roulette.lobby-206');
        let mrNumbers206 = [];
        if (lobby206Element) {
            mrNumbers206 = await lobby206Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-206 não encontrado');
        }

        const lobby205Element = await page.$('.lobbyList.lobby-roulette.lobby-205');
        let mrNumbers205 = [];
        if (lobby205Element) {
            mrNumbers205 = await lobby205Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-205 não encontrado');
        }

        const lobby229Element = await page.$('.lobbyList.lobby-roulette.lobby-229');
        let mrNumbers229 = [];
        if (lobby229Element) {
            mrNumbers229 = await lobby229Element.$$eval('.table-stats .rt_info .stats-table .item-result', elements =>
                elements.map(el => parseInt(el.textContent.trim()))
            );
        } else {
            console.log('Elemento lobby-229 não encontrado');
        }

        
    if (JSON.stringify(prevNumbers.mrNumbers204) !== JSON.stringify(mrNumbers204)) {
        results['Mega Roleta'] = {
            "results": mrNumbers204.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers204 = [...mrNumbers204];
        saveResults(results);
    }

    if (JSON.stringify(prevNumbers.mrNumbers227) !== JSON.stringify(mrNumbers227)) {
        results['Roleta Azure'] = {
            "results": mrNumbers227.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers227 = [...mrNumbers227];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers240) !== JSON.stringify(mrNumbers240)) {
        results['Power Up Roleta'] = {
            "results": mrNumbers240.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers240 = [...mrNumbers240];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers230) !== JSON.stringify(mrNumbers230)) {
        results['Roleta Ruby'] = {
            "results": mrNumbers230.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers230 = [...mrNumbers230];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers225) !== JSON.stringify(mrNumbers225)) {
        results['Autorroleta'] = {
            "results": mrNumbers225.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers225 = [...mrNumbers225];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers545) !== JSON.stringify(mrNumbers545)) {
        results['VIP Roleta - The Club'] = {
            "results": mrNumbers545.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers545 = [...mrNumbers545];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers203) !== JSON.stringify(mrNumbers203)) {
        results['Roleta Rápida 1'] = {
            "results": mrNumbers203.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers203 = [...mrNumbers203];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers201) !== JSON.stringify(mrNumbers201)) {
        results['Roleta Verde'] = {
            "results": mrNumbers201.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers201 = [...mrNumbers201];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers210) !== JSON.stringify(mrNumbers210)) {
        results['Auto Mega Roleta'] = {
            "results": mrNumbers210.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers210 = [...mrNumbers210];
        saveResults(results);
    }
    
    // if (JSON.stringify(prevNumbers.mrNumbers226) !== JSON.stringify(mrNumbers226)) {
    //     results['Autorroleta Rápida'] = {
    //         "results": mrNumbers226.map(num => [{ "number": num.toString() }])
    //     };
    //     prevNumbers.mrNumbers226 = [...mrNumbers226];
    //     saveResults(results);
    // }
    
    if (JSON.stringify(prevNumbers.mrNumbers206) !== JSON.stringify(mrNumbers206)) {
        results['Roleta Rápida 2'] = {
            "results": mrNumbers206.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers206 = [...mrNumbers206];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers205) !== JSON.stringify(mrNumbers205)) {
        results['Roleta Macau'] = {
            "results": mrNumbers205.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers205 = [...mrNumbers205];
        saveResults(results);
    }
    
    if (JSON.stringify(prevNumbers.mrNumbers229) !== JSON.stringify(mrNumbers229)) {
        results['Roleta Indiana'] = {
            "results": mrNumbers229.map(num => [{ "number": num.toString() }])
        };
        prevNumbers.mrNumbers229 = [...mrNumbers229];
        saveResults(results);
    }
    




}


function saveResults(results) {
    fs.writeFileSync('rouletteresults-pragmatic.txt', JSON.stringify(results));
}




async function fetchGameLinkAndOpenBrowser() {
    let dataAuth = JSON.stringify({
        "email": "LOGIN(ONABET)",
        "password": "SENHA(ONABET)."
    });

    let configAuth = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.betnomade.com/clients/authona',
        headers: {
            'Content-Type': 'application/json'
        },
        data: dataAuth
    };

    try {
        let response = await axios.request(configAuth);
        const token = response.data.data.sessionToken;
        console.log('Token:', token);

        let dataGame = JSON.stringify({
            "token": token,
            "game": "roleta03"
        });

        let configGame = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.betnomade.com/clients/getgame',
            headers: {
                'Content-Type': 'application/json'
            },
            data: dataGame
        };

        response = await axios.request(configGame);
        const gameLink = response.data.data.data.link;
        console.log('Game Link:', gameLink);

        browser = await puppeteer.launch({
            headless: true, args: [
                "--no-sandbox",
                "--disable-site-isolation-trials",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-accelerated-2d-canvas",
                "--no-first-run",
                "--no-zygote",
                "--single-process",
                "--disable-gpu",
                "--mute-audio"
            ]
        });

        const page = await browser.newPage();
        await page.goto(gameLink);
        await delay(10000); 
        await page.goto('https://client.pragmaticplaylive.net/desktop/lobby/');
        await delay(5000); 

        await page.click('.tabLi.ROULETTE');
        await delay(5000); 


        setInterval(() => checkRouletteStats(page), 2000); 

    




    } catch (error) {
        console.error(error);
    }
}

fetchGameLinkAndOpenBrowser();

app.get('/', (req, res) => {
  fs.readFile('rouletteresults-pragmatic.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      res.send('Erro ao ler o arquivo.');
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Servidor web iniciado em http://localhost:${port}`);
});