/************************************************
 * #### visitor-parser.js v0.0.3 ####
 * Coded by Ican Bachors 2016.
 * http://ibacor.com/labs/visitor-parser-js
 * Updates will be posted to this site.
 ************************************************/

var visitorParser = function(config, callback) {

    /********************* Config **********************/
    callback = (callback == undefined ? config : callback);
    var defaultconfig = {
        setUa: navigator.userAgent, // set user-agent string
        getOpt: false, // get all options result of regex
        geoAPI: 'https://freegeoip.app/json/' // set url ip geo location apis
    };
    config = (typeof config === 'object' ? config : {});
    config.setUa = (config.setUa == undefined ? defaultconfig.setUa : config.setUa);
    config.getOpt = (config.getOpt == undefined ? defaultconfig.getOpt : config.getOpt);
    config.geoAPI = (config.geoAPI == undefined ? defaultconfig.geoAPI : config.geoAPI);

    /********************* Variable *********************/
    // object regex {match: value}
    var regex = {
        platforms: {
            'windows nt 10.0': {
                'name': 'Windows',
                'version': '10'
            },
            'windows nt 6.3': {
                'name': 'Windows',
                'version': '8.1'
            },
            'windows nt 6.2': {
                'name': 'Windows',
                'version': '8'
            },
            'windows nt 6.1': {
                'name': 'Windows',
                'version': '7'
            },
            'windows nt 6.0': {
                'name': 'Windows',
                'version': 'Vista'
            },
            'windows nt 5.2': {
                'name': 'Windows',
                'version': '2003'
            },
            'windows nt 5.1': {
                'name': 'Windows',
                'version': 'XP'
            },
            'windows nt 5.0': {
                'name': 'Windows',
                'version': '2000'
            },
            'windows nt 4.0': {
                'name': 'Windows',
                'version': 'NT 4.0'
            },
            'winnt4.0': {
                'name': 'Windows',
                'version': 'NT 4.0'
            },
            'winnt 4.0': {
                'name': 'Windows',
                'version': 'NT'
            },
            'winnt': {
                'name': 'Windows',
                'version': 'NT'
            },
            'windows 98': {
                'name': 'Windows',
                'version': '98'
            },
            'win98': {
                'name': 'Windows',
                'version': '98'
            },
            'windows 95': {
                'name': 'Windows',
                'version': '95'
            },
            'win95': {
                'name': 'Windows',
                'version': '95'
            },
            'windows phone': {
                'name': 'Windows',
                'version': 'Phone'
            },
            'windows ce': {
                'name': 'Windows',
                'version': 'CE'
            },
            'windows m': {
                'name': 'Windows',
                'version': 'Mobile'
            },
            'android': 'Android',
            'blackberry': 'BlackBerry',
            'iphone.*OS': 'iOS',
            'ipad.*OS': 'iOS',
            'ipod.*OS': 'iOS',
            'os x': 'Mac OS X',
            'ppc mac': 'Power PC Mac',
            'freebsd': 'FreeBSD',
            'ppc': 'Macintosh',
            'Ubuntu': 'Ubuntu',
            'Mint': 'Mint',
            'debian': 'Debian',
            'sunos': 'Sun Solaris',
            'beos': 'BeOS',
            'apachebench': 'ApacheBench',
            'aix': 'AIX',
            'irix': 'Irix',
            'osf': 'DEC OSF',
            'hp-ux': 'HP-UX',
            'netbsd': 'NetBSD',
            'bsdi': 'BSDi',
            'openbsd': 'OpenBSD',
            'symbian': 'Symbian OS',
            'SymbianOS': 'Symbian OS',
            'series60': 'Symbian S60',
            'SymbOS': 'Symbian OS',
            'gnu': 'GNU/Linux',
            'unix': 'Unknown Unix OS',
            'linux': 'Linux'
        },
        browsers: {
            'obigo': 'Obigo',
            'netfront': 'Netfront Browser',
            'openwave': 'Openwave Browser',
            'mobilexplorer': 'Mobile Explorer',
            'operamini': 'Opera Mini',
            'opera mini': 'Opera Mini',
            'opera mobi': 'Opera Mobile',
            'fennec': 'Firefox Mobile',
            'xiino': 'Xiino',
            'OPR': 'Opera',
            'Flock': 'Flock',
            'Edge': 'Spartan',
            'Chrome': 'Chrome',
            'CrMo': 'Chrome',
            'Chromium': 'Chromium',
            'silk': 'Silk',
            'android.* version': 'Android Browser',
            'Opera.*?Version': 'Opera',
            'Opera': 'Opera',
            'Skyfire': 'Skyfire',
            'SlimBrowser': 'SlimBrowser',
            'UCBrowser': 'UC Browser',
            'Tizen Browser': 'Tizen',
            'RockMelt': 'RockMelt',
            'Polaris': 'Polaris',
            'MSIE': 'Internet Explorer',
            'Internet Explorer': 'Internet Explorer',
            'Trident.* rv': 'Internet Explorer',
            'Shiira': 'Shiira',
            'Firefox': 'Firefox',
            'Chimera': 'Chimera',
            'Phoenix': 'Phoenix',
            'Firebird': 'Firebird',
            'Camino': 'Camino',
            'Netscape': 'Netscape',
            'OmniWeb': 'OmniWeb',
            'Konqueror': 'Konqueror',
            'icab': 'iCab',
            'Lynx': 'Lynx',
            'Links': 'Links',
            'hotjava': 'HotJava',
            'amaya': 'Amaya',
            'IBrowse': 'IBrowse',
            'Maxthon': 'Maxthon',
            'Safari': 'Safari',
            'Mozilla': 'Mozilla'
        },
        engines: {
            'presto/': 'Presto',
            'applewebKit/': 'AppleWebKit',
            'trident/': 'Trident',
            'netfront/': 'Netfront',
            'netsurf/': 'Netsurf',
            'amaya/': 'Amaya',
            'lynx/': 'Lynx',
            'w3m/': 'W3m',
            'khtml/': 'Khtml',
            'tasman/': 'Tasman',
            'links/': 'Links',
            'icab/': 'Icab',
            'gecko/': 'Gecko'
        },
        processors: {
            'x(?:86|64|32)': 'x',
            'amd(?:86|64|32)': 'x',
            'i6(?:86|64|32)': 'x',
            'ia(?:86|64|32)': 'x',
            'sun4(?:86|64|32)': 'x',
            'wow(?:86|64|32)': 'x',
            'win(?:86|64|32)': 'x',
            'ppc(?:86|64|32)': 'x',
            'powerpc(?:86|64|32)': 'x',
            'avr(?:86|64|32)': 'x',
            'arm(?:86|64|32)': 'x',
            'irix(?:86|64|32)': 'x',
            'mips(?:86|64|32)': 'x',
            'sparc(?:86|64|32)': 'x'
        },
        mobiles: {
            'microsoft': 'Microsoft',
            'xbox': 'Microsoft',
            'kin.': 'Microsoft',
            'Galaxy nexus': 'Samsung Galaxy Nexus',
            'motorola': 'Motorola',
            'geeksphone': 'GeeksPhone',
            'huawei': 'Huawei',
            'lenovo': 'Lenovo',
            'nexian': 'Nexian',
            'sprint': {
                'name': 'Sprint',
                'version': 'Phones'
            },
            'Ouya': 'Ouya',
            'asus': 'Asus',
            'nokia': 'Nokia',
            'maemo': 'Nokia',
            'palm': 'Palm',
            'elaine': 'Palm',
            'iphone': {
                'name': 'Apple',
                'version': 'iPhone'
            },
            'ipad': 'iPad',
            'ipod': {
                'name': 'Apple',
                'version': 'iPod Touch'
            },
            'sony': 'Sony Ericsson',
            'ericsson': 'Sony Ericsson',
            'blackberry': 'BlackBerry',
            'cocoon': {
                'name': 'O2',
                'version': 'Cocoon'
            },
            'blazer': 'Treo',
            'lg': 'LG',
            'amoi': 'Amoi',
            'xda': 'XDA',
            'mda': 'MDA',
            'vario': 'Vario',
            'htc': 'HTC',
            'GT-': 'Samsung Galaxy',
            'Galaxy': 'Samsung Galaxy',
            'samsung': 'Samsung',
            'sharp': 'Sharp',
            'dtv': 'Sharp',
            'sie-': 'Siemens',
            'alcatel': 'Alcatel',
            'hbbtv': 'HbbTV',
            'benq': 'BenQ',
            'ipaq': {
                'name': 'O2',
                'version': 'iPaq'
            },
            'mot-': 'Motorola',
            'milestone': 'Motorola',
            'playstation portable': {
                'name': 'PlayStation',
                'version': 'Portable'
            },
            'playstation 3': {
                'name': 'PlayStation',
                'version': '3'
            },
            'playstation vita': {
                'name': 'PlayStation',
                'version': 'Vita'
            },
            'hiptop': {
                'name': 'Danger',
                'version': 'Hiptop'
            },
            'nec-': 'NEC',
            'panasonic': 'Panasonic',
            'philips': 'Philips',
            'sagem': 'Sagem',
            'sanyo': 'Sanyo',
            'spv': 'SPV',
            'zte': 'ZTE',
            'sendo': 'Sendo',
            'nintendo dsi': {
                'name': 'Nintendo',
                'version': 'DSi'
            },
            'nintendo ds': {
                'name': 'Nintendo',
                'version': 'DS'
            },
            'nintendo 3ds': {
                'name': 'Nintendo',
                'version': '3DS'
            },
            'wii': {
                'name': 'Nintendo',
                'version': 'Wii'
            },
            'open web': 'Open Web',
            'openweb': 'OpenWeb',
            'pebble': 'Pebble',
            'jolla': 'Jolla',
            'ideatab': 'Lenovo',
            'dell': 'Dell',
            'hp': 'HP',
            'Nook': 'Nook',
            'Kindle': 'Kindle',
            'Archos': 'Archos',
            'Apple ': 'Apple',
            'playbook': 'Playbook'
        },
        robots: {
            'googlebot': 'Googlebot',
            'msnbot': 'MSNBot',
            'baiduspider': 'Baiduspider',
            'bingbot': 'Bing',
            'slurp': 'Inktomi Slurp',
            'yahoo': 'Yahoo',
            'askjeeves': 'AskJeeves',
            'fastcrawler': 'FastCrawler',
            'infoseek': 'InfoSeek Robot 1.0',
            'lycos': 'Lycos',
            'yandex': 'YandexBot',
            'mediapartners-google': 'MediaPartners Google',
            'CRAZYWEBCRAWLER': 'Crazy Webcrawler',
            'adsbot-google': 'AdsBot Google',
            'feedfetcher-google': 'Feedfetcher Google',
            'curious george': 'Curious George'
        }
    };

    // data to output
    var platform = preg_match(regex.platforms, true), // get platform info. regex and return array object
        browser = preg_match(regex.browsers, true), // get browser info. regex and return array object
        engine = preg_match(regex.engines, true), // get engine info. regex and return array object
        processor = preg_match(regex.processors), // get processor info. regex and return array object
        mobile = preg_match(regex.mobiles), // get mobile info. regex and return array object
        robot = preg_match(regex.robots), // get robot info. regex and return array object
        resolution = { // get resolution info. object width & height
            'width': window.innerWidth || document.body.clientWidth,
            'height': window.innerHeight || document.body.clientHeight
        },
        date = new Date(), // get date
        referring = uri(); // get url referrer info. string
	
	// Get json geo location
	var xhttp = new XMLHttpRequest();
	xhttp.onload = function () {
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				callback(getInfo(xhttp.responseText));
			} else {
				callback(getInfo(false));
			}
		}
	};
	xhttp.onerror = function () {
		callback(getInfo(false));
	};
	xhttp.open("GET", config.geoAPI, true);
	xhttp.send(); 

    /********************* Function *********************/
    function getUa() {
        var res = {};
        if (config.getOpt) {
            res = {
                'platform': platform,
                'browser': browser,
                'resolution': resolution,
                'engine': engine,
                'processor': processor,
                'mobile': mobile,
                'robot': robot,
                'date': date,
                'referring': referring
            };
        } else {
            // change array object to object
            res = {
                'platform': (platform.length > 0 ? (typeof platform === 'object' ? platform[0] : platform) : {
                    'name': ''
                }),
                'browser': (browser.length > 0 ? (typeof browser === 'object' ? browser[0] : browser) : {
                    'name': ''
                }),
                'resolution': resolution,
                'engine': (engine.length > 0 ? (typeof engine === 'object' ? engine[0] : engine) : {
                    'name': ''
                }),
                'processor': (processor.length > 0 ? (typeof processor === 'object' ? processor[0] : processor) : {
                    'name': ''
                }),
                'mobile': (mobile.length > 0 ? (typeof mobile === 'object' ? mobile[0] : mobile) : {
                    'name': ''
                }),
                'robot': (robot.length > 0 ? (typeof robot === 'object' ? robot[0] : robot) : {
                    'name': ''
                }),
                'date': date,
                'referring': referring
            };
        }
        return res;
    }

    // regex. find name & version. preg_match(name, version)
    function preg_match(a, b) {
        var c = [],
            oj = {};
        for (var k in a) {
            var d = '';
            if (a.hasOwnProperty(k)) {
                var e = new RegExp(k, 'i');
                if (e.test(config.setUa)) {
                    if (typeof a[k] === 'object') {
                        oj = {
                            'name': a[k].name,
                            'version': a[k].version
                        };
                    } else if (a[k] != 'x') {
                        if (b) {
                            var ck = '[0-9\.\_\-]+';
                            var f1 = new RegExp(k + ck, 'i');
                            var f2 = new RegExp(k + '/' + ck, 'i');
                            var f3 = new RegExp(k + '-' + ck, 'i');
                            var f4 = new RegExp(k + ' ' + ck, 'i');
                            if (f1.test(config.setUa)) {
                                var g = new RegExp(ck, 'ig');
                                var tt = config.setUa.match(f1)[0].match(g).length - 1;
                                d = config.setUa.match(f1)[0].match(g)[tt].replace('/', '').replace(/\_/g, '.').replace(/\-/g, '.')
                            } else if (f2.test(config.setUa)) {
                                var g = new RegExp('/' + ck, 'ig');
                                var tt = config.setUa.match(f2)[0].match(g).length - 1;
                                d = config.setUa.match(f2)[0].match(g)[tt].replace('/', '').replace(/\_/g, '.').replace(/\-/g, '.')
                            } else if (f3.test(config.setUa)) {
                                var tt = config.setUa.match(f3)[0].match(g).length - 1;
                                var g = new RegExp('-' + ck, 'ig');
                                d = config.setUa.match(f3)[0].match(g)[tt].replace('-', '').replace(/\_/g, '.').replace(/\-/g, '.')
                            } else if (f4.test(config.setUa)) {
                                var tt = config.setUa.match(f4)[0].match(g).length - 1;
                                var g = new RegExp(' ' + ck, 'ig');
                                d = config.setUa.match(f4)[0].match(g)[tt].replace(' ', '').replace(/\_/g, '.').replace(/\-/g, '.')
                            }
                        }
                        (d != '' ? oj = {
                            'name': a[k],
                            'version': d
                        } : oj = {
                            'name': a[k]
                        });

                    } else {
                        oj = {
                            'name': config.setUa.match(e)[0]
                        };
                    }
                    c.push(oj);
                }
            }
        }
        return c
    }

    // get url referer & parser hostname
    function uri() {
        var parser = document.createElement('a');
        parser.href = document.referrer;
        var domain = (document.referrer != '' ? parser.hostname : '');
        return {
            'url': document.referrer,
            'host': domain
        };
    }

    function getInfo(text) {
        var parser = {
            'ip': '',
            'provider': '',
            'city': '',
            'lat': '',
            'lon': '',
            'country': '',
            'country_code': '',
            'region': '',
            'region_code': '',
            'timezone': '',
            'zip': ''
        };
		if(text && /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))){
			var json = JSON.parse(text);
			for (var key in json) {
				if (/lat/ig.test(key)) {
					parser.lat = json[key];
				} else if (/lon/ig.test(key)) {
					parser.lon = json[key];
				} else if (/country/ig.test(key)) {
					if (json[key].length > 2) {
						parser.country = json[key];
					} else {
						parser.country_code = json[key];
					}
				} else if (/region/ig.test(key)) {
					if (json[key].length > 2) {
						parser.region = json[key];
					} else {
						parser.region_code = json[key];
					}
				} else if (/city/ig.test(key)) {
					parser.city = json[key];
				} else if (/zone/ig.test(key)) {
					parser.timezone = json[key];
				} else if (/[0-9]{1,3}(\.[0-9]{1,3}){3}/ig.test(json[key])) {
					parser.ip = json[key];
				} else if (/zip/ig.test(key)) {
					parser.zip = json[key];
				} else if (/org/ig.test(key) || /isp/ig.test(key)) {
					parser.provider = json[key];
				}
			}
		}
        var visitor = {
			'uas': config.setUa,
			'parser': {
				'geo': parser,
				'ua': getUa()
			}
        };
        return visitor;
    }

}
