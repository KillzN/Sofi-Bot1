const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `*𝐋𝐚 𝐪𝐮𝐞 𝐩𝐮𝐞𝐝𝐞 𝐩𝐮𝐞𝐝𝐞 𝐲 𝐜𝐨𝐦𝐨 𝐭𝐮 𝐧𝐨 𝐩𝐮𝐝𝐢𝐬𝐭𝐞 𝐭𝐞 𝐭𝐨𝐜𝐚 𝐬𝐨𝐩𝐨𝐫𝐭𝐚𝐫🫦🔥*\n\n ${oi}\n\n➥ _*LISTA DE BOMBONES 🍭:*_\n`;
  for (const mem of participants) {
    teks += `🌺 ⇝ @${mem.id.split('@')[0]}\n`;
    }
  teks += `└ *Sᴏғɪ-Bᴏᴛ ⇝ @by.may*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;