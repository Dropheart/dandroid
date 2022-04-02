module.exports = (client, member) => {
    if (member.user.username.toLowerCase().includes('h0nde') || member.user.username.toLowerCase().includes('h0nda')) member.ban({ days: 7, reason: 'Automatic ban for h0nde spambot accounts.' });
    if (member.user.username.toLowerCase().includes('moderator') || member.user.username.toLowerCase().includes('hypesquad') || member.user.username.toLowerCase().includes('discord')) member.ban({ reason: 'Common Scam Account Name' })
}