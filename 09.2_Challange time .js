// Display only 280 characters of a string like the one used in Twitter

let myTweets = "mhc mhjh hgydg jiuh afdagdjb hjjygj  hgsjg gfthfyd khfiuew  nbxbj cgzfhycgjs hgjhgfsdf gfdydguf  hvjh ghfdygd gfyugu jfgsf fdygif ekghsg  g gkhgk ghfkuhfk sgufyewiuf f f f yf f f fewi ewyy hfjsfbj bjfudsfs ffygfihfiuh fin v hkds fisfhsbfjhfgsufssbsfkh  g  ghghigh are you mad iamvrey person u r listening iama good boy u r my favourate "
let myActualTweet =myTweets.slice(0, 280)
console.log(myActualTweet)
console.log(myActualTweet.length)

// Return the unicode of the last character in a string

var str = "HELLO WORLD";
console.log(str.charCodeAt(str.length - 1))