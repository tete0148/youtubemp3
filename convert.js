var ytdl = require('youtube-dl')
var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter URL of the YouTube video/playlist below:\n', function(answer) {
    console.log(answer + ' is being downloaded...')
    ytdl.exec(answer, ['-x', '--audio-format', 'mp3'], {}, function(err, output) {
        if (err) throw err
        console.log(answer + ' downloaded !')
        process.exit()
    })
})

