import co from 'co'
import fetch from 'node-fetch'
import R from 'ramda'

const fetchSlide = () => fetch('http://loripsum.net/api/3/short/headers/ul', {
  method: 'GET',
}).then(res => {
  if (res.status >= 400) {
    throw new Error(`status ${test.status}`)
  } else {
    return res.text()
  }
})

const fetchId = () => fetch('http://localhost:5984/_uuids', {
  method: 'GET',
}).then(res => {
  if (res.status >= 400) {
    throw new Error(`status ${test.status}`)
  } else {
    return res.json()
  }
}).then((data) => data.uuids[0])

const raw = [
  {
    title: 'Nulli potentus',
    slides: [
      {
        text: `<h1>Neutrum vero, inquit ille.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est enim
      effectrix multarum et magnarum voluptatum. Proclivi currit oratio. Quid
      ad utilitatem tantae pecuniae? Non est igitur voluptas bonum. </p>
      <p>Sed nimis multa. Inquit, dasne adolescenti veniam? Quis enim redargueret?
      Quibusnam praeteritis? </p>
<ul>
  <li>Si enim ad populum me vocas,
      eum.</li>
  <li>Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis,
   imitari etiam velis.</li>
  <li>Atqui perspicuum est hominem e corpore animoque constare, cum primae sint animi
  partes, secundae corporis.</li>
  <li>Qui autem esse poteris, nisi te amor ipse ceperit?</li>
  <li>Semper enim ita adsumit aliquid, ut ea, quae prima dederit, non deserat.</li>
</ul>
<p>Quis negat? Sedulo, inquam, faciam. Duo Reges: constructio interrete. Negat enim
summo bono afferre incrementum diem. Is es profecto tu. Ne discipulum abducam, times.
</p>

`,
      },
      {
        text: `<h1>Apparet statim, quae sint officia, quae actiones.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proclivi currit oratio.
Nihil ad rem! Ne sit sane; Age sane, inquam. Sed tamen intellego quid velit. Duo Reges:
constructio interrete. </p>

<ul>
  <li>Cum sciret confestim esse moriendum eamque mortem ardentiore studio peteret, quam
  Epicurus voluptatem petendam putat.</li>
  <li>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt.</li>
  <li>Ut proverbia non nulla veriora sint quam vestra dogmata.</li>
  <li>Unum nescio, quo modo possit, si luxuriosus sit, finitas cupiditates habere.</li>
</ul>


<p>Memini me adesse P. Sed fortuna fortis; Sullae consulatum? Ita nemo beato beatior.
 </p>

<p>Efficiens dici potest. Primum Theophrasti, Strato, physicum se voluit; Recte dicis;
Sed in rebus apertissimis nimium longi sumus. </p>

`,
      },
      {
        text: `<h1>Non est ista, inquam, Piso, magna dissensio.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin aliud quid voles,
postea. Sed fortuna fortis; Cur iustitia laudatur? Duo Reges: constructio interrete. </p>

<ul>
  <li>Quid ergo hoc loco intellegit honestum?</li>
  <li>Nobis aliter videtur, recte secusne, postea;</li>
  <li>Sequitur disserendi ratio cognitioque naturae;</li>
  <li>Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?</li>
</ul>


<p>Paria sunt igitur. Ut aliquid scire se gaudeant? Haec dicuntur fortasse ieiunius;
Tubulo putas dicere? </p>

<p>Eaedem res maneant alio modo. Res enim concurrent contrariae. Hoc tu nunc in illo
 probas. Eaedem res maneant alio modo. Hoc tu nunc in illo probas. </p>

`,
      },
    ],
    _id: 'eecf0a39454b4b2244ebdc3518015605',
  },
  {
    title: 'Excretion ignatius',
    slides: [
      {
        text: `<h1>Alterum significari idem, ut si diceretur, officia media omnia aut
      pleraque servantem vivere.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclare hoc quidem.
 Summus dolor plures dies manere non potest? Duo Reges: constructio interrete. Teneo,
 inquit, finem illi videri nihil dolere. At ego quem huic anteponam non audeo dicere;
  Tanta vis admonitionis inest in locis; Istic sum, inquit. Quo modo autem philosophus
   loquitur? </p>

<h2>Summum ením bonum exposuit vacuitatem doloris;</h2>

<p>Poterat autem inpune; Itaque his sapiens semper vacabit. Quid iudicant sensus? </p>

<ul>
  <li>Qui autem de summo bono dissentit de tota philosophiae ratione dissentit.</li>
  <li>Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem
   in virtutum concilium adducere?</li>
  <li>Vidit Homerus probari fabulam non posse, si cantiunculis tantus irretitus vir
   teneretur;</li>
</ul>


<p>Sed haec nihil sane ad rem; Sed haec in pueris; Poterat autem inpune; Cur haec
eadem Democritus? Quantum Aristoxeni ingenium consumptum videmus in musicis? Nam ante
Aristippus, et ille melius. </p>

`,
      },
      {
        text: `<h1>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam
      pollicetur.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur iustitia laudatur?
Ita prorsus, inquam; Sullae consulatum? Duo Reges: constructio interrete. </p>

<ul>
  <li>Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse?</li>
  <li>Ita ne hoc quidem modo paria peccata sunt.</li>
  <li>Est enim tanti philosophi tamque nobilis audacter sua decreta defendere.</li>
  <li>Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros
   spectant, ingeniosorum sunt;</li>
  <li>Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione
  naturae intellegi potest.</li>
  <li>Polemoni et iam ante Aristoteli ea prima visa sunt, quae paulo ante dixi.</li>
</ul>


<p>Sed quid sentiat, non videtis. Istic sum, inquit. Idemne, quod iucunde? </p>

<p>Cave putes quicquam esse verius. Summum a vobis bonum voluptas dicitur. </p>

`,
      },
      {
        text: `<h1>Est enim effectrix multarum et magnarum voluptatum.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe, nisi voluptatem
tanti aestimaretis. Duo Reges: constructio interrete. Negare non possum. Cur post
Tarentum ad Archytam? Quid me istud rogas? </p>

<ul>
  <li>Sed est forma eius disciplinae, sicut fere ceterarum, triplex: una pars est
  naturae, disserendi altera, vivendi tertia.</li>
  <li>Si qua in iis corrigere voluit, deteriora fecit.</li>
  <li>Antiquorum autem sententiam Antiochus noster mihi videtur persequi diligentissime,
   quam eandem Aristoteli fuisse et Polemonis docet.</li>
</ul>


<p>Pauca mutat vel plura sane; Comprehensum, quod cognitum non habet? De quibus cupio
 scire quid sentias. An eiusdem modi? Ratio quidem vestra sic cogit. Philosophi autem in
  suis lectulis plerumque moriuntur. Non igitur bene. Sed ad rem redeamus; </p>

<p>Primum in nostrane potestate est, quid meminerimus? Hic nihil fuit, quod quaereremus.
 Sed ad bona praeterita redeamus. Praeclare hoc quidem. Summae mihi videtur inscitiae.
 Praeteritis, inquit, gaudeo. Ita prorsus, inquam; Satis est ad hoc responsum. </p>

`,
      },
    ],
    _id: 'eecf0a39454b4b2244ebdc351801603e',
  },
  {
    title: 'Absolvo summarun',
    slides: [
      {
        text: `<h1>Respondent extrema primis, media utrisque, omnia omnibus.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid sequatur, quid
repugnet, vident. Certe, nisi voluptatem tanti aestimaretis. Sed ad illum redeo. Duo
 Reges: constructio interrete. Vide, quantum, inquam, fallare, Torquate. Sed quot
 homines, tot sententiae; </p>

<ul>
  <li>Quae hic rei publicae vulnera inponebat, eadem ille sanabat.</li>
  <li>Satis est tibi in te, satis in legibus, satis in mediocribus amicitiis
  praesidii.</li>
  <li>Maximas vero virtutes iacere omnis necesse est voluptate dominante.</li>
  <li>Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil
  habemus.</li>
</ul>


<p>Illi enim inter se dissentiunt. Sed fortuna fortis; Memini vero, inquam; Sint
ista Graecorum; Apparet statim, quae sint officia, quae actiones. At enim sequor
utilitatem. </p>

<p>Quam ob rem tandem, inquit, non satisfacit? Quid de Pythagora? Stoici scilicet.
 Istic sum, inquit. Non semper, inquam; Minime vero, inquit ille, consentit. </p>

`,
      },
      {
        text: `<h1>Ita multa dicunt, quae vix intellegam.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audeo dicere, inquit.
Prave, nequiter, turpiter cenabat; Easdemne res? Nemo igitur esse beatus potest.
Quibusnam praeteritis? </p>

<ul>
  <li>Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt.
  </li>
  <li>Hoc loco tenere se Triarius non potuit.</li>
  <li>Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant.</li>
</ul>


<h2>Duo Reges: constructio interrete.</h2>

<p>Sequitur disserendi ratio cognitioque naturae; Deinde dolorem quem maximum? Hic
ambiguo ludimur. Age sane, inquam. Vide, quantum, inquam, fallare, Torquate. Quo
tandem modo? </p>

<p>An tu me de L. Scrupulum, inquam, abeunti; Pauca mutat vel plura sane; </p>

`,
      },
      {
        text: `<h1>Negat enim summo bono afferre incrementum diem.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio
interrete. Haeret in salebra. Sequitur disserendi ratio cognitioque naturae; Sed fac
 ista esse non inportuna; Quid ad utilitatem tantae pecuniae? Inquit, dasne
 adolescenti veniam? At certe gravius. Prioris generis est docilitas, memoria; </p>

<ul>
  <li>Quod ea non occurrentia fingunt, vincunt Aristonem;</li>
  <li>Qualem igitur hominem natura inchoavit?</li>
  <li>Quonam, inquit, modo?</li>
</ul>


<p>Sic enim censent, oportunitatis esse beate vivere. Murenam te accusante defenderem.
 Itaque contra est, ac dicitis; Magna laus. Verum hoc idem saepe faciamus. Honesta
 oratio, Socratica, Platonis etiam. </p>

<p>Simus igitur contenti his. At multis malis affectus. Quid est igitur, inquit, quod
requiras? Quid igitur, inquit, eos responsuros putas? Sed haec omittamus; Confecta
res esset. </p>

`,
      },
    ],
    _id: 'eecf0a39454b4b2244ebdc351801623f',
  },
  {
    slides: [
      {
        text: `<h1>Quia nec honesto quic quam honestius nec turpi turpius.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Age, inquies, ista parva
sunt. Oratio me istius philosophi non offendit; Si quae forte-possumus. Duo Reges:
constructio interrete. </p>

<ul>
  <li>Sed quid attinet de rebus tam apertis plura requirere?</li>
  <li>Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri,
   ut cum voluptate vivatur.</li>
  <li>Idemque diviserunt naturam hominis in animum et corpus.</li>
  <li>Hunc ipsum Zenonis aiunt esse finem declarantem illud, quod a te dictum est,
  convenienter naturae vivere.</li>
</ul>


<h2>An vero, inquit, quisquam potest probare, quod perceptfum, quod.</h2>

<p>Que Manilium, ab iisque M. Etiam beatissimum? Beatum, inquit. Tuo vero id quidem,
inquam, arbitratu. </p>

<h3>Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui
 deceat frugaliter.</h3>

<p>Negare non possum. In schola desinis. </p>

`,
      },
      {
        text: `<h1>Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe,
       defecerit?</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo studio Aristophanem
putamus aetatem in litteris duxisse? Contineo me ab exemplis. Bonum incolumis acies:
 misera caecitas. Duo Reges: constructio interrete. Hic ambiguo ludimur. Audeo dicere,
  inquit. Nihil illinc huc pervenit. </p>

<ul>
  <li>Praeclare Laelius, et recte sofñw, illudque vere: O Publi, o gurges, Galloni!
   es homo miser, inquit.</li>
  <li>Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint,
  fruentem vivere.</li>
  <li>Sic enim maiores nostri labores non fugiendos tristissimo tamen verbo aerumnas
  etiam in deo nominaverunt.</li>
  <li>Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil post mortem
  ad nos pertinere?</li>
  <li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et
   cognitionem habent faciliorem.</li>
</ul>


<h2>Huius ego nunc auctoritatem sequens idem faciam.</h2>

<p>Omnes enim iucundum motum, quo sensus hilaretur. Sed ad bona praeterita redeamus.
Praeclarae mortes sunt imperatoriae; Itaque contra est, ac dicitis; Tria genera bonorum;
 </p>

<p>Idemne, quod iucunde? Cyrenaici quidem non recusant; Non est igitur voluptas bonum.
 Zenonis est, inquam, hoc Stoici. </p>

`,
      },
      {
        text: `<h1>Graccho, eius fere, aequalí?</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita prorsus, inquam; At
 certe gravius. Duo Reges: constructio interrete. Tollenda est atque extrahenda
 radicitus. Cur id non ita fit? Haec dicuntur inconstantissime. </p>

<ul>
  <li>Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis
   apti esse ad naturam videntur.</li>
  <li>Illa videamus, quae a te de amicitia dicta sunt.</li>
  <li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et
  cognitionem habent faciliorem.</li>
  <li>Quantum Aristoxeni ingenium consumptum videmus in musicis?</li>
</ul>


<p>Quid Zeno? Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Tibi hoc
incredibile, quod beatissimum. Reguli reiciendam; Praeclare hoc quidem. Hunc vos
beatum; </p>

<h2>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt.</h2>

<p>Videsne quam sit magna dissensio? Est, ut dicis, inquam. Nos commodius agimus.
Quam nemo umquam voluptatem appellavit, appellat; Tum Torquatus: Prorsus, inquit,
assentior; </p>

`,
      },
    ],
    _id: 'eecf0a39454b4b2244ebdc3518016fc2',
  },
  {
    title: 'Tempori exta',
    slides: [
      {
        text: `<h1>Ita redarguitur ipse a sese, convincunturque scripta eius probitate
       ipsius ac moribus.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summae mihi videtur
 inscitiae. Idem iste, inquam, de voluptate quid sentit? Recte dicis; Duo Reges:
 constructio interrete. Deinde dolorem quem maximum? Proclivi currit oratio. Quid
  enim? Restatis igitur vos; </p>

<h2>Nam, ut sint illa vendibiliora, haec uberiora certe sunt.</h2>

<p>Bonum liberi: misera orbitas. Erit enim mecum, si tecum erit. Etiam beatissimum?
Simus igitur contenti his. Hic ambiguo ludimur. Haec dicuntur inconstantissime. </p>

<ul>
  <li>Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur?</li>
  <li>Sin aliud quid voles, postea.</li>
  <li>Sic enim censent, oportunitatis esse beate vivere.</li>
</ul>


<p>At certe gravius. Comprehensum, quod cognitum non habet? Qualem igitur hominem
natura inchoavit? Graccho, eius fere, aequalí? Non quam nostram quidem, inquit
Pomponius iocans; </p>

`,
      },
      {
        text: `<h1>Duo Reges: constructio interrete.</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bestiarum vero nullum
iudicium puto. Simus igitur contenti his. Praeclarae mortes sunt imperatoriae; Faceres
 tu quidem, Torquate, haec omnia; Immo alio genere; </p>

<ul>
  <li>Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti
  videre, nihil tranquilli potest.</li>
  <li>Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.</li>
  <li>Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate.
  </li>
  <li>Vadem te ad mortem tyranno dabis pro amico, ut Pythagoreus ille Siculo fecit
   tyranno?</li>
  <li>Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi
  nominis.</li>
  <li>An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas
   facit?</li>
  <li>Nam illud quidem adduci vix possum, ut ea, quae senserit ille, tibi non vera
  videantur.</li>
</ul>


<h2>Si enim non fuit eorum iudicii, nihilo magis hoc non addito illud est iudicatum.</h2>

<p>Quonam, inquit, modo? Omnia peccata paria dicitis. Quonam modo? Tenent mordicus.</p>

<p>Nulla erit controversia. Quare attende, quaeso. Tu vero, inquam, ducas licet,
si sequetur; Hunc vos beatum; Quibusnam praeteritis? Hic ambiguo ludimur. Hic nihil
 fuit, quod quaereremus. Quod quidem iam fit etiam in Academia. </p>

`,
      },
      {
        text: `<h1>Quod autem principium officii quaerunt, melius quam Pyrrho;</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeteritis, inquit,
 gaudeo. Vide, quaeso, rectumne sit. Duo Reges: constructio interrete. Reguli
 reiciendam; </p>

<ul>
  <li>Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</li>
  <li>Ait enim se, si uratur, Quam hoc suave! dicturum.</li>
  <li>Quamvis enim depravatae non sint, pravae tamen esse possunt.</li>
  <li>Praeclare hoc quidem.</li>
</ul>


<p>Memini me adesse P. Paria sunt igitur. A mene tu? </p>

<h2>Non est ista, inquam, Piso, magna dissensio.</h2>

<p>Prioris generis est docilitas, memoria; Id enim natura desiderat. Tu quidem reddes;
 Quis Aristidem non mortuum diligit? </p>

`,
      },
    ],
    _id: 'eecf0a39454b4b2244ebdc3518017cb0',
  },
]

co(function *() {
  try {
    const test = yield R.map(R.assoc('type', 'lesson'))(raw)

    console.log(JSON.stringify(test, null, 2))
  } catch (e) {
    console.error(e)
  }
})
