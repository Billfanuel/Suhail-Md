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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_45_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBjN0VaUEc1NmpBN0t2WUxjVG1RdUp0dDFmbGxGckFpQTBkZm9FZklIZWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzAzMTgxOTg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMUY1RDAzMUMyRjVCNkNFOUE0QzQ1RkYwQUJCRjJBNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzMDMxMThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDMxODE5ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGMzAyN0NCNjIxNTZENUYwNENEREQ1RkEyRjAwNUEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMwMzExOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBdjdDb29jNVRMbWZaak95LWE4MUZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyYzhiNzEyLTg0OTEtNDNkOC05MmE4LTkxOTU1NTI3ZTc0MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMjIzLFxuICAgICAgNTIsXG4gICAgICAxMTEsXG4gICAgICAxODYsXG4gICAgICAxNjIsXG4gICAgICA5MyxcbiAgICAgIDk5LFxuICAgICAgMjEyLFxuICAgICAgMTkzLFxuICAgICAgODMsXG4gICAgICA4MixcbiAgICAgIDExMyxcbiAgICAgIDY5LFxuICAgICAgMTkwLFxuICAgICAgMTYxLFxuICAgICAgMjksXG4gICAgICAyOCxcbiAgICAgIDgzLFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDEzMyxcbiAgICAgIDIwOSxcbiAgICAgIDE4OSxcbiAgICAgIDI0NixcbiAgICAgIDExLFxuICAgICAgMTMsXG4gICAgICAxMjcsXG4gICAgICAxNTAsXG4gICAgICAxNjAsXG4gICAgICA5MixcbiAgICAgIDQzLFxuICAgICAgMjAxLFxuICAgICAgMjEwLFxuICAgICAgMjIsXG4gICAgICAzNSxcbiAgICAgIDYwLFxuICAgICAgMTIwLFxuICAgICAgMTI2LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc4R0tDR0MxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDMxODE5ODQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkthYmx1ZWVcIixcbiAgICBcImxpZFwiOiBcIjE1NjAwNjUzMzMwNDQxNjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0plTGt6WVF4b0RrdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiREU5eHNxREo1QzJQbUgrdlJXVFJ6MVhqS05FejlVblAwN1ZkZUJ2SFFRST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkNnBrdnNmaG95WWM4U0pTQjlCQ0FxOHlCMno5dE5GL2VoWFhFaklYQm15dllnUytkWU5tUW53dmxoeFRCMDJxcnFPVWo0eXZJUE5hcUV4TUU1SGVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYRzF0NzE5andoeFB5OWk3Q1JiSXJ3bkdxR3VOS1Z3VGRzRVBXNGZtK2Jmcy9udkNxM2tCL0lUT1lXbjd4Q2RCRXhYZ283Nkg3YWJLaGtuMVE3ckVDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDMxODE5ODQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzAzMTE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmFsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOYWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4Wk1nMy9jOHdCOUhkREZCa1RZS08vM0lRdDROczh3UWhHbC84RUlpTHJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMzU1ODkzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NDY3NjQ0NzAyXCJ9Igp9"  // PUT your SESSION_ID 


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
