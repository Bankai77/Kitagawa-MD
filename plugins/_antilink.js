const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  const isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
      if (m.text.includes(linkThisGroup)) return !0
    }
    await conn.reply(
      m.chat,
      `⚠️ *Link Detected* ⚠️
            
I don't allow links from other damn groups 
Hey, *@${m.sender.split('@')[0]}*, *Don't send group links Baka!* 😒 ${isBotAdmin ? '' : '\n\nIM not an admin so I canT expel you :"v'}`,
      null,
      { mentions: [m.sender] }
    )
    if (isBotAdmin && chat.antiLink) {
      // Remove the participant from the group
      global.db.data.users[m.sender].warn += 1
      return this.sendMessage(m.chat, {
        delete: { remoteJid: m.chat, fromMe: false, id: messageId, participant: removeParticipant },
      })
    }
  }
  return !0
}
