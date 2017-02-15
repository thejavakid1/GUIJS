var gui = new GUI(function(){
    gui.addButton("asdf",function(){
        alert("helloworld");
    });
    gui.addButton("fake",function(){
        alert("you just got gulibled!");
    });
    gui.addElement("tester", "onmouseover",function(){
        gui.hide();
    });
});
