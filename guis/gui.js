//this should be the same name as your gui's name, but does not need to be.
var gui = new GUI(function(){
    //triggers when you click the asdf button
    gui.addButton("asdf", function(){
        gui.haltFollow();
        alert("helloworld");
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
});
