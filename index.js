/*============≠≠==========≠≠=============\\


NÃO PASSE O BOT PARA NINGUÉM, MUITOS VÃO FINGIR SER AMIGO. 

MUITOS DESEJAM COMPRAR PARA REVENDER E DIZER QUE FEZ.. 

EU ALEATORY NÃO FIZ TUDO, ASSUMO ISSO, PRECISEI DE AJUDA

PRA ISSO TENHO AMIGOS, PRA EVOLUIR JUNTO, ENTÃO.. 

NÃO JOGUE O ESFORÇO QUE TIVE, APESAR DE NÃO SER TANTO A 

VISTA DE QUEM JÁ CONHECE O BASTANTE DA ÁREA.. 


//=======================================*/

const { default: makeSocket, downloadContentFromMessage, useSingleFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap } = require('@adiwajshing/baileys');

//_-_-_-_-_-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-\\

const { hx, fs, Boom, axios, chalk, yts, crypto, util, P, encodeUrl, linkfy, request, cheerio, ms, ffmpeg, imgbb, googleImage, googleIt, fetch, imageToBase64, webp2gifFile, webp_mp4, EmojiAPI, qrterminal, emoji, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, insert, response, addLimit, getLimit, mediafireDl, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, isFiltered, addFilter, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanime, quizanimais, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, getpc, supre, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, wait, getExtension, h2k, generateMessageID, getGroupAdmins, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, ttthelp, tttme, tttset, esp, kyun, simih, botoff, fechar_abrir_gp } = require('./consts-func.js')

//-_-_-_-_--_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\

const { adeuscara, welcome_group, welcome_group2, bye_group, bye_group2, voting, sotoy, addVote, delVote, countMessage, countMessage_pv, comandos, welkom2, modobn, nsfw, daily, nescessario, welkom, premium, limitefll, antiflood, samih, samih2, _leveling, _level, bancht, anticall, ban, afk, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, antilink, antifake, antilinkhard, autofigu, antilinkgp, antiporn, antiimg, antisticker, antinotas, antictt, anticatalogo, antidoc, antiloc, antipv, antivid, antiaudio, palavra, palavrao } = require('./consts-func.js')

//-_-_-_-_-_-_-_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { menu, menudono, adms, menulogos, efeitos, menuprem, brincadeiras ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavras } = require('./consts-func.js')

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd } = require("./dono/nescessario.json")



//====================≠≠===============\\
 
cdd = nescessario.cdd

menu_audio = nescessario.menu_audio
 
crtt = nescessario.crtt
 
fundo1 = nescessario.fundo1

fundo2 = nescessario.fundo2
 
dono2 = nescessario.dono2

dono3 = nescessario.dono3
 
dono4 = nescessario.dono4

dono5 = nescessario.dono5
 
NomeDoBot = setting.NomeDoBot

NickDono = setting.NickDono

numerodono = setting.numerodono 

prefix = setting.prefix 

banChats = nescessario.banChats 

logo = logoslink.logo

numbernye = '0'

blocked = [] 

hitt = []

var keyale = "key-do_-nunes_tech-2.0"

//=====================================\\

const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')

const store = useStore ? makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) }) : undefined
store?.readFromFile('./dados_store.json')
// save every 10s
setInterval(() => {
	store?.writeToFile('./dados_store.json')
}, 10000)

async function startAle() {
  
// ABAIXO: INÍCIO DE CONEXÃO

const { state, saveState } = await useSingleFileAuthState('./ALEATORY-QR.json')

const conn = makeSocket({
logger: P({ level: 'silent' }),
printQRInTerminal: true,
auth: state
})

store?.bind(conn.ev)

//===============(BEM VINDO)=============\\

conn.ev.on('group-participants.update', async (ale) => {
  
if(ale.participants[0].startsWith(conn.user.id.split(':')[0])) return 
const GroupMetadata_ = ale.id ? await conn.groupMetadata(ale.id): ""
  
const mdata_ = ale.id ? await conn.groupMetadata(ale.id): ""


// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(ale)
if(dbackid.indexOf(ale.id) >= 0) {
if (ale.action == 'add'){ 
num = ale.participants[0]
var ind = dbackid.indexOf(ale.id)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await conn.sendMessage(mdata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
conn.groupParticipantsUpdate(mdata_.id, [ale.participants[0]], 'remove')
return
}
}
}

// FIM LISTANEGRA CONST ^


// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(ale.id)) {
if (ale.action === 'add' && !ale.participants[0].startsWith(55)){
num = ale.participants[0]
conn.sendMessage(mdata_.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
setTimeout(async() => {
conn.groupParticipantsUpdate(mdata_.id, [ale.participants[0]], 'remove')
}, 1000)
}
}

// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 


if(welkom.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {
  
// PEGAR DESCRIÇÃO DO GRUPO. 

const groupDesc = await GroupMetadata_.desc  
  
try {
ppimg = await conn.profilePictureUrl(ale.participants[0])
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

try {
ppgp = await conn.profilePictureUrl(mdata_.id)
} catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`)

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
for(let obj of bye_group) groupIdBye.push(obj.id)


const isByed = groupIdBye.indexOf(ale.id) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(ale.id)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata_.subject)
}
let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)

fs.unlinkSync(ran)
imgbuff = await getBuffer(`https://aleatoryapi.herokuapp.com/welcome?titulo=BEM%20VINDO(A)&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeUrl(mdata_.subject)}`)
conn.sendMessage(mdata_.id, {image: imgbuff, 
mentions: ale.participants, caption: teks})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}


if(isByed) {
var ind = groupIdBye.indexOf(ale.id)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)

imgbuff = await getBuffer(`https://aleatoryapi.herokuapp.com/welcome?titulo=Adeus&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=SAIU DE ${encodeUrl(mdata_.subject)}`)
conn.sendMessage(mdata_.id, {image: imgbuff, caption: teks, 
mentions: ale.participants})
 fs.unlinkSync(ran)

}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas não precisa definir,
qualquer dúvida dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite : 
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
})
// FIM ^


// BEM VINDO 2 ( SEM FOTO )

conn.ev.on('group-participants.update', async (ale) => {
  
if(ale.participants[0].startsWith(conn.user.id.split(':')[0])) return 
if(welkom2.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {

const GroupMetadata_2 = ale.id ? await conn.groupMetadata(ale.id): ""
  
const mdata_2 = ale.id ? await conn.groupMetadata(ale.id): ""

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await GroupMetadata_2.desc

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isByed2 = groupIdBye2.indexOf(ale.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(ale.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata_2.subject)
}

conn.sendMessage(mdata_2.id, {text: teks, mentions: ale.participants})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(ale.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

conn.sendMessage(mdata_2.id, {text: teks, mentions: ale.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas
não precisa definir, qualquer dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite :
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
})


// FIM BEM VINDO (2)

conn.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages ? messages[0]: messages[1]
if (!info.message) return 
if (info.message.protocolMessage) return 
//await conn.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id])
if (info.key && info.key.remoteJid == 'status@broadcast') return

const baileys = require('@adiwajshing/baileys');
const type = baileys.getContentType(info.message);

global.prefix

global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const isGroup = from.endsWith('@g.us')

//==============(BODY)================\\
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''

const args = body.trim().split(/ +/).slice(1)

const q = args.join(' ')

if(fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
var limitecaracteres_on = JSON.parse(fs.readFileSync(`./func/limitecaracteres/limite-c_${from}.json`))
var limitefl = limitecaracteres_on.limite
} else {
var limitefl = limitefll.limitefl
}

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
var prefixo2_on = JSON.parse(fs.readFileSync(`./func/prefixo/prefixo2_${from}.json`))
var isCmd = budy2.startsWith(prefixo2_on.prefixo)
} else {
var isCmd = budy2.startsWith(prefix)  
}

const command = isCmd ? budy2.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//================(BADY)================\\
 
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\


//===============(BUDY)==================\\

var budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
//======================================\\

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''

adivinhacll = info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'iphone' : 'WhatsApp web';

if(adivinhacll === "WhatsApp web") {
var sender = isGroup ? info.key.participant.split(":")[0]+"@s.whatsapp.net": info.key.remoteJid
} else if(adivinhacll === "iphone") {
var sender = isGroup ? info.key.participant : info.key.remoteJid.split(":")[0]+"@s.whatsapp.net"
} else {
var sender = isGroup ? info.key.participant : info.key.remoteJid  
}

const pushname = info.pushName ? info.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)

const botNumber = conn.user.id.split(':')[0]+'@s.whatsapp.net'
const argss = body.split(/ +/g)
const testat = body
const ants = body
const tescuk = ["0@s.whatsapp.net"]

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

const numerodono = [`${nmrdn}`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//===========(enviar.espere)=============\\

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\

//=======(ADMS/DONO/ETC..CONST)========\\

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot

const DonoOficial = setting.numerodono.includes(sender) 

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

//============(FUNÇÕES)============\\

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isBanned = ban.includes(sender)

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isnit = nit.includes(sender) 

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isAutofigu = isGroup ? autofigu.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const ischyt = chyt.includes(sender)

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

//=======================================\\

if(botoff.includes(from) && !SoDono) return 

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

//=========(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const issupre = supre.includes(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

//=====================================\\


//==========(VERIFICADO)===============\\


var blalogoofc = getBuffer(`${logo}`)


var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`, 'jpegThumbnail': blalogoofc}}}

//=====================================\\

const reply = (texto) => {
conn.sendMessage(from, { text: texto }, {quoted: info}).catch(e => {
console.log(e)
})
}

const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await conn.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }


const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const sendSticker = (from, filename, info) => {
conn.sendMessage(from, {sticker: filename}, {quoted: info})
}

const sendImage = (ytb) => {
conn.sendMessage(from, {image: ytb}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
conn.sendMessage(hehe, {text: ytb})
}


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
conn.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}


const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)

const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.id)

const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	
	
//=====(FUNÇÃO-CHECAR-LIMIT)====\\
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return conn.sendMessage(from,{text: `[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`},{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
conn.sendMessage(from, {text: jrpl.limitend(pushname)}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json',JSON.stringify(_limit))
return false
}
}
	
const sendFileFromUrl = async (from, url, caption, info, men) => {
let mime = ''; 
let res = await axios.head(url)
mime = res.headers['content-type'] 
if (mime.split("/")[1] === "gif") { 
return conn.sendMessage(from, {video: await getBuffer(url),
caption: caption, gifPlayback: true, 
mentions: men ? men : []}, {quoted: info}) 
}
 
let type = mime.split("/")[0]+"Message" 
if(mime === "application/pdf"){ 
return conn.sendMessage(from, {document: await getBuffer(url), mimetype: 'application/pdf', 
caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 

if(mime.split("/")[0] === "image"){ 
return conn.sendMessage(from, {image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
}
if(mime.split("/")[0] === "video"){ 
return conn.sendMessage(from, {video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 
if(mime.split("/")[0] === "audio"){ 
return conn.sendMessage(from, {audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: info}) 
}
}
	
const sendMediaURL = async(to, url, text ="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
conn.sendMessage(to, {type: media, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}}, { quoted: info})
fs.unlinkSync(filename)
});
}   

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}

const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}

return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

// ENVIAR BOTÃO COM TEXTO
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// ENVIAR MENU COM GIF OU QUALQUER DO TIPO
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => {
buttonMessage = {
video: {url: gif1},
caption: text1,
gifPlayback: true, 
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// PRA ENVIAR BOTÃO DE TEMPLATE
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {

templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
conn.sendMessage(id, templateMessage, {quoted: vr})
}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
conn.sendMessage(id, listMessage)  
}

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
conn.sendMessage(from, {sticker: bla}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buff}, {quoted: info}).catch(e => {
})
fs.unlinkSync(rano)
})
}

if(isAutofigu && isGroup) {
if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
if(type == "videoMessage") {
buff = await getFileBuffer(info.message.videoMessage, 'video')
ran = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
enviarfiguUrl(`${res}`)
fs.unlinkSync(ran, buff)
} else if(type == "imageMessage") {
buff = await getFileBuffer(info.message.imageMessage, 'image')
ran = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
enviarfiguUrl(`${res}`)
fs.unlinkSync(ran, buff)
}
}


var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.includes(`@${nmrdnofc1}`)) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  

txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`

conn.sendMessage(from, {text: txt}, {quoted: info})
}
}
 
if(isGroup && fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {

const sairalg = JSON.parse(fs.readFileSync(`./func/sairgp/sairgp-${from}.json`)); 

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

if(datinhaofc == sairalg.Data_de_sair) {

group = await conn.groupMetadata(from)
member = group['participants']
mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
text: `Atenção membros, aqui quem está falando é o bot com a mensagem automática, sairei do grupo por o tempo que foi realizado no dia que alugou, completou 30 dias....`,
mentions: mem,
quoted: info
}
conn.sendMessage(from, options)

exec(`cd func && cd sairgp && rm sairgp-${from}.json`)

setTimeout(async() => {
reply(`${prefix}sairgp`)
}, 5000)
}
}
 
if(fs.existsSync("dados_store.json")) {
statsObj = fs.statSync('./dados_store.json')  

if(convertBytes(statsObj.size) >= "20 MB") {
exec("rm dados_store.json")
}
}
 
async function fgptotale() {
if(isGroup && fs.existsSync(`./func/fgp-${from}.json`)) {
 
var json_fgp = JSON.parse(fs.readFileSync(`./func/fgp-${from}.json`))
 
var hora_d_agr = moment.tz('America/Sao_Paulo').format('HH/mm/ss'); 

switch(hora_d_agr){
case json_fgp.abrirgp: {
await conn.groupSettingUpdate(from, 'not_announcement')
var blamsgfgp = `./func/horario-grupo-a-b/mensagem_de_abrir-fechar-${from}.json`
fs.writeFileSync(blamsgfgp, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\nFECHAR / ABRIR GRUPO\n\n_- REALIZANDO AÇÃO _-", null, 2))
if(fs.existsSync(blamsgfgp)) { 
blarmsgfc = JSON.parse(fs.readFileSync(blamsgfgp))
}
await conn.sendMessage(from, {text: blarmsgfc})
fs.unlinkSync(blamsgfgp)
}
break

case json_fgp.fechargp: {
await conn.groupSettingUpdate(from, 'announcement')
var blamsgfgp = `./func/horario-grupo-a-b/mensagem_de_abrir-fechar-${from}.json`  
fs.writeFileSync(blamsgfgp, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\nFECHAR / ABRIR GRUPO\n\n_- REALIZANDO AÇÃO _-", null, 2))
if(fs.existsSync(blamsgfgp)) { 
blarmsgfc = JSON.parse(fs.readFileSync(blamsgfgp))
}
await conn.sendMessage(from, {text: blarmsgfc})
fs.unlinkSync(blamsgfgp)
}
break

default:
}
} 
}

setInterval(fgptotale, 0)


//========================================\\
//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy2.startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
//========================================\\



//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`            ◪ LEVEL UP ◪\n\n├─ ❏ NÚMERO: ${sender.split("@")[0]}.                                                                                       ├─ ❏ *PATENTE*: ${patt}\n├─ ❏ XP: ${getLevelingXp(sender)}\n└─ ❏ LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}`)
}
} catch (err) {
console.error(err)
}
}
//=======================================\\



const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
conn.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}


//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./armor/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { conn.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
conn.sendMessage(from, {text:`
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`}) 
}, 5000)
}}

//========================================\\


		//JOGO QUIZ
if(isGroup && fs.existsSync(`./armor/quizanim-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
conn.sendMessage(from,{text: `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/quizanim-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}, 5000)
}
}

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             

///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff)
}
if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff1 = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff1)
}

//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////,

if (!isGroup && isCmd) console.log('\033[0;35m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]))

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\033[0;35m~\x1b[1;37m>', '[\033[0;35mMENSAGEM\x1b[1;37m]', 'do ', color(sender.split('@')[0]))

if (isCmd && isGroup) console.log('\033[0;35m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

if (!isCmd && isGroup && !info.key.fromMe) console.log('\033[0;35m~\x1b[1;37m>', '[\033[0;35mMENSAGEM\x1b[1;37m]',  'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))
//======(JOGO-DA-VELHA)=======(Função)===\\

//////////_FUNÇÕES DO JOGO DA VELHA_//////
/* async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatAccept}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
 conn.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

conn.sendMessage(from, {text: chatWon}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
} */


//=================================\\

async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
linkgpp = await conn.groupInviteCode(from)
if(!isUrl(budy2)) return 
if(budy2.includes(`${linkgpp}`)) return 
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
linkgpp = await conn.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(budy2)) return 
reply('*Link detectado, punindo usuário...*')
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()
// joguinhodavelha() 

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}


//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\


//============(EVAL-EXECUÇÕES)===========\\

if (budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
if(budy.includes("keyale") && !isnit) return reply("Fofo você em kkkkk")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))

return reply(JSON.stringify(eval(budy.slice(2)),null,'\t')) 
} catch (e){
reply(e)
}
}

if (budy.startsWith('=>')){
try {
if(info.key.fromMe) return   
if (!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
if(budy.includes("keyale") && !isnit) return reply("Fofo você em kkkkk")
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}

reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch (e) {
reply(String(e))  
}
}


if (body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
if(budy.includes("keyale") && !isnit) return reply("Fofo você em kkkkk")
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(isGroupAdmins || SoDono) return 
if(type == 'stickerMessage') return
let verificar = bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && bady.length < 100) return  
await conn.sendMessage(from, {text: '*Mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return conn.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\

if ((isAntiPorn && isBotGroupAdmins)) {
if (type === 'imageMessage') {
buff = await getFileBuffer(info.message.imageMessage, 'image')
ran = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
anu = await fetchJson(`https://nsfw-demo.sashido.io/api/image/classify?url=${res}`)
fs.unlinkSync(ran, buff)
if(anu[0].className === 'Porn' && anu[0].probability >= '0.723584315776825' && isGroupAdmins)  {
await conn.sendMessage(from,{text: `Você é adm, não banirei você por isto..`}, {quoted: info})
fs.unlinkSync(ran, buff)
return
} else if(anu[0].className === 'Sexy' && anu[0].probability >= '0.28157779574394226' && !isGroupAdmins) {
await conn.sendMessage(from,{text: `hummm`}, {quoted: info})
fs.unlinkSync(ran, buff)
return
}
if(anu[0].className === 'Hentai' && isGroupAdmins) {
await conn.sendMessage(from,{text: `Você é adm, não banirei você...`},{quoted: info})
fs.unlinkSync(ran, buff)
return
}  else if(anu[0].className === 'Hentai' && !isGroupAdmins) {
await conn.sendMessage(from,{text: `PORNO DETECTADO, VOCÊ SERÁ BANIDO..`}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
fs.unlinkSync(ran, buff)
}, 2000)
return
}
}
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono && !isnit && !isPremium){ 
msgpvblock = `./func/call/msg_block-${sender}.json`
fs.writeFileSync(msgpvblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR ENVIAR MENSAGEM PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
reply(msgmsglbl)
fs.unlinkSync(msgpvblock)
setTimeout(async () => {
conn.updateBlockStatus(sender, 'block')
}, 2000)
return
}
//======================================\\


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && banChats === true) return reply(`Olá, sou uma inteligência artificial, programado(a) para realizar ações, por adms e o dono, se você está enviando mensagem, provavelmente você não sabe disso, eu removo diariamente pessoas por enviar links e muito mais..`)
const atibot = info.isBaileys
if (atibot === true) return 


//======================================\\

// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
conn.ws.on('CB:call', async (B) => {
var msgcallblock = `./func/call/msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR EFETUAR LIGAÇÃO PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if (B.content[0].tag == 'offer') {
conn.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
conn.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
fs.unlinkSync(msgcallblock)
})
}
}
})
}

//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
//======================================\\


//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

if (isCmd && !SoDono && !isnit && !issupre && !ischyt) addFilter(sender)


switch (figura) {
  
case 'PhBL0PtpQ7pESrESQNgLuXpPJfhblay8ykTUfOH3xpRXYw=':
bla = fs.readFileSync('./audios/qviado.mp3')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
break
}

//INICIO DE COMANDO DE PREFIXO
switch(command) {
  
//=========(-MENUS-DE-CMDS-)========\\

case 'advertir': case 'advert':
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário com esse comando para que possa advertir ele por mal comportamento.`)

mentioned = info.message.extendedTextMessage.contextInfo.participant
b = [{}]
if(!(`${from}` in b))b[from] = {}
if(!(`${mentioned}` in b[from]))b[from][sender] = {adv : 1}
bla = fs.writeFileSync("./tst.json", JSON.stringify(b, null, 2))
break

case 'desbanir':
case 'desban':
try {
if(!isPremium) return reply("Só para usuários Premium novinha 😪")
if(!budy.includes("/")) return reply(`Exemplo: ${prefix}desbanir Número banido injustamente/Meu número +55 81 xxx-xxxx foi banido injustamente desbana por favor`)
var [qsp, qsp2] = q.split("/")
await fetchJson(`http://aleatoryapi.herokuapp.com/api/EnviarEmail?titulo=${qsp}&texto=${qsp2}&apikey=${keyale}`)
reply(`Olá : ${pushname} A mensagem foi enviada para o suporte com sucesso BB...`) 
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'menu': case 'comandos': case 'help':
if(menu_audio === true) {
audiomenu = await fs.readFileSync("./audios/menucmd.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}
sendBimgT(from, `${logo}`, menu(prefix, NomeDoBot), "Leia com Atenção", [{index: 1, urlButton: {displayText: 'MEGA MODS BR', url: 'https://www.youtube.com/channel/UCwIRjTCM06Py8bv1lBO31OQ'}},
{index: 1, urlButton: {displayText: 'NOSSO SITE', url: 'https://voubaixar.com'}}], selo)
break

case 'audio-menu': 
if(!SoDono) return reply(`Apenas o dono pode executar esta ação!!`)
if(menu_audio === false) {
menu_audio = true
nescessario.menu_audio = menu_audio
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O Áudio foi ativado para o menu _- COM SUCESSO - _\n\nSe quiser Desativar - Só digitar o comando novamente`)
} else if(menu_audio === true) {
menu_audio = false
nescessario.menu_audio = menu_audio
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`- O Áudio foi Desativado do menu _- COM SUCESSO - _\n\nSe quiser Ativar - Só digitar o comando novamente`) 
}
break
/* 
case 'menu':
case 'help':
case 'comandos':
sendBimg(from, `${logo}`, menu(prefix, NomeDoBot), "Leia com atenção", [{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `🤡 MENU DE BRINCADEIRAS 🤡`}, type: 1}, {buttonId: `${prefix}logos`, buttonText: {displayText: `💥 MENU DE LOGOS ⚡`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: `🔸 INFORMAÇÕES DO DONO 🔸`}, type: 1}], selo) 
break  */

case 'menuadm':
case 'menuadms':
case 'adm':  
sendBimg(from, `${logo}`, adms(prefix), `☂️`, [
{buttonId: `${prefix}infobot`, buttonText: {displayText: `♦️ ÁUDIO DE INFORMAR SOBRE O DONO ♣️`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: `💥 INFORMAÇÕES DO DONO⚡`}, type: 1}], selo) 
break 

case 'menudono':
case 'donomenu':  
sendBimg(from, `${logo}`, menudono(prefix), `☔`, [
{buttonId: `${prefix}infobot`, buttonText: {displayText: `♦️ ÁUDIO DE INFORMAR SOBRE O DONO ♣️`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: `💥 INFORMAÇÕES DO DONO⚡`}, type: 1}], selo) 
break 

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
numerodn = setting.numerodono 
wew = await getBuffer(`${logo}`) 
await conn.sendMessage(from, {image: wew, caption: infodono(prefix, numerodn, NomeDoBot)}, {quoted: selo})
break 

case 'menupremium':
case 'menuprem':
await conn.sendMessage(from, {text: menuprem(prefix)}, {quoted: selo})
break

case 'configurar-bot':
await conn.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break

case 'destrava':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
break 

case 'perfil':
try {
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
break

case 'destrava2':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava2 (prefix)}, {quoted: info})
break 

case 'infovotação':
case 'infovotacao':  
await conn.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: selo})
break

case 'infobemvindo':
case 'infobv':  
await conn.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break

case 'infocontador':
await conn.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'infolistanegra':
await conn.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
await conn.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
await conn.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\


case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NomeDoBot}* 」*────`
reply(tkks.trim())
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

case 'cep':
if(!q.length > 2) return reply("Cade o cep?")
blacep = await fetchJson(`http://aleatoryapi.herokuapp.com/api/consultacep?cep=${q}&apikey=${keyale}`)

bla_res = `${JSON.stringify(blacep, null, 1)}`

rsp = bla_res.replace(new RegExp(' "', "gi"), "- > ").replace(new RegExp('[{}"]', "gi"), "").replace(new RegExp(',' ,"gi"), "\n").replace(new RegExp(':- >','gi'), '').replace("street", "Rua").replace("city", "Cidade").replace("state", "Estado").replace("neighborhood", "Vizinhança") 

reply(`_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${rsp}\n_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${NomeDoBot}\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-`)
break

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
conn.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/aleatoryconteudos`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'repetir':
rsp = q.replace(new RegExp("[()+-/ +a/b/c/d/e/fghijklmnopqrstwuvxyz/]", "gi"), "")
reply(rsp)
break

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(rsp))
return reply(JSON.stringify(eval(`${rsp}`,null,'\t')))
break 

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│
│➱ Antiaudio: ${isAntiAudio? '✓' : '✕'}
│➱ Antidocumento: ${Antidoc ? '✓' : '✕'}
│➱ Antifake: ${isAntifake ? '✓' : '✕'}
│➱ Antiimg: ${isAntiImg? '✓' : '✕'}
│➱ AntiContato ${isAntiCtt ? '✓' : '✕'}
│➱ AntiSticker: ${isAntiSticker ? '✓' : '✕'}
│➱ Antiligação: ${isAnticall ? '✓' : '✕'}
│➱ AntiPv-Block: ${isAntiPv ? '✓' : '✕'}
│➱ AntilinkHard: ${isAntiLinkHard ? '✓' : '✕'}
│➱ LimiteCaracteres: ${isAntiFlood ? '✓' : '✕'}
│➱ AntiCatalogo: ${isAnticatalogo ? '✓' : '✕'}
│➱ AntiPalavrão: ${isPalavrao ? '✓' : '✕'}
│➱ Antivideo: ${isAntiVid ? '✓' : '✕'}
│➱ AntiLocalização: ${Antiloc ? '✓' : '✕'}
│➱ Bemvindo: ${isWelkom ? '✓' : '✕'}
│➱ Simih: ${isSimi ? '✓' : '✕'}
│➱ Modo brincadeira: ${isModobn ? '✓' : '✕'}
│
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`
wew = await getBuffer(`${logo}`)
conn.sendMessage(from, {image: wew, caption: statuszada, thumbnail: null})
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await conn.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
conn.sendMessage(from, {text: teks, contextInfo:{mentionedJid: mem}}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'grupo': 
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await conn.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadata = await conn.groupMetadata(from) 
conn.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
conn.sendMessage(from, options)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(budy){
if(q.length < 1) return reply('Citar oq?')
conn.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'marcar':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
reply('ERROR!!')
}
break

case 'marcar2':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('ERROR!!')
}
break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
conn.sendMessage(from, {text: teks}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'katchau':
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if(budy.includes("@")) {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(numerodono.includes(mentioned)) return reply("Não pode remover meu dono 😡")
if(botNumber.includes(mentioned)) return reply("Você acha que vou banir eu mesmo??, troxa você em..")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque a')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Pedidos recebidos, emitidos, será removido(a) em um minuto :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
setTimeout(async () => {
conn.groupParticipantsUpdate(from, mentioned, 'remove')
}, 60000)
} else {
mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]} Será removido(a) em 1 minuto.`, mentioned, true)
setTimeout(async () => {
conn.groupParticipantsUpdate(from, mentioned, 'remove')
}, 60000)
}
} else {
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!') 
mentioned = info.message.extendedTextMessage.contextInfo.participant
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned)) return reply('Não posso remover meu dono 🤧')
mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}, será removido(a) em um minuto.`, mentioned, true)
setTimeout(async () => {
conn.groupParticipantsUpdate(from, mentioned, 'remove') 
}, 60000)
}
break

case 'reviver':
if (!isGroup) return reply('Esse comando so funciona em grupo, sinto muito')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
add = info.message.extendedTextMessage.contextInfo.participant
sleep(5000)
const response2 = await conn.groupParticipantsUpdate(from, [add], "add" )
reply('Usuario Adicionado de volta ao grupo.')
break

case 'add':
if(!SoDono) return reply('Comando Desativado por questões de segurança, estava ocasionandoo Ban do número do bot.')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')  
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(q.length < 1) return reply('Quer adicionar uma alma?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 558198923680`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')
reply('Irei adicionar ele(a) em 5 segundos...')  
setTimeout(async() => {
responser = await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')  
reply('Irei adicionar ele(a) em 5 segundos...')  
adduser = info.message.extendedTextMessage.contextInfo.participant
setTimeout(async() => {
responser =  await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch (e){
if(!q.includes("@")) {
var addusr = info.message.extendedTextMessage.contextInfo.participant
} else {
var addusr = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` 
}
if(String(e).includes("responser is not defined")) {
linkgc = await conn.groupInviteCode(from)  
conn.sendMessage(addusr, {text: `Você está com o número privado para adicionar em grupos, então está ae o link do grupo : https://chat.whatsapp.com/${linkgc}`})
} else {
reply('Izi, se não for adicionado provavelmente ele privou só para contatos adicionar ele em grupo.')
}
}
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
conn.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'bann':
if(!isPremium) return reply("Apenas usuário premium.")
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefix}ban @marcar-ele`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if(groupAdmins.includes(mentioned)) {
mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
}
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(botNumber.includes(mentioned2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned2)) return reply('Não posso remover meu dono 🤧')
if(groupAdmins.includes(mentioned2)) {
mentions(`@${mentioned.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [mentioned], true)
}
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) - `, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "remove")
}
break

case 'ban': case 'banir': case 'kick':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
if(!budy.includes("@")) {
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem do usuário que deseja remover ele ou marque com ${prefix}ban @marcar-ele`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "remove")  
} else {
if(q.length > 15) return reply('Só pode remover uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(botNumber.includes(mentioned2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(mentioned2)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) - `, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "remove")
}
break

case 'ban2': case 'banir2':
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')

texto = args.join(" ")
.replace("10s", "10000")
.replace("20s", "20000")
.replace("30s", "30000")
.replace("40s", "40000")
.replace("50s", "50000")
.replace("1m", "60000")

if(!Number(texto)) return reply(`Determine o tempo que você quer que eu remova o membro que cometeu a infração..\nExemplo : ${prefix}ban 60000\n 60 mil é igual a 60 segundos == 1 minuto..`)
if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
num = info.message.extendedTextMessage.contextInfo.participant
if(botNumber.includes(num)) return reply('Não sou beste de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(num)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `Olá ${num.split('@')[0]}, você será banido em ${texto}s/m/h por descumprimento das regras ou justiça por algo fora do conteúdo do grupo, se for uma mensagem ou imagem/foto ilegal apague imediatamente..`, mentions: [num]}, {quoted: info})
setTimeout(async() => {
num = info.message.extendedTextMessage.contextInfo.participant
if(!num) return reply("A mensagem foi apagada...")
conn.groupParticipantsUpdate(from, [num], 'remove')
}, `${texto}`)
} else { 
reply('Responda a mensagem da pessoa')
}
break


//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
conn.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'autoban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
var ind = dbids.indexOf(from)						
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case 'listagp': //case by: Bielzinho-Bot
if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
tdufg = await store.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono && !isnit) return reply("Só dono pode executar este comando..")
if(q.length < 1) return reply(`Exemplo: ${prefix}banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.`)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
} else {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
}
}
break

case 'correio':
txt = body.slice(10)
txtt = args.join(" ")
txt1 = txt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Oi Amor, sdds`)
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
conn.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break

case 'nome-bot':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = args.join(" ") 
setting.NomeDoBot = NomeDoBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do seu bot foi alterado com sucesso para : ${setting.NomeDoBot}`)
break

case 'nick-dono':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NickDono = args.join(" ")
setting.NickDono = NickDono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Nick Do Dono foi configurado para : ${setting.NickDono}`)
break

case 'numero-dono':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
reply(`O número dono foi configurado com sucesso para : ${q}\n\n_ REINICIANDO EM 3. 2 . 1`)
numerodonoofc = setting.numerodono 
numerodonoofc = args.join(" ")
setting.numerodono = numerodonoofc
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
break

case 'prefixo-bot': case 'setprefix':
if (args.length < 1) return
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'prefixo_tipo2':
case 'prefixo_tipo_off':  
if (!SoDono  && !isnit) return reply(enviar.msg.donosmt)
if(budy.includes(`prefixo_tipo2`)) {
if(args.length < 1) return reply(`Digite o prefixo que deseja :\nExemplo: ${prefix}prefixo_tipo2 -`)    
var prefixo2_ = {
prefixo: q
}
if(!fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) {
fs.writeFileSync(`./func/prefixo/prefixo2_${from}.json`, JSON.stringify(prefixo2_, null, 2))
reply(`Prefixo único só para este grupo foi criado com sucesso..\n\n Prefixo: ${q}`)
} else {
fs.unlinkSync(`./func/prefixo/prefixo2_${from}.json`) 
fs.writeFileSync(`./func/prefixo/prefixo2_${from}.json`, JSON.stringify(prefixo2_, null, 2))
reply(`Prefixo re-criado com sucesso de : ${prefixo2_on.prefixo} para : ${q}`)
}
} else if(budy.includes("prefixo_tipo_off")) {
if(!fs.existsSync(`./func/prefixo/prefixo2_${from}.json`)) return reply(`Já está no prefixo original do bot, que é : ${setting.prefix}`)
fs.unlinkSync(`./func/prefixo/prefixo2_${from}.json`)  
reply(`Parabéns, voltou ao prefixo original : ${setting.prefix}`)
}
break

case 'fotomenu':
case 'fundomenu':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem 2 vez com esse comando..')
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
logoslink.logo = logo
logo = res
fs.writeFileSync('./logos/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${logo}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'setprefixs':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await conn.groupUpdateSubject(from, `${body.slice(9)}`)
await conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'fotobot':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await conn.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await conn.profilePictureUrl(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'ganharlevel':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
addLevelingLevel(sender, 10)
reply("Olá chefe, foi adicionado 10 Level para você 🙂")
break

case 'ganharxp':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")  
addLevelingXp(sender, 5000)
reply("Foi adicionado 5000 mil de XP para você 🙂")
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resul = `     
            ◪ *REGISTRO* ◪                                                                  
            
  ├─ ❏ *NICK* : ${pushname}
  ├─ ❏ *NÚMERO* : ${sender.split("@")[0]}
  ├─ ❏ *PATENTE* : ${patt}               
  ├─ ❏ *XP* : ${userXp}
  └─ ❏ *LEVEL* : ${userLevel}`
await conn.sendMessage(from, {text: resul}, {quoted: info})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
conn.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
conn.sendMessage(_.id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.id, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'dono1':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono1 = body.slice(8)
nescessario.dono1 = dono1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono1}`)
break

case 'vemqrcode':
if(!SoDono) return reply("Apenas Dono..")
bla = fs.readFileSync("./ALEATORY-QR.json")
conn.sendMessage(from, {document: bla, mimetype: 'document/json', fileName: 'ALEATORY-QR.json'})
break

case 'dono2':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono6 = body.slice(8)
nescessario.dono6 = dono6
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `[ Lista de donos do bot ${setting.NomeDoBot} ] 

Dono Oficial do bot: ${setting.numerodono}

- [ 1 ] ${nescessario.dono1}\n- [ 2 ] ${nescessario.dono2}\n- [ 3 ] ${nescessario.dono3}\n- [ 4 ] ${nescessario.dono4}\n- [ 5 ] ${nescessario.dono5}\n- [ 6 ] ${nescessario.dono6} `
reply(p)
break

case 'online':   
case 'onlines':  //case by: ᬊ͜͡𝑩𝑰𝑬𝑳𝒁𝑰𝑵𝑯𝑶.𝑬𝑿𝑬ᵒᶠᶜ
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[ido]), conn.user.id.split(":")[0] + "@s.whatsapp.net"]
mentions('Pessoas online do gp:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, online, true)
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins || !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

conn.sendMessage(from, {text: blity}, {quoted: info})
break

case 'alugado': case 'tempodesair': case 'tempo-aluguel': case 'aluguel': 
if(!SoDono && !info.key.fromMe) return 
txt = args.join(" ")
if(!txt.includes("/")) return reply(`O formato da data é assim : 03/04/22`)
msgz = args.join(" ").replace(" ", "")

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Data_que_alugou: datinhaofc, 
Data_de_sair: msgz
}

if(!fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/sairgp/sairgp-" + from + ".json")) {
fs.unlinkSync("./func/sairgp/sairgp-" + from + ".json");
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo de quando vai expirar o aluguel do bot e irei sair na data exata..`)
break

case 'tempo-fgp': 
if(!SoDono) return 
txt = args.join(" ")
.replace(" |", "|")
.replace("| ", "|")
var [txt1,txt2] = txt.split('|')
var blarpty = {
fechargp: txt1, 
abrirgp: txt2, 
grupoid: from
}

if(!fs.existsSync(`./func/fgp-${from}.json`)) {
fs.writeFileSync(`./func/fgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/fgp-" + from + ".json")) {
fs.unlinkSync("./func/fgp-" + from + ".json");
fs.writeFileSync(`./func/fgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo determinado..`)
break

case 'fechar-gp':
if(!SoDono) return reply("Comando especial para o dono.")
if(!q.includes("/") && !q.length <= 17) return reply(`Olá, você tem que determinar os 2 tempo pra o bot fechar o grupo e abrir, por exemplo..\n${prefix}fechar-gp 1m/2m\n\nEle fechará o grupo depois de um minuto, e depois abre após 2 minutos....`)
qtxt = args.join(" ").replace(" /", "/").replace("/ ", "/").replace("1m", "60000").replace("2m", "120000").replace("3m", "180000").replace("30m", "1800000").replace("1h", "3600000").replace("2h", "7200000").replace("7h", "25200000")

txt1 = qtxt.split("/")[0]
txt2 = qtxt.split("/")[1]

var fcgp = {
tempo1: txt1, 
tempo2: txt2, 
grupo: from
}

if(!fs.existsSync(`./func/fechar-abrir-gp-${from}.json`)) {
fs.writeFileSync(`./func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
} else {
if (fs.existsSync("./func/fechar-abrir-gp-" + from + ".json")) {
fs.unlinkSync("./func/fechar-abrir-gp-" + from + ".json");
fs.writeFileSync(`./func/fechar-abrir-gp-${from}.json`,
JSON.stringify(fcgp, null, 2));
}
}
reply(`Tempo de fechar o grupo e abrir em tal horário foi programado com sucesso..`)

const tempodttl = JSON.parse(fs.readFileSync(`./func/fechar-abrir-gp-${from}.json`)); 

setTimeout(async () => {
reply("Grupo Fechado..")
await conn.groupSettingUpdate(from, 'announcement')  
}, `${tempodttl.tempo1}`)

setTimeout(async () => {
reply("Grupo Aberto..")
await conn.groupSettingUpdate(from, 'not_announcement')  
}, `${tempodttl.tempo2}`)

break


case 'ausente': case 'off': case 'afk':
if(!SoDono) return reply("Comando especial para o dono.")
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
msgz = args.join(" ")

var catmsgaus = {
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: msgz
}

if(!fs.existsSync(`./func/afk/afk-@${nmrdnofc}.json`)) {
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
} else {
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
}
}
reply(`Mensagem de ausência criada com sucesso...`)
break

case 'ativo': case 'on': case 'voltei':
if(!SoDono) return reply("Comando especial para o dono.")
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {  
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
break

case 'serpremium':
case 'serprem':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
premium.push(`${setting.numerodono}@s.whatsapp.net`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${setting.numerodono} você foi adicionado na lista premium.`)
break

case 'reagir':
const reactionMessage = {
react: {
text: "💖",
key: info.key
}
}
sendMsg = await conn.sendMessage(from, reactionMessage)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
conn.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: mentioned}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${bla.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break
case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
await conn.chatModify({ clear: { message: { id: String, fromMe: true } } }, from, [])
reply("Chat limpo")
break

case 'addpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas criada com sucesso!*')
}
break

case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'deletar':  case 'apagar':  case 'delete':   case 'del':  case 'd':
if (!isGroup)return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('A mensagem não foi enviado pelo bot...')
})
break

case 'fundobemvindo':
case 'fundobv':  
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
try {
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antipvon':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe ) return reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "*Sucesso alterado para modo antipv, pv não poderá ser utilizado"})
break

case 'antipvoff':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "*Sucesso modo antipv desligado, pv liberado."})
break

case 'antipv':
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Ja esta Desativado')
pesquisar = 'Ativado'
processo = antipv.indexOf(pesquisar)
while(processo >= 0){
antipv.splice(processo, 1)
processo = antipv.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'block':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unblock':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'blocklist':
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
reply(jrc.trim())
break

case 'acess':
if (!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return conn.sendMessage(from, {text: `root@ALEATORY-BOT:~ ${err}`}, {quoted: info})
if (stdout) {
conn.sendMessage(from, {text: stdout})
}
})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if (args.length < 1) return
if(budy.includes("limitec")) {
lmt = args[0]
limitecaracteres_ = {
limite: lmt
}
if(!fs.existsSync(`./func/limitecaracteres/limite-c_${from}.json`)) {
fs.writeFileSync(`./func/limitecaracteres/limite-c_${from}.json`, JSON.stringify(limitecaracteres_, null, 2))
reply(`${limitefl} foi adicionado como limite de caracteres..`)
} else {
fs.unlinkSync(`./func/limitecaracteres/limite-c_${from}.json`)
fs.writeFileSync(`./func/limitecaracteres/limite-c_${from}.json`, JSON.stringify(limitecaracteres_, null, 2))
reply(`foi alterado o limite de caracteres para : ${limitefl}`)
}
} else {
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${limitefl} foi adicionado como limite de caracteres!!`)
}
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
reply(`${e}`)
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'speed':
case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
			uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
┌─────────────────┐
│ Velocidade Do Bot + Informações 
│ 
│ Velocidade : ${String(r.toFixed(3))}
│ 
┌─────────────┐
│ Tempo Ativo : 
│ [ ${kyun(uptime)} ] 
└───────────
│ 
│ Data : ${date} 
│ 
│ Grupo : ${groupName} 
│ 
│ Solicitou Comando : ${pushname}
│ 
└───────────〔 ${hora1} 〕
`

await conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'gtts':
if (args.length < 1) return conn.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: info})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {audio: buffer, ptt:true}, {quoted: info})
fs.unlinkSync(rano)
})
})
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
await mentions(tagme, mentioned, true)
break

case 'blockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
await conn.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return conn.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: teks1}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\


//============(CASE-BEM-VINDO/E ETC..)=========\\

case 'bemvindo':
case 'welcome':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//=====================================\\



//=================(ANTS)=================\\

case 'antictt':
case 'anticontato':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'botoff':
case 'boton':
if (!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply("Só dono pode executar esta ação...")
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (botoff.includes(from)) return reply('Ja esta ativo')
botoff.push(from)
fs.writeFileSync('./datab/grupos/botoff.json', JSON.stringify(botoff))
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if (Number(args[0]) === 0) {
if (!botoff.includes(from)) return reply('Ja esta Desativado')
pesquisar = from
processo = botoff.indexOf(pesquisar)
while(processo >= 0){
botoff.splice(processo, 1)
processo = botoff.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/botoff.json', JSON.stringify(botoff))
reply(`Ativando todos os funcionamentos do bot novamente...`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
case 'antidoc':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (Antidoc) return reply('Ja esta ativo')
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('🌀 Ativou com sucesso o recurso de anti documento neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!Antidoc) return reply('Ja esta Desativado')
pesquisar = from
processo = antidoc.indexOf(pesquisar)
while(processo >= 0){
antidoc.splice(processo, 1)
processo = antidoc.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiimg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antinotas':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar. info.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'resetarttt':
case 'rvttt':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
daily.splice([])
fs.writeFileSync('./datab/usuarios/diario.json', JSON.stringify(daily))
reply('‼️O jogo da velha TTT foi resetado com sucesso..✔️')
reply(`${prefix}reiniciar`)
break

case 'reiniciar':
if(!SoDono) return
rp = (Date.now() / 1000) - info.messageTimestamp
blar = process.uptime()
startAle()
reply(`Reiniciei em ${String(rp.toFixed(3))}m\n\nTempo Ativo : ${kyun(blar)}`)
break

case 'antiporno':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPorn) return reply('Ja esta ativo')
antiporn.push(from)
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('🌀 Ativou com sucesso o recurso de antiporn neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPorn) return reply('Ja esta Desativado')
pesquisar = from
processo = antiporn.indexOf(pesquisar)
while(processo >= 0){
antiporn.splice(processo, 1)
processo = antiporn.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('‼️ Desativou com sucesso o recurso de antiporn neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('Ja esta ativo.')
palavrao.push(from)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('Ja esta Desativado')
pesquisar = from
processo = palavrao.indexOf(pesquisar)
while(processo >= 0){
palavrao.splice(processo, 1)
processo = palavrao.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autofigu': case 'autosticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('Ja esta ativo')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('Ja esta Desativado')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkgp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if (Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if (position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

//==========(Sticker-Stickers)===========\\


//=============(LOGOS)=============\\



//==========(PLAQUINHAS-LOGOS)===========\\


//=======================================\\


// LOGOS 


//========(SORTEIO-VOTAR-CASES)=========\\



//==========(TTPS/ATTP/TTM)============\\

case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
reply(enviar.espere)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await conn.sendMessage(from, {sticker: buffer}, {quoted: info}).catch(e => {
reply('ERROR, ALGUM PROBLEMA NA API, EU ACHO.. ')  
})
break

case 'ttp':
try {
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = `http://aleatoryapi.herokuapp.com/api/ttp?texto=${string}&apikey=${keyale}`
sendStickerFromUrl(from, post, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(enviar.espere)
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`)
await conn.sendMessage(from, {sticker: url}, {quoted: info})
} catch {
reply('ERROR')
}
break	


//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\


//=========(FIM-ALTERAR-AUDIO)===========\\


//=======(JOGO-DA-VELHA-COM-MAQUINA)=======\\



//==========(EFEITOS-MARCAR)==========\\

case 'triggered':
try {
if(!isQuotedImage) return reply("Marque uma imagem")
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
post = await fetchJson(`https://aleatoryapi.herokuapp.com/canvas/trigger?url=${res}&apikey=${keyale}`)
sendStickerFromUrl(from, {sticker: post}, {quoted:info})
} else {
reply('error')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
conn.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
fs.unlinkSync(buff)
}
break

case 'rip':  
case 'morto':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/rip?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'lgbt':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/lgbt?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}

case 'trash':
case 'lixo':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/trash?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'comporn':
try {
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
buffer = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/phub?nome=${jrr}&msg=${jrr1}&foto=https://telegra.ph/file/954832554bf2b2e40f932.jpg&apikey=${keyale}`)
await conn.sendMessage(from, {image: buffer}, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break 

case 'preso':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/jail?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'legenda':
try {
gh = args.join(" ")        
txt1 = gh.split('/')[0] || ''
txt2 = gh.split('/')[1] || ''
if(!gh.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedSticker)) {
base64 = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/api/legenda?url=${link}&texto1=${encodeUrl(txt1)}&texto2=${encodeUrl(txt2)}&apikey=${keyale}`) 
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'borrar':
case 'figuborrada':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/blur?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'hitler':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/hitler?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'deletef':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/delete?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'wanted':
case 'procurado':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/procurado?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info}).catch(e => {
reply("Error!!")  
})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
sendBtext(`${setting.numerodono}@s.whatsapp.net`,`✔️ Convite para entrar em um Grupo\n\nLink : ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `☂️`, [
{buttonId: `${prefix}entrar ${cnvt}`, buttonText: {displayText: `Aceitar`}, type: 1},
{buttonId: `${prefix}recusar ${sender}`, buttonText: {displayText: `Recusar`}, type: 1}], selo)
break

case 'recusar':
if(!SoDono) return reply("Só dono...")
conn.sendMessage(q, {text: `Olá Amigo(a), sinto muito dizer, mas seu convite foi recusado 🥺`})
break

case 'join': case 'entrar':
if (!SoDono) return reply('Somente proprietário!')
string = args.join(' ')
if (!string) return reply('Insira um link de convite ao lado do comando.')
if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
await conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if (String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if (String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'calunia': {
if(!budy.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} @marca-a-pessoa/Fala algo como fosse ele/Reação : nossaa..`)  
var [txt1, txt2, txt3 ] = q.split("/")
if(txt1.includes(prefix) || txt2.includes(prefix) || txt3.includes(prefix)) return reply("Oi novinha, não pode usar comandos nesse comando 😪")
 conn.sendMessage(from, {text: `${txt3}`},{quoted:{key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}}).catch(e => {
reply("Error!!")  
})
}
break

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (budy.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}


if (budy2.includes("pl video") || budy2.includes("video do pl")){
anu = await getBuffer('https://telegra.ph/file/0855427ea91c9c74eb290.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
}

if (budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal")
}

if (budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
adivinha = info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'WhatsApp web';
await conn.sendMessage(from, {text: adivinha}, {quoted: info})
}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

if (messagesC == "cornoooo"){
tujuh = fs.readFileSync('./audios/corno.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

/* 

NUNES NUNES NUNES NUNES NUNES NUNES
EDIÇÃO EDIÇÃO EDIÇÃO EDIÇÃO EDIÇÃO

*/

const messagesC_2 = pes.slice(0).trim().toLowerCase();

if (messagesC_2 == "gbwhatsapp" || messagesC_2 == "gb whatsapp"){
await conn.sendMessage(from, {text: `Baixe o GBWhatsApp atualizado aqui https://voubaixar.com/gbwhatsapp`}, {quoted : info})
return
} else if (messagesC_2 == "yowhatsapp" || messagesC_2 == "yo whatsapp"){
  await conn.sendMessage(from, {text: `Baixe o YOWhatsApp atualizado aqui https://voubaixar.com/yowhatsapp`}, {quoted : info})
  return
  } else if (messagesC_2 == "fouad whatsapp" || messagesC_2 == "whatsapp fouad"){
    await conn.sendMessage(from, {text: `Baixe o Aero WhatsApp atualizado aqui https://voubaixar.com/fouad-whatsapp`}, {quoted : info})
    return
    } else if (messagesC_2 == "aero whatsapp" || messagesC_2 == "whatsapp aero"){
      await conn.sendMessage(from, {text: `Baixe o Aero WhatsApp atualizado aqui https://voubaixar.com/aero-whatsapp`}, {quoted : info})
      return
      };

  /* 

NUNES NUNES NUNES NUNES NUNES NUNES
FINAL DO CODIGO EDITADO AQUI

*/


//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao) { //CREDITOS TIAGO
 if (palavra.includes(budy2)) {
 if (!isGroupAdmins) {
 conn.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : info})       
setTimeout( () => {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
conn.sendMessage(from, {text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : info}).catch(e => {
conn.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : info})
})       							
}, 0)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

 
//================(SIMIH-2)=================\\

if (isSimi2 && !isCmd && isGroup) {
if(isCmd || isUrl(budy2)) return
if(budy.length >= 500) return 
if(budy.includes("@55")) return
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)

if (sami) conn.sendMessage(from, {text: sami, thumbnail: blalogoofc}, {quoted: info});
}


 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}


//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if (isCmd) {
uptime = process.uptime()  
sendBtext(from, `
╭─────────
│
│|• Data: ${date} 
│|• Hora: ${hora2}
│|• CMD - Errado ou inexistente 
│|• Use: ${prefix}menu
│
╰─────────`, `Tempo ativo : ${kyun(uptime)}`,[{buttonId: `aleofc`, buttonText: {displayText: `Leia o menu com atenção..`}, type: 1}], info)  
}
//========================================\\

}
} catch (e) {
if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("at async groupMetadata")) {
console.log(color("Ignore esta mensagem..", "gray"))  
} else if(String(e).includes("Unknown error")) {
console.log(color("Error Desconhecido, ignore esta mensagem..", "gray"))
} else if(String(e).includes("Timed Out")) {
console.log(color("Error de Timed Out, apenas ignore esta mensagem..", "gray"))
} else {
console.log(e)
}
}

})

conn.ev.on('connection.update', (update) => {
require("./conect.js")(conn, update)
})

conn.ev.on('creds.update', saveState) 

return conn
 
}

startAle()

exports.startAle = startAle