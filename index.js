const Discord = require('discord-simple-api');

class DiscordReactionManager {
  constructor(token) {
    this.discord = new Discord(token);
  }

  async addReaction(channelId, messageId, emoji) {
    try {
      await this.discord.addReaction(channelId, messageId, emoji);
      console.log(`Added reaction ${emoji} to message ${messageId}`);
    } catch (error) {
      console.error('Error adding reaction:', error);
    }
  }

  async removeReaction(channelId, messageId, emoji) {
    try {
      await this.discord.removeReaction(channelId, messageId, emoji);
      console.log(`Removed reaction ${emoji} from message ${messageId}`);
    } catch (error) {
      console.error('Error removing reaction:', error);
    }
  }
}

module.exports = DiscordReactionManager;
