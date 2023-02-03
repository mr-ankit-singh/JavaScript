/*
#__ Dom Manipulation __#

   - DOM manipulation is change and modification of the document object model using JavaScript.
   + Javscript provides various method by which developers can:
      -Create new element
      -Attach new element to the DOM
      -Removing old element from the DOM
      -Replacing an element with another element
      -Changing the location of the element in the document
      -Making change in existing element by adding style or by adding content
      -Adding a new attribute to the element
     
  + DOM manipulation methods

     1) createElement() 🙋‍♂️

        -we create new elements is by using the createElement method
        -The element created by the createElement() method does not automatically attach to the document,
          we have to explicitly append elements to the document.

     2) append() 🙋‍♂️
        -To append element use the append() method. 
        -It inserts a set of Node objects or DOMString object as a last child of the ParentNode.

     3) removeChild() 🙋‍♂️
        -The removeChild method removes an element from the DOM structure. 
        -The Node which is to be removed is passed as an argument to the method.
        -The method removeChild returns a reference to the child node which is deleted.
        Note: You need to call removeChild method from the parent of the child otherwise it will throw an error.

     4) replaceChild() 🙋‍♂️
        -The replaceChild() method replaces a node with another node in the DOM.
        -Syntax: 
            parent.replaceChild(newElement, oldElement)
            parent - Parent element whose child is to be replaced
            newElement - Element which will replace another one
            oldElement - Element which will be replaced

*/