var config = {
    lang: 'en',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'San Francisco, California',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '0b391a237aa54e4caf381d02384e2754'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: false,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'calendar-plus-o', 
			url: ''
		},
		{
			symbol: 'soccer-ball-o',
			url: '',
		},
		// {
			// symbol: 'mars',
			// url: "https://server/url/to/his.ics",
		// },
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'feedmix.novaclic.com/atom2rss.php?source=https%3A%2F%2Fwww.reddit.com%2Fr%2Fworldnews%2Ftop%2F'
    },
    email: {
        feed: 'feedmix.novaclic.com/atom2rss.php?source=https%3A%2F%2Fwww.reddit.com%2Fr%2Fworldnews%2Ftop%2F'
   }
}
