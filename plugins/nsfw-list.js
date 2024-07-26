let handler = async (m, { conn, usedPrefix }) => {
  if (!global.db.data.chats[m.chat].nsfw)
    throw `🚫 Don't be pervert Baka! This is not a NSFW enabled group 😒 \n\n enable it by \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 18) throw m.reply(`❎ Sorry darling, you need to be more mature to play with me 😇`)

  m.react(rwait)
  let nsfwCommands = [
    'xnxx',
    'xvid',
    'genshin',
    'swimsuit',
    'schoolswimsuit',
    'white',
    'barefoot',
    'touhou',
    'gamecg',
    'hololive',
    'uncensored',
    'sunglasses',
    'glasses',
    'weapon',
    'shirtlift',
    'chain',
    'fingering',
    'flatchest',
    'torncloth',
    'bondage',
    'demon',
    'wet',
    'pantypull',
    'headdress',
    'headphone',
    'tie',
    'anusview',
    'shorts',
    'stockings',
    'topless',
    'beach',
    'bunnygirl',
    'bunnyear',
    'idol',
    'vampire',
    'gun',
    'maid',
    'bra',
    'nobra',
    'bikini',
    'whitehair',
    'blonde',
    'pinkhair',
    'bed',
    'ponytail',
    'nude',
    'dress',
    'underwear',
    'foxgirl',
    'uniform',
    'skirt',
    'sex',
    'sex2',
    'sex3',
    'breast',
    'twintail',
    'spreadpussy',
    'tears',
    'seethrough',
    'breasthold',
    'drunk',
    'fateseries',
    'spreadlegs',
    'openshirt',
    'headband',
    'food',
    'close',
    'tree',
    'nipples',
    'erectnipples',
    'horns',
    'greenhair',
    'wolfgirl',
    'catgirl',
  ]

  let message = `
  🥵 *NSFW Commands Menu* 🥵
  
  Here is the list of available commands for NSFW content. Use the prefix "${usedPrefix}" followed by the command name:
  
  ${nsfwCommands.map(command => `${usedPrefix}${command}`).join('\n')}
  
  Note: These commands are only for those who are mature enough to play with me 🤭.
  `

  console.log('Sending message...')
  await conn.reply(m.chat, message, m)
  console.log('Message sent.')
}

handler.help = ['nsfw']
handler.tags = ['nsfw']
handler.command = ['nsfw']
handler.group = true
handler.register = true

export default handler
