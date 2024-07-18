const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="billkip20@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaaTBWh2phHOcjWOi92N";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaaTBWh2phHOcjWOi92N" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "" 


global.devs = "254718351815" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254718351815";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254718351815,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_33_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDk2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmFzd3FFeXhFamgyUk9vRlJ1WUFyM01yN09DVWNyZEo3R0o3dms4akJObz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MTQxMDA3NDkzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0MTEzRTY4MTlDRkY1MUJGQkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzAyMzk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZYQW1GclE3U28tdFprbmtZWmJPWkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzU3YjNiMTctNTk0MC00YmMzLWExODktMTEyM2RhMThkOWNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDIxOCxcbiAgICAgIDE5MixcbiAgICAgIDEwOSxcbiAgICAgIDEwNyxcbiAgICAgIDIwNCxcbiAgICAgIDE2LFxuICAgICAgMTcsXG4gICAgICAxODQsXG4gICAgICAyNDIsXG4gICAgICAxMTcsXG4gICAgICAxMTksXG4gICAgICAxNixcbiAgICAgIDY1LFxuICAgICAgMTk5LFxuICAgICAgMTc0LFxuICAgICAgMjExLFxuICAgICAgODUsXG4gICAgICAyMzYsXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgNzUsXG4gICAgICA5OCxcbiAgICAgIDU3LFxuICAgICAgMTY0LFxuICAgICAgNjAsXG4gICAgICAxMSxcbiAgICAgIDcwLFxuICAgICAgNTIsXG4gICAgICAyMTcsXG4gICAgICAyMTQsXG4gICAgICAxNTEsXG4gICAgICAxMTAsXG4gICAgICAyMTgsXG4gICAgICAxMSxcbiAgICAgIDIxNSxcbiAgICAgIDc1LFxuICAgICAgNDksXG4gICAgICAxMTcsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUUNEVjNCQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjE0MTAwNzQ5MzE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjk4ODA2NDExNzE2MTQ6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJLZXZpbmNoaXlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObWFsSUFQRVBQNjQ3UUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBlMktmUmdsVndYYXBtQm50OUo1MGVRYXdDTFd4MmkwZ2dFR2tGd05Ua289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMHBHcDNLSXhuZXVjYnpEZ053Nm5KdnhvRkZxWGZra3RKZlpyRUZJY3VDdWw4b21zVWVBMHNQcU5KY1B3TXZ4NDdmMjJHS2FwNEdGT2x2WlZPRmdWanc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ1Q2ZHMxc0VTeFpGbFFmaTNvZjlxaUZMRnB1VU14ejl3NC8yZTh0OGtxYmxiekxtNE1PUklNYWVNcjZZNHhObXNBM2FVQTZhMXNMUjl6V2pLRFVLRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjE0MTAwNzQ5MzE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMDIzOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBN2lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE3aS5qc29uIjogIntcImtleURhdGFcIjpcIlEwM0J2TVBnWHVKOCs2R2xMR1lteUFmWWdLMnNlQ1lMMmRNQmVaTFpNVVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDAyNjg2MjkzNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzIwNDcwMjY5MDkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "keen",
  packname: process.env.PACK_NAME || "keensly",
  botname : process.env.BOT_NAME  || "keensly",
  ownername:process.env.OWNER_NAME|| "keensly",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "KEENSLY"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
