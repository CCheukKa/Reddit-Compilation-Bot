# Intro
This bot is aimed to produce brainless content automatically by scraping through feeds of social media (such as: Twitter, TikTok, Facebook, Reddit, etc.), and compile videos from those sites into compilation videos to be published onto YouTube.
The legality of this is questionable, and the lack of effort in the content-creation process using this is morally dubious. However, judging from the current stage of the internet and the abundance of (presumably) human-operated channels with similar content as this, I would dare say it is acceptable or even encouraged.

# Development progress
Barely started

# Feature queue
- Text-To-Speech
- Transitions in-between clips
- Multi-threading
- Automatic scraping

# Current capabilities
- Can login to Reddit

# Instructions
0. If you see files/configs not mentioned here, tinker with them as your own risk. They are either still in development or I simply haven't gotten around to adding instructions for them yet.
1. Install `nodeJS` onto your computer.
2. Run `npm install` to automatically install all dependencies.
<!-- 3. Tweak `/config/config.js` as you need, though not recommended -->
3. Add your login credentials to `/config/credentials.js`.
4. Run `node .`

# Note
- Cookies will be stored to hasten login processes. If there are problems related to logins, delete `./data/cookies.json` entirely. It should regenerate in the next session.