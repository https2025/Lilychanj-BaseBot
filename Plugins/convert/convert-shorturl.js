const axios = require('axios');

module.exports = {
    type: 'convert',
    command: ['shorten', 'shortlink', 'shorturl', 'shortenlink'],
    operate: async (context) => {
        const { lilychan, m, q, prefix, command, replyURL } = context;

        if (!q) {
            await replyURL(`Add input, Example: *${prefix + command} https://example.com*`);
            return;
        }

        try {
            const { data: tinyUrlShortUrl } = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`);
            await replyURL(`Shortened Succes\n\n*TinyURL: ${tinyUrlShortUrl}*`);
        } catch (error) {
            console.error('Error shortening URL:', error);
            await replyURL('Failed to shorten URL. Please try again later.');
        }
    }
};