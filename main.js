const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');
const discord = new Discord.Client();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

if (!DISCORD_TOKEN) {
  throw new Error('DISCORD_TOKEN is required');
}

discord.login(DISCORD_TOKEN);

discord.on('ready', () => {
  console.log(`🤖 Logged in as ${discord.user.tag}!`);
});

discord.on('message', (msg) => {
  try {
    if (msg.author.id !== 555955826880413696) {
      return;
    }

    if (msg.content.includes('you are in the jail! type rpg jail')) {
      const username = msg.content.split(',')[0];

      msg.channel.

      msg.channel.send(`
Boss ${username},
Ini barang boleh runding.
You help me, I help you.
`);
    }

    if (msg.content.includes('is training in the forest!')) {
      const chunks = msg.content.split('\n');

      const question = chunks[1];
      const targetItem = chunks[2].match(':(.*):')[0];

      const matchingQuestion = new RegExp(targetItem, 'g');

      const count = question.match(matchingQuestion).length || 0;

      msg.channel.send(`Psssst! The answer is **${count}**`);
    }

    if (msg.content.includes('is training in the river')) {
      const chunks = msg.content.split('\n');
      const fish = chunks[1].match(':(.*):')[1];

      msg.channel.send(`Psssst! It looks like a/an **${fish.toUpperCase()}**`);
    }

    if (msg.content.includes('is training in the... casino')) {
      const chunks = msg.content.split('\n');

      if (chunks[1].includes(':coin:')) {
        msg.channel.send(`Psssst! It's a **COIN**`);
      } else if (chunks[1].includes('💎')) {
        msg.channel.send(`Psssst! It's a **DIAMOND**`);
      } else if (chunks[1].includes('🎲')) {
        msg.channel.send(`Psssst! It's a **DICE**`);
      } else if (chunks[1].includes('🎁')) {
        msg.channel.send(`Psssst! It's a **GIFT**`);
      } else if (chunks[1].includes('🍀')) {
        msg.channel.send(`Psssst! It's a **FOUR LEAF CLOVER**`);
      } else {
        msg.channel.send(`Even I, don't know what the **FUCK** is that.`);
        msg.channel.send(`Debug: ${msg.content} ${chunks[1]}`)
      }
    }
  } catch (e) {
    msg.channel
      .send(`My developer is a noob and so am I. Unfortunately I can't be much of use to you right now. \n
    Error details: ${e}`);
    console.error(e);
  }
});
