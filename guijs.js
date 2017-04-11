/*
loads gui with ID
*/
function loadGUI(guiName ,guiID){
    //load script
    var script = document.createElement('script');
    script.src = "guis/"+guiName+".js";
    script.onload = function () {
            eval(guiName+".init("+guiID+");");
    };
    document.head.appendChild(script);
}
/*
loads gui using id in js file

function loadGUI(guiName){
    //load script
    var script = document.createElement('script');
    script.src = "guis/"+guiName+".js";
    script.onload = function () {
            eval(guiName+".init();");
    };
    document.head.appendChild(script);
}
/*
* sets gui to element of given id
function GUI (assignments){
    this.guiID = "";
    //set style vars
    this.width = 75;
    this.height = 75;
    this.backgroundColor = "E0E0E0";
    //gets overlay
    this.overlay = function(){
        return document.getElementById(this.guiID);
    }
    //sets HTML in gui, required for some situations.
    this.setHTML = function(html){
        this.overlay().innerHTML = html;
    }
    //list of elements in overlay
    this.elements = {};
    //add function to execute on click of a element
    this.addButton = function(id, func){
        this.elements[id].onclick = func;
    }
    //adds any given event and function to element
    this.addElement = function(id, trigger,func){
        (this.elements[id])[trigger] = func;
    }
    //init of gui.
    this.init = function(id){
        this.guiID = id;
        this.updateStyle();
        gui.hide();
        for(i =0;i<this.overlay().children.length; i++){
            this.elements[this.overlay().children[i].id] = this.overlay().children[i];
        }
        assignments();
    }
    this.updateStyle = function(){
        this.overlay().style.position = "absolute";
        this.overlay().style.width = this.width;
        this.overlay().style.height = this.height;
        this.overlay().style.backgroundColor = this.backgroundColor;
    }
    //hides gui (pretty much closes window)
    this.hide = function(){
        this.overlay().style.visibility = "hidden";
    }
    //shows the window
    this.show = function(){
        this.overlay().style.visibility = "visible";
    }
    this.moveTo = function(x,y){
        this.overlay().style.top = y+"px";
        this.overlay().style.left = x+"px";
    }
}
*/
function GUI (assignments, guiID){
    //set style vars
    this.width = 75;
    this.height = 75;
    this.backgroundColor = "E0E0E0";
    //gets overlay
    this.overlay = function(){
        return document.getElementById(guiID);
    }
    //sets HTML in gui, required for some situations.
    this.setHTML = function(html){
        this.overlay().innerHTML = html;
    }
    //add function to execute on click of a element
    this.addButton = function(id, func){
        document.getElementById(id).onclick = func;
    }
    //adds any given event and function to element
    this.addElement = function(id, trigger,func){
        document.getElementById(id)[trigger] = func;
    }
    //init of gui.
    this.init = function(){
        this.updateStyle();
        this.hide();
        assignments();
    }
    this.updateStyle = function(){
        this.setStyleAttr("position","absolute");
        this.setStyleAttr("width",this.width+"%");
        this.setStyleAttr("height", this.height+"%");
        this.setStyleAttr("backgroundColor", this.backgroundColor);
    }
    this.setStyleAttr = function(attr, val){
        this.overlay().style[attr] = val;
    }
    //hides gui (pretty much closes window)
    this.hide = function(){
        this.overlay().style.visibility = "hidden";
    }
    //shows the window
    this.show = function(){
        this.overlay().style.visibility = "visible";
    }
    this.moveTo = function(x,y){
        this.overlay().style.top = y+"px";
        this.overlay().style.left = x+"px";
    }
}
