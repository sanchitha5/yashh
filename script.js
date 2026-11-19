var $=function(i){return document.getElementById(i)};
var CARDS=[["images/photo1.jpg", "Happy Men\u2019s Day, handsome!! I hope you never stop believing in yourself. You deserve to see all the hard work turn into something beautiful. Keep shining, my man!! \ud83d\udc97"], ["images/photo2.jpg", "I hope you know you don\u2019t always have to be the strong one or pretend everything is okay. You deserve to be understood, heard and cared for too \ud83e\udd70"], ["images/photo3.jpg", "To my personal headache, favourite human and forever handsome boy!! Thank you for stealing my attention, making me smile randomly, and being the person I want to annoy for the rest of my life \ud83e\udef6\ud83d\ude05"], ["images/photo4.jpg", "Here\u2019s to the man you\u2019re becoming, the dreams you\u2019re chasing and the battles you\u2019re silently winning. I hope you achieve things your younger self could only dream of. Always aim higher!!"], ["images/photo5.jpg", "To the man who holds a very special place in my heart. Out of all the people in this world, I\u2019m grateful I get to share my little world with you \ud83d\ude18"]],LETTER="Happy Men\u2019s Day, Yash!!\n\nI hope you always know how special you are to me. I know life isn\u2019t always easy and you have your own battles, dreams and worries, but I hope you never feel alone in any of it.\n\nToday is all about celebrating you, your strength, your kindness, and the quiet ways you show up for the people around you.\n\nThank you for the support you give without being asked, the laughs you bring, and the heart you put into everything you do. You make life better just by being in it.\n\nMay this day remind you how truly valued, respected, and appreciated you are, today and always.\n\nI believe in you, and I\u2019m genuinely grateful to have you in my life. No matter how life changes, I\u2019ll always wish the best for you. Keep being you, my favorite person. I love you moreee \ud83e\udec2\ud83d\udc97";
var COLORS=["#f7d86a,#f2b94b","#f26b6b,#d8434f","#b57bec,#8b4fd6","#f29a74,#e0704f","#f06a93,#d83e72"];
var left=0,done=false;
function upd(){$("count").textContent=left>0?left+(left===1?" surprise":" surprises")+" remaining":"All popped!"}
function start(){
  done=false;$("final").innerHTML="";var sky=$("sky");sky.innerHTML="";left=CARDS.length;upd();
  var cols=3,rows=Math.ceil(CARDS.length/cols);
  CARDS.forEach(function(it,i){
    var c=i%cols,r=Math.floor(i/cols),b=document.createElement("button"),col=COLORS[i%COLORS.length].split(",");
    b.className="balloon";b.setAttribute("aria-label","Balloon "+(i+1));
    b.style.background="radial-gradient(circle at 35% 30%,"+col[0]+","+col[1]+")";b.style.color=col[1];
    b.style.left=(c+.5)*(100/cols)+(Math.random()*8-4)+"%";b.style.top=(r*(100/rows)+Math.random()*6)+"%";
    b.style.marginLeft="-31px";b.style.animationDelay=(-Math.random()*3)+"s";
    b.onclick=function(){pop(b,it,col[1])};sky.appendChild(b);
  });
}
function pop(b,it,col){
  var rc=b.getBoundingClientRect(),x=rc.left+rc.width/2,y=rc.top+rc.height/2;b.classList.add("pop");
  for(var i=0;i<14;i++){var p=document.createElement("span");p.className="bit";p.style.background=col;p.style.left=x+"px";p.style.top=y+"px";document.body.appendChild(p);
    var a=Math.PI*2*i/14,d=40+Math.random()*50;
    p.animate([{transform:"translate(0,0)",opacity:1},{transform:"translate("+Math.cos(a)*d+"px,"+Math.sin(a)*d+"px)",opacity:0}],{duration:520,easing:"ease-out"}).onfinish=(function(e){return function(){e.remove()}})(p);}
  setTimeout(function(){card(it)},220);left--;upd();
}
function card(it){
  var img=$("pimg");if(it[0]){img.src=it[0];img.style.display="block"}else{img.removeAttribute("src");img.style.display="none"}
  $("ptxt").textContent=it[1];$("pol").style.setProperty("--r",(Math.random()*10-5)+"deg");$("veil").classList.add("on");$("close").focus();
}
function closeCard(){$("veil").classList.remove("on");if(left===0&&!done)finale()}
$("close").onclick=closeCard;$("veil").onclick=function(e){if(e.target===this)closeCard()};
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&$("veil").classList.contains("on"))closeCard()});
function finale(){
  done=true;var h=document.createElement("div");h.className="letter";
  var t=document.createElement("h2");t.textContent="Happy Men’s Day, Yash ✨";h.appendChild(t);h.appendChild(document.createTextNode(LETTER));
  $("final").appendChild(h);h.scrollIntoView({behavior:"smooth",block:"center"});
  var cs=["#f7d86a","#f26b6b","#b57bec","#6ec1ff","#f06a93","#4ddb9a"];
  for(var i=0;i<60;i++){var c=document.createElement("span");c.className="confetti";c.style.left=Math.random()*100+"vw";c.style.background=cs[i%cs.length];
    c.style.animationDuration=(2.5+Math.random()*2.5)+"s";c.style.animationDelay=Math.random()*.8+"s";document.body.appendChild(c);
    setTimeout((function(e){return function(){e.remove()}})(c),6500);}
}
$("replay").onclick=start;$("open").onclick=function(){$("intro").classList.remove("on");$("play").classList.add("on");window.scrollTo(0,0);start()};
