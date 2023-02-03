/*
#__ Dom Navigation __#

   -With the HTML DOM, you can navigate the node tree using node relationships.
   -With the HTML DOM, all nodes in the node tree can be accessed by JavaScript.
   -New nodes can be created, and all nodes can be modified or deleted.

   +In Fact, Everything on a webpage is a Node.
     -The document object is a Node
     -Each and every element of the document is a Node, like <p>, <img>, <div>, etc.
     -All Comments are considered as Node
     -Contents inside the element is also a node (text Node)

   +DOM Tree Node Relationship
     -The Nodes in the DOM tree follow the hierarchical structure with each other.
     -The node which is at the top in the DOM tree is known as the root node
     -Every Node has one parent node except for the root node
     -A parent can have any number of children
     -Node whose parent are the same are called neighbours or siblings

   !Possible Navigations in DOM Tree
      +Since DOM has a tree-like structure so there are 3 possible directions to move in the tree:
         -Down in the tree
         -Up in the tree
         -Sideways to the tree


   + DOM navigation in JavaScript (all methods)

    Let's see the various ways provides by JavaScript to move through the DOM tree in a specific direction:

    1)Move down in the DOM tree 🙋‍♂️
     There are 6 different JavaScript ways to move and get child nodes

      -firstChild - Returns the first child of the element
      -firstElementChild - Returns first element child of the parent
      -lastChild - Returns the last child of the element
      -lastElementChild - Returns first element child of the parent
      -childNodes - Returns all children of the element as a collection of array
      -children - Returns all children which are element as a collection of array

    2)Move up in the DOM tree: 🙋‍♂️
     There are 2 different JavaScript ways to move and access parent nodes

      -parentNode - Returns parent node of the element
      -parentElement - Returns parent element node of the element

    3)Move sideways in the tree: 🙋‍♂️
     There are 4 different JavaScript ways to move and access sibling nodes
     
      -nextSibling - Returns sibling node which is the next child of its parent
      -nextElementSibling - Returns sibling element which is next child of its parent
      -previousSibling - Returns sibling node which is a previous child of its parent
      -previousElementSibling - Returns sibling element which is a previous child of its parent

*__DOM Root Nodes __*

   + There are two special properties that allow access to the full document:
      -document.body - The body of the document
      -document.documentElement - The full document
      -document.head
      -document.body.childNodes
      -document.body.haschildNodes  -> element ke pass child node hai ki nahi(true or false me batata hai)
      -document.body.children
*/
