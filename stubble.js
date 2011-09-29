/**
 * Stubble JS
 * a trimmed moustache.js
 * Mike McNeil, c.2011
 * MichaelMcNeil.com
 * Included here as a jquery extension
 *
 * Render a template string using a JSO
 */
$.stubble = function (template, valueMap) {
    var result = template;
    for (var key in valueMap) {
        var re = new RegExp("\{\{"+escapeRegex(key)+"\}\}","g");
        result = result.replace(re,valueMap[key]);
    }
    return result;

    function escapeRegex (s) {
        s = String(s === null ? "" : s);
        return s.replace(/&(?!\w+;)|["'<>]/g, function(s) {
            switch(s) {
                case "&":
                    return "&amp;";
                case "\\":
                    return "\\\\";
                case '"':
                    return '&quot;';
                case "'":
                    return '&#39;';
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                default:
                    return s;
            }
        });
    }
}