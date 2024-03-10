# Discord Reaction Manager

A simple package for managing reactions on Discord messages.

## Installation

You can install the package using npm:

```
npm install discord-reaction-manager
```

## Usage

First, import the `DiscordReactionManager` class and create an instance with your Discord bot token:

```javascript
const DiscordReactionManager = require('discord-reaction-manager');

const token = 'YOUR_BOT_TOKEN';
const reactionManager = new DiscordReactionManager(token);
```

### Adding a Reaction

To add a reaction to a message, use the `addReaction` method:

```javascript
reactionManager
  .addReaction('CHANNEL_ID', 'MESSAGE_ID', '👍')
  .then(() => console.log('Reaction added!'))
  .catch((error) => console.error('Error adding reaction:', error));
```

Replace `'CHANNEL_ID'` with the ID of the channel where the message is located, `'MESSAGE_ID'` with the ID of the message you want to add the reaction to, and `'👍'` with the emoji you want to use as a reaction.

### Removing a Reaction

To remove a reaction from a message, use the `removeReaction` method:

```javascript
reactionManager
  .removeReaction('CHANNEL_ID', 'MESSAGE_ID', '👍')
  .then(() => console.log('Reaction removed!'))
  .catch((error) => console.error('Error removing reaction:', error));
```

Replace `'CHANNEL_ID'` with the ID of the channel where the message is located, `'MESSAGE_ID'` with the ID of the message you want to remove the reaction from, and `'👍'` with the emoji reaction you want to remove.

## Dependencies

This package depends on the `discord-simple-api` package, which provides a simple interface for interacting with the Discord API.
