const express = require('express')
const app = express()
const worker = require('worker_threads')

app.get('/:arg', (req, res) => {
    const thread = new worker.Worker('./sub.js')
    thread.postMessage(req.params.arg)
    res.send("ok")
        /*exec("ls -la", (error, stdout, stderr) => {
            if (error) {
                res.send(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                res.send(`stderr: ${stderr}`);
                return;
            }
            res.send(`stdout: ${stdout}`);
        });*/
})

app.listen(3000, () => {
    console.log("Started")
})