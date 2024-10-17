/**
BASE LILYCHANJ CASE X PLUGINS 
**/

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

//PAIRING CODE
global.pairing = '6281541177589'
//contact details
global.owner = ['6281541177589'] // ubah aja pake nomor lu
global.owner0 = '6281541177589@s.whatsapp.net'
global.nomerowner = ["6285658939117"]
global.ownername = "Tanaka Sense"

global.ownernumber = '6281541177589'  //creator number
global.ownername = 'Tanaka Sense' //owner name
global.botname = 'Tanaka Ngawi' //name of the bot

//sticker details
global.packname = 'TanakaSense.js' // ubah aja ini nama sticker
global.author = `At ${hariini}\n${time}` // ubah aja ini nama sticker

//console view/theme
global.themeemoji = '🍁'
global.wm = " TanakaSense.js."
global.urldb = ''; // kosongin aja
global.idch = '120363285176234746@newsletter'

//custom prefix
global.prefa = ['/','!','.','#','&']
 
global.welcome = true 

//Global Message 
global.mess = {
    done: 'Done Desuu!',
    prem: 'Sorry, this feature can only be used by premium users.\nIf you want to buy premium, type *.buyprem*',
    admin: 'Group Admin Only!!',
    botadmin: 'Please make the bot a group admin first!',
    owner: 'Tanaka Sense special features!',
    group: 'Sorry, this feature can only be used in groups!!',
    private: 'Fitur ini hanya untuk private chat!!',
    wait: 'In process... ',    
    error: 'Error!',
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})
