/**
 * Author: torcellite (Karthik Balakrishnan)
 *
 * About this script:
 * This script was written to visualize traffic patterns in the Bay Area.
 *
 * Default:
 * This script takes a screenshot of the hardcoded url every minute for one day.
 **/

var page = require('webpage').create();

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';

page.viewportSize = {
  width: 1280,
  height: 720
};

var get_screenshot = function(url, interval, period, interval_elapsed) {
  page.open(url);

  page.onLoadFinished = function(status) {
    // Call the function again in a minute to record the traffic at that point
    setTimeout(function() {
      // The screenshot is taken after the interval, to ensure it's completely
      // rendered
      img_name = 'screenshots/traffic-update-' + new Date().toString() + '.png';
      page.render(img_name);
      // Capture the next screenshot if there's more time left
      if (interval_elapsed < period) {
        get_screenshot(url, interval, period, interval_elapsed + interval)
      } else {
        phantom.exit();
      }
    }, interval);
  };

};

// Create directory for screenshots
var fs = require('fs');
if (fs.makeDirectory('screenshots')) {
  var URL = 'https://www.google.com/maps/@37.4604002,-122.079271,11z/data=!5m1!1e1';
  var PERIOD = 24 * 60 * 60 * 1000; // Day in milliseconds
  var INTERVAL = 60 * 1000; // Minute in milliseconds
  get_screenshot(URL, INTERVAL, PERIOD, 0);
} else {
  console.log('Could not create screenshots directory.');
  phantom.exit();
}
