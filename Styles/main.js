function ScriptCopy() {
  var Btn = document.getElementById("ScriptBtn");
  navigator.clipboard.writeText(`
--[[
    ██████╗ ██╗     ██╗   ██╗████████╗ ██████╗ 
    ██╔══██╗██║     ██║   ██║╚══██╔══╝██╔═══██╗
    ██████╔╝██║     ██║   ██║   ██║   ██║   ██║
    ██╔═══╝ ██║     ██║   ██║   ██║   ██║   ██║
    ██║     ███████╗╚██████╔╝   ██║   ╚██████╔╝
    ╚═╝     ╚══════╝ ╚═════╝    ╚═╝    ╚═════╝ 
                                           
    Supported Games
      [+ MAIN] DaHood, Untitled Hood, Hood Modded, Hood Customs
      [+ OTHERS] DaHood Rev Trainer, + more
]]--

loadstring(game:HttpGet("https://encrypts.lol/u/source.lua"))()
  `);
  Btn.innerText = "Copied"
  setTimeout(() => { Btn.innerText = "Copy Script" }, 500)
}


