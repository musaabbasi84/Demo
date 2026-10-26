var $=function(i){return document.getElementById(i)};
var D=[
{n:"United Kingdom",f:"🇬🇧",t:"Quality Education + Great Opportunities",g:"linear-gradient(#7fb2e5,#c9defa)",e:"🎡",fee:"£12,000 – £38,000 / yr",visa:"Student visa (sponsored by a licensed university)",work:"Up to 20 hrs/week in term; Graduate Route stay 2 yrs (3 for PhD)",in:"Sept, Jan",lang:"IELTS UKVI / equivalent",u:["University of Oxford","University of Manchester","University of Edinburgh"],schengen:0},
{n:"Germany",f:"🇩🇪",t:"Affordable Education & Strong Job Market",g:"linear-gradient(#e8a85b,#f6d9a8)",e:"🏛️",fee:"€0 – €3,000 / yr (public)",visa:"German national student visa + residence permit",work:"140 full / 280 half days per year; 18-month job-search permit",in:"Oct (winter), Apr (summer)",lang:"IELTS / TestDaF / DSH",u:["TU Munich","Heidelberg University","RWTH Aachen"]},
{n:"France",f:"🇫🇷",t:"Art, Science & Global Business",g:"linear-gradient(#8fb7f0,#f3c9d8)",e:"🗼",fee:"€2,800 – €4,000 / yr (public, non-EU)",visa:"Long-stay student visa (VLS-TS)",work:"Around 20 hrs/week",in:"Sept, Jan",lang:"IELTS / DELF / TCF",u:["Sorbonne University","Sciences Po","Paris-Saclay University"]},
{n:"Italy",f:"🇮🇹",t:"Design, Heritage & Innovation",g:"linear-gradient(#f2a56b,#fbd9a8)",e:"🏟️",fee:"€1,000 – €4,000 / yr (public)",visa:"National study visa (type D) + permesso di soggiorno",work:"Around 20 hrs/week",in:"Sept/Oct, Feb",lang:"IELTS / CELI / CILS",u:["Politecnico di Milano","University of Bologna","Sapienza University of Rome"]},
{n:"Spain",f:"🇪🇸",t:"Sunny Campuses & Vibrant Life",g:"linear-gradient(#f5c04a,#f08a4b)",e:"⛪",fee:"€1,000 – €4,000 / yr (public)",visa:"National student visa + TIE card",work:"Up to 30 hrs/week permitted",in:"Sept, Feb",lang:"IELTS / DELE",u:["University of Barcelona","Complutense Madrid","Pompeu Fabra"]},
{n:"Netherlands",f:"🇳🇱",t:"English Programs & Open Culture",g:"linear-gradient(#7cc6e8,#cfeaf5)",e:"🌷",fee:"€8,000 – €20,000 / yr",visa:"MVV + residence permit (via university)",work:"16 hrs/week or full-time in summer; orientation year after graduation",in:"Sept, Feb",lang:"IELTS / TOEFL",u:["TU Delft","University of Amsterdam","Utrecht University"]},
{n:"Switzerland",f:"🇨🇭",t:"Elite Research & Innovation",g:"linear-gradient(#9cc3e6,#e6f0f8)",e:"🏔️",fee:"CHF 1,000 – 4,000 / yr (public)",visa:"National D visa + cantonal permit",work:"Up to 15 hrs/week after first 6 months",in:"Sept, Feb",lang:"IELTS / TOEFL / German-French",u:["ETH Zurich","EPFL","University of Zurich"]},
{n:"Sweden",f:"🇸🇪",t:"Innovation & Work-Life Balance",g:"linear-gradient(#7fb5de,#f5e49a)",e:"🦌",fee:"SEK 100,000 – 300,000 / yr",visa:"Residence permit for studies",work:"No fixed weekly hour limit",in:"Aug/Sept, Jan",lang:"IELTS / TOEFL",u:["KTH Royal Institute","Lund University","Uppsala University"]}];
var SC=["Austria","Belgium","Croatia","Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Italy","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Netherlands","Norway","Poland","Portugal","Slovakia","Slovenia","Spain","Sweden","Switzerland"];
var ALL=["United Kingdom"].concat(SC);
ALL.forEach(function(c){["sc","uc","cco"].forEach(function(id){var o=document.createElement("option");o.textContent=o.value=c;$(id).appendChild(o)})});
function find(n){return D.filter(function(d){return d.n===n})[0]}
/* cards */
var rail=$("rail");
D.forEach(function(d){var a=document.createElement("button");a.className="cc";a.dataset.n=d.n.toLowerCase();
a.innerHTML='<div class="ph" style="background:'+d.g+'">'+d.e+'<span class="fl">'+d.f+'</span></div><div class="in"><h4>'+d.n+'</h4><p>'+d.t+'</p><span class="go">→</span></div>';
a.onclick=function(){info(d.n)};rail.appendChild(a)});
function sr(n){rail.scrollBy({left:n*340,behavior:"smooth"})}
$("pv").onclick=function(){sr(-1)};$("nx").onclick=function(){sr(1)};
function filter(t){t=(t||"").toLowerCase();var n=0;[].forEach.call(rail.children,function(e){var m=!t||e.dataset.n.indexOf(t)>-1;e.classList.toggle("hide",!m);if(m)n++});$("none").style.display=n?"none":"block"}
$("all").onclick=function(){$("q").value="";filter("");rail.scrollTo({left:0})};
$("sf").onsubmit=function(e){e.preventDefault();var c=$("sc").value,t=$("q").value.trim();
if(c&&!find(c)){$("cco").value=c;$("clv").value=$("sl").value||"Master's";go("contact");return}
filter(c||t);go("countries")};
function go(id){$(id).scrollIntoView({behavior:"smooth"})}
/* modals */
function show(h){$("mc").innerHTML=h;$("md").classList.add("on")}
function info(n){var d=find(n);
show('<div style="font-size:42px">'+d.f+'</div><h3>Study in '+d.n+'</h3><p style="color:var(--mu)">'+d.t+'</p><div class="kv"><div><small>Tuition</small>'+d.fee+'</div><div><small>Intakes</small>'+d.in+'</div><div><small>Visa</small>'+d.visa+'</div><div><small>Work rights</small>'+d.work+'</div><div style="grid-column:1/-1"><small>Language tests</small>'+d.lang+'</div></div><b>Popular universities</b><ul>'+d.u.map(function(u){return"<li>"+u+"</li>"}).join("")+'</ul><button class="btn g" onclick="enq(\''+d.n+'\')">Enquire about '+d.n+'</button>')}
function enq(c){$("md").classList.remove("on");$("cco").value=c;go("contact")}
function openForm(){show('<h3>Get Started</h3><p style="color:var(--mu);font-size:14px">Tell us where you want to study.</p><div id="fm"><input id="fn" placeholder="Full name"><input id="fe" type="email" placeholder="Email"><select id="fc">'+ALL.map(function(c){return"<option>"+c+"</option>"}).join("")+'</select><div class="err" id="er"></div><button class="btn g" style="width:100%" id="sb">Submit</button></div>');
$("sb").onclick=function(){var n=$("fn").value.trim(),e=$("fe").value.trim();
if(n.length<2)return $("er").textContent="Please enter your name.";
if(!/^\S+@\S+\.\S+$/.test(e))return $("er").textContent="Please enter a valid email.";
$("fm").innerHTML='<div style="text-align:center;padding:20px 0"><div style="font-size:42px">✅</div><b>Thank you, '+n.replace(/[<>&]/g,"")+'!</b><p style="color:var(--mu)">A counsellor will contact you shortly.</p></div>'}}
[].forEach.call(document.querySelectorAll("[data-open]"),function(b){b.onclick=openForm});
$("mx").onclick=function(){$("md").classList.remove("on")};$("md").onclick=function(e){if(e.target===this)this.classList.remove("on")};
document.addEventListener("keydown",function(e){if(e.key==="Escape")$("md").classList.remove("on")});
/* universities */
function renderU(){var t=$("us").value.toLowerCase(),c=$("uc").value,h="",n=0;
D.forEach(function(d){d.u.forEach(function(u){if((!t||u.toLowerCase().indexOf(t)>-1)&&(!c||c===d.n)){n++;h+='<div class="un"><b>'+u+'</b><small>'+d.f+' '+d.n+'</small><button onclick="info(\''+d.n+'\')">View country details →</button></div>'}})});
$("ul").innerHTML=h;$("un0").style.display=n?"none":"block"}
$("us").oninput=renderU;$("uc").onchange=renderU;renderU();
/* faq */
[["Which countries do you cover?","The United Kingdom and all 27 Schengen countries, with featured guides for the most popular destinations."],["Can I work while studying?","Yes in most countries, within limits that differ by country and visa. Open any country card to see typical work rights."],["Do I need one visa for all Schengen countries?","No. You apply to the country where you will study. Once resident there you can travel in the Schengen Area under its rules."],["Are there scholarships?","Yes. Many universities, governments and programs offer funding, and counsellors help you find and apply."],["How early should I apply?","Start 9–12 months before your intake to allow time for tests, documents, offers and visas."]].forEach(function(q){var d=document.createElement("div");d.className="fq";d.innerHTML='<button><b>'+q[0]+'</b><span>+</span></button><div>'+q[1]+'</div>';d.firstChild.onclick=function(){d.classList.toggle("on")};$("fa").appendChild(d)});
/* contact form */
$("cf").onsubmit=function(e){e.preventDefault();var n=$("cn").value.trim(),m=$("ce").value.trim();
if(n.length<2)return $("ce2").textContent="Please enter your name.";
if(!/^\S+@\S+\.\S+$/.test(m))return $("ce2").textContent="Please enter a valid email.";
$("cf").innerHTML='<div class="f" style="grid-column:1/-1;text-align:center;padding:30px 0"><div style="font-size:42px">✅</div><b>Message received!</b><p style="color:var(--mu)">We will reply to '+m.replace(/[<>&]/g,"")+' soon.</p></div>'};
/* header */
var hd=$("hd");function sy(){hd.classList.toggle("s",scrollY>40)}addEventListener("scroll",sy);sy();
$("bg").onclick=function(){var o=$("lk").classList.toggle("on");hd.classList.toggle("m",o)};
[].forEach.call(document.querySelectorAll(".links a"),function(a){a.onclick=function(){$("lk").classList.remove("on");hd.classList.remove("m")}});
var secs=["home","countries","universities","process","about","faq","contact"];
addEventListener("scroll",function(){var cur="home";secs.forEach(function(s){if($(s).getBoundingClientRect().top<140)cur=s});[].forEach.call(document.querySelectorAll(".links a"),function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+cur)})});
$("th").onclick=function(){var r=document.documentElement,dk=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=dk?"light":"dark"};
/* testimonials */
var T=[["Apply Route made my dream of studying in the UK a reality. Their guidance, support and professionalism were outstanding throughout the process.","Ayesha Khan","University of Manchester, UK"],["From my TU Munich admission to the German student visa, every step was clear and stress-free.","Hamza Ali","TU Munich, Germany"],["They found me a scholarship in the Netherlands I never knew existed. Truly life-changing support.","Sara Ahmed","University of Amsterdam, NL"]],ti=0;
function showT(){var t=T[ti];$("tq").textContent=t[0];$("tn").textContent=t[1];$("tu").textContent=t[2]}
$("tx").onclick=function(){ti=(ti+1)%T.length;showT()};$("tp").onclick=function(){ti=(ti+T.length-1)%T.length;showT()};showT();setInterval(function(){ti=(ti+1)%T.length;showT()},8000);
$("pl").onclick=function(){this.textContent=this.textContent==="▶"?"❚❚":"▶"};
/* reveal + counters */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("in")})},{threshold:.1});
[].forEach.call(document.querySelectorAll(".rv"),function(e){io.observe(e)});
[].forEach.call(document.querySelectorAll("[data-n]"),function(el){var n=+el.dataset.n,i=0,s=Math.ceil(n/60);var t=setInterval(function(){i=Math.min(n,i+s);el.textContent=i.toLocaleString()+"+";if(i>=n)clearInterval(t)},25)});
