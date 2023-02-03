/*
#__ Window __#

   - It is the root level element in any web page.
   - All the global variables are defined on the window object.
   - For example, alert(), confirm() are methods defined on the window object.
   - Writing alert() is similar to window.alert()
   - Also, properties like document, location are properties of the window object.
   - window API

   + Window Methods
       - window.open() - open a new window
       - window.close() - close the current window
       - window.moveTo() - move the current window
       - window.resizeTo() - resize the current window
       - window.innerHeight - the inner height of the browser window (in pixels)
       - window.innerWidth - the inner width of the browser window (in pixels)

#__ Document __#
  
   -It is the direct child of the window object. It is aka Document Object Model (DOM).
   -You can access it via window.document or document.
   -document object has many useful methods defined on it.
   -For example, 
       document.getElementById(), 
       document.getElementsByTagName(), 
       document.createElement(),
       document.querySelector() and many more
   -document API


#__ Screen __#

   - Screen is a small information object about physical screen dimensions . 
   - It can be used to display screen width, height, colorDepth, pixelDepth etc. 
   - It is not mandatory to write window prefix with screen object. 
   - It can be written without window prefix.

   + Properties:
      -screen.width
      -screen.height
      -screen.availWidth
      -screen.availHeight
      -screen.colorDepth
      -screen.pixelDepth
  
*/