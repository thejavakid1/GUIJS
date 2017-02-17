function loadGUI(guiName){
    //create overlay
    overlay = document.createElement('GUI_overlay');
    overlay.id="overlay";
    document.body.appendChild(overlay)
    //load html
    readFile("guis/"+guiName+".html", OverlayCallback)
    //load script
    var script = document.createElement('script');
    script.src = "guis/"+guiName+".js";
    script.onload = function () {
        try{
            eval(guiName+".init();");
        }catch(e){
            alert("faild to load GUI "+guiName+":\n"+e.message);
        }
    };
    document.head.appendChild(script);
}
/*
*overlay init functions
*/
function OverlayCallback(layout){
    //set overlay to imported html
    overlay.innerHTML = layout;
}
/*
*filereader code
*/
function readFile(file, callback)
{
    var rawFile = new XMLHttpRequest();
    // put true for serverside stuff
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var style =
                "\n<style>"+
                "#overlay{"+
                "    height: 75%;"+//ajust as needed
                "    width: 75%;"+//ajust as needed
                "    position:absolute;"+
                //"    margin: auto;"+
                "    background-color: #E0E0E0;"+
                "}"+
                "</style>\n";
                var allText = rawFile.responseText+style;
                callback(allText);
            }
        }
    }
    rawFile.send(null);
}

function GUI (callback){
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
    //should close and remove gui, but should vary on page.
    this.closeWindow = function(){

    }
    //init of gui.
    this.init = function(){
        gui.hide();
        for(i =0;i<overlay.children.length; i++){
            this.elements[overlay.children[i].id] = overlay.children[i];
        }
        callback();
    }
    //hides gui
    this.hide = function(){
        overlay.style.visibility = "hidden";
    }
    this.show = function(){
        overlay.style.visibility = "visible";
    }
    this.moveTo = function(x,y){
        overlay.style.top = y;
        overlay.style.left = x;
    }

    //setPosToMouse function is UNSTABLE.
    this.posControler = function(){
        this.preMove = function(){
            if(!overlay.style.margin == "none"){
                overlay.style.margin = "none";
            }
        };
        this.snapTo = function(e){
            this.preMove();
            overlay.style.top = e.clientY+"px";
            overlay.style.left = e.clientX+"px"
            console.log(this)
            window.addEventListener("onmouseclick", this.snapTo);
        };
        this.waitFor = function(){
            window.addEventListener("onmouseclick", this.snapTo);
        };
    };
}
