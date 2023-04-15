const express:NodeRequire = require('express');
const child_process = require('child_process');
const iconv = require('iconv-lite');
const moment = require('moment');

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
        console.log("state");
    }
}


run()


// const app = express('');
// const port = 3000;

// app.get('/', (req:any, res:any) => {
//     res.send("Hello World!");
// })

// app.listen(port, () => {
//     console.log("sadasd", port);
// })