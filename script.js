const questions=[
["Which organ pumps blood around the body?",["Lungs","Heart","Liver","Kidneys"],1,"The heart is a muscular pump that drives blood through pulmonary and systemic circulation."],
["The basic unit of life is the…",["Tissue","Organ","Cell","Protein"],2,"Cells are the basic structural and functional units of living organisms."],
["Main site of gas exchange in the lungs?",["Bronchi","Alveoli","Trachea","Diaphragm"],1,"Gas exchange occurs across the thin walls of the alveoli."],
["DNA is a…",["Lipid","Nucleic acid","Mineral","Carbohydrate"],1,"DNA is a nucleic acid that stores hereditary information."],
["Which cells help fight infection?",["RBCs","WBCs","Platelets","Plasma"],1,"White blood cells are key components of the immune system."],
["The brain belongs mainly to the…",["Digestive system","Nervous system","Respiratory system","Skeletal system"],1,"The brain is the central organ of the nervous system."],
["A pH of 3 is…",["Acidic","Neutral","Alkaline","Always salty"],0,"Values below 7 are acidic on the pH scale."],
["Which vitamin can be produced in skin with sunlight exposure?",["Vitamin C","Vitamin D","Vitamin K","Vitamin B12"],1,"UVB exposure can help the skin synthesize vitamin D."],
["Which force keeps planets in orbit?",["Friction","Magnetism","Gravity","Buoyancy"],2,"Gravity provides the attraction that keeps planets in orbit."],
["Which organ filters blood and makes urine?",["Heart","Lung","Kidney","Stomach"],2,"The kidneys filter blood and form urine."],
["Which chamber pumps oxygenated blood into the systemic circulation?",["Right atrium","Right ventricle","Left atrium","Left ventricle"],3,"The left ventricle pumps oxygenated blood into the aorta."],
["What is the functional unit of the kidney?",["Neuron","Nephron","Alveolus","Sarcomere"],1,"The nephron is the kidney's functional filtering unit."],
["Which blood component is primarily responsible for clotting?",["Red cells","White cells","Platelets","Plasma proteins only"],2,"Platelets help form the initial plug during clotting."],
["Which organ is the main site of nutrient absorption?",["Stomach","Small intestine","Large intestine","Esophagus"],1,"Most nutrient absorption occurs in the small intestine."],
["What is homeostasis?",["Rapid growth","Maintaining internal balance","Muscle contraction","Cell division"],1,"Homeostasis is the regulation of internal conditions within suitable ranges."],
["Which structure carries air from the throat toward the lungs?",["Trachea","Aorta","Ureter","Esophagus"],0,"The trachea is the main airway leading toward the bronchi."],
["What is the SI unit of force?",["Joule","Watt","Newton","Pascal"],2,"Force is measured in newtons (N)."],
["Which molecule carries genetic instructions from DNA to ribosomes?",["mRNA","ATP","Glucose","Hemoglobin"],0,"Messenger RNA carries genetic information from DNA to ribosomes."],
["Which pathogen type requires a host cell to replicate?",["Virus","Bacterium","Fungus","Protozoan"],0,"Viruses depend on host cells for replication."],
["Which ECG feature represents ventricular depolarization?",["P wave","QRS complex","T wave","PR interval"],1,"The QRS complex represents ventricular depolarization."]];

const subjects={
Biology:["Cell Biology","Genetics","Human Physiology","Evolution","Ecology","Biotechnology"],
Chemistry:["Atomic Structure","Chemical Bonding","Organic Chemistry","Equilibrium","Thermodynamics","Biochemistry"],
Physics:["Motion","Energy","Waves","Optics","Electricity","Medical Physics"],
Anatomy:["Heart","Brain","Bones","Digestive System","Respiratory System","Nervous System"],
Physiology:["Circulation","Respiration","Nervous System","Homeostasis","Renal Physiology","Endocrine System"],
Microbiology:["Bacteria","Viruses","Fungi","Parasites","Immunity","Infection Control"]};

const topicNotes={
"Cell Biology":"Study cell structure, membranes, organelles and how cells maintain life.",
"Genetics":"Explore DNA, genes, inheritance, mutations and how genetic information is expressed.",
"Human Physiology":"Connect organs and systems to the mechanisms that keep the body functioning.",
"Atomic Structure":"Understand protons, neutrons, electrons, isotopes and electronic configuration.",
"Chemical Bonding":"Learn why atoms bond and how ionic, covalent and metallic bonds differ.",
"Organic Chemistry":"Build the chemistry foundation behind biomolecules and medicines.",
"Motion":"Use position, velocity, acceleration and forces to describe movement.",
"Energy":"Explore work, energy, power and conservation principles.",
"Waves":"Understand frequency, wavelength, sound and how waves carry energy.",
"Optics":"Learn reflection, refraction, lenses and their medical applications.",
"Heart":"Explore chambers, valves, circulation and the electrical activity of the heart.",
"Brain":"Understand major brain regions, neurons, sensory processing and control.",
"Bones":"Study the skeleton, joints, bone structure and movement.",
"Digestive System":"Follow food from ingestion through digestion, absorption and elimination.",
"Circulation":"Connect cardiac output, blood vessels and tissue perfusion.",
"Respiration":"Understand ventilation, gas exchange and oxygen transport.",
"Nervous System":"Explore neurons, signaling, reflexes and coordination.",
"Homeostasis":"Learn how feedback systems keep internal conditions stable.",
"Bacteria":"Study bacterial structure, growth, transmission and prevention.",
"Viruses":"Understand viral structure, replication and host interaction.",
"Fungi":"Learn fungal biology, common infections and prevention.",
"Immunity":"Explore innate and adaptive immune defenses."};

const facts={
Brain:{title:"Brain",emoji:"🧠",function:"Controls thought, movement, sensation, memory and many automatic functions.",clinical:"Changes in speech, strength, coordination or consciousness can be important clinical findings."},
Heart:{title:"Heart",emoji:"🫀",function:"A muscular pump that sends blood through pulmonary and systemic circulation.",clinical:"Heart rate, rhythm, blood pressure and circulation are central to cardiovascular assessment."},
Lungs:{title:"Lungs",emoji:"🫁",function:"Exchange oxygen and carbon dioxide at the alveoli and help regulate acid–base balance.",clinical:"Breathing rate, oxygen saturation and work of breathing are important observations."},
Kidneys:{title:"Kidneys",emoji:"🫘",function:"Filter blood, form urine and help regulate fluid, electrolytes and acid–base balance.",clinical:"Urine output and kidney function are important indicators of hydration and physiology."}};

const cases=[
{title:"“I feel my heart racing.”",text:"A 17-year-old student reports episodes of a fast heartbeat during exam preparation. What should be explored first?",options:["Ask about sleep, caffeine, stress and episode pattern","Ask only about recent injuries","Immediately guess the diagnosis"],answer:0,feedback:"Good clinical thinking. Start with a focused history: timing, triggers, associated symptoms, sleep, stimulants and stress. A real assessment requires a qualified clinician."},
{title:"“I feel short of breath after running.”",text:"A student notices breathlessness after intense exercise. Which next step best supports structured thinking?",options:["Clarify onset, duration, severity and associated symptoms","Assume it is always asthma","Ignore the symptom because exercise was involved"],answer:0,feedback:"Exactly. Clarifying the pattern and associated features is safer than jumping to a diagnosis."},
{title:"“I have a fever.”",text:"A student reports fever and feeling unwell. Which information is most useful to gather first?",options:["Temperature pattern, duration and associated symptoms","Choose an antibiotic immediately","Only ask about their favorite food"],answer:0,feedback:"Good. History comes before treatment decisions. In real life, evaluation depends on age, symptoms, examination and clinical context."},
{title:"“Why am I tired?”",text:"A student has persistent fatigue. What is the strongest first approach?",options:["Explore sleep, diet, activity, duration and other symptoms","Assume the cause is laziness","Take a random medicine"],answer:0,feedback:"Correct. A structured history helps identify patterns and tells a clinician what needs further evaluation."}];

let quizIndex=0,quizScore=0,quizTimer=null,caseIndex=0;

function getState(){return JSON.parse(localStorage.getItem("doctorLifeState")||'{"xp":0,"best":0,"streak":0,"lastDay":"","cases":0}')};
function saveState(s){localStorage.setItem("doctorLifeState",JSON.stringify(s));updateDashboard()};
function touchLearning(){
 const s=getState(),today=new Date().toISOString().slice(0,10);
 if(s.lastDay!==today){const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);s.streak=s.lastDay===yesterday?s.streak+1:1;s.lastDay=today}
 s.xp+=10;saveState(s);
}
function updateDashboard(){
 const s=getState();const level=s.xp>=300?"Clinical Thinker":s.xp>=180?"Future Doctor":s.xp>=80?"Smart Learner":"Starter";
 document.querySelectorAll("#heroXp").forEach(e=>e.textContent=s.xp);
 document.querySelector("#heroStreak").textContent=s.streak;
 document.querySelector("#heroBest").textContent=s.best+"%";
 document.querySelector("#practiceBest").textContent=s.best+"%";
 document.querySelector("#best2").textContent=s.best+"%";
 document.querySelector("#streak2").textContent=s.streak+" 🔥";
 document.querySelector("#casesSolved").textContent=s.cases;
 document.querySelector("#level").textContent=level;
 document.querySelector("#xpLabel").textContent=s.xp+" XP";
 document.querySelector("#scoreBar").style.width=s.best+"%";
 document.querySelector("#xpBar").style.width=Math.min(100,(s.xp%100))+"%";
 document.querySelector("#performanceText").textContent=s.best?("Level: "+level+" · Keep improving your weakest topics."): "Take your first test to unlock your level.";
}
function toggleMenu(){document.querySelector("#mainNav").classList.toggle("open")}
function filterSubjects(){const q=document.querySelector("#subjectSearch").value.toLowerCase();document.querySelectorAll(".subject-card").forEach(c=>c.style.display=c.dataset.subject.toLowerCase().includes(q)?"block":"none")}
function showModal(html){document.querySelector("#modalContent").innerHTML=html;document.querySelector("#modal").hidden=false;document.body.style.overflow="hidden"}
function closeModal(){document.querySelector("#modal").hidden=true;document.body.style.overflow=""}
function openSubject(subject){
 const list=subjects[subject]||[];
 showModal('<span class="pill">LEARNING PATH</span><h2>'+subject+'</h2><p>Choose a topic to open a focused learning card.</p><div class="topic-grid">'+list.map(t=>'<button onclick="openTopic(\''+t.replace(/'/g,"\\'")+'\',\''+subject+'\')">'+t+' →</button>').join("")+'</div>');
}
function openTopic(topic,subject){
 const note=topicNotes[topic]||"Build your foundation, connect the concept to the human body and practise explaining it in your own words.";
 showModal('<span class="pill">'+subject.toUpperCase()+'</span><h2>'+topic+'</h2><p>'+note+'</p><div class="info-hint"><b>Active recall challenge</b><br>Close your notes and explain this topic in three sentences. Then connect it to one real medical example.</div><br><button class="primary" onclick="topicComplete()">Mark topic complete +10 XP</button>');
}
function topicComplete(){touchLearning();closeModal();toast("Topic completed · +10 XP")}
function bodyFact(name){
 const f=facts[name];document.querySelector("#bodyInfo").innerHTML='<span class="pill">BODY EXPLORER</span><h3>'+f.emoji+" "+f.title+'</h3><p><b>Function:</b> '+f.function+'</p><p><b>Clinical connection:</b> '+f.clinical+'</p><div class="info-hint">💡 <b>Active recall:</b> Explain the organ's main function without looking back.</div>';touchLearning();toast(f.title+" explored · +10 XP");
}
function startQuiz(){
 quizIndex=0;quizScore=0;clearInterval(quizTimer);renderQuiz();let seconds=180;quizTimer=setInterval(()=>{seconds--;const t=document.querySelector("#quizTimer");if(t)t.textContent=Math.floor(seconds/60)+":"+String(seconds%60).padStart(2,"0");if(seconds<=0){clearInterval(quizTimer);finishQuiz(true)}},1000);
}
function renderQuiz(){
 const q=questions[quizIndex];showModal('<div class="quiz-top"><span class="pill">QUESTION '+(quizIndex+1)+' / '+questions.length+'</span><span class="timer" id="quizTimer">3:00</span></div><h2>'+q[0]+'</h2><div>'+q[1].map((o,k)=>'<button class="quiz-option" onclick="answerQuiz('+k+')">'+String.fromCharCode(65+k)+'. '+o+'</button>').join("")+'</div><p class="muted">Choose the best answer. Your result and explanations appear at the end.</p>');
}
function answerQuiz(k){const q=questions[quizIndex];if(k===q[2])quizScore++;quizIndex++;if(quizIndex<questions.length){renderQuiz()}else finishQuiz(false)}
function finishQuiz(timeout){
 clearInterval(quizTimer);const pct=Math.round(quizScore/questions.length*100),s=getState();if(pct>s.best)s.best=pct;s.xp+=20;saveState(s);
 showModal('<span class="pill">TEST COMPLETE</span><div class="result-score">'+pct+'%</div><h2>'+(pct>=80?"Excellent work.":pct>=60?"Good progress.":"Keep practising.")+'</h2><p>You scored <b>'+quizScore+'/'+questions.length+'</b> '+(timeout?"before the timer ended. ":"")+'Use your next session to revisit concepts you missed.</p><div class="info-hint">🏆 <b>+20 XP earned.</b> Your best score is saved on this device.</div><br><button class="primary" onclick="closeModal();location.hash=\'progress\'">View my progress →</button>');
}
function caseAnswer(n){
 const c=cases[caseIndex];const result=document.querySelector("#caseResult");
 if(n===c.answer){result.className="case-result";result.innerHTML="✅ <b>Strong choice.</b> "+c.feedback;const s=getState();s.cases=Math.max(s.cases,caseIndex+1);s.xp+=15;saveState(s);toast("+15 XP · Clinical thinking improved")}
 else{result.className="case-result";result.innerHTML="🧠 Not the best first step. "+c.feedback}
 setTimeout(()=>{if(caseIndex<cases.length-1){caseIndex++;renderCase()}},1800)
}
function renderCase(){const c=cases[caseIndex];document.querySelector("#caseNumber").textContent=String(caseIndex+1).padStart(2,"0");document.querySelectorAll(".case-dots i").forEach((d,i)=>d.classList.toggle("active",i===caseIndex));document.querySelector("#caseContent").innerHTML='<span class="pill">CASE #'+String(caseIndex+1).padStart(2,"0")+'</span><h3>'+c.title+'</h3><p>'+c.text+'</p><div class="case-options">'+c.options.map((o,i)=>'<button onclick="caseAnswer('+i+')">'+String.fromCharCode(65+i)+' <span>'+o+'</span></button>').join("")+'</div><div id="caseResult"></div>'}
function futureSkill(title,description){showModal('<span class="pill">FUTURE MEDICINE</span><h2>'+title+'</h2><p>'+description+'</p><div class="info-hint">🚀 <b>Challenge:</b> Find one real-world example of this technology and explain how it could help a patient or healthcare professional.</div><br><button class="primary" onclick="touchLearning();closeModal();toast(\'Skill explored · +10 XP\')">Complete exploration +10 XP</button>')}
function dailyMission(){const missions=["Explore one organ in Body Lab.","Complete a 20-question practice test.","Open a subject and finish one topic.","Explore one Future Medicine skill.","Solve a clinical case and explain your reasoning."];const day=new Date().getDate()%missions.length;showModal('<span class="pill">TODAY\'S MISSION</span><h2>One action. One step forward.</h2><p>'+missions[day]+'</p><div class="info-hint">Consistency beats cramming. Complete one focused action today and come back tomorrow for another mission.</div><br><button class="primary" onclick="touchLearning();closeModal();toast(\'Mission started · +10 XP\')">Start mission →</button>')}
function toast(message){const t=document.querySelector("#toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-window.innerHeight;document.querySelector("#scrollProgress").style.width=(window.scrollY/h*100)+"%"});
window.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
initDoctorLife();
function el(id){return document.getElementById(id)}
function updateDashboard(){
 const s=getState(),level=s.xp>=300?"Clinical Thinker":s.xp>=180?"Future Doctor":s.xp>=80?"Smart Learner":"Starter";
 const set=(id,v)=>{const e=el(id);if(e)e.textContent=v}; const width=(id,v)=>{const e=el(id);if(e)e.style.width=v};
 set("heroXp",s.xp);set("heroStreak",s.streak);set("heroBest",s.best+"%");set("practiceBest",s.best+"%");set("best2",s.best+"%");set("streak2",s.streak+" 🔥");set("casesSolved",s.cases);set("level",level);set("xpLabel",s.xp+" XP");width("scoreBar",s.best+"%");width("xpBar",Math.min(100,s.xp%100)+"%");set("performanceText",s.best?("Level: "+level+" · Keep improving your weakest topics."):"Take your first test to unlock your level.");
}
function startQuiz(){quizIndex=0;quizScore=0;window.quizSeconds=180;clearInterval(quizTimer);renderQuiz();quizTimer=setInterval(()=>{window.quizSeconds--;const t=el("quizTimer");if(t)t.textContent=Math.floor(window.quizSeconds/60)+":"+String(window.quizSeconds%60).padStart(2,"0");if(window.quizSeconds<=0){clearInterval(quizTimer);finishQuiz(true)}},1000)}
function renderQuiz(){const q=questions[quizIndex];showModal('<div class="quiz-top"><span class="pill">QUESTION '+(quizIndex+1)+' / '+questions.length+'</span><span class="timer" id="quizTimer">'+Math.floor((window.quizSeconds||180)/60)+':'+String((window.quizSeconds||180)%60).padStart(2,"0")+'</span></div><h2>'+q[0]+'</h2><div>'+q[1].map((o,k)=>'<button class="quiz-option" onclick="answerQuiz('+k+')">'+String.fromCharCode(65+k)+'. '+o+'</button>').join("")+'</div><p class="muted">Choose the best answer. Your result and explanations appear at the end.</p>')}
function answerQuiz(k){const q=questions[quizIndex];if(k===q[2])quizScore++;quizIndex++;if(quizIndex<questions.length)renderQuiz();else finishQuiz(false)}
function selectModel(name){const f=facts[name],info=el("modelInfo");if(!f||!info)return;info.innerHTML='<span class="pill">3D ORGAN MODEL</span><h2>'+f.emoji+' '+f.title+'</h2><p><b>Function:</b> '+f.function+'</p><p><b>Clinical connection:</b> '+f.clinical+'</p><div class="info-hint">💡 <b>Active recall:</b> Explain the organ's main function in your own words.</div>';touchLearning();toast(f.title+' model explored · +10 XP')}
function initDoctorLife(){updateDashboard();if(el("caseContent"))renderCase()}

function toggleMenu(){const n=document.querySelector('#mainNav')||document.querySelector('.site-header nav');if(n)n.classList.toggle('open')}
