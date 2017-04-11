//this should be the same name as your gui's name, but does not need to be.
var gui = new GUI();
gui.init();
    gui.addButton("asdf", function(){
        
    });
    //triggers when you click the fake button
    gui.addButton("fake", function(){
        alert("you just got gullibled!");
    });
    //triggers when your mouse passes over the tester button.
    //hides the gui
    gui.addElement("tester", "onmouseover", function(){
        gui.hide();
    });
