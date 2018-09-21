# ie-truth
JavaScript function to detect if browser is Internet Explorer (IE), and the true IE version and compatibility mode IE is running in using the User Agent string. Built to handle all IE versions from 6-11.

##Usage
Include ``ie-truth.js`` in your HTML:

```html
<script type="text/javascript" src="//cdn.rawgit.com/Gavin-Paolucci-Kleinow/ie-truth/master/ie-truth.js"></script>
```

Or minified:
```html
<script type="text/javascript" src="//cdn.rawgit.com/Gavin-Paolucci-Kleinow/ie-truth/master/ie-truth.min.js"></script>
```

Call the function to get the IE information:
```javascript
var IE = IeVersion();
```

IeVersion returns an object with the following properties
* IE.IsIE
 * True if the browser is IE, false otherwise
* IE.TrueVersion
 * The true version of IE (ignoring compatibility mode)
* IE.ActingVersion
  * The version of compatibility mode IE is running in, or 0 if not running in compatibility mode
* IE.CompatibilityMode
  * True if IE is running in compatibility mode, false otherwise
* IE.IsEdge
  * True if the browser is Edge, false otherwise
* IE.EdgeHtmlVersion
  * The EdgeHTML vesion number

##How It Works
Modern versions of IE always have the Trident version number in the User Agent string. Older IE detection scripts looked for MSIE in the User Agent string, but this is no longer included in the string as of IE 11 while the browser is in normal mode. The MSIE number is included though, in all modern versions of IE including 11, if it is running in compatibility mode, and informs of the version of IE that the browser is running at. By looking at both the Trident Number and MSIE number if it exists, you can determine what the true version of IE is, if it is running in compatibility mode, and what compatibility mode it is running at.
