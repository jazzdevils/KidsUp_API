exports.config = {
	serverType: 'https',
	http: {
		url: 'http://www.kidsup.net',
		port: 5057
	},
	https: {
		port: 5057,
		key: './cert/https_key.pem',
		cert: './cert/https_cert.pem',
		ca: './cert/https_bundle.pem'
	},
	db: {
		host: 'ip-172-31-26-249',
		database : 'KIDSLINK',
		user: 'dev4db',
		password: 'tlssksek',
		charset: 'utf8mb4'
	},
	mainImagePath: '/var/www/html/images/main/',
	workImagePath: '/var/www/html/images/work/',
	userContentMaxSize: 3 * 1000 * 1000,
	userZipMaxSize: 10 * 1000 * 1000,
	noticeImageZipName: 'noticeimage.zip',
	chgWidth: 400,
	thmWidth: 200,
	thmProfileWidth: 200,
	imageQuality: 75,
	regexpImageFileExt: /\.(gif|jpg|jpeg|tiff|png)$/i,
	regexpEmailAddress: /^([a-zA-Z0-9\.\_\-\/]+)@([a-zA-Z0-9\._\-]+)\.([a-zA-Z]+)$/,
	noticeDir: 'notice',
	eventDir: 'event',
	mamatalkDir: 'mamatalk',
	contactDir: 'contact',
	kidsDir: 'kids',
	orgDir: 'org',
	chgDir: 'chg',
	thmDir: 'thm',
	memberDir: 'member',
	thmTail: '_thm',
	dailymenuDir: 'dailymenu',
	splitDelimiter: '__N__',
	push: {
		android: {
			collapseKey: 'KidsUp',
			apiKey: 'AIzaSyBSJ4tY-uaHfPBnPTT5yuJlo9vVdCgXLdY',
			delayWhileIdle: false,
			timeToLive: 60 * 60 * 24 * 5,
			retryCnt: 4
		},
		ios:{
			/*cert: './cert/aps_development_cer.pem',
			key: './cert/aps_development_key.pem',
			gateway: 'gateway.sandbox.push.apple.com',*/
			cert: './cert/aps_production_cer.pem',
			key: './cert/aps_production_key.pem',
			gateway: 'gateway.push.apple.com',
			port: 2195,
			sound: 'default'
		},
		alertLength: 100
	},
	crypto: {
		key: '9986b4802ba336f6',
		iv: '12595b352fcca3e2'
	},
	email:{
		format_file: {
			issue_pw: '/var/www/html/web/public/issue_pw_plain.html',
			service_start: '/var/www/html/web/public/service_start_plain.html' 
		},
		from: 'support@kidsup.net',
		web_root: 'http://web.kidsup.net'
	}
}
