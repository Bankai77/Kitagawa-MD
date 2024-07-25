let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://eu-central.storage.cloudconvert.com/tasks/2f2edee6-5a23-4d0d-b5e4-6640fb47d6e4/%E3%83%AD%E3%82%AF%E3%83%87%E3%83%8A%E3%82%B7_%E3%81%9F%E3%81%A0%E5%A3%B0%E4%B8%80%E3%81%A4_Rokudenashi_One_Voice_Official_Music_Video_5GUaMOpfmr8%20%281%29.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240725%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240725T172947Z&X-Amz-Expires=86400&X-Amz-Signature=aad5838cb596c6c5530cf1af80320190475d1e1a60c53da835ba6f6e173d1073&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22%3F%3F%3F%3F%3F_%3F%3F%3F%3F%3F_Rokudenashi_One_Voice_Official_Music_Video_5GUaMOpfmr8%20%281%29.mp3%22%3B%20filename%2A%3DUTF-8%27%27%25E3%2583%25AD%25E3%2582%25AF%25E3%2583%2587%25E3%2583%258A%25E3%2582%25B7_%25E3%2581%259F%25E3%2581%25A0%25E5%25A3%25B0%25E4%25B8%2580%25E3%2581%25A4_Rokudenashi_One_Voice_Official_Music_Video_5GUaMOpfmr8%2520%25281%2529.mp3&response-content-type=audio%2Fmpeg&x-id=GetObject'
  let url = 'https://github.com/Bankai77/oreo-bot'
  let murl = 'https://youtu.be/c9FefNeYruI?si=zFaHI2VivaBZAVQr'
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
        body: 'KITAGAWA MD',
        thumbnailUrl: img,
        sourceUrl: 'https://chat.whatsapp.com/LHfJmKoYVJp1gDX58P55CY',
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
