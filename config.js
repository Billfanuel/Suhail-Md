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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_33_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDc2LFxuICAgICAgICAzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICA1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVaMzh1WGNOb0laVUFiRVJxVHRZN3ZjRVR5WkJodEw3RzNNNE5HRHlJOFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk5MTIyNDY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRUI4Q0Q0MzkzN0VFOTkyN0ZDM0ZDQ0UwMTI0REYxNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzMDIzOTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYkRDMXJ5dU9TTTZPVHByRkUwOGNLUVwiLFxuICBcInBob25lSWRcIjogXCJhMTA1ODM5OC02N2I2LTRiNGEtYWVkYi05OThmNzY0OTA0MDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgOTYsXG4gICAgICAyNDAsXG4gICAgICA5MSxcbiAgICAgIDIyOCxcbiAgICAgIDIxMyxcbiAgICAgIDQ0LFxuICAgICAgMTQyLFxuICAgICAgMTE0LFxuICAgICAgMjEyLFxuICAgICAgMjM3LFxuICAgICAgMjE3LFxuICAgICAgMTA2LFxuICAgICAgMjMzLFxuICAgICAgMTY0LFxuICAgICAgMTc1LFxuICAgICAgODUsXG4gICAgICAxODYsXG4gICAgICAxMDAsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDEyNSxcbiAgICAgIDExOCxcbiAgICAgIDEwNixcbiAgICAgIDE3NSxcbiAgICAgIDEyNCxcbiAgICAgIDI0NyxcbiAgICAgIDEyNSxcbiAgICAgIDgwLFxuICAgICAgNjksXG4gICAgICAyOCxcbiAgICAgIDc2LFxuICAgICAgMTg5LFxuICAgICAgNTUsXG4gICAgICA5OSxcbiAgICAgIDIzMixcbiAgICAgIDIyMixcbiAgICAgIDIwNSxcbiAgICAgIDEwOSxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRQMTJNSlNUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTkxMjI0Njc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NjczNTk4MTkwMzkxNjoyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcjYyTW9CRVBQNjQ3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldoMitNeVpnMkorb0ZiWElPNDNML0NBZ203dzZ0RWttUTdiSFAyWXZrM2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibUZIdzVJM0NNM3BMZURoQjZmWDUvYVhESWFnN0diRGxwZWhQZlpCbmt0U0h2UW5iMDkzY2Y3dkZ2WU4vL20vK2VMbTBpSlpoVElmOHE2ZXExSjcxQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDJEcEFSMGxwdWwyUFBFTFJLb3dsSWdxNFFPejlwVXU1NmVTSWpaSXprRUVBejVUZzAwRG9vZHM3RnVlWTVKcGFRa2ROZ2pOcGJWMDNlYTlTTWVxQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk5MTIyNDY3OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzAyMzkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRk9QXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGT1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKNk9UeS9YaERaeXN3MUFycUNZdXVBRGlpOGJBMmcwTHdPNEJ6Wm5NWmEwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyNTA4MjE5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
