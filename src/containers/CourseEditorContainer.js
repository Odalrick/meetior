import { connect } from 'react-redux'
import immutable from 'immutable'

import CourseEditor from '../components/CourseEditor'

const lessons = [
  {
    "title": "Nulli potentus",
    "slides": [
      {
        "text": "<h1>Neutrum vero, inquit ille.</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est enim\n      effectrix multarum et magnarum voluptatum. Proclivi currit oratio. Quid\n      ad utilitatem tantae pecuniae? Non est igitur voluptas bonum. </p>\n      <p>Sed nimis multa. Inquit, dasne adolescenti veniam? Quis enim redargueret?\n      Quibusnam praeteritis? </p>\n<ul>\n  <li>Si enim ad populum me vocas,\n      eum.</li>\n  <li>Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis,\n   imitari etiam velis.</li>\n  <li>Atqui perspicuum est hominem e corpore animoque constare, cum primae sint animi\n  partes, secundae corporis.</li>\n  <li>Qui autem esse poteris, nisi te amor ipse ceperit?</li>\n  <li>Semper enim ita adsumit aliquid, ut ea, quae prima dederit, non deserat.</li>\n</ul>\n<p>Quis negat? Sedulo, inquam, faciam. Duo Reges: constructio interrete. Negat enim\nsummo bono afferre incrementum diem. Is es profecto tu. Ne discipulum abducam, times.\n</p>\n\n"
      },
      {
        "text": "<h1>Apparet statim, quae sint officia, quae actiones.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proclivi currit oratio.\nNihil ad rem! Ne sit sane; Age sane, inquam. Sed tamen intellego quid velit. Duo Reges:\nconstructio interrete. </p>\n\n<ul>\n  <li>Cum sciret confestim esse moriendum eamque mortem ardentiore studio peteret, quam\n  Epicurus voluptatem petendam putat.</li>\n  <li>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt.</li>\n  <li>Ut proverbia non nulla veriora sint quam vestra dogmata.</li>\n  <li>Unum nescio, quo modo possit, si luxuriosus sit, finitas cupiditates habere.</li>\n</ul>\n\n\n<p>Memini me adesse P. Sed fortuna fortis; Sullae consulatum? Ita nemo beato beatior.\n </p>\n\n<p>Efficiens dici potest. Primum Theophrasti, Strato, physicum se voluit; Recte dicis;\nSed in rebus apertissimis nimium longi sumus. </p>\n\n"
      },
      {
        "text": "<h1>Non est ista, inquam, Piso, magna dissensio.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin aliud quid voles,\npostea. Sed fortuna fortis; Cur iustitia laudatur? Duo Reges: constructio interrete. </p>\n\n<ul>\n  <li>Quid ergo hoc loco intellegit honestum?</li>\n  <li>Nobis aliter videtur, recte secusne, postea;</li>\n  <li>Sequitur disserendi ratio cognitioque naturae;</li>\n  <li>Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?</li>\n</ul>\n\n\n<p>Paria sunt igitur. Ut aliquid scire se gaudeant? Haec dicuntur fortasse ieiunius;\nTubulo putas dicere? </p>\n\n<p>Eaedem res maneant alio modo. Res enim concurrent contrariae. Hoc tu nunc in illo\n probas. Eaedem res maneant alio modo. Hoc tu nunc in illo probas. </p>\n\n"
      }
    ],
    "_id": "eecf0a39454b4b2244ebdc3518015605"
  },
  {
    "title": "Excretion ignatius",
    "slides": [
      {
        "text": "<h1>Alterum significari idem, ut si diceretur, officia media omnia aut\n      pleraque servantem vivere.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclare hoc quidem.\n Summus dolor plures dies manere non potest? Duo Reges: constructio interrete. Teneo,\n inquit, finem illi videri nihil dolere. At ego quem huic anteponam non audeo dicere;\n  Tanta vis admonitionis inest in locis; Istic sum, inquit. Quo modo autem philosophus\n   loquitur? </p>\n\n<h2>Summum ením bonum exposuit vacuitatem doloris;</h2>\n\n<p>Poterat autem inpune; Itaque his sapiens semper vacabit. Quid iudicant sensus? </p>\n\n<ul>\n  <li>Qui autem de summo bono dissentit de tota philosophiae ratione dissentit.</li>\n  <li>Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem\n   in virtutum concilium adducere?</li>\n  <li>Vidit Homerus probari fabulam non posse, si cantiunculis tantus irretitus vir\n   teneretur;</li>\n</ul>\n\n\n<p>Sed haec nihil sane ad rem; Sed haec in pueris; Poterat autem inpune; Cur haec\neadem Democritus? Quantum Aristoxeni ingenium consumptum videmus in musicis? Nam ante\nAristippus, et ille melius. </p>\n\n"
      },
      {
        "text": "<h1>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam\n      pollicetur.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur iustitia laudatur?\nIta prorsus, inquam; Sullae consulatum? Duo Reges: constructio interrete. </p>\n\n<ul>\n  <li>Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse?</li>\n  <li>Ita ne hoc quidem modo paria peccata sunt.</li>\n  <li>Est enim tanti philosophi tamque nobilis audacter sua decreta defendere.</li>\n  <li>Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros\n   spectant, ingeniosorum sunt;</li>\n  <li>Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione\n  naturae intellegi potest.</li>\n  <li>Polemoni et iam ante Aristoteli ea prima visa sunt, quae paulo ante dixi.</li>\n</ul>\n\n\n<p>Sed quid sentiat, non videtis. Istic sum, inquit. Idemne, quod iucunde? </p>\n\n<p>Cave putes quicquam esse verius. Summum a vobis bonum voluptas dicitur. </p>\n\n"
      },
      {
        "text": "<h1>Est enim effectrix multarum et magnarum voluptatum.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Certe, nisi voluptatem\ntanti aestimaretis. Duo Reges: constructio interrete. Negare non possum. Cur post\nTarentum ad Archytam? Quid me istud rogas? </p>\n\n<ul>\n  <li>Sed est forma eius disciplinae, sicut fere ceterarum, triplex: una pars est\n  naturae, disserendi altera, vivendi tertia.</li>\n  <li>Si qua in iis corrigere voluit, deteriora fecit.</li>\n  <li>Antiquorum autem sententiam Antiochus noster mihi videtur persequi diligentissime,\n   quam eandem Aristoteli fuisse et Polemonis docet.</li>\n</ul>\n\n\n<p>Pauca mutat vel plura sane; Comprehensum, quod cognitum non habet? De quibus cupio\n scire quid sentias. An eiusdem modi? Ratio quidem vestra sic cogit. Philosophi autem in\n  suis lectulis plerumque moriuntur. Non igitur bene. Sed ad rem redeamus; </p>\n\n<p>Primum in nostrane potestate est, quid meminerimus? Hic nihil fuit, quod quaereremus.\n Sed ad bona praeterita redeamus. Praeclare hoc quidem. Summae mihi videtur inscitiae.\n Praeteritis, inquit, gaudeo. Ita prorsus, inquam; Satis est ad hoc responsum. </p>\n\n"
      }
    ],
    "_id": "eecf0a39454b4b2244ebdc351801603e"
  },
  {
    "title": "Absolvo summarun",
    "slides": [
      {
        "text": "<h1>Respondent extrema primis, media utrisque, omnia omnibus.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid sequatur, quid\nrepugnet, vident. Certe, nisi voluptatem tanti aestimaretis. Sed ad illum redeo. Duo\n Reges: constructio interrete. Vide, quantum, inquam, fallare, Torquate. Sed quot\n homines, tot sententiae; </p>\n\n<ul>\n  <li>Quae hic rei publicae vulnera inponebat, eadem ille sanabat.</li>\n  <li>Satis est tibi in te, satis in legibus, satis in mediocribus amicitiis\n  praesidii.</li>\n  <li>Maximas vero virtutes iacere omnis necesse est voluptate dominante.</li>\n  <li>Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil\n  habemus.</li>\n</ul>\n\n\n<p>Illi enim inter se dissentiunt. Sed fortuna fortis; Memini vero, inquam; Sint\nista Graecorum; Apparet statim, quae sint officia, quae actiones. At enim sequor\nutilitatem. </p>\n\n<p>Quam ob rem tandem, inquit, non satisfacit? Quid de Pythagora? Stoici scilicet.\n Istic sum, inquit. Non semper, inquam; Minime vero, inquit ille, consentit. </p>\n\n"
      },
      {
        "text": "<h1>Ita multa dicunt, quae vix intellegam.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audeo dicere, inquit.\nPrave, nequiter, turpiter cenabat; Easdemne res? Nemo igitur esse beatus potest.\nQuibusnam praeteritis? </p>\n\n<ul>\n  <li>Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt.\n  </li>\n  <li>Hoc loco tenere se Triarius non potuit.</li>\n  <li>Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant.</li>\n</ul>\n\n\n<h2>Duo Reges: constructio interrete.</h2>\n\n<p>Sequitur disserendi ratio cognitioque naturae; Deinde dolorem quem maximum? Hic\nambiguo ludimur. Age sane, inquam. Vide, quantum, inquam, fallare, Torquate. Quo\ntandem modo? </p>\n\n<p>An tu me de L. Scrupulum, inquam, abeunti; Pauca mutat vel plura sane; </p>\n\n"
      },
      {
        "text": "<h1>Negat enim summo bono afferre incrementum diem.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio\ninterrete. Haeret in salebra. Sequitur disserendi ratio cognitioque naturae; Sed fac\n ista esse non inportuna; Quid ad utilitatem tantae pecuniae? Inquit, dasne\n adolescenti veniam? At certe gravius. Prioris generis est docilitas, memoria; </p>\n\n<ul>\n  <li>Quod ea non occurrentia fingunt, vincunt Aristonem;</li>\n  <li>Qualem igitur hominem natura inchoavit?</li>\n  <li>Quonam, inquit, modo?</li>\n</ul>\n\n\n<p>Sic enim censent, oportunitatis esse beate vivere. Murenam te accusante defenderem.\n Itaque contra est, ac dicitis; Magna laus. Verum hoc idem saepe faciamus. Honesta\n oratio, Socratica, Platonis etiam. </p>\n\n<p>Simus igitur contenti his. At multis malis affectus. Quid est igitur, inquit, quod\nrequiras? Quid igitur, inquit, eos responsuros putas? Sed haec omittamus; Confecta\nres esset. </p>\n\n"
      }
    ],
    "_id": "eecf0a39454b4b2244ebdc351801623f"
  },
  {
    "title": "Exctretias Buggis",
    "slides": [
      {
        "text": "<h1>Quia nec honesto quic quam honestius nec turpi turpius.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Age, inquies, ista parva\nsunt. Oratio me istius philosophi non offendit; Si quae forte-possumus. Duo Reges:\nconstructio interrete. </p>\n\n<ul>\n  <li>Sed quid attinet de rebus tam apertis plura requirere?</li>\n  <li>Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri,\n   ut cum voluptate vivatur.</li>\n  <li>Idemque diviserunt naturam hominis in animum et corpus.</li>\n  <li>Hunc ipsum Zenonis aiunt esse finem declarantem illud, quod a te dictum est,\n  convenienter naturae vivere.</li>\n</ul>\n\n\n<h2>An vero, inquit, quisquam potest probare, quod perceptfum, quod.</h2>\n\n<p>Que Manilium, ab iisque M. Etiam beatissimum? Beatum, inquit. Tuo vero id quidem,\ninquam, arbitratu. </p>\n\n<h3>Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui\n deceat frugaliter.</h3>\n\n<p>Negare non possum. In schola desinis. </p>\n\n"
      },
      {
        "text": "<h1>Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe,\n       defecerit?</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo studio Aristophanem\nputamus aetatem in litteris duxisse? Contineo me ab exemplis. Bonum incolumis acies:\n misera caecitas. Duo Reges: constructio interrete. Hic ambiguo ludimur. Audeo dicere,\n  inquit. Nihil illinc huc pervenit. </p>\n\n<ul>\n  <li>Praeclare Laelius, et recte sofñw, illudque vere: O Publi, o gurges, Galloni!\n   es homo miser, inquit.</li>\n  <li>Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint,\n  fruentem vivere.</li>\n  <li>Sic enim maiores nostri labores non fugiendos tristissimo tamen verbo aerumnas\n  etiam in deo nominaverunt.</li>\n  <li>Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil post mortem\n  ad nos pertinere?</li>\n  <li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et\n   cognitionem habent faciliorem.</li>\n</ul>\n\n\n<h2>Huius ego nunc auctoritatem sequens idem faciam.</h2>\n\n<p>Omnes enim iucundum motum, quo sensus hilaretur. Sed ad bona praeterita redeamus.\nPraeclarae mortes sunt imperatoriae; Itaque contra est, ac dicitis; Tria genera bonorum;\n </p>\n\n<p>Idemne, quod iucunde? Cyrenaici quidem non recusant; Non est igitur voluptas bonum.\n Zenonis est, inquam, hoc Stoici. </p>\n\n"
      },
      {
        "text": "<h1>Graccho, eius fere, aequalí?</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita prorsus, inquam; At\n certe gravius. Duo Reges: constructio interrete. Tollenda est atque extrahenda\n radicitus. Cur id non ita fit? Haec dicuntur inconstantissime. </p>\n\n<ul>\n  <li>Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis\n   apti esse ad naturam videntur.</li>\n  <li>Illa videamus, quae a te de amicitia dicta sunt.</li>\n  <li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et\n  cognitionem habent faciliorem.</li>\n  <li>Quantum Aristoxeni ingenium consumptum videmus in musicis?</li>\n</ul>\n\n\n<p>Quid Zeno? Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Tibi hoc\nincredibile, quod beatissimum. Reguli reiciendam; Praeclare hoc quidem. Hunc vos\nbeatum; </p>\n\n<h2>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt.</h2>\n\n<p>Videsne quam sit magna dissensio? Est, ut dicis, inquam. Nos commodius agimus.\nQuam nemo umquam voluptatem appellavit, appellat; Tum Torquatus: Prorsus, inquit,\nassentior; </p>\n\n"
      }
    ],
    "_id": "eecf0a39454b4b2244ebdc3518016fc2"
  },
  {
    "title": "Tempori exta",
    "slides": [
      {
        "text": "<h1>Ita redarguitur ipse a sese, convincunturque scripta eius probitate\n       ipsius ac moribus.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summae mihi videtur\n inscitiae. Idem iste, inquam, de voluptate quid sentit? Recte dicis; Duo Reges:\n constructio interrete. Deinde dolorem quem maximum? Proclivi currit oratio. Quid\n  enim? Restatis igitur vos; </p>\n\n<h2>Nam, ut sint illa vendibiliora, haec uberiora certe sunt.</h2>\n\n<p>Bonum liberi: misera orbitas. Erit enim mecum, si tecum erit. Etiam beatissimum?\nSimus igitur contenti his. Hic ambiguo ludimur. Haec dicuntur inconstantissime. </p>\n\n<ul>\n  <li>Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur?</li>\n  <li>Sin aliud quid voles, postea.</li>\n  <li>Sic enim censent, oportunitatis esse beate vivere.</li>\n</ul>\n\n\n<p>At certe gravius. Comprehensum, quod cognitum non habet? Qualem igitur hominem\nnatura inchoavit? Graccho, eius fere, aequalí? Non quam nostram quidem, inquit\nPomponius iocans; </p>\n\n"
      },
      {
        "text": "<h1>Duo Reges: constructio interrete.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bestiarum vero nullum\niudicium puto. Simus igitur contenti his. Praeclarae mortes sunt imperatoriae; Faceres\n tu quidem, Torquate, haec omnia; Immo alio genere; </p>\n\n<ul>\n  <li>Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti\n  videre, nihil tranquilli potest.</li>\n  <li>Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.</li>\n  <li>Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate.\n  </li>\n  <li>Vadem te ad mortem tyranno dabis pro amico, ut Pythagoreus ille Siculo fecit\n   tyranno?</li>\n  <li>Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi\n  nominis.</li>\n  <li>An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas\n   facit?</li>\n  <li>Nam illud quidem adduci vix possum, ut ea, quae senserit ille, tibi non vera\n  videantur.</li>\n</ul>\n\n\n<h2>Si enim non fuit eorum iudicii, nihilo magis hoc non addito illud est iudicatum.</h2>\n\n<p>Quonam, inquit, modo? Omnia peccata paria dicitis. Quonam modo? Tenent mordicus.</p>\n\n<p>Nulla erit controversia. Quare attende, quaeso. Tu vero, inquam, ducas licet,\nsi sequetur; Hunc vos beatum; Quibusnam praeteritis? Hic ambiguo ludimur. Hic nihil\n fuit, quod quaereremus. Quod quidem iam fit etiam in Academia. </p>\n\n"
      },
      {
        "text": "<h1>Quod autem principium officii quaerunt, melius quam Pyrrho;</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeteritis, inquit,\n gaudeo. Vide, quaeso, rectumne sit. Duo Reges: constructio interrete. Reguli\n reiciendam; </p>\n\n<ul>\n  <li>Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit;</li>\n  <li>Ait enim se, si uratur, Quam hoc suave! dicturum.</li>\n  <li>Quamvis enim depravatae non sint, pravae tamen esse possunt.</li>\n  <li>Praeclare hoc quidem.</li>\n</ul>\n\n\n<p>Memini me adesse P. Paria sunt igitur. A mene tu? </p>\n\n<h2>Non est ista, inquam, Piso, magna dissensio.</h2>\n\n<p>Prioris generis est docilitas, memoria; Id enim natura desiderat. Tu quidem reddes;\n Quis Aristidem non mortuum diligit? </p>\n\n"
      }
    ],
    "_id": "eecf0a39454b4b2244ebdc3518017cb0"
  }
]

const course = {
  title: 'Do the hustle!',
  description: 'The Hustle is a catchall name for some disco dances which were extremely popular in the 1970s. Today it mostly refers to the unique partner dance done in ballrooms and nightclubs to disco music.[1] It has some features in common with swing dance. Its basic steps are somewhat similar to the Discofox, which emerged at about the same time and is more familiar in various European countries.',
  lessons,
}

function mapStateToProps(state) {
  return {
    course: immutable.fromJS(course)
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEditor)
