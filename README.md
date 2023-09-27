# Encrypted Videoplayer with Hls

## Convert video
change video in converter.js: `ffmpeg('cube0001-0120.mp4', {timeout: 432000}).addOptions([`
run:
```shell
npm run convert
```
check output folder

## Play video
```shell
npm run serve
```
visit: http://localhost:3000

<hr />

In this repo you can see how you could implement it: https://github.com/philipphermes/stream-wave
