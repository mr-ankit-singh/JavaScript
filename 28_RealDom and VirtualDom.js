/*
#__ Real DoM vs Virtual DoM __#

    -DOM stands for “Document Object Model,” which represents your application UI and whenever the changes are 
    made in the application, this DOM gets updated and the user is able to visualize the changes.
    
    -DOM is an interface that allows scripts to update the content, style, and structure of the document. 

    -Virtual DOM is a node tree similar to Real DOM that lists elements, content, and attributes 
    as objects and properties.
    
    -Virtual DOM plays a major role in boosting the performance of the applications. 

    -ReactDOM.render() will create a Virtual and real DOM tree of the first load.

    -When changes are done in UI, the changes are also done in Virtual DOM. 

    -Instead of updating all the nodes, Virtual DOM updates only those components in which changes are made.

    -Once Virtual DOM contains all the updated changes, it is then compared with the Real DOM 
    and the difference is calculated between them.
    
    -Once the difference is calculated the real DOM will update only the new components 
    that have actually changed. This is called Reconciliation.

    -Virtual DOM is faster and more effective than Real DOM as it just focuses on 
    the updated components instead of updating the entire DOM.

    --------------------------------------------------------------------------------------------------

    -In React,for every Dom object there is a corresponding Virtual Dom object.
    -A Virtual Dom object is a representation of a Dom object,like a lightweight copy.
    -A Virtual Dom object has the same property as a real Dom object.
    -But it lacks the real thing's power to directly change what's on screen.

    Note : State change => Compute Difference => Re-rander

*/