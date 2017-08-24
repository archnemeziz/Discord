
// implementation.js start


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////


// Definitions start

var emojiList = [
		["bitch", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/bitch.gif"],
		["nod", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/nod.gif"],
		["tauri", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/tauri.gif"],
		["morningafter", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/morningafter.gif"],
		["hug", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/hug.gif"],
		["doh", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/doh.gif"],
		["fail", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/fail.gif"],
		["what", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/what.gif"],
		["fuckyou", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/fuckyou.gif"],
		["rofl", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/rofl.gif"],
		["bandit", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/bandit.gif"],
		["clap", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/clap.gif"],
		["cool", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/cool.gif"],
		["cry", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/cry.gif"],
		["cwl", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/cwl.gif"],
		["dance", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/dance.gif"],
		["devil", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/devil.gif"],
		["emo", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/emo.gif"],
		["festiveparty", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/festiveparty.gif"],
		["ghost", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/ghost.gif"],
		["headphones", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/headphones.gif"],
		["highfive", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/highfive.gif"],
		["holidayspirit", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/holidayspirit.gif"],
		["idea", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/idea.gif"],
		["kiss", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/kiss.gif"],
		["masang", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/masang.gif"],
		["monkey", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/monkey.gif"],
		["nerdy", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/nerdy.gif"],
		["poop", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/poop.gif"],
		["punch", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/punch.gif"],
		["rock", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/rock.gif"],
		["santamooning", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/santamooning.gif"],
		["sheep", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/sheep.gif"],
		["shock", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/shock.gif"],
		["slap", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/slap.gif"],
		["sleepy", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/sleepy.gif"],
		["swear", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/swear.gif"],
		["time", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/time.gif"],
		["tmi", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/tmi.gif"],
		["tumbleweed", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/tumbleweed.gif"],
		["wait", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/wait.gif"],
		["wasntme", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/wasntme.gif"],
		["whew", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/whew.gif"],
		["worry", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/worry.gif"],
		["happy", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/happy.gif"],
		["drunk", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/drunk.gif"],
		["waiting", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/waiting.gif"],
		["shake", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/shake.gif"],
		["captain", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/captain.gif"],
		["fubar", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/fubar.gif"],
		["overthunking", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/overthunking.gif"],
		["puke", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/puke.gif"],
		["dimensionalthinking", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/dimensionalthinking.gif"],
		["slowclap", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/slowclap.gif"]
//		["", ""]
	];
	
// Definitions end

// Logging start
function writeLogLine(text, tag)
{
	var line = "[ESTheme][" + tag + "] - " + text;
	console.log(line);
}
// Logging end

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}


function getChildElementByClassName(parent, className)
{
    for(var i = 0; i < parent.childNodes.length; i++)
    {
        if (parent.childNodes[i].className == className)
            return parent.childNodes[i];

        if(parent.childNodes.length != 0)
        {
            var rtn_recursive = getChildElementByClassName(parent.childNodes[i], className);
            if (rtn_recursive != null)
                return rtn_recursive;
        }
    }

    return null;
}


function loadTheme()
{
	var cssId = 'ESThemeImplementation';
	writeLogLine("Detecting custom css...", "Theme");
	if (!document.getElementById(cssId))
	{
		writeLogLine("Custom css missing! Applying ESTheme css...", "Theme");
		var customCss = document.getElementById('customcss');
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'https://rawgit.com/archnemeziz/Discord/master/ElegantBlue.mini.css';
		link.media = 'all';
		head.insertBefore(link, customCss);
		
		//set .account:after watermark
		document.styleSheets[0].addRule('.account::after','width: 100px !important');
		document.styleSheets[0].insertRule('.account::after { width: 100px !important }', 0);
		document.styleSheets[0].addRule('.account::after','content: "Plugin made by Aesir Elegant Blue by Arch" !important');
		document.styleSheets[0].insertRule('.account::after { content: "Plugin made by Aesir Elegant Blue by Arch" !important }', 0);
	}
	else
		writeLogLine("Custom css already applied!", "Theme");
}

function unloadTheme()
{
	$('#ESThemeImplementation').remove();
	$(document).off("dblclick.dce");
}

function getImagesByAlt(alt) {
    var allImages = document.getElementsByTagName("img");
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].alt == alt) {
            images.push(allImages[i]);
        }
    }
    return images;
}


function applyEmoticon(name, url)
{
	
	var emoticons = getImagesByAlt(":" + name + ":");
	var x = 0;
	
	for(var i = 0; i < emoticons.length; i++)
	{
		if(emoticons[i].className.indexOf('es-animated-emote') != -1)
			continue;
		
		emoticons[i].className += " es-animated-emote";
		
		emoticons[i].src = url;
		x++;
	}
	
	return x;
}

function applyEmoticons()
{
	
	var cnt = 0;
	
	for(var i = 0; i < emojiList.length; i++)
	{
		cnt += applyEmoticon(emojiList[i][0], emojiList[i][1]);
	}
	
	return cnt;
}


function main()
{
	var rtn = applyEmoticons();
	writeLogLine("Head replace finished! Replace count: " + rtn, "SkypeEmotes");
	
	window.setInterval(function(){
			applyEmoticons();
		}, 1000);
}

esIntegration.prototype.onSwitch = function() {
	var rtn = applyEmoticons();
}
esIntegration.prototype.load = function() {}

esIntegration.prototype.observer = function () {}

esIntegration.prototype.unload = function() {
	unloadTheme();
}
esIntegration.prototype.stop = function() {
	unloadTheme();
}

esIntegration.prototype.onMessage = function() { 
	var rtn = applyEmoticons();
	writeLogLine("Message replace finished! Replace count: " + rtn, "SkypeEmotes");
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////