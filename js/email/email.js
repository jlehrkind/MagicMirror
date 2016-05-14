// A lot of this code is from the original feedToJson function that was included with this project
// The email code allows for multiple feeds to be used but a bunch of variables and such have literally been copied and pasted into this code and some help from here: http://jsfiddle.net/BDK46/
// The original version can be found here: http://airshp.com/2011/jquery-plugin-feed-to-json/
var email = {
	feed: config.email.feed || null,
	emailLocation: '.email',
	emailItems: [],
	seenEmailItem: [],
	_yqURL: 'https://query.yahooapis.com/v1/public/yql',
	_yqlQS: '?format=json&q=select%20*%20from%20rss%20where%20url%3D',
	_cacheBuster: Math.floor((new Date().getTime()) / 1200 / 1000),
	_failedAttempts: 0,
	fetchInterval: config.email.fetchInterval || 60000,
	updateInterval: config.email.interval || 10000,
	fadeInterval: 2000,
	intervalId: null,
	fetchEmailIntervalId: null
}

/**
 * Creates the query string that will be used to grab a converted RSS feed into a JSON object via Yahoo
 * @param  {string} feed The original location of the RSS feed
 * @return {string}      The new location of the RSS feed provided by Yahoo
 */
email.buildQueryString = function (feed) {

	return this._yqURL + this._yqlQS + '\'' + encodeURIComponent(feed) + '\'';

}

/**
 * Fetches the email for each feed provided in the config file
 */
email.fetchEmail = function () {

	// Reset the email feed
	this.emailItems = [];

	this.feed.forEach(function (_curr) {

		var _yqUrlString = this.buildQueryString(_curr);
		this.fetchFeed(_yqUrlString);

	}.bind(this));

}

/**
 * Runs a GET request to Yahoo's service
 * @param  {string} yqUrl The URL being used to grab the RSS feed (in JSON format)
 */
email.fetchFeed = function (yqUrl) {

	$.ajax({
		type: 'GET',
		datatype:'jsonp',
		url: yqUrl,
		success: function (data) {

			if (data.query.count > 0) {
				this.parseFeed(data.query.results.item);
			} else {
				console.error('No feed results for: ' + yqUrl);
			}

		}.bind(this),
		error: function () {
			// non-specific error message that should be updated
			console.error('No feed results for: ' + yqUrl);
		}
	});

}

/**
 * Parses each item in a single email feed
 * @param  {Object} data The email feed that was returned by Yahoo
 * @return {boolean}      Confirms that the feed was parsed correctly
 */
email.parseFeed = function (data) {

	var _rssItems = [];

	for (var i = 0, count = data.length; i < count; i++) {

		_rssItems.push(data[i].title);

	}

	this.emailItems = this.emailItems.concat(_rssItems);

	return true;

}

/**
 * Loops through each available and unseen email after it has been retrieved from Yahoo and shows it on the screen
 * When all email have been exhausted, the list resets and randomly chooses from the original set of items
 * @return {boolean} Confirms that there is a list of email items to loop through and that one has been shown on the screen
 */
email.showEmail = function () {

	// If all items have been seen, swap seen to unseen
	if (this.emailItems.length === 0 && this.seenEmailItem.length !== 0) {

		if (this._failedAttempts === 20) {
			console.error('Failed to show a email  20 times, stopping any attempts');
			return false;
		}

		this._failedAttempts++;

		setTimeout(function () {
			this.showEmail();
		}.bind(this), 3000);

	} else if (this.emailItems.length === 0 && this.seenEmailItem.length !== 0) {
		this.emailItems = this.seenEmailItem.splice(0);
	}

	var _location = Math.floor(Math.random() * this.emailItems.length);

	var _item = email.emailItems.splice(_location, 1)[0];

	this.seenEmailItem.push(_item);

	$(this.emailLocation).updateWithText(_item, this.fadeInterval);

	return true;

}

email.init = function () {

	if (this.feed === null || (this.feed instanceof Array === false && typeof this.feed !== 'string')) {
		return false;
	} else if (typeof this.feed === 'string') {
		this.feed = [this.feed];
	}

	this.fetchEmail();
	this.showEmail();

	this.fetchEmailIntervalId = setInterval(function () {
		this.fetchEmail()
	}.bind(this), this.fetchInterval)

	this.intervalId = setInterval(function () {
		this.showEmail();
	}.bind(this), this.updateInterval);

}
