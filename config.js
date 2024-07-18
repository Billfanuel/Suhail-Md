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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_16_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNixcbiAgICAgICAgNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxMUFJN1JWSjJYOFo4Z1crYkRwV0xidmNMc2hIcGRaTU96WjVtajc2OXE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5QVdBbEJ1clN6YW5RZi10WEtra1h3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJhYmExZDE5LTBmZDktNDJiNC04NWZiLWZhMmFmNWE2ZDQ4MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAyMjgsXG4gICAgICAxMTgsXG4gICAgICAxOTksXG4gICAgICAxODMsXG4gICAgICAyMTIsXG4gICAgICAxNDEsXG4gICAgICAxMTYsXG4gICAgICAxOTQsXG4gICAgICA1NixcbiAgICAgIDEyNSxcbiAgICAgIDE3OSxcbiAgICAgIDMsXG4gICAgICAxMzIsXG4gICAgICAxNDIsXG4gICAgICAyOSxcbiAgICAgIDIyMCxcbiAgICAgIDE5MSxcbiAgICAgIDk0LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMjA2LFxuICAgICAgMTIyLFxuICAgICAgOTMsXG4gICAgICA4MyxcbiAgICAgIDk4LFxuICAgICAgMTk5LFxuICAgICAgMTA5LFxuICAgICAgMTQ4LFxuICAgICAgNTAsXG4gICAgICA0MSxcbiAgICAgIDIyNSxcbiAgICAgIDg0LFxuICAgICAgMTY2LFxuICAgICAgMTAzLFxuICAgICAgMTkzLFxuICAgICAgNDQsXG4gICAgICAxNjUsXG4gICAgICAxMjcsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0hDU1BUTFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDEwMjMwODk5NTo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NDczMDA4OTY3ODU4OjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05iSHY3WUZFTU83ejdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMlovcWVKUDYxVlRZUVowWXpkRkdFakUrRkMxRG16alJBaGMrblpjYW9XST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVMHlWdTVwQTJBN2kyeEszZWIwa0FhSUgrL1hrMHpJem1Ya1A4a25DMDdtTXU4NmZLUThxaXRid3pUTStWR3IrQklpSThBcGZyRnVaalZ1TVlQUEZCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRTWRUUy95cGRxWWF2M0lpOWpkWjBubUduTXI3RTQzWm5YUEVSRm5CRUI1UVJrczY4UnRYeWxlKzRIYU1DREVTZ095ZTVFOTFNVC9GN05NZitQVnNndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDIzMDg5OTU6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTY2NTk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjBIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMEguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3SXpDM0EzbEx0ZlR5UnJwUXE0bmhrR0cxenJVNEhhcXgzbWJ5Z0lRcXhzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTY0NjQ4NTMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzE0MzQwNTMxMDkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "~",
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
