<p align="center">
    <img src="https://i.imgur.com/epINEbt.png" height="220">
</p>
<p align="center">
    <img src="https://img.shields.io/badge/version-2.0.2-blue.svg">
</p>

# Setup
- Install node.js [here](https://nodejs.org/)
- Install typescript using `npm i -g typescript`
- Add your token to `config.json` file
- Add your OpenWeatherApi's app_id to `src/commands/weather.ts`
- Use one of these following commands:
    - `npm run build` to build bot and output files to `compile/`
    - `npm start` to start the bot (requires compiled files in `compile/`)
    - `npm test` to build and start the bot

# Changelog
Older versions [here](CHANGELOG.md)
## 2.0.3 (newest):
- Added `kick` command

# TODO
- Commands:
    - [x] giveaway
    - [x] kick
    - [ ] mute
    - [x] poll
    - [ ] eval
- [ ] Livestream & new Youtube video notifications
- [ ] Music
- [ ] Stat channels
- [ ] Webpanel
