#Traffic Heat Map Generator

This is an ad-hoc script written to generate the traffic heat map for a given Google Map snippet.

### Directions
1. Open maps.google.com and focus on the area that you want to visualize traffic in over a day. Tinker with the zoom levels and enable traffic updates on the map.
2. Copy this URL and paste it into the `capture.js` script.
3. Execute the script using PhantomJS like so `phantomjs capture.js`
4. Wait for a day for the script to generate 1440 (+1) screenshots. The screenshots have timestamps in the filenames itself.
5. You can use ImageMagick to add a date-time caption and FFMPEG to stitch the images into a video.(I'll put up a cleaned up version of these scripts if I get enough requests.)

### Example
##### Traffic in the South Bay from 9:00 am to 10:00 am on 12/28/2017
[![ScreenShot](http://img.youtube.com/vi/xDRhj6jdVOU/maxresdefault.jpg)](https://www.youtube.com/watch?v=xDRhj6jdVOU)
