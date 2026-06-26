module.exports = {
    name: 'alive',
    aliases: ['alive'],
    execute: async (sock, mek, from, args) => {
        // ඔබේ බොට් ලෝගෝ එකේ URL එක මෙතැනට ඇතුලත් කරන්න
        const botLogoUrl = "https://i.ibb.co/271whBpp/c9d0b775835a.jpg"; 
        
        const aliveMsg = `👋 *HASI MDIS ALIVE NOW*

*OWNER* - chamod
*VERSION* - 1.0.0
*STATUS* - Online ✅

💬 සියලුම විධානයන් බැලීමට .menu ලෙස ටයිප් කරන්න!`;

        await sock.sendMessage(from, { 
            image: { url: botLogoUrl }, 
            caption: aliveMsg 
        }, { quoted: mek });
    }
};
