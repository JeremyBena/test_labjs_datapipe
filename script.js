// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study_program_ec_who_said_what_paradigm_test_datapipe",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "study_program_EC_who_said_what_paradigm_test_datapipe",
    "description": "Specificity of memory for unconditioned stimuli in Evaluative Conditioning procedures: A Multinomial Processing Tree modeling approach -- Experiment 1.",
    "repository": "",
    "contributors": "Karoline Bading\nJérémy Béna\nKlaus Rothermund\n"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Bildmarke_black_8cm.jpg\"] }",
          "name": ""
        },
        {
          "type": "text",
          "title": "\u003Ccenter\u003EConsent form to take part in the study entitled “impressions of novel objects” conducted online on Prolific\u003C\u002Fcenter\u003E",
          "content": "\u003Cp\u003EDear participant,\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EWe are researchers from the Friedrich-Schiller-Universität Jena (Germany) and from the Université catholique de Louvain (Belgium). We are conducting a research study to examine how we form impressions of novel objects. Participation in this study will involve completing a survey. Your involvement will require about 15 minutes. You will receive £ 2.25 (~ $ US 2.80) for participating.\u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EThere are no known or anticipated risks to you for participating. Although this study will not benefit you personally, we hope that our results will add to the knowledge about psychology and evaluative learning in particular.\u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EPlease do note that some of the pictures that you will be exposed to can be of a disturbing nature (including, but not limited to: cockroaches, accidents, fire). \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EThe researcher will not know your name, and no identifying information will be connected to your survey answers in any way. The survey is therefore anonymous.\u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EYour responses will be numbered and stored on a password-protected computer hard drive. The information you provide will be kept until publication. A data file containing your anonymous responses (without your Prolific ID) will be stored in a secure online archive (i.e., the Open Science Framework). This data file will be available to other researchers without time limit. \u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EParticipation in this study is completely voluntary. You are free to decline to participate, to end participation at any time for any reason, or to refuse to answer any individual question without penalty or loss of compensation.\u003C\u002Fp\u003E\n \n\u003Cp style=\"text-align: justify;\"\u003EIf you want a copy of the consent form, click on the \"Download consent form\" button below (it will open a new tab in your browser; then go back to the experiment tab):\u003C\u002Fp\u003E\n\n\u003Ccenter\u003E\n\u003Cbutton type=\"submit\" onclick=\"window.open('${ 'static\u002Fconsent_form_online.pdf'}')\"\u003EDownload consent form\u003C\u002Fbutton\u003E\n\u003C\u002Fcenter\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EDo you understand this consent form, agree with it, and want to participate in the study?\u003C\u002Fp\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_yes\" name=\"consent\" value=\"1\" onclick=\"document.getElementById('end').click()\" required\u003E\r\n  \u003Clabel for=\"consent_yes\"\u003EYes, I understand, I agree, and I want to participate\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_no\" name=\"consent\" value=\"0\" onclick=\"document.getElementById('end').click()\"\u003E\r\n  \u003Clabel for=\"consent_no\"\u003ENo, I do not want to participate\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"end\"\u003ENext!\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Ccenter\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cp style=\"text-align: justify;\"\u003E\u003Cb\u003EInvestigators:\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EDr. Karoline Bading, Friedrich-Schiller-Universität Jena \r\n\u003Cbr\u003E\u003Ci\u003EFriedrich Schiller University Jena, 07743 Jena, Germany\u003C\u002Fi\u003E\r\n\u003Cbr\u003E karoline.bading@uni-jena.de\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EDr. Jérémy Béna, UCLouvain\r\n\u003Cbr\u003E jeremy.bena@uclouvain.be\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EProf. Klaus Rothermund, Friedrich-Schiller-Universität Jena\r\n\u003Cbr\u003E klaus.rothermund@uni-jena.de\u003C\u002Fp\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {
        "Bandeau+new+logo+2019.jpg": "embedded\u002F5ffb7db9f15ad3b748ba63804367e87b2d52bf35af7d1cc696d84ef88aad1724.jpg",
        "Bildmarke_black_8cm.jpg": "embedded\u002F8d8205d13605ad5501ddcda7ec381eee3d98b9baf404875950775025a8c6f1bc.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
// retrieve prolific pic
if (typeof jatos !== "undefined") {
   this.data.prolific_pid = jatos.urlQueryParameters.PROLIFIC_PID;
}

//this.parameters.n_learn = 72 //24*3=72 
this.parameters.n_mem = 48 //48 but 6 for test
this.parameters.n_ratings = 48 //48 but 6 for test

const nonwords_cs = ['botsy', 'botuyn', 'frask', 'furasti', 'hilejin', 'hiwawa',
'jaciyn','kiwehon','larnist','laumens','medan','molkate','nalber','noste',
'obacu','permife','pimuide','schese','sleshen','tewok','ubajec','umeuken',
'uwimor','yosud','uhnong','ikzunt','banzon','doscho','offukt','ursitz','gowann',
'kibono','muoror','novuui','polust','plonim','sprong','virlog','zofoll',
'oesgubi','ampfong','fuhrrud','fonstir','faloilo','godacht','kumutoa','kantekt',
'misukor','plistuk','stodeen','sebjukt','trupfan','emkruas','imstind']

const pos_us = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12']
 
const neg_us = ['n1','n2','n3','n4','n5','n6','n7','n8','n9','n10','n11','n12']

var us_pos = this.random.shuffle(pos_us)
var us_neg = this.random.shuffle(neg_us)
var cs_nonwords = this.random.shuffle(nonwords_cs)
var us_valences = ['positive','negative','dist']
var na_vec = ['NA']

var triallist = [];
var dists = [];

//positive USs
for (var i=0 ; i < 12; i++) {
  console.log(us_pos)
  console.log(us_neg)
  triallist[i] = new Object();
// fixation cross trial?
  triallist[i].us_valence = us_valences[0];
  //cs and us
  triallist[i].cs = cs_nonwords[i];
  triallist[i].us = us_pos[i];
  //idmem options: shuffle positions
  var pos = this.random.shuffle([0,1,2,3,4,5,6,7])
  //first select targetpos
  triallist[i].idtarg = pos[0]
  // assign target and distracter images
  dists_pos = us_pos.slice(0,12);
  console.log(dists_pos);
  dists_pos.splice(i,1);
  console.log(dists_pos);
  dists_neg = us_neg.slice(0,12)
  console.log(dists_neg);
  dists_pos = this.random.shuffle(dists_pos);
  console.log(dists_pos);
  dists_neg = this.random.shuffle(dists_neg);
  console.log(dists_neg);
  dists_pos = dists_pos.slice(0,3);
  console.log(dists_pos);
  dists_neg = dists_neg.slice(0,4);
  console.log(dists_neg);
  dists = dists_pos.concat(dists_neg);
  console.log(dists);
  dists = this.random.shuffle(dists);
  console.log(dists);
  triallist[i].uss = new Array;
  triallist[i].uss[pos[0]] = triallist[i].us;
  triallist[i].uss[pos[1]] = dists[0];
  triallist[i].uss[pos[2]] = dists[1];
  triallist[i].uss[pos[3]] = dists[2];
  triallist[i].uss[pos[4]] = dists[3];
  triallist[i].uss[pos[5]] = dists[4];
  triallist[i].uss[pos[6]] = dists[5];
  triallist[i].uss[pos[7]] = dists[6];
};

//negative USs
for (var i=12 ; i < 24; i++) {
  triallist[i] = new Object();
  // fixation cross trial?
  triallist[i].us_valence = us_valences[1];
  //cs and us (remove 'static/' to reduce data file size)
  triallist[i].cs = cs_nonwords[i];
  triallist[i].us = us_neg[i-12];
  //idmem options: shuffle positions
  var pos = this.random.shuffle([0,1,2,3,4,5,6,7])
  //first select targetpos
  triallist[i].idtarg = pos[0]
  // assign target and distracter images
  dists_neg = us_neg.slice(0,12);
  dists_neg.splice(i-12,1);
  dists_pos = us_pos.slice(0,12);
  dists_neg = this.random.shuffle(dists_neg);
  dists_pos = this.random.shuffle(dists_pos);
  dists_neg = dists_neg.slice(0,3);
  dists_pos = dists_pos.slice(0,4);
  dists = dists_pos.concat(dists_neg);
  dists = this.random.shuffle(dists);
  triallist[i].uss = new Array;
  triallist[i].uss[pos[0]] = triallist[i].us;
  triallist[i].uss[pos[1]] = dists[0];
  triallist[i].uss[pos[2]] = dists[1];
  triallist[i].uss[pos[3]] = dists[2];
  triallist[i].uss[pos[4]] = dists[3];
  triallist[i].uss[pos[5]] = dists[4];
  triallist[i].uss[pos[6]] = dists[5];
  triallist[i].uss[pos[7]] = dists[6];
};

//new CSs
for (var i=24 ; i < 48; i++) {
  triallist[i] = new Object();
  // fixation cross trial?
  triallist[i].us_valence = us_valences[2];
  //cs and us (remove 'static/' to reduce data file size)
  triallist[i].cs = cs_nonwords[i];
  triallist[i].us = na_vec[0];
  //idmem options: shuffle positions
  var pos = this.random.shuffle([0,1,2,3,4,5,6,7])
  // assign target and distracter images
  dists_pos = us_pos.slice(0,12);
  dists_neg = us_neg.slice(0,12);
  dists_pos = this.random.shuffle(dists_pos);
  dists_neg = this.random.shuffle(dists_neg);
  dists_pos = dists_pos.slice(0,4);
  dists_neg = dists_neg.slice(0,4);
  dists = dists_pos.concat(dists_neg);
  dists = this.random.shuffle(dists);
  triallist[i].uss = new Array;
  triallist[i].uss[pos[0]] = dists[0];
  triallist[i].uss[pos[1]] = dists[1];
  triallist[i].uss[pos[2]] = dists[2];
  triallist[i].uss[pos[3]] = dists[3];
  triallist[i].uss[pos[4]] = dists[4];
  triallist[i].uss[pos[5]] = dists[5];
  triallist[i].uss[pos[6]] = dists[6];
  triallist[i].uss[pos[7]] = dists[7];
};

triallist_learning = triallist.slice(0,24)

if(typeof(jatos) != 'undefined'){
 //jatos.studySessionData.triallist = triallist;
 jatos.studySessionData.triallist_learning = triallist_learning;
 jatos.studySessionData.triallist = triallist;
} else {  
  this.parent.parameters.triallist_learning = triallist_learning;
  this.parent.parameters.triallist = triallist;
}

console.log(triallist_learning)
console.log(triallist)
}
      },
      "title": "consent",
      "width": "l"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 771.4,
          "height": 101.25,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "As you do not wish to participate in this study, please press the Esc key \nand return your submission on Prolific by selecting the 'Stop without completing' button.\n\nThank you for your comprehension.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "if_consent_no",
      "tardy": true,
      "skip": "${this.state.consent!=0}"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "full_screen",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "",
          "hint": "",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "if_consent_yes",
          "tardy": true,
          "skip": "${this.state.consent!= 1}",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Before you start...",
                  "content": "\u003Cp\u003EBefore you start, please switch off phone\u002Fe-mail\u002Fmusic so you can focus on this study.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAlso, make sure you are using a computer  to take part in this study.\u003C\u002Fp\u003E\n\n\u003Cp\u003EThank you!\u003C\u002Fp\u003E"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cform\u003E\r\n\u003Cdiv id=\"weiterdiv\"\u003E\u003Cbutton id=\"end\"\u003EStart!\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fform\u003E\r\n\u003C\u002Fcenter\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Los geht's!",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "before_you_start",
              "width": "l"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 782.68,
                  "height": 232.33,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "Thank you very much for your participation!\n\nYour voluntary participation makes an important contribution to a developing\nbody of knowledge in psychological science.\n\nWithout volunteer participants like you, the research we are doing would not be possible \nand we want to thank you for this contribution.\n\nPress the spacebar to continue.",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": "welcome_end"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "welcome"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 622.53,
                  "height": 179.9,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "The experiment consists of three parts and will take about 15 minutes.\n\nPlease read the following instructions attentively and perform all tasks \ncarefully and with due focus.\n\n\nPress the spacebar to continue.",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": "general_info_end"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "general_info"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 720.37,
                  "height": 232.33,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "In the first part of the experiment you will be presented with nonword-image pairs.\n\nThe nonword will always be presented on the right,\nand the image will always be presented on the left.\n\nYour task is simply to pay close attention to each nonword-image pair.\n\n\nPress the spacebar to continue with the instructions.",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": "learning_instructions_1"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "learning_instructions_1"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 512.49,
                  "height": 206.11,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "Next, you will be presented with the nonword-image pairs.\n\nPlease pay close attention to each pair. \n\nThis part of the experiment will take about 2.5 minutes.\n\n\nPress the spacebar to start the task.",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": "learning_instructions_2"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "learning_instructions_2"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [],
              "sample": {
                "mode": "draw",
                "n": "72"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
if(typeof(jatos) != 'undefined'){
  this.options.templateParameters = jatos.studySessionData.triallist_learning;
} else {
  this.options.templateParameters = this.parent.parameters.triallist_learning;
}
}
              },
              "title": "learning_loop",
              "tardy": true,
              "indexParameter": "count_trial_learning",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
//remove mouse
document.body.style.cursor = 'none' 
}
                },
                "title": "learning_sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 125,
                        "top": 0,
                        "angle": 0,
                        "width": 250,
                        "height": 200,
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${ 'static\u002F' + this.parameters.us + '.jpg' }"
                      },
                      {
                        "type": "i-text",
                        "left": -125,
                        "top": 0,
                        "angle": 0,
                        "width": 386.86,
                        "height": 45.2,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${ this.parameters.cs}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "40",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "learning_trial_option1",
                    "timeout": "1000"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "blank_learning",
                    "timeout": "1000"
                  }
                ]
              }
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 596.3,
                  "height": 179.9,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "The first part of the experiment is now finished!\n\nYou have now seen all nonword-image pairs and may continue with\nthe second part of the experiment.\n\n\nPress the spacebar to continue.",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "20",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": "learning_end"
              },
              "parameters": {},
              "messageHandlers": {
                "commit": function anonymous(
) {
//show mouse again
document.body.style.cursor = 'default'
}
              },
              "title": "learning_end"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "order": "eval_first"
                },
                {
                  "order": "mem_first"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": "1"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "mem_eval_loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "mem_eval_sequence",
                "content": [
                  {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "mem_first_sequence",
                    "skip": "${this.parameters.order != 'mem_first'}",
                    "content": [
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 798.2,
                            "height": 337.19,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "In the second part of the experiment you will be presented with individual nonwords.\n\nSome of these nonwords were part of the previously presented pairs.\n\nOther nonwords will be new: they were not part of the nonword-image pairs you saw in the\nprevious task.\n\nFor each nonword, please indicate whether it is\n\"old\" (i.e., part of the previously presented nonword-image pairs) or\n\"new\" (i.e., not part of the previously presented nonword-image pairs).\n\n\nPress the spacebar to continue.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "memory_instructions_1"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "memory_instructions_1"
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 782.42,
                            "height": 363.41,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Whenever you classify a nonword as \"old\", you will be asked to perform a second task.\n\nIn this second task, you will be presented with eight images. \nYour task will be to select the image with which the nonword was previously paired with.\n\nIf you can remember the paired image, click on it and then click on the \"continue\" button \nat the bottom of the screen.\n\nIf you cannot remember the previously paired image, try to guess the correct one. \nAgain, click on the image corresponding to your guess and then on the \"continue\" button\nat the bottom of the screen.\n\n\nReady? Then press the spacebar to continue.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "memory_instructions_2"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "memory_instructions_2"
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [],
                        "sample": {
                          "mode": "draw-shuffle",
                          "n": "${Math.min(48, this.parameters.n_mem)}"
                        },
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {
                          "before:prepare": function anonymous(
) {
if(typeof(jatos) != 'undefined'){
  this.options.templateParameters = jatos.studySessionData.triallist;
} else {
  this.options.templateParameters = this.parent.parameters.triallist;
}
}
                        },
                        "title": "memory_loop",
                        "indexParameter": "count_trial_memory",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "memory_sequence",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "blank_memory_1",
                              "timeout": "500"
                            },
                            {
                              "type": "lab.html.Page",
                              "items": [
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cat\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cfont size=24\u003E\r\n    \u003Cp\u003E${ this.parameters.cs }\u003C\u002Fp\u003E\r\n    \u003C\u002Ffont\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                                  "name": ""
                                },
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"task\" id=\"recognition_memory\"\u003E\u003C\u002Fdiv\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n    \u003Cdiv class=\"mem\"\u003E\r\n        \u003Cinput type=\"radio\" id=\"old\" name=\"reco_resp\" value=\"old\" required onclick=\"document.getElementById('reco').click();\"\u003E\r\n        \u003Clabel for =\"old\"\u003EYes (old)\u003C\u002Flabel\u003E      \r\n\r\n        \u003Cinput type=\"radio\" id=\"new\" name=\"reco_resp\" value=\"new\" onclick=\"document.getElementById('reco').click();\"\u003E\r\n        \u003Clabel for =\"new\"\u003ENo (new) \u003C\u002Flabel\u003E      \r\n    \u003C\u002Fdiv\u003E\r\n \u003C\u002Fdiv\u003E\r\n \u003C\u002Fcenter\u003E\r\n\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"reco\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fform\u003E",
                                  "name": ""
                                }
                              ],
                              "scrollTop": true,
                              "submitButtonText": "Continue →",
                              "submitButtonPosition": "hidden",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "run": function anonymous(
) {
debugger
}
                              },
                              "title": "recognition_trial"
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "blank_memory_2",
                              "timeout": "500",
                              "tardy": true,
                              "skip": "${this.state.reco_resp!=\"old\"}"
                            },
                            {
                              "type": "lab.html.Page",
                              "items": [
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cat\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cfont size=24\u003E\r\n    \u003Cp\u003E${ this.parameters.cs }\u003C\u002Fp\u003E\r\n    \u003C\u002Ffont\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                                  "name": ""
                                },
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"task\" id=\"source_memory\"\u003E\u003C\u002Fdiv\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n    \u003Cdiv class=\"mem\"\u003E\r\n        \u003Cinput type=\"radio\" id=\"id1\" name=\"source_mem\" value=\"us1\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id1\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[0] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E   \r\n\r\n        \u003Cinput type=\"radio\" id=\"id2\" name=\"source_mem\" value=\"us2\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id2\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[1] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n        \u003Cinput type=\"radio\" id=\"id3\" name=\"source_mem\" value=\"us3\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id3\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[2] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n        \u003Cinput type=\"radio\" id=\"id4\" name=\"source_mem\" value=\"us4\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id4\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[3] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n          \u003Cbr\u003E\r\n        \r\n         \u003Cinput type=\"radio\" id=\"id5\" name=\"source_mem\" value=\"us5\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id5\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[4] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n        \u003Cinput type=\"radio\" id=\"id6\" name=\"source_mem\" value=\"us6\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id6\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[5] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n        \u003Cinput type=\"radio\" id=\"id7\" name=\"source_mem\" value=\"us7\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id7\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[6] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E    \r\n\r\n        \u003Cinput type=\"radio\" id=\"id8\" name=\"source_mem\" value=\"us8\" onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id8\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[7] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E      \r\n    \u003C\u002Fdiv\u003E\r\n \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"source\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\r\n \u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E",
                                  "name": ""
                                }
                              ],
                              "scrollTop": true,
                              "submitButtonText": "Continue →",
                              "submitButtonPosition": "hidden",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "source_trial",
                              "tardy": true,
                              "skip": "${this.state.reco_resp!=\"old\"}"
                            }
                          ]
                        }
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 446.92,
                            "height": 75.03,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "The second part of the experiment is now finished.\n\nPress the space bar to continue with the third part.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "memory_end"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "memory_end"
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 808.23,
                            "height": 310.98,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "In the third part of the experiment, you will again be presented with the nonwords.\n\nThis time you will be asked to express your personal evaluation of the presented nonwords.\n\nTo do so, you will be presented with an 8-point scale\nranging from very negative (left) to very positive (right).\n\nPlease click on the scale point that best represents your evaluation of a given nonword.\nThen click on the \"continue\" button to proceed to the next nonword.\n\n\nReady? Then press the space bar to continue.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "ratings_instructions"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "rating_instructions_version1"
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [],
                        "sample": {
                          "mode": "draw-shuffle",
                          "n": "${Math.min(48, this.parameters.n_ratings)}"
                        },
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {
                          "before:prepare": function anonymous(
) {
if(typeof(jatos) != 'undefined'){
  this.options.templateParameters = jatos.studySessionData.triallist;
} else {
  this.options.templateParameters = this.parent.parameters.triallist;
}
}
                        },
                        "title": "rating_loop",
                        "indexParameter": "count_trial_ratings",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "sequence_rating",
                          "content": [
                            {
                              "type": "lab.html.Page",
                              "items": [
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Cstyle\u003E\r\n      form .statement {\r\n        display:block;\r\n        font-weight: bold;\r\n        padding: 30px 0 0 4.25%;\r\n        margin-bottom:10px;\r\n        }\r\n      form .likert {\r\n        list-style:none;\r\n        width:100%;\r\n        margin:0;\r\n        padding:0 0 0;\r\n        display:block;\r\n        }\r\n\r\n      form .likert li {\r\n        display:inline-block;\r\n        width:8%;\r\n        text-align:center;\r\n        vertical-align: top;\r\n        }\r\n\r\n      form .likert li input[type=radio] {\r\n        display:block;\r\n        position:relative;\r\n        top:0;\r\n        left:50%;\r\n        margin-left:-4px;\r\n        }\r\n\u003C\u002Fstyle\u003E",
                                  "name": ""
                                },
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cat\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cfont size=24\u003E\r\n    \u003Cp\u003E${ this.parameters.cs }\u003C\u002Fp\u003E\r\n    \u003C\u002Ffont\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                                  "name": ""
                                },
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"task\" id=\"ratings\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cul class='likert'\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"1\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E 1 (very negative)\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"2\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E2\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"3\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E3\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"4\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E4\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"5\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E5\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"6\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E6\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"7\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E7\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"8\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E8 (very positive)\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n  \u003C\u002Ful\u003E\r\n\r\n    \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"source\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fcenter\u003E\r\n",
                                  "name": ""
                                }
                              ],
                              "scrollTop": true,
                              "submitButtonText": "Continue →",
                              "submitButtonPosition": "hidden",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "run": function anonymous(
) {
debugger
}
                              },
                              "title": "rating_trial_version1"
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "blank_rating",
                              "timeout": "500"
                            }
                          ]
                        }
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 710.03,
                            "height": 153.68,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "The third and final part of the experiment is now finished.\n\nNow we have a few short questions about your experience performing the study.\n\n\nPress space bar to continue.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "ratings_end"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "rating_end"
                      }
                    ]
                  },
                  {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "eval_first_sequence",
                    "skip": "${this.parameters.order != 'eval_first'}",
                    "content": [
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 798.2,
                            "height": 284.76,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "In the second part of the experiment you will be presented with individual nonwords.\n\nSome of these nonwords were part of the previously presented pairs.\n\nOther nonwords will be new: they were not part of the nonword-image pairs you saw in the\nprevious task.\n\n\n\n\nPress the spacebar to continue with the instructions.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "ratings_instructions"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "rating_instructions"
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 771.58,
                            "height": 258.54,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Your task is to express your personal evaluation of the presented nonwords.\n\nTo do so, you will be presented with an 8-point scale\nranging from very negative (left) to very positive (right).\n\nPlease click on the scale point that best represents your evaluation of a given nonword.\nThen click on the \"continue\" button to proceed to the next nonword.\n\n\nReady? Then press the space bar to continue.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "ratings_instructions"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "rating_instructions_version1"
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [],
                        "sample": {
                          "mode": "draw-shuffle",
                          "n": "${Math.min(48, this.parameters.n_ratings)}"
                        },
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {
                          "before:prepare": function anonymous(
) {
if(typeof(jatos) != 'undefined'){
  this.options.templateParameters = jatos.studySessionData.triallist;
} else {
  this.options.templateParameters = this.parent.parameters.triallist;
}
}
                        },
                        "title": "rating_loop",
                        "indexParameter": "count_trial_ratings",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "sequence_rating",
                          "content": [
                            {
                              "type": "lab.html.Page",
                              "items": [
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Cstyle\u003E\r\n      form .statement {\r\n        display:block;\r\n        font-weight: bold;\r\n        padding: 30px 0 0 4.25%;\r\n        margin-bottom:10px;\r\n        }\r\n      form .likert {\r\n        list-style:none;\r\n        width:100%;\r\n        margin:0;\r\n        padding:0 0 0;\r\n        display:block;\r\n        }\r\n\r\n      form .likert li {\r\n        display:inline-block;\r\n        width:8%;\r\n        text-align:center;\r\n        vertical-align: top;\r\n        }\r\n\r\n      form .likert li input[type=radio] {\r\n        display:block;\r\n        position:relative;\r\n        top:0;\r\n        left:50%;\r\n        margin-left:-4px;\r\n        }\r\n\u003C\u002Fstyle\u003E",
                                  "name": ""
                                },
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cat\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cfont size=24\u003E\r\n    \u003Cp\u003E${ this.parameters.cs }\u003C\u002Fp\u003E\r\n    \u003C\u002Ffont\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                                  "name": ""
                                },
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"task\" id=\"ratings\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cul class='likert'\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"1\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E 1(very negative)\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"2\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E2\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"3\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E3\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"4\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E4\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"5\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E5\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"6\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E6\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"7\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E7\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cinput type=\"radio\" name=\"cs_rating\" value=\"8\" onclick=\"document.getElementById('source').click()\"\u003E\r\n      \u003Clabel\u003E8 (very positive)\u003C\u002Flabel\u003E\r\n    \u003C\u002Fli\u003E\r\n  \u003C\u002Ful\u003E\r\n\r\n    \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"source\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fcenter\u003E\r\n",
                                  "name": ""
                                }
                              ],
                              "scrollTop": true,
                              "submitButtonText": "Continue →",
                              "submitButtonPosition": "hidden",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "run": function anonymous(
) {
debugger
}
                              },
                              "title": "rating_trial_version1"
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "blank_rating",
                              "timeout": "500"
                            }
                          ]
                        }
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 446.92,
                            "height": 75.03,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "The second part of the experiment is now finished.\n\nPress the space bar to continue with the third part.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "ratings_end"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "rating_end"
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 744.82,
                            "height": 337.19,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "In the third part of the experiment, you will again be presented with the nonwords.\n\nThis time you will be asked to indicate for each nonword whether it is was part of the\nnonword-image pairs presented in the first part of the study.\n\nIf you remember that a given nonword was part of the nonword-image pairs,\nclick on the \"old\" button.\nIf you remember that a given nonword was NOT part of the nonword-image pairs,\nclick on the \"new\" button.\n\n\n\nPress the spacebar to continue.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "memory_instructions_1"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "memory_instructions_1"
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 782.42,
                            "height": 363.41,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Whenever you classify a nonword as \"old\", you will be asked to perform a second task.\n\nIn this second task, you will be presented with eight images. \nYour task will be to select the image with which the nonword was previously paired with.\n\nIf you can remember the paired image, click on it and then click on the \"continue\" button \nat the bottom of the screen.\n\nIf you cannot remember the previously paired image, try to guess the correct one. \nAgain, click on the image corresponding to your guess and then on the \"continue\" button\nat the bottom of the screen.\n\n\nReady? Then press the spacebar to continue.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "memory_instructions_2"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "memory_instructions_2"
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [],
                        "sample": {
                          "mode": "draw-shuffle",
                          "n": "${Math.min(48, this.parameters.n_mem)}"
                        },
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {
                          "before:prepare": function anonymous(
) {
if(typeof(jatos) != 'undefined'){
  this.options.templateParameters = jatos.studySessionData.triallist;
} else {
  this.options.templateParameters = this.parent.parameters.triallist;
}
}
                        },
                        "title": "memory_loop",
                        "indexParameter": "count_trial_memory",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "memory_sequence",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "blank_memory_1",
                              "timeout": "500"
                            },
                            {
                              "type": "lab.html.Page",
                              "items": [
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cat\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cfont size=24\u003E\r\n    \u003Cp\u003E${ this.parameters.cs }\u003C\u002Fp\u003E\r\n    \u003C\u002Ffont\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                                  "name": ""
                                },
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"task\" id=\"recognition_memory\"\u003E\u003C\u002Fdiv\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n    \u003Cdiv class=\"mem\"\u003E\r\n        \u003Cinput type=\"radio\" id=\"old\" name=\"reco_resp\" value=\"old\" required onclick=\"document.getElementById('reco').click();\"\u003E\r\n        \u003Clabel for =\"old\"\u003EYes (old)\u003C\u002Flabel\u003E      \r\n\r\n        \u003Cinput type=\"radio\" id=\"new\" name=\"reco_resp\" value=\"new\" onclick=\"document.getElementById('reco').click();\"\u003E\r\n        \u003Clabel for =\"new\"\u003ENo (new) \u003C\u002Flabel\u003E      \r\n    \u003C\u002Fdiv\u003E\r\n \u003C\u002Fdiv\u003E\r\n \u003C\u002Fcenter\u003E\r\n\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"reco\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fform\u003E",
                                  "name": ""
                                }
                              ],
                              "scrollTop": true,
                              "submitButtonText": "Continue →",
                              "submitButtonPosition": "hidden",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "run": function anonymous(
) {
debugger
}
                              },
                              "title": "recognition_trial"
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "blank_memory_2",
                              "timeout": "500",
                              "tardy": true,
                              "skip": "${this.state.reco_resp!=\"old\"}"
                            },
                            {
                              "type": "lab.html.Page",
                              "items": [
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cat\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cfont size=24\u003E\r\n    \u003Cp\u003E${ this.parameters.cs }\u003C\u002Fp\u003E\r\n    \u003C\u002Ffont\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                                  "name": ""
                                },
                                {
                                  "required": true,
                                  "type": "html",
                                  "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"task\" id=\"source_memory\"\u003E\u003C\u002Fdiv\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n    \u003Cdiv class=\"mem\"\u003E\r\n        \u003Cinput type=\"radio\" id=\"id1\" name=\"source_mem\" value=\"us1\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id1\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[0] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E   \r\n\r\n        \u003Cinput type=\"radio\" id=\"id2\" name=\"source_mem\" value=\"us2\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id2\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[1] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n        \u003Cinput type=\"radio\" id=\"id3\" name=\"source_mem\" value=\"us3\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id3\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[2] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n        \u003Cinput type=\"radio\" id=\"id4\" name=\"source_mem\" value=\"us4\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id4\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[3] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n          \u003Cbr\u003E\r\n        \r\n         \u003Cinput type=\"radio\" id=\"id5\" name=\"source_mem\" value=\"us5\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id5\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[4] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n        \u003Cinput type=\"radio\" id=\"id6\" name=\"source_mem\" value=\"us6\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id6\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[5] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E \r\n\r\n        \u003Cinput type=\"radio\" id=\"id7\" name=\"source_mem\" value=\"us7\" required onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id7\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[6] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E    \r\n\r\n        \u003Cinput type=\"radio\" id=\"id8\" name=\"source_mem\" value=\"us8\" onclick=\"document.getElementById('source').click()\"\u003E\r\n        \u003Clabel for =\"id8\"\u003E\u003Cimg src=\"${ 'static\u002F' + this.parameters.uss[7] + '.jpg'}\"\u003E\u003C\u002Flabel\u003E      \r\n    \u003C\u002Fdiv\u003E\r\n \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"source\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\r\n \u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E",
                                  "name": ""
                                }
                              ],
                              "scrollTop": true,
                              "submitButtonText": "Continue →",
                              "submitButtonPosition": "hidden",
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "source_trial",
                              "tardy": true,
                              "skip": "${this.state.reco_resp!=\"old\"}"
                            }
                          ]
                        }
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 0,
                            "angle": 0,
                            "width": 710.03,
                            "height": 153.68,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "The third and final part of the experiment is now finished.\n\nNow we have a few short questions about your experience performing the study.\n\n\nPress space bar to continue.",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "20",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "memory_end"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "memory_end"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "check_socio_demo": "1"
                }
              ],
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "check_loop",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "run": function anonymous(
) {
document.body.style.cursor = 'default'
}
                },
                "title": "sequence_check",
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "",
                        "content": "Wie alt bist Du (in Jahren)?"
                      },
                      {
                        "required": true,
                        "type": "textarea",
                        "name": "age"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "\u003Cspan\u003EWeiter\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                    "submitButtonPosition": "right",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "run": function anonymous(
) {
document.body.style.cursor = 'default'
}
                    },
                    "title": "age",
                    "skip": true
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "Welchem Geschlecht fühlst Du Dich zugehörig?",
                        "content": ""
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n  \u003Cinput type=\"radio\" id=\"male\" name=\"gender\" value=\"0\" required onclick=\"document.getElementById('weiterdiv').style.visibility='visible';\"\u003E\r\n  \u003Clabel for=\"male\"\u003Emännlich\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"female\" name=\"gender\" value=\"1\" onclick=\"document.getElementById('weiterdiv').style.visibility='visible';\"\u003E\r\n  \u003Clabel for=\"female\"\u003Eweiblich\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"diverse\" name=\"gender\" value=\"2\" onclick=\"document.getElementById('weiterdiv').style.visibility='visible';\"\u003E\r\n  \u003Clabel for=\"diverse\"\u003Edivers\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"kA\" name=\"gender\" value=\"3\" onclick=\"document.getElementById('weiterdiv').style.visibility='visible';\"\u003E\r\n  \u003Clabel for=\"kA\"\u003Ekeine Angabe\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"end\"\u003EWeiter\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "\u003Cspan\u003EWeiter\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "gender",
                    "skip": true
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "Did you pay attention to the nonwords and images presented throughout the entire study?",
                        "content": "(the response to this question will not affect your payment)"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n  \u003Cinput type=\"radio\" id=\"yes\" name=\"pay_attention\" value=\"1\" required onclick=\"document.getElementById('end').click()\"\u003E\r\n  \u003Clabel for=\"yes\"\u003EYes\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"no\" name=\"pay_attention\" value=\"0\" onclick=\"document.getElementById('end').click()\"\u003E\r\n  \u003Clabel for=\"no\"\u003ENo\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"end\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "\u003Cspan\u003EWeiter\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "pay_attention"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "It would be very helpful if you could tell us at this point whether you have taken the requested responses seriously, so that we can use your answers for our scientific analysis, or whether you were just clicking through to take a look at the survey?",
                        "content": "(again, this will not affect your payment)\n"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n  \u003Cinput type=\"radio\" id=\"serious\" name=\"serious\" value=\"1\" required onclick=\"document.getElementById('end').click()\"\u003E\r\n  \u003Clabel for=\"serious\"\u003EI have taken the requested responses seriously\r\n\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"not_serious\" name=\"serious\" value=\"0\" onclick=\"document.getElementById('end').click()\"\u003E\r\n  \u003Clabel for=\"not_serious\"\u003EI have just clicked through, please discard my data\r\n\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"end\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "\u003Cspan\u003EWeiter\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "seriousness"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "Vielen Dank für die Teilnahme an unserer Studie! ",
                        "content": ""
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\r\n\u003Cdiv style=\"font-size: 1.2vw\"\u003E  \r\n\u003Cp style=\"text-align: justify;\"\u003EMit der Studie wollten wir untersuchen, ob Deine Einstellung zu den Gesichtern durch die Valenz der gepaarten Szenerie (positiv vs. negativ) beeinflusst wird. Außerdem wollten wir wissen, ob deine Einstellung zu den Gesichtern davon abhängt, ob Du Dich an die gepaarte Szenerie erinnern kannst.\r\n\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EFalls Du noch Fragen zur Studie hast, kannst Du Dich gerne an karoline.bading@uni-jena.de wenden.\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EWenn Du an der FSU Jena Psychologie studierst und für die Teilnahme mit 0.5 VP-Stunden vergütet werden möchtest, kannst Du im nächsten Schritt einen Absolvierungscode für die Verbuchung im VPHS generieren. ACHTUNG: Die Absolvierungscodes werden erst nach Abschluss der Datenerhebung (Ende Februar 2023) im VPHS freigeschaltet. Eine Verbuchung Deiner 0.5 VP-Stunden wird also erst ab Anfang März 2023 möglich sein.\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EHast Du noch irgendwelche Fragen oder Anmerkungen, die Du uns mitteilen möchtest? Dann trage sie gerne in das folgende Textfeld ein.\u003C\u002Fp\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E",
                        "name": ""
                      },
                      {
                        "required": false,
                        "type": "input",
                        "name": "comment_study"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "\u003Cspan\u003EWeiter\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                    "submitButtonPosition": "right",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "run": function anonymous(
) {
document.body.style.cursor = 'default'
}
                    },
                    "title": "debriefing_and_comment",
                    "skip": true
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "Möchtest Du einen Absolvierungscode generieren?",
                        "content": "Mit diesem kannst Du dann Deine Teilnahme auf dem Versuchspersonenstundenserver VPHS verbuchen.\nFür die Teilnahme erhältst Du 0.5 VP-Stunden."
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n\u003Cdiv class=\"radio-toolbar\"\u003E\r\n  \u003Cinput type=\"radio\" id=\"VP_yes\" name=\"vp_code\" value=\"1\" onclick=\"document.getElementById('weiterdiv').style.visibility='visible';\" required\u003E\r\n  \u003Clabel for=\"VP_yes\"\u003EJa, möchte ich.\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"VP_no\" name=\"vp_code\" value=\"0\" onclick=\"document.getElementById('weiterdiv').style.visibility='visible';\"\u003E\r\n  \u003Clabel for=\"VP_no\"\u003ENein, möchte ich nicht.\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cdiv id=\"weiterdiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"end\"\u003EWeiter\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Ccenter\u003E\r\n\r\n\u003C\u002Fform\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {
                      "Bandeau+new+logo+2019.jpg": "embedded\u002F5ffb7db9f15ad3b748ba63804367e87b2d52bf35af7d1cc696d84ef88aad1724.jpg",
                      "Bildmarke_black_8cm.jpg": "embedded\u002F8d8205d13605ad5501ddcda7ec381eee3d98b9baf404875950775025a8c6f1bc.jpg"
                    },
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "VP_Stunde",
                    "width": "l",
                    "skip": true
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "Als Nächstes musst Du Deinen persönlichen Absolvierungscode erstellen und in das Textfeld eintragen.",
                        "content": "Der Absolvierungscode setzt sich aus drei Komponenten zusammen.\n\n\n\n\n"
                      },
                      {
                        "required": true,
                        "type": "text",
                        "content": "Die erste Komponente lautet: 181_"
                      },
                      {
                        "required": true,
                        "type": "text",
                        "content": "Die zweite Komponente sind die ersten drei Buchstaben Deines Geburtsorts (in Großbuchstaben)."
                      },
                      {
                        "required": true,
                        "type": "text",
                        "content": "Die dritte Komponente sind die letzten drei Ziffern Deiner Handynummer."
                      },
                      {
                        "required": true,
                        "type": "text",
                        "content": "BEISPIEL: Für eine Person mit Geburtsort Hamburg und Handynummer 0163-78965498 lautet der Code: 181_HAM498"
                      },
                      {
                        "required": true,
                        "type": "text",
                        "content": "Erstelle nun bitte Deinen persönlichen Code (basierend auf obigen Regeln), notiere ihn Dir für die Verbuchung im VPHS (ab Februar 2023) und trage ihn dann in das folgende Textfeld ein."
                      },
                      {
                        "required": true,
                        "type": "textarea",
                        "name": "code"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "\u003Cspan\u003EWeiter\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                    "submitButtonPosition": "right",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "run": function anonymous(
) {
document.body.style.cursor = 'default'
}
                    },
                    "title": "generate_code",
                    "tardy": true,
                    "skip": true
                  }
                ]
              }
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "If you have any comments feel free to include them below:"
                },
                {
                  "required": false,
                  "type": "textarea",
                  "name": "comment_study"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": "comment"
              },
              "parameters": {},
              "messageHandlers": {
                "run": function anonymous(
) {
document.body.style.cursor = 'default'
}
              },
              "title": "comment"
            },
            {
              "type": "lab.html.Screen",
              "files": {},
              "responses": {
                "keypress(Space)": "end_study"
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
function randomID(){
  const length = 10;
  let result = "";
  const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const filename = `${randomID()}-data.json`

const dataJSON = study.internals.controller.datastore.exportJson();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "8D9tjxIJwbkq",
    filename: filename,
    data: dataJSON,
  }),
});
}
              },
              "title": "end_study_redirect",
              "content": " \u003Cmain class=\"content-vertical-center\r\n             content-horizontal-center\"\u003E\r\n \u003Cdiv style=\"font-size: 1.2vw; width: 70%;\"\u003E  \r\n\u003Cp style=\"text-align: justify;\"\u003EThe experiment is now over. Thank you very much for your participation!\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EIn this experiment, we wanted to see whether the valence of the paired image (positive vs. negative) has an influence on your evaluation of the nonwords. In addition, we were also interested in your memory for the nonword-image pairs.\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EIf you have any question or comment, or if you would like to receive additional information on the present study, please do not hesitate to contact the person in charge of this research at the following e-mail address: karoline.bading@uni-jena.de\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003E\u003Cb\u003EPress the spacebar to be redirected to Prolific.\u003C\u002Fb\u003E\u003C\u002Fp\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E",
              "tardy": true
            }
          ]
        }
      ]
    }
  ]
})

// Let's go!
study.run()