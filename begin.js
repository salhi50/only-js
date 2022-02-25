// reset the body

document.body.style.cssText = "margin: 0;padding: 0;box-sizing: border-box;font-family: sans-serif;color: #101013;-webkit-tap-highlight-color: transparent;";
document.querySelector("*").style.margin = '0';

// wrapper

let wrapper = document.getElementById("wrapper");

// header part

let header = document.createElement("header");
let layout = document.createElement("div");
let textLogo = document.createTextNode("Only Javascript");
let hMid = document.createElement("h3");

// header style

header.style.cssText = "background-color: #105593;height: 60px;"
header.append(layout);

// layout style
layout.className = "mycont";
layout.style.cssText = "padding: 0 .8rem;margin: 0 auto;max-width: 1200px;display: flex;align-items: center;";
layout.append(hMid);

// logo style
hMid.append(textLogo);
hMid.style.cssText = "color: white;font-weight: 550;";



// append in the body

wrapper.appendChild(header);


// section part

let sect = document.createElement("section");
let container = document.createElement("div");

let titleSect = document.createElement("h1");
let textTitleSect = document.createTextNode("Create a Website with Javascript only");

let infoSect = document.createElement("p");
let textInfoSect = document.createTextNode(`" practice makes perfect "`);

let btnSect = document.createElement("a");
let textBntSect = document.createTextNode("Explore More");

// parent
sect.style.cssText = "width: 100%;height: calc(100vh - 60px);background: #fff;display: flex;align-items: center;justify-content: center;flex-direction: column;border-bottom: 1px solid #dadce0;";

// container
container.className= "mylayout";
container.style.cssText = "padding: 0 .8rem;margin: 0 auto;max-width: 1200px;";
container.append(titleSect);
sect.append(container);
container.append(infoSect);
container.append(btnSect);

// style content

titleSect.style.cssText = "color: #101013;margin-bottom: 1rem;font-weight: 500;text-align: center;";
titleSect.append(textTitleSect);

infoSect.style.cssText = "font-size: 18px;color: #0f8cfa;text-align: center;font-style: italic;";
infoSect.append(textInfoSect);

btnSect.style.cssText = "background: #105593;color: white;border-radius: 6px;padding: 13px 0;max-width: 500px;margin: 0 auto;display: block;text-decoration: none;text-align: center;font-weight: 500;font-size: 1.1rem;";
btnSect.style.maxWidth = '100%';
btnSect.setAttribute("href","#main");
btnSect.append(textBntSect);

// append child
wrapper.append(sect);




// main part


// variables
let main = document.createElement("main");
let mainCont = document.createElement("div");

let mainTitle = document.createElement("h2");
let textMainTitle = document.createTextNode("Features");

let ListC = document.createElement("div");
let Fbox = document.createElement("div");
let Sbox = document.createElement("div");
let Tbox = document.createElement("div");

let Fimg = document.createElement("img");
let Simg = document.createElement("img");
let Timg = document.createElement("img");

let Ftit = document.createElement("h5");
let Ftext = document.createTextNode("Fast learning");
let Stit = document.createElement("h5");
let Stext = document.createTextNode("More practice");
let Ttit = document.createElement("h5");
let Ttext = document.createTextNode("High level");

let Fp = document.createElement("p");
let Sp = document.createElement("p");
let Tp = document.createElement("p");

let Ft = document.createTextNode("Learn web developement fast");
let St = document.createTextNode("Practice makes you perfect");
let Tt = document.createTextNode("Have a high level in javascript");

// add or set
ListC.className = "list-ctrl";
Fbox.className = "box-one";
Sbox.className = "box-two";
Tbox.className = "box-three";
mainCont.className = "cont";
Fimg.src = "images/three.png";
Simg.src = "images/two.png";
Timg.src = "images/one.png";
main.id = "main"

// styling
main.style.cssText = "padding: 50px 0;background-color: #f7f7f7;";
mainCont.style.cssText = "margin: 0 auto;max-width: 1200px;";
mainTitle.style.cssText = "text-align: center;margin-bottom: 2rem;font-weight: 500;";

ListC.style.cssText = "display: flex;flex-wrap: wrap;margin: 0 auto;justify-content: center;";
Fbox.style.cssText = "max-width: 300px;text-align: center;padding: 17px 40px;background: white;border-radius: 6px;border: 1px solid #c1c1c1;margin: 12px 7px;";
Sbox.style.cssText = "max-width: 300px;text-align: center;padding: 17px 47px;background: white;border-radius: 6px;border: 1px solid #c1c1c1;margin: 12px 7px;";
Tbox.style.cssText = "max-width: 300px;text-align: center;padding: 17px 40px;background: white;border-radius: 6px;border: 1px solid #c1c1c1;margin: 12px 7px;";

Fimg.style.cssText = "max-width: 150px;height: auto;";
Simg.style.cssText = "max-width: 150px;height: auto;";
Timg.style.cssText = "max-width: 150px;height: auto;";

Ftit.style.cssText = "margin-top: 8px;font-weight: 500;font-size: 1.15rem;margin-bottom: 0;";
Stit.style.cssText = "margin-top: 8px;font-weight: 500;font-size: 1.15rem;margin-bottom: 0;";
Ttit.style.cssText = "margin-top: 8px;font-weight: 500;font-size: 1.15rem;margin-bottom: 0;";

Fp.style.cssText = "color: #606060;font-size: 15px;font-weight: 400;";
Sp.style.cssText = "color: #606060;font-size: 15px;font-weight: 400;";
Tp.style.cssText = "color: #606060;font-size: 15px;font-weight: 400;";

// append
main.append(mainCont);
mainTitle.append(textMainTitle);
mainCont.append(mainTitle);
mainCont.append(ListC);
ListC.append(Fbox);
ListC.append(Sbox);
ListC.append(Tbox);
wrapper.append(main);

Fbox.append(Fimg);
Fbox.append(Ftit);
Ftit.append(Ftext);

Sbox.append(Simg);
Sbox.append(Stit);
Stit.append(Stext);

Tbox.append(Timg);
Tbox.append(Ttit);
Ttit.append(Ttext);

Fbox.append(Fp);
Sbox.append(Sp);
Tbox.append(Tp);

Fp.append(Ft);
Sp.append(St);
Tp.append(Tt);



// third part

let art = document.createElement("article");
let artCont = document.createElement("div");
let artTit = document.createElement("h2");
let textArtTit = document.createTextNode("How much time I spend to create this website?");

let unlist = document.createElement("ul");
let Flist = document.createElement("li");
let Slist = document.createElement("li");
let Tlist = document.createElement("li");
let Fourlist = document.createElement("li");

// first list
let Fspan = document.createElement("span");
let FTextSpan = document.createTextNode("Duration");

let Sspan = document.createElement("span");
let STextSpan = document.createTextNode("3h");

// second list

let Tspan = document.createElement("span");
let TTextSpan = document.createTextNode("Number (lines)");

let Fourspan = document.createElement("span");
let FourTextSpan = document.createTextNode("500");

// third list

let Fivespan = document.createElement("span");
let FiveTextSpan = document.createTextNode("tools");

let Sixspan = document.createElement("span");
let SixTextSpan = document.createTextNode("JS");

// list four

let Sevenspan = document.createElement("span");
let SevenTextSpan = document.createTextNode("Media queries");

let Espan = document.createElement("span");
let ETextSpan = document.createTextNode("No");

// add or set

artCont.className = "contain";
art.className = "first-art";

// styling

art.style.cssText = "padding: 50px 0;background-color: white;";
artCont.style.cssText = "padding: 0 .8rem;margin: 0 auto;max-width: 1200px;";
unlist.style.cssText = "max-width: 500px;display: block;margin: 0 auto;padding: 0;list-style: none;";
artTit.style.cssText = "text-align: center;font-weight: 500;margin-bottom: 3rem;"

Flist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;justify-content: space-between;";
Slist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;background-color: rgb(244, 244, 244);justify-content: space-between;";
Tlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;justify-content: space-between;";
Fourlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;background-color: rgb(244, 244, 244);border-bottom: 1px solid #dadce0;justify-content: space-between;";

Sspan.style.cssText = "color: #606060;font-size: 1rem;font-weight: 500;";
Fourspan.style.cssText = "color: #606060;font-size: 1rem;font-weight: 500;";
Sixspan.style.cssText = "color: #606060;font-size: 1rem;font-weight: 500;";
Espan.style.cssText = "color: #606060;font-size: 1rem;font-weight: 500;";

Fspan.style.cssText = "font-size: 1rem;font-weight: 500;"
Tspan.style.cssText = "font-size: 1rem;font-weight: 500;"
Fivespan.style.cssText = "font-size: 1rem;font-weight: 500;"
Sevenspan.style.cssText = "font-size: 1rem;font-weight: 500;"
// append
wrapper.append(art);
art.append(artCont);
artCont.append(unlist);
unlist.append(Flist);
unlist.append(Slist);
unlist.append(Tlist);
unlist.append(Fourlist);
artCont.prepend(artTit);
artTit.append(textArtTit);

Flist.append(Fspan);
Fspan.append(FTextSpan);
Flist.append(Sspan);
Sspan.append(STextSpan);

Slist.append(Tspan);
Tspan.append(TTextSpan);
Slist.append(Fourspan);
Fourspan.append(FourTextSpan);

Tlist.append(Fivespan);
Fivespan.append(FiveTextSpan);
Tlist.append(Sixspan);
Sixspan.append(SixTextSpan);

Fourlist.append(Sevenspan);
Sevenspan.append(SevenTextSpan);
Fourlist.append(Espan);
Espan.append(ETextSpan);


// part four

let secondArt = document.createElement("article");
let secCont = document.createElement("div");
let unorder = document.createElement("ul");
let secTit = document.createElement("h2");
let textSecTit = document.createTextNode("Futur Projets with Javascript");

let firstlist = document.createElement("li");
let secondlist = document.createElement("li");
let thirdlist = document.createElement("li");
let fourthlist = document.createElement("li");
let fiftlist = document.createElement("li");
let sixtlist = document.createElement("li");
let seventlist = document.createElement("li");

let oneImg = document.createElement("img");
let twoImg = document.createElement("img");
let threeImg = document.createElement("img");
let fourImg = document.createElement("img");
let fiveImg = document.createElement("img");
let sixImg = document.createElement("img");
let sevenImg = document.createElement("img");

let onep = document.createElement("span");
let twop = document.createElement("span");
let threep = document.createElement("span");
let fourp = document.createElement("span");
let fivep = document.createElement("span");
let sixp = document.createElement("span");
let sevenp = document.createElement("span");

let onec = document.createTextNode("Note");
let twoc = document.createTextNode("Calculator");
let threec = document.createTextNode("To Do List");
let fourc = document.createTextNode("Typing test");
let fivec = document.createTextNode("Converter");
let sixc = document.createTextNode("Html Course");
let sevenc = document.createTextNode("Bounce");

// styling

secondArt.style.cssText = "padding: 50px 0;background-color: #f7f7f7;"
unorder.style.cssText = "padding: 0;list-style: none;max-width: 500px;margin: 0 auto;"
secCont.style.cssText = "padding: 0 .8rem;margin: 0 auto;max-width: 1200px;"

secTit.style.cssText = "text-align: center;font-weight: 500;margin-bottom: 3rem;";

firstlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;";
secondlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;";
thirdlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;";
fourthlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;";
fiftlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;";
sixtlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;";
seventlist.style.cssText = "display: flex;padding: 16px 10px;border-top: 1px solid #dadce0;align-items: center;max-width: 500px;border-bottom: 1px solid #dadce0;";

oneImg.style.cssText = "width: 40px;height: 40px;border-radius: 4px;";
twoImg.style.cssText = "width: 40px;height: 40px;border-radius: 4px;";
threeImg.style.cssText = "width: 40px;height: 40px;border-radius: 4px;";
fourImg.style.cssText = "width: 40px;height: 40px;border-radius: 4px;";
fiveImg.style.cssText = "width: 40px;height: 40px;border-radius: 4px;";
sixImg.style.cssText = "width: 40px;height: 40px;border-radius: 4px;";
sevenImg.style.cssText = "width: 40px;height: 40px;border-radius: 4px;";

onep.style.cssText = "color: #0f8cfa;font-size: 1.2rem;font-weight: 400;margin-left: 2rem;";
twop.style.cssText = "color: #0f8cfa;font-size: 1.2rem;font-weight: 400;margin-left: 2rem;";
threep.style.cssText = "color: #0f8cfa;font-size: 1.2rem;font-weight: 400;margin-left: 2rem;";
fourp.style.cssText = "color: #0f8cfa;font-size: 1.2rem;font-weight: 400;margin-left: 2rem;";
fivep.style.cssText = "color: #0f8cfa;font-size: 1.2rem;font-weight: 400;margin-left: 2rem;";
sixp.style.cssText = "color: #0f8cfa;font-size: 1.2rem;font-weight: 400;margin-left: 2rem;";
sevenp.style.cssText = "color: #0f8cfa;font-size: 1.2rem;font-weight: 400;margin-left: 2rem;";


// add or set

secCont.className = "contains";
oneImg.src = "images/note.png";
twoImg.src = "images/calcul.png";
threeImg.src = "images/todo.png";
fourImg.src = "images/typing.png";
fiveImg.src = "images/convert.png";
sixImg.src = "images/html.png";
sevenImg.src = "images/red.png";

// append
wrapper.append(secondArt);
secondArt.append(secCont);
secCont.append(unorder);
secCont.prepend(secTit);
secTit.append(textSecTit);

unorder.append(firstlist);
unorder.append(secondlist);
unorder.append(thirdlist);
unorder.append(fourthlist);
unorder.append(fiftlist);
unorder.append(sixtlist);
unorder.append(seventlist);

firstlist.append(oneImg);
secondlist.append(twoImg);
thirdlist.append(threeImg);
fourthlist.append(fourImg);
fiftlist.append(fiveImg);
sixtlist.append(sixImg);
seventlist.append(sevenImg);

firstlist.append(onep);
secondlist.append(twop);
thirdlist.append(threep);
fourthlist.append(fourp);
fiftlist.append(fivep);
sixtlist.append(sixp);
seventlist.append(sevenp);

onep.append(onec);
twop.append(twoc);
threep.append(threec);
fourp.append(fourc);
fivep.append(fivec);
sixp.append(sixc);
sevenp.append(sevenc);


// part five

let fivArt = document.createElement("article");
let fivCont = document.createElement("div");
let Form = document.createElement("form");
let fivTit = document.createElement("h2");
let textFivTit = document.createTextNode("Fake form");

let Finput = document.createElement("input");
let Sinput = document.createElement("input");

let formBtn = document.createElement("button");
let textformBtn = document.createTextNode("Subscribe");


// styling
fivArt.style.cssText = "padding: 50px 0;background: #fff;";
fivCont.className = "lay";
fivCont.style.cssText = "padding: 0 2rem;margin: 0 auto;max-width: 500px;";

fivTit.style.cssText = "font-weight: 500;margin-bottom: 3rem;text-align: center;";

Sinput.style.cssText = "width: 99%;background: #f7f7f7;border: 1px solid #e7e7e7;display: block;border-radius: 4px;text-indent: 8px;height: 40px;font-size: 20px;margin-top: 20px;"
Finput.style.cssText = "width: 99%; background: #f7f7f7;border: 1px solid #e7e7e7;display: block;border-radius: 4px;text-indent: 8px;height: 40px;font-size: 20px;"

formBtn.style.cssText = "width: 100%;margin-left: auto;margin-right: auto;background: #105593;color: white;-webkit-appearance: none;border-radius: 4px;margin-top: 20px;height: 40px;font-size: 20px;border: 1px solid transparent;"


// add or set

Finput.setAttribute("placeholder","Enter your Name");
Sinput.setAttribute("placeholder","Enter your Password");

Finput.type = "text";
Sinput.type = "password";

Finput.onfocus = function(){
    Finput.style.outline = "none";
}
Sinput.onfocus = function(){
    Sinput.style.outline = "none";
}


// append
wrapper.append(fivArt);
fivArt.append(fivCont);
fivCont.append(fivTit);
fivTit.append(textFivTit);

fivCont.append(Finput);
fivCont.append(Sinput);
fivCont.append(formBtn);
formBtn.append(textformBtn);


// last part

let footer = document.createElement("footer");
let fotcont = document.createElement("div");

let para = document.createElement("p");
let textpara = document.createTextNode("See source code in :");

let span = document.createElement("a");
let textspan = document.createTextNode("github");

let maker = document.createElement("p");
let textmaker = document.createTextNode("made By Salhi");

// style

footer.style.cssText = "padding: 25px 0;background: rgb(32,32,32);color: #fff;font-size: 17px;text-align: center;font-weight: 300;";
span.style.cssText = "padding: 7px 20px;margin: .5rem 0;color: #0f8cfa;border: 1px solid #0f8cfa;border-radius: 30px;text-decoration: none;font-size: 14px;"

// add or set

span.href = "https://github.com/salhi50";
span.setAttribute("target","_blank");
maker.style.cssText = "padding: 30px 0;border-top: 1px solid #242626;margin-top: 15px;color: #a8a8a8;font-size: 14px;"

// append

wrapper.append(footer);
footer.append(para);
para.append(textpara)

footer.append(span);
footer.append(maker);
maker.append(textmaker)

span.append(textspan)

// fin