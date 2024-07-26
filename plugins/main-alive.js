let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://eu-central.storage.cloudconvert.com/tasks/34a27685-a551-4581-b04e-35274f479ab8/TV%E3%82%A2%E3%83%8B%E3%83%A1_%E5%91%AA%E8%A1%93%E5%BB%BB%E6%88%A6_%E7%AC%AC2%E6%9C%9F_%E6%87%90%E7%8E%89_%E7%8E%89%E6%8A%98_%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E3%83%A0%E3%83%BC%E3%83%93%E3%83%BC_OP%E3%83%86%E3%83%BC%E3%83%9E_%E3%82%AD%E3%82%BF%E3%83%8B%E3%82%BF%E3%83%84%E3%83%A4_%E9%9D%92%E3%81%AE%E3%81%99%E3%81%BF%E3%81%8B_%E6%AF%8E_gcgKUcJKxIs.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240726%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240726T064118Z&X-Amz-Expires=86400&X-Amz-Signature=9bc28327c5bc9089ef68373f81a0f0f36161cdf20d683fe315c3999bbb0efe91&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22TV%3F%3F%3F_%3F%3F%3F%3F_%3F2%3F_%3F%3F_%3F%3F_%3F%3F%3F%3F%3F%3F%3FOP%3F%3F%3F%3F_OP%3F%3F%3F_%3F%3F%3F%3F%3F%3F_%3F%3F%3F%3F%3F_%3F_gcgKUcJKxIs.mp3%22%3B%20filename%2A%3DUTF-8%27%27TV%25E3%2582%25A2%25E3%2583%258B%25E3%2583%25A1_%25E5%2591%25AA%25E8%25A1%2593%25E5%25BB%25BB%25E6%2588%25A6_%25E7%25AC%25AC2%25E6%259C%259F_%25E6%2587%2590%25E7%258E%2589_%25E7%258E%2589%25E6%258A%2598_%25E3%2583%258E%25E3%2583%25B3%25E3%2582%25AF%25E3%2583%25AC%25E3%2582%25B8%25E3%2583%2583%25E3%2583%2588OP%25E3%2583%25A0%25E3%2583%25BC%25E3%2583%2593%25E3%2583%25BC_OP%25E3%2583%2586%25E3%2583%25BC%25E3%2583%259E_%25E3%2582%25AD%25E3%2582%25BF%25E3%2583%258B%25E3%2582%25BF%25E3%2583%2584%25E3%2583%25A4_%25E9%259D%2592%25E3%2581%25AE%25E3%2581%2599%25E3%2581%25BF%25E3%2581%258B_%25E6%25AF%258E_gcgKUcJKxIs.mp3&response-content-type=audio%2Fmpeg&x-id=GetObject'
  let url = 'https://github.com/Bankai77/oreo-bot'
  let murl = 'https://youtu.be/Z8lRhKH6ClE?si=U5oEtIG2vD1PWNZt'
  let img = 'https://images3.alphacoders.com/120/thumb-1920-1203462.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'shizo',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'I AM ALIVE',
        body: 'ᴋɪᴛᴀɢᴀᴡᴀ ᴛʜᴇ ᴀɴɪᴍᴇ ʙᴏᴛ',
        thumbnailUrl: img,
        sourceUrl: 'https://chat.whatsapp.com/Hz5C06OZVkhLQ2vA3kp6GX',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
