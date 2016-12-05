<p>Lightweight javascript-based to analyze visitors with user-agent &amp; ip geo location parser.</p>
<h2>Usage</h2>
 

<pre>&lt;script src="visitor-parser.js"&gt;&lt;/script&gt;
&lt;script&gt;
&nbsp; var visitor = new visitorParser();&nbsp; &nbsp;
&nbsp; var info = visitor.getInfo();&nbsp; // get ua and geo
&nbsp; console.log(info);&nbsp; &nbsp;
&lt;/script&gt;</pre>
 
<h4>Default of result:</h4>
 

<pre>{
&nbsp; &nbsp;"geo": {
&nbsp; &nbsp; &nbsp;"ip": empty,
&nbsp; &nbsp; &nbsp;"provider": empty,
&nbsp; &nbsp; &nbsp;"city": empty,
&nbsp; &nbsp; &nbsp;"lat": empty,
&nbsp; &nbsp; &nbsp;"lon": empty,
&nbsp; &nbsp; &nbsp;"country": empty,
&nbsp; &nbsp; &nbsp;"country_code": empty,
&nbsp; &nbsp; &nbsp;"region": empty,
&nbsp; &nbsp; &nbsp;"region_code": empty,
&nbsp; &nbsp; &nbsp;"timezone": empty,
&nbsp; &nbsp; &nbsp;"zip": empty
&nbsp; &nbsp;},
&nbsp; &nbsp;"ua": {
&nbsp; &nbsp; &nbsp;"platform": {
&nbsp; &nbsp; &nbsp; &nbsp;"name": empty,
&nbsp; &nbsp; &nbsp; &nbsp;"version": undefined
&nbsp; &nbsp; &nbsp;},
&nbsp; &nbsp; &nbsp;"browser": {
&nbsp; &nbsp; &nbsp; &nbsp;"name": empty,
&nbsp; &nbsp; &nbsp; &nbsp;"version": undefined
&nbsp; &nbsp; &nbsp;},
&nbsp; &nbsp; &nbsp;"resolution": {
&nbsp; &nbsp; &nbsp; &nbsp;"width": integer,
&nbsp; &nbsp; &nbsp; &nbsp;"height": integer
&nbsp; &nbsp; &nbsp;},
&nbsp; &nbsp; &nbsp;"engine": {
&nbsp; &nbsp; &nbsp; &nbsp;"name": empty,
&nbsp; &nbsp; &nbsp; &nbsp;"version": undefined
&nbsp; &nbsp; &nbsp;},
&nbsp; &nbsp; &nbsp;"processor": {
&nbsp; &nbsp; &nbsp; &nbsp;"name": empty
&nbsp; &nbsp; &nbsp;},
&nbsp; &nbsp; &nbsp;"mobile": {
&nbsp; &nbsp; &nbsp; &nbsp;"name": empty,
&nbsp; &nbsp; &nbsp; &nbsp;"version": undefined
&nbsp; &nbsp; &nbsp;},
&nbsp; &nbsp; &nbsp;"robot": {
&nbsp; &nbsp; &nbsp; &nbsp;"name": empty
&nbsp; &nbsp; &nbsp;},
&nbsp; &nbsp; &nbsp;"date": string,
&nbsp; &nbsp; &nbsp;"referring": {
&nbsp; &nbsp; &nbsp; &nbsp;"url": empty,
&nbsp; &nbsp; &nbsp; &nbsp;"host": empty
&nbsp; &nbsp; &nbsp;}
&nbsp; &nbsp;}
}</pre>
 <br>
<h2>Methods</h2>

<ul>
	<li><b>getInfo()</b><br>
 Result <code>geo:{object}</code> and <code>ua:{object}</code> like the example above.</li>
	<li><b>getGeo()</b><br>
 Result like: 
<pre>{
&nbsp; "ip": "127.0.0.1",
&nbsp; "provider": "Three Indonesia",
&nbsp; "city": "Bandung",
&nbsp; "lat": -6.9039,
&nbsp; "lon": 107.6186,
&nbsp; "country": "Indonesia",
&nbsp; "country_code": "ID",
&nbsp; "region": "West Java",
&nbsp; "region_code": "JB",
&nbsp; "timezone": "Asia/Jakarta",
&nbsp; "zip": ""
}</pre>
 </li>
	<li><b>getUa()</b><br>
 Result like: 
<pre>{
&nbsp; "platform": {
&nbsp; &nbsp; &nbsp;"name": "Android",
&nbsp; &nbsp; &nbsp;"version": "4.0.3"
&nbsp; },
&nbsp; "browser": {
&nbsp; &nbsp; &nbsp;"name": "Firefox",
&nbsp; &nbsp; &nbsp;"version": "50.0"
&nbsp; },
&nbsp; "resolution": {
&nbsp; &nbsp; &nbsp;"width": 1366,
&nbsp; &nbsp; &nbsp;"height": 662
&nbsp; },
&nbsp; "engine": {
&nbsp; &nbsp; &nbsp;"name": "Gecko",
&nbsp; &nbsp; &nbsp;"version": "20100101"
&nbsp; },
&nbsp; "processor": {
&nbsp; &nbsp; &nbsp;"name": "x64"
&nbsp; },
&nbsp; "mobile": {
&nbsp; &nbsp; &nbsp;"name": "Samsung Galaxy Nexus"
&nbsp; },
&nbsp; "robot": {
&nbsp; &nbsp; &nbsp;"name": ""
&nbsp; },
&nbsp; "date": "2016-12-05T01:10:45.825Z",
&nbsp; "referring": {
&nbsp; &nbsp; &nbsp;"url": "https://www.google.com/search?q=ibacor&amp;ie=utf-8&amp;oe=utf-8&amp;client=firefox-b",
&nbsp; &nbsp; &nbsp;"host": "www.google.com"
&nbsp; }
}</pre>
 </li>
	<li><b>getUas()</b><br>
 Result user-agent string like <code>Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0</code>.</li>
</ul><br>
<h2>Options</h2>
<pre>var visitor = new visitorParser({
&nbsp; &nbsp;setUa: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36", // set user-agent. string
&nbsp; &nbsp;getOpt: true, // get all options result of parser. true or false
&nbsp; &nbsp;geoAPI: 'http://freegeoip.net/json/' // set ip geo location api. url
});<br>

var result = visitor.getUa().browser;
console.log(result);</pre>
 
<h4>If getOpt: <code>false</code> return object:</h4>
<pre>{
&nbsp; &nbsp;"name": "Firefox",
&nbsp; &nbsp;"version": "50.0"
}</pre>
 
<h4>If getOpt: <code>true</code> return array:</h4>
<pre>[
&nbsp; &nbsp;{
&nbsp;     "name": "Firefox",
&nbsp;     "version": "50.0"
&nbsp; &nbsp;},
&nbsp; &nbsp;{
&nbsp;     "name": "Mozilla",
    &nbsp; "version": "5.0"
&nbsp; &nbsp;}
]</pre>

<h2><a href="http://ibacor.com/download/demo/visitor-parser-js/">DEMO</a></h2>

<h2>Contribute</h2>
<ul>
<li>Fork and clone this repository</li>
<li>Make some changes as required</li>
</ul>

Hope will usefull for you all.

Question ? please email : <bachor.can@gmail.com>
