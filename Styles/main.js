function ScriptCopy() {
  var Btn = document.getElementById("ScriptBtn");
  navigator.clipboard.writeText(`
--[[
    █████╗ ██╗███╗   ███╗██╗    ██╗ █████╗ ██████╗ ███████╗
   ██╔══██╗██║████╗ ████║██║    ██║██╔══██╗██╔══██╗██╔════╝
   ███████║██║██╔████╔██║██║ █╗ ██║███████║██████╔╝█████╗  
   ██╔══██║██║██║╚██╔╝██║██║███╗██║██╔══██║██╔══██╗██╔══╝  
   ██║  ██║██║██║ ╚═╝ ██║╚███╔███╔╝██║  ██║██║  ██║███████╗
   ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
   
   Supported Games
     [+ MAIN] DaHood, Untitled Hood, Hood Modded, Hood Customs
     [+ OTHERS] DaHood Rev Trainer, + more
]]--

loadstring(game:HttpGet("https://raw.githubusercontent.com/Triple-Zs/u/main/aimware"))()
  `);
  Btn.innerText = "Copied"
  setTimeout(() => { Btn.innerText = "Copy Script" }, 500)
}


