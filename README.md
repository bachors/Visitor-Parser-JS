<p>Lightweight javascript-based to analyze visitors with user-agent &amp; ip geo location parser.</p>
<h2>Usage</h2>
 

<h4>Default:</h4>
<pre>visitorParser(function(data) {
    console.log(data);
});</pre>


<h4>With Configuration:</h4>
<pre>var config = {
    // set user-agent string
    setUa: 'Mozilla/5.0 (Linux; U; Android 2.3.5; de-de; SAMSUNG GT-S5830/S5830BUKS2 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1', 
    // get all options result of regex
    getOpt: true, 
    // set url ip geo location apis
    geoAPI: 'http://freegeoip.net/json/' 
};
visitorParser(config, function(data) {
    console.log(data);
});</pre>

<h2>Contribute</h2>
<ul>
<li>Fork and clone this repository</li>
<li>Make some changes as required</li>
</ul>

Hope will usefull for you all.

Question ? please email : <bachor.can@gmail.com>
