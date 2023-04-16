const express:NodeRequire = require('express');
const child_process = require('child_process');
const iconv = require('iconv-lite');
const moment = require('moment');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const encoding = "cp936";
const binaryEncoding = "binary";

function cmd(text: string, cmdPath: string='../') {
    return new Promise((resolve, reject) => {
        child_process.exec(
            text,
            { encoding: binaryEncoding, cwd: cmdPath },
            (err ="", stdout="", stderr:any) => {
                if(err) {
                    resolve(err);
                    console.log("报错");
                    return;
                }
                resolve(iconv.decode(Buffer.from(stdout, binaryEncoding), encoding))
            }
        )
    })
}

async function run() {
    // await cmd("cd ../");
    let status: any = await cmd("git status");
    if (
        status.includes(
          "not a git repository (or any of the parent directories): .git"
        )
        ) {
        //目录未绑定git地址
        console.log("目录未绑定git地址");
        console.log(status);
    } else if(
        status.includes(
            'use "git add'
          )
    ) {
        //已经拉取git
        //拉取
        // const pull = await cmd("git pull");
        // if()
        console.log("需要修改");
        await cmd("git add .");
        const time = moment().format("YYYY-MM-DD HH:mm:ss");
        await cmd(`git commit -m "${time}提交"`);
        const state = await cmd("git push");
        console.log(state);
    }
}

const app = express('');
app.use(cors());
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
const port = 3000;

app.post('/getdocument', (req:any, res:any) => {
    const { cate, title, text } = req.body;
    const time = moment().format("YYYY-MM-DD HH:mm:ss");

    if(cate && title && text)
        fs.readFile(`../vite_vue/public/${cate}.json`, 
                    "utf-8", 
                    (err:any, data:any) => {

            if(err) {
                fs.writeFile(
                    `../vite_vue/public/${cate}.json`, 
                    JSON.stringify({
                        data: [
                            {
                                title,
                                text,
                                id: time
                            }
                        ]
                    }),
                    function(err: any, data: any) {
                        if(!err) {
                            res.send('success');
                            run();
                        } else {
                            res.send(err);
                        }
                    }
                    )
            } else {
                const JsonData = JSON.parse(data);
                JsonData['data'].push({
                    title,
                    text,
                    id: time
                });
                fs.writeFile(
                    `../vite_vue/public/${cate}.json`, 
                    JSON.stringify(JsonData),
                    function(err: any, data: any) {
                        if(!err) {
                            res.send('success');
                            run()
                        } else {
                            res.send(err);
                        }
                    }
                    )
            }
            
        });
})

app.listen(port, () => {
    console.log("开启侦听端口", port);
}) 
 
