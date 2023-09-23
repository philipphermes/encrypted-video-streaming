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

Source: https://medium.com/@HoseungJang/video-streaming-with-node-js-9401213a04e7
