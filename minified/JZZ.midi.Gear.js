!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e:"function"==typeof define&&define.amd?define("JZZ.midi.Gear",["JZZ"],e):e(JZZ)}(function(t){function r(e){return 6==e[2]&&2==e[3]&&62==e[4]}function i(e){return String.fromCharCode(e)}function s(e){return e.map(i).join("")}t.MIDI.prototype.isIdResponse=function(){return 240==this[0]&&126==this[1]&&(6==this[3]&&2==this[4]||r(this))&&247==this[this.length-1]&&10<this.length},t.MIDI.prototype.gearInfo=function(){if(this.isIdResponse()){var e,i=r(this)?(e=s(this.slice(4,5)),s(this.slice(5,13))):this[5]?(e=s(this.slice(5,6)),s(this.slice(6,14))):(e=s(this.slice(6,8)),s(this.slice(8,16))),o={brand:l[e]};if(!d[e])return o;for(var n=8;4<=n;n--){var a=d[e][i.substr(0,n)];if(a){o.model=a.m,o.descr=a.d,a.b&&(o.brand=a.b);break}}return o}},t.MIDI.setGearInfo=function(e,i,o,n){if(!(e=t.MIDI(e)).isIdResponse())throw RangeError("Not a valid ID response");var a,e=e[5]?(a=s(e.slice(5,6)),s(e.slice(6,14))):(a=s(e.slice(6,8)),s(e.slice(8,16)));l[a]||(l[a]=i),d[a]||(d[a]={}),d[a][e]={b:i,m:o,d:n}};var d={},l={"":"Sequential","":"IDP","":"Voyetra Turtle Beach","":"Moog","":"Passport Designs","":"Lexicon","":"Kurzweil","\b":"Fender","\t":"MIDI9","\n":"AKG","\v":"Voyce Music","\f":"WaveFrame","\r":"ADA","":"Garfield Electronics","":"Ensoniq","":"Oberheim","":"Apple","":"Grey Matter Response","":"Digidesign","":"Palmtree Instruments","":"JLCooper Electronics","":"Lowrey","":"Adams-Smith","":"E-MU","":"Harmony Systems","":"ART","":"Baldwin","":"Eventide","":"Inventronics","":"Key Concepts","":"Clarity"," ":"Passac","!":"Proel Labs",'"':"Synthaxe","#":"Stepp",$:"Hohner","%":"Twister","&":"Ketron","'":"Jellinghaus","(":"Southworth Music Systems",")":"PPG","*":"JEN","+":"Solid State",",":"Audio Vertrieb","-":"Neve",".":"Soundtracs","/":"Elka",0:"Dynacord",1:"Viscount",2:"Drawmer",3:"Clavia",4:"Audio Architecture",5:"Generalmusic",6:"Cheetah Marketing",7:"C.T.M.",8:"Simmons",9:"Soundcraft",":":"Steinberg",";":"Wersi","<":"AVAB","=":"Digigram",">":"Waldorf","?":"Quasimidi","@":"Kawai",A:"Roland",B:"Korg",C:"Yamaha",D:"Casio",F:"Kamiya Studio",G:"Akai",H:"Victor",K:"Fujitsu",L:"Sony",N:"Teac",P:"Matsushita Electric",Q:"Fostex",R:"Zoom",T:"Matsushita Communication",U:"Suzuki",V:"Fuji",W:"Acoustic Technical Laboratory",Y:"Faith",Z:"Internet Corporation","\\":"Seekers",_:"SD Card Association","}":"(educational)","\0":"Time/Warner","\0":"Advanced Gravis","\0":"Media Vision","\0":"Dornes Research Group","\0":"K-Muse","\0":"Stypher","\0":"Digital Music","\0\b":"IOTA Systems","\0\t":"New England Digital","\0\n":"Artisyn","\0\v":"IVL Technologies","\0\f":"Southern Music Systems","\0\r":"Lake Butler Sound Company","\0":"Alesis Studio Electronics","\0":"Sound Creation","\0":"DOD Electronics","\0":"Studer-Editech","\0":"Sonus","\0":"Temporal Acuity Products","\0":"Perfect Fretworks","\0":"KAT","\0":"Opcode Systems","\0":"Rane","\0":"Anadi Electronique","\0":"KMX","\0":"Allen & Heath Brenell","\0":"Peavey Electronics","\0":"360 Systems","\0":"Spectrum Design and Development","\0":"Marquis Music","\0":"Zeta Systems","\0 ":"Axxes","\0!":"Orban",'\0"':"Indian Valley","\0#":"Triton","\0$":"KTI","\0%":"Breakaway Technologies","\0&":"Leprecon","\0'":"Harrison Systems","\0(":"Future Lab","\0)":"Rocktron","\0*":"PianoDisc","\0+":"Cannon","\0,":"Reserved","\0-":"Rodgers Instrument","\0.":"Blue Sky Logic","\0/":"Encore Electronics","\x000":"Uptown","\x001":"Voce","\x002":"CTI Audio","\x003":"S3","\x004":"Broderbund","\x005":"Allen Organ Co.","\x006":"Reserved","\x007":"Music Quest","\x008":"Aphex","\x009":"Gallien Krueger","\0:":"IBM","\0;":"Mark Of The Unicorn","\0<":"Hotz","\0=":"ETA Lighting","\0>":"NSI","\0?":"Ad Lib","\0@":"Richmond Sound Design","\0A":"Microsoft","\0B":"Mindscape","\0C":"Russ Jones Marketing","\0D":"Intone","\0E":"Advanced Remote Technologies","\0F":"White Instruments","\0G":"GT Electronics","\0H":"Pacific Research & Engineering","\0I":"Timeline Vista","\0J":"Mesa Boogie","\0K":"FSLI","\0L":"Sequoia Development","\0M":"Studio Electronics","\0N":"Euphonix","\0O":"InterMIDI","\0P":"MIDI Solutions","\0Q":"3DO Company","\0R":"Lightwave Research","\0S":"Micro-W","\0T":"Spectral Synthesis","\0U":"Lone Wolf","\0V":"Studio Technologies","\0W":"Peterson Electro-Musical Product","\0X":"Atari","\0Y":"Marion Systems","\0Z":"Design Event","\0[":"Winjammer Software","\0\\":"AT&T","\0]":"Reserved","\0^":"Symetrix","\0_":"MIDI the World","\0`":"Spatializer","\0a":"Micros 'N MIDI","\0b":"Accordians International","\0c":"EuPhonics","\0d":"Musonix","\0e":"Turtle Beach Systems","\0f":"Mackie","\0g":"Compuserve","\0h":"BEC Technologies","\0i":"QRS Music","\0j":"P.G. Music","\0k":"Sierra Semiconductor","\0l":"EpiGraf","\0m":"Electronics Diversified","\0n":"Tune 1000","\0o":"Advanced Micro Devices","\0p":"Mediamation","\0q":"Sabine","\0r":"Woog Labs","\0s":"Micropolis","\0t":"Ta Horng Musical Instrument","\0u":"e-Tek Labs","\0v":"Electro-Voice","\0w":"Midisoft","\0x":"QSound Labs","\0y":"Westrex","\0z":"Nvidia","\0{":"ESS Technology","\0|":"Media Trix Peripherals","\0}":"Brooktree","\0~":"Otari","\0":"Key Electronics","\0":"Shure","":"AuraSound","":"Crystal Semiconductor","":"Conexant","":"Silicon Graphics","":"M-Audio","":"PreSonus","\b":"Topaz Enterprises","\t":"Cast Lighting","\n":"Microsoft","\v":"Sonic Foundry","\f":"Line 6","\r":"Beatnik","":"Van Koevering","":"Altech Systems","":"S & S Research","":"VLSI Technology","":"Chromatic Research","":"Sapphire","":"IDRC","":"Justonic Tuning","":"TorComp Research","":"Newtek","":"Sound Sculpture","":"Walker Technical","":"Digital Harmony","":"InVision Interactive","":"T-Square Design","":"Nemesys Music Technology","":"DBX Professional","":"Syndyne"," ":"Bitheadz","!":"Cakewalk Music Software",'"':"Analog Devices","#":"National Semiconductor","$":"Boom Theory","%":"Virtual DSP","&":"Antares Systems","'":"Angel Software","(":"St Louis Music",")":"Passport Music Software","*":"Ashley Audio","+":"Vari-Lite",",":"Summit Audio","-":"Aureal Semiconductor",".":"SeaSound","/":"U.S. Robotics","0":"Aurisis Research","1":"Nearfield Research","2":"FM7","3":"Swivel Systems","4":"Hyperactive Audio Systems","5":"MidiLite","6":"Radikal Technologies","7":"Roger Linn Design","8":"TC-Helicon Vocal Technologies","9":"Event Electronics",":":"Sonic Network",";":"Realtime Music Solutions","<":"Apogee Digital","=":"Classical Organs",">":"Microtools","?":"Numark Industries","@":"Frontier Design Group","A":"Recordare","B":"Starr Labs","C":"Voyager Sound","D":"Manifold Labs","E":"Aviom","F":"Mixmeister Technology","G":"Notation Software","H":"Mercurial Communications","I":"Wave Arts","J":"Logic Sequencing Devices","K":"Axess Electronics","L":"Muse Research","M":"Open Labs","N":"Guillemot","O":"Samson Technologies","P":"Electronic Theatre Controls","Q":"Blackberry","R":"Mobileer","S":"Synthogy","T":"Lynx Studio Technology","U":"Damage Control Engineering","V":"Yost Engineering","W":"Brooks & Forsman Designs","X":"Infinite Response","Y":"Garritan","Z":"Plogue Art et Technologie","[":"RJM Music Technology","\\":"Custom Solutions Software","]":"Sonarcana","^":"Centrance","_":"Kesumo","`":"Stanton","a":"Livid","b":"First Act","c":"Pygraphics","d":"Panadigm Innovations","e":"Avedis Zildjian","f":"Auvital Music","g":"You Rock Guitar","h":"Chris Grigg Designs","i":"Slate Digital","j":"Mixware","k":"Social Entropy","l":"Source Audio","m":"Ernie Ball","n":"Fishman","o":"Custom Audio Electronics","p":"American Audio","q":"Mega Lite","r":"Kilpatrick Audio","s":"iConnectivity","t":"Fractal Audio","u":"NetLogic Microsystems","v":"Music Computing","w":"Nektar Technology","x":"Zenph Sound Innovations","y":"DJ TechTools","z":"Rezonance Labs","{":"Decibel Eleven","|":"CNMAT","}":"Media Overkill","~":"Confusion Studios","":"moForte","\0":"Miselu","":"Amelia's Compass","":"Zivix","":"Artiphon","":"Synclavier Digital","":"Light & Sound Control Devices","":"Retronyms","":"JS Technologies","\b":"Quicco Sound","\t":"A-Designs Audio","\n":"McCarthy Music","\v":"Denon DJ","\f":"Keith Robert Murray","\r":"Google","":"ISP Technologies","":"Abstrakt Instruments","":"Meris","":"Sensorpoint","":"Hi-Z Labs","":"Imitone","":"Intellijel Designs","":"Dasz Instruments","":"Remidi","":"Disaster Area Designs","":"Universal Audio","":"Carter Duncan","":"Essential Technology","":"Cantux Research","":"Hummel Technologies","":"Sensel","":"DBML Group","":"Madrona Labs"," ":"Mesa Boogie","!":"Effigy Labs",'"':"MK2 Image","#":"Red Panda","$":"OnSong","%":"Jamboxx","&":"Electro-Harmonix","'":"RnD64","(":"Neunaber Technology",")":"Kaom","*":"Hallowell","+":"Sound Devices",",":"Spectrasonics","-":"Second Sound",".":"8eo","/":"VIDVOX","0":"Matthews Effects"," \0":"Dream SAS"," ":"Strand Lighting"," ":"Amek Div of Harman Industries"," ":"Casa Di Risparmio Di Loreto"," ":"Böhm Elektronik"," ":"Syntec Digital Audio"," ":"Trident Audio Developments"," ":"Real World Studio"," \b":"M-Audio"," \t":"Yes Technology"," \n":"Audiomatica"," \v":"Bontempi"," \f":"F.B.T. Elettronica"," \r":"MidiTemp"," ":"LA Audio"," ":"Zero 88 Lighting"," ":"Micon Audio Electronics"," ":"Forefront Technology"," ":"Studio Audio and Video"," ":"Kenton Electronics"," ":"Celco"," ":"ADB"," ":"Marshall Products"," ":"DDA"," ":"BSS Audio"," ":"MA Lighting Technology"," ":"Fatar"," ":"QSC Audio Products"," ":"Artisan Clasic Organ"," ":"Orla"," ":"Pinnacle Audio"," ":"TC Electronics","  ":"Doepfer Musikelektronik"," !":"Creative",' "':"Seyddo"," #":"LG Electronics"," $":"Midisoft"," %":"Samick"," &":"Penny and Giles"," '":"Acorn Computer"," (":"LSC Electronics"," )":"Novation"," *":"Samkyung Mechatronics"," +":"Medeli Electronics"," ,":"Charlie Lab"," -":"Blue Chip Music Technology"," .":"BEE"," /":"LG Semicon America"," 0":"TESI"," 1":"EMAGIC"," 2":"Behringer"," 3":"Access Music Electronics"," 4":"Synoptic"," 5":"Hanmesoft"," 6":"Terratec Electronic"," 7":"Proel"," 8":"IBK MIDI"," 9":"IRCAM"," :":"Propellerhead Software"," ;":"Red Sound Systems"," <":"Elektron"," =":"Sintefex Audio"," >":"MAM"," ?":"Amsaro"," @":"Lanbox"," A":"Mode Machines"," B":"DSP Arts"," C":"Phil Rees Music Tech"," D":"Stamer Musikanlagen"," E":"Musical Muntaner"," F":"C-Mexx Software"," G":"Klavis Technologies"," H":"Noteheads"," I":"Algorithmix"," J":"Skrydstrup R&D"," K":"Professional Audio"," L":"NewWave Labs"," M":"Vermona"," N":"Nokia"," O":"Wave Idea"," P":"Hartmann"," Q":"Lion's Tracs"," R":"Analogue Systems"," S":"Focal-JMlab"," T":"Ringway Electronics"," U":"Faith Technologies"," V":"Showworks"," W":"Manikin Electronic"," X":"1 Come Tech"," Y":"Phonic"," Z":"Dolby Australia"," [":"Silansys Technologies"," \\":"Winbond Electronics"," ]":"Cinetix Medien und Interface"," ^":"A&G Soluzioni Digitali"," _":"Sequentix"," `":"Oram Pro Audio"," a":"Be4"," b":"Infection Music"," c":"Central Music"," d":"genoQs Machines"," e":"Medialon"," f":"Waves Audio"," g":"Jerash Labs"," h":"Da Fact"," i":"Elby Designs"," j":"Spectral Audio"," k":"Arturia"," l":"Vixid"," m":"C-Thru Music"," n":"Ya Horng Electronic"," o":"SM Pro Audio"," p":"OTO Machines"," q":"ELZAB"," r":"Blackstar Amplification"," s":"M3i Technologies"," t":"Gemalto"," u":"Prostage"," v":"Teenage Engineering"," w":"Tobias Erichsen Consulting"," x":"Nixer"," y":"Hanpin Electron"," z":"R. Sowa"," {":"Beyond Music"," |":"Kiss Box"," }":"Misa Digital Technologies"," ~":"AI Musics Technology"," ":"Serato","!\0":"Limex","!":"Kyodday","!":"Mutable Instruments","!":"PreSonus Software","!":"Ingenico","!":"Fairlight Instruments","!":"Musicom Lab","!":"Modal Electronics","!\b":"RWA","!\t":"Native Instruments","!\n":"Naonext","!\v":"MFB","!\f":"Teknel Research","!\r":"Ploytec","!":"Surfin Kangaroo Studio","!":"Philips Electronics","!":"ROLI","!":"Panda-Audio","!":"BauM Software","!":"Machinewerks","!":"Xiamen Elane Electronics","!":"Marshall Amplification","!":"Kiwitechnics","!":"Rob Papen","!":"Spicetone","!":"V3Sound","!":"IK Multimedia","!":"Novalia","!":"Modor Music","!":"Ableton","!":"Dtronics","!":"ZAQ Audio","! ":"Muabaobao Education Technology","!!":"Flux Effects",'!"':"Audiothingies","!#":"Retrokits","!$":"Morningstar FX","!%":"Changsha Hotone Audio","!&":"Expressive","!'":"Expert Sleepers","!(":"Timecode-Vision Technology","!)":"Hornberg Research","!*":"Sonic Potions","!+":"Audiofront","!,":"Fred's Lab","!-":"Audio Modeling","!.":"C. Bechstein Digital","!/":"Motas Electronics","!0":"MIND Music Labs","!1":"Sonic Academy","!2":"Bome Software","!3":"AODYO","!4":"Pianoforce","!5":"Dreadbox","!6":"TouchKeys Instruments","!7":"Gigrig","!8":"ALM","!9":"CH Sound Design","!:":"Beat Bars","!;":"Blokas","!<":"GEWA Music","!=":"dadamachines","!>":"Augmented Instruments","!?":"Supercritical","!@":"Genki Instruments","!A":"Marienberg Devices","!B":"Supperware","!C":"Imoxplus","!D":"Swapp Technologies","!E":"Electra One","!F":"Digital Clef","!G":"Paul Whittington Group","@\0":"Crimson Technology","@":"Softbank","@":"D&M Holdings"};d[""]={"%\0\0":{m:"Mopho",d:"Synth Module",b:"Dave Smith"}},d[""]={"\0@\0\n":{m:"PC3LE8",d:"Performance Controller"}},d[""]={"@\0":{m:"Xboard 49",d:"USB MIDI Controller"}},d[">"]={"\0\t\0":{m:"Microwave XT 2",d:"Synth Module"},"\0\v\0":{m:"Microwave XT",d:"Synth Module"},"\0\0\0":{m:"Blofeld",d:"Synth Module"}},d.A={"\0\0":{m:"DR-880",d:"Drum Machine",b:"BOSS"},"\0\0":{m:"RD-300SX",d:"Digital Piano"},"\0\0":{m:"GP-10",d:"Guitar Effects Processor",b:"BOSS"},"\0\0":{m:"GT-8",d:"Guitar Effects Processor",b:"BOSS"},"\t\0\0":{m:"TD-12",d:"Percussion Sound Module"},"\v\0\0":{m:"GT-PRO",d:"Guitar Effects Processor",b:"BOSS"},"\0\0":{m:"XV-3080",d:"Synth Module"},"":{m:"FANTOM",d:"Synthesizer"},"\0\0":{m:"MC-808",d:"Sampling Groovebox"},"\0\0":{m:"SH-201",d:"Synthesizer"},"\0\0":{m:"VP-550",d:"Vocal & Ensemble Keyboard"},"\0\0\0":{m:"HP-330/245",d:"Digital Piano"},"\0\0":{m:"HP-530",d:"Digital Piano"},"\0\0":{m:"C-80",d:"Digital Harpsichord"},"\0\0":{m:"FP-9",d:"Digital Piano"},"\0\0\0":{m:"HP-2",d:"Digital Piano"},"\0\0":{m:"DP-900",d:"Digital Piano"},"\0":{m:"HP-147",d:"Digital Piano"},"\0":{m:"HP-3",d:"Digital Piano"},"\0\0":{m:"EP-70",d:"Digital Piano"},"\0":{m:"EP-90",d:"Digital Piano"},"\0":{m:"HP-7",d:"Digital Piano"},"\0":{m:"HP-237",d:"Digital Piano"},"\0":{m:"HP-147R",d:"Digital Piano"},"\0":{m:"F-90",d:"Digital Piano"},"\0\0":{m:"F-100",d:"Digital Piano"},"\0":{m:"F-30",d:"Digital Piano"},"\0":{m:"F-50",d:"Digital Piano"},"\0":{m:"HP-101",d:"Digital Piano"},"\0\0":{m:"DR-770",d:"Drum Machine",b:"BOSS"},"\0\0":{m:"VG-99",d:"V-Guitar System"}," \0\0":{m:"TD-8",d:"Percussion Sound Module"},"!\0\0":{m:"V-Synth GT",d:"Synthesizer Keyboard"},"'\0\0\0":{m:"Fantom-G6",d:"Music Workstation"},"'\0\0":{m:"Fantom-G7",d:"Music Workstation"},"'\0\0":{m:"Fantom-G8",d:"Music Workstation"},"+\0\0":{m:"RD-700GX",d:"Digital Stage Piano"},",\0\0":{m:"RD-300GX",d:"Digital Piano"},"/\0\0":{m:"GT-10",d:"Guitar Effects Processor",b:"BOSS"},"3\0\0":{m:"VS-700R",d:"Digital Audio Workstation"},"6\0\0":{m:"GW-8",d:"Workstation"},"9\0\0":{m:"V-Piano",d:"Digital Piano"},"9\0":{m:"V-Piano Grand (GP-7)",d:"Digital Piano"},":\0\0":{m:"FP-3",d:"Digital Piano"},":\0\0":{m:"JUNO-Di",d:"Synthesizer"},";\0\0":{m:"VP-770",d:"Vocal & Ensemble Keyboard"},"?\0\0":{m:"TD-6V",d:"Percussion Sound Module"},"A\0\0":{m:"DR-670",d:"Drum Machine",b:"BOSS"},"A\0\0":{m:"GAIA SH-01",d:"Synthesizer"},"B\0\0":{m:"SC-8820",d:"Sound Module"},"B\0\0\b":{m:"KR-577/977/1077",d:"Digital Piano"},"B\0\0\r":{m:"KR-5",d:"Digital Piano"},"B\0\0\0":{m:"KR-7",d:"Digital Piano"},"B\0\0":{m:"KF-7",d:"Digital Piano"},"B\0\0\0":{m:"KR-15",d:"Digital Piano"},"B\0\0":{m:"KR-15/17",d:"Digital Piano"},"B\0\0\0":{m:"RG-7",d:"Digital Piano"},"B\0\0":{m:"RG-3",d:"Digital Piano"},"B\0\0":{m:"KR-107",d:"Digital Piano"},"B\0\0":{m:"HP-205",d:"Digital Piano"},"B\0\0":{m:"HP-203",d:"Digital Piano"},"B\0\0":{m:"FP-7",d:"Digital Piano"},"B\0\0":{m:"FP-4",d:"Digital Piano"},"B\0\0":{m:"HP-201",d:"Digital Piano"},"B\0\0\0":{m:"AT-800",d:"Organ"},"B\0\0":{m:"AT-900",d:"Organ"},"B\0\0":{m:"AT-900C",d:"Organ"},"B\0\0\0":{m:"AT-100",d:"Organ"},"B\0\0":{m:"AT-300",d:"Organ"},"B\0\0":{m:"AT-500",d:"Organ"},"B\0\0":{m:"AT-75",d:"Organ"},"B\0\0":{m:"RK-300",d:"Keyboard"},"B\0\0":{m:"RM-700",d:"Digital Piano"},"B\0\0":{m:"HP-507",d:"Digital Piano"},"B\0\0":{m:"HP-505",d:"Digital Piano"},"B\0\0":{m:"HP-503",d:"Digital Piano"},"B\0\0":{m:"DP90/DP90S",d:"Digital Piano"},"B\0\0":{m:"HPi-50",d:"Digital Piano"},"B\0":{m:"E-500(OR)/E-500/E-300/KR-75",d:"Intelligent Keyboard"},"B\0\t":{m:"HP-557R",d:"Digital Piano"},"B\0\0":{m:"HP302/HP305",d:"Digital Piano"},"B\0":{m:"HP307",d:"Digital Piano"},"B\0":{m:"RG-1F/RG-3F",d:"Digital Piano"},"B\0":{m:"LX-10F",d:"Digital Piano"},"B\0":{m:"DP990F",d:"Digital Piano"},"B\0":{m:"HPi-7F",d:"Digital Piano"},"B\0":{m:"HPi-6F",d:"Digital Piano"},"B\0":{m:"FP-7F",d:"Digital Piano"},"B\0\b":{m:"FP-4F",d:"Digital Piano"},"B\0":{m:"HP-555G",d:"Digital Piano"},"B\0":{m:"KR375",d:"Digital Piano"},"B\0\t\0":{m:"KR-377",d:"Digital Piano"},"B\0\t":{m:"KF-90",d:"Digital Piano"},"B\0":{m:"E-600",d:"Intelligent Keyboard"},"B\0":{m:"AT-30R",d:"Organ"},"B\0":{m:"KR-277",d:"Digital Piano"},"B\0":{m:"HPi-5",d:"Digital Piano"},"B\0\0":{m:"VR-700",d:"Combo Keyboard"},"H\0\0":{m:"SD-90",d:"Studio Canvas",b:"Edirol"},"J\0\0":{m:"SH-32",d:"Synthesizer Module"},"L\0\0":{m:"JUNO-Gi",d:"Mobile Synthesizer with Digital Recorder"},"M\0\0":{m:"VK-8",d:"Combo Organ"},"P\0\0":{m:"RD-700NX",d:"Digital Piano"},"Q\0\0":{m:"RD-300NX",d:"Digital Piano"},"U\0\0":{m:"JUPITER-80",d:"Synthesizer"},"Y\0\0":{m:"MC-909",d:"Sampling Groovebox"},"Y\0\0":{m:"BR-80",d:"Digital Recorder",b:"BOSS"},"`\0\0":{m:"FP-5",d:"Digital Piano"},"`\0\0":{m:"GT-100",d:"Amp Effects Processor",b:"BOSS"},"b\0\0\0\0":{m:"AT-20R",d:"Organ"},"b\0\0\0":{m:"AT-30R",d:"Organ"},"b\0\0\0":{m:"AT-800",d:"Organ"},"b\0\0":{m:"AT-900",d:"Organ"},"b\0\0":{m:"AT-900C",d:"Organ"},"b\0\0\0":{m:"AT-100",d:"Organ"},"b\0\0":{m:"AT-300",d:"Organ"},"b\0\0":{m:"AT-500",d:"Organ"},"b\0\0":{m:"AT-75",d:"Organ"},"c\0\0":{m:"JUPITER-50",d:"Synthesizer"},"d\0\0":{m:"RS-70",d:"Synthesizer"},"d\0\0\0\0":{m:"RS-50",d:"Synthesizer"},"d\0\0\0":{m:"JUNO-D",d:"Synthesizer"},"d\0\0":{m:"INTEGRA-7",d:"Sound Module"},"o\0\0":{m:"FP-2",d:"Digital Piano"},"z\0\0":{m:"TD-20",d:"Percussion Sound Module"}},d.B={"\0":{m:"Krome",d:"Music Workstation"},"\0\0\0":{m:"M1",d:"Music Workstation"},"P\0\0":{m:"Triton Pro",d:"Music Workstation/Sampler"},"P\0=\0":{m:"Triton Extreme",d:"Music Workstation/Sampler"},"`\0e\0":{m:"Pa1000",d:"Professional Arranger"},"h\0\0":{m:"Kronos 61",d:"Music Workstation"},"}\0\0\0":{m:"R3",d:"Synthesizer Vocoder"},"~\0\0\0":{m:"microKORG XL",d:"Synthesizer"}},d.C={"\0A\0":{m:"MU100/MU100R/MU128",d:"Tone Generator"},"\0A":{m:"AN200",d:"Synthesizer"},"\0AU":{m:"QY70",d:"Sequencer"},"\0A":{m:"DX200",d:"Synthesizer"},"\0A4":{m:"QY100",d:"Sequencer"},"\0A*":{m:"S90",d:"Synthesizer"},"\0A":{m:"MOTIF-RACK ES",d:"Tone Generator"},"\0A":{m:"AN1x",d:"Synthesizer"},"\0A":{m:"MU2000",d:"Tone Generator"},"\0A":{m:"MU1000",d:"Tone Generator"},"\0A":{m:"RM1x",d:"Sequence Remixer"},"\0A#":{m:"S30",d:"Synthesizer"},"\0A2":{m:"S90ES",d:"Synthesizer"},"\0A3":{m:"MO6",d:"Synthesizer"},"\0A4":{m:"MO8",d:"Synthesizer"},"\0A5":{m:"MOTIF XS6",d:"Synthesizer"},"\0A6":{m:"MOTIF XS7",d:"Synthesizer"},"\0A7":{m:"MU90",d:"Tone Generator"},"\0A7":{m:"MOTIF XS8",d:"Synthesizer"},"\0A?":{m:"CP5",d:"Stage Piano"},"\0A@":{m:"CP50",d:"Stage Piano"},"\0AD":{m:"MOX6",d:"Synthesizer"},"\0AE":{m:"MOX8",d:"Synthesizer"},"\0AF":{m:"MU50",d:"Tone Generator"},"\0AG":{m:"MX49",d:"Synthesizer"},"\0AH":{m:"QS300",d:"Synthesizer"},"\0AL":{m:"EOS B900",d:"Keyboard"},"\0AO":{m:"CS2x",d:"Synthesizer"},"\0AQ":{m:"MU15",d:"Tone Generator"},"\0AR":{m:"MU90R",d:"Tone Generator"},"\0AX":{m:"MOTIF-RACK",d:"Tone Generator"},"\0Ab":{m:"SDX3000",d:"Keyboard"},"\0Ak":{m:"CBX-K1XG",d:"Keyboard"},"\0Aw":{m:"S03",d:"Synthesizer"},"\0A|":{m:"MOTIF6",d:"Synthesizer"},"\0A}":{m:"MOTIF7",d:"Synthesizer"},"\0A~":{m:"MOTIF8",d:"Synthesizer"},"\0C,":{m:"CP33",d:"Stage Piano"},"\0CB":{m:"P-120",d:"Digital Piano"},"\0Cf":{m:"P-155",d:"Digital Piano"},"\0D+":{m:"NP-31",d:"Portable Keyboard"},"\0DE":{m:"MM6",d:"Synthesizer"},"\0Ls":{m:"DTXTREME",d:"Drum Module"}},d.G={"\0\0":{m:"Push",d:"MIDI Controller"},"%\0\0":{m:"MPK261",d:"Performance Keyboard Controller"},"m\0\0":{m:"EWI USB",d:"USB Wind Instrument"}},d["\f"]={"\0\0":{m:"Flextone III",d:"Guitar Effects Processor"},"$\0\0":{m:"THR30II",d:"Guitar Amp",b:"Yamaha"}},d["a"]={"\0\0":{m:"Brain v1",d:"Do-It-Yourself Kit"},"\0\0":{m:"Ohm64",d:"MIDI Controller"},"\0\0":{m:"block",d:"MIDI Controller"},"\0\0":{m:"Code",d:"MIDI Controller"},"\0\0":{m:"OhmRGB",d:"MIDI Controller"},"\0\b\0":{m:"CNTRL:R",d:"MIDI Controller"},"\0\t\0":{m:"Brain v2",d:"Do-It-Yourself Kit"},"\0\v\0":{m:"Alias8",d:"MIDI Controller"},"\0\f\0":{m:"Base",d:"MIDI Controller"},"\0\r\0":{m:"Brain Jr",d:"Do-It-Yourself Kit"}},d["n"]={"\0\0":{m:"TriplePlay",d:"Guitar Controller"},"\0\0":{m:"TriplePlay",d:"Guitar Controller"}},d["q"]={"\0\0":{m:"Enlighten",d:"DMX Control"}},d["v"]={"\0\0":{m:"DAW",d:"MIDI Controller"}},d["y"]={"\0\0":{m:"Midi Fighter 3D",d:"MIDI Controller"},"\0\0":{m:"Midi Fighter Spectra",d:"MIDI Controller"},"\0\0":{m:"Midi Fighter Twister",d:"MIDI Controller"}},d[" \b"]={"c":{m:"Axiom 61",d:"MIDI Controller"}},d[" )"]={"\0!\0":{m:"Nova",d:"Synth Module"},"3\0\0\0":{m:"Bass Station II",d:"Analog Synthesizer"}},d["!"]={"g2\0":{m:"Push 2",d:"MIDI Controller"}}});