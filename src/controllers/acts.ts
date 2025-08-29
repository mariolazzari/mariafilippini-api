import { FastifyReply, FastifyRequest } from "fastify";
import { Act, ActTitle } from "../schemas/act";
import { Message } from "../schemas";

let acts: Act[] = [
  {
    title: "A sette anni si è bambinelli e a settanta si è ancora quelli",
    titleDia: "A SÈT AGN S’È PÖTÈI E A SETÀNTA S’È AMÒ CHÈI",
    genre: "Atto unico comico, adatto per il Natale",
    duration: "40 minuti",
    scene: "Un tinello",
    actors: "n. 5, di cui 2 maschili e 3 femminili",
    subject: "Un litigio",
    plot: "Antonio e Paolo, due amici per la pelle, litigano per motivi futili e non si frequentano da un anno. È la vigilia di Natale e le loro mogli, con l’aiuto di una nipote, studiano uno stratagemma per rappacificarli. Imitandone la grafia, mandano all’uno una lettera di scusa da parte dell’altro. Al momento il trucco funziona, ma in seguito viene scoperto e si torna alla situazione di partenza. Solo la pazienza della nipote riuscirà alla fine a vincere la testardaggine dei due litiganti.",
    meaning:
      "Certe rotture diventano insanabili, non per la gravità del fatto che le ha causate, ma per l’intestardirsi dei due litiganti in un falso orgoglio che rende difficile chiedere scusa.",
    remarks: "",
  },
  {
    title: "A volte conviene pensare al passato",
    titleDia: "A ÓLTE CONVÉ CÓL PENSÉR TURNÀ ENDRÉ",
    genre: "Atto unico, divertente, ma pensoso",
    duration: "h 1",
    scene: "Un’osteria di un tempo",
    actors: "n. 12, di cui 9 maschili e 3 femminili",
    subject:
      "Quadretto della vita povera, ma solidale della civiltà contadina.",
    plot: "Nell’osteria di Giacomina vanno e vengono figure di un tempo, ormai scomparse, che si intrecciano alle vicende della famiglia dell’oste. I vecchi suoceri sono preoccupati per il futuro della vedova: suo figlio si farà sacerdote ed ella, alla loro morte, rimarrà sola e senza sostentamento. Desiderano che sposi Tonio, uno scapolone rozzo, ma buono e onesto, la cui timidezza rende ardua l’impresa.",
    meaning: "Tra poveri la solidarietà è maggiore.",
    remarks: "disponibile anche in lingua italiana",
  },
  {
    title: "Camera Bèpi",
    titleDia: "Camera Bèpi",
    genre: "serie di quattro scenette comiche",
    duration: "15 minuti l’una",
    scene: "il salone di un parrucchiere",
    actors:
      "5 maschili e 2 femminili, 2 maschili e 3 femminili,  4 maschili e 1 femminile, 4 maschili e 4 femminili",
    subject:
      "le disavventure di un barbiere stravagante e dei suoi strampalati clienti.",
    plot: "nella bottega del barbiere si incontrano e si intrecciano persone e vicende curiose e paradossali.",
    meaning:
      "ogni persona è un universo a sé, spesso incomprensibile agli altri.",
    remarks: "",
  },
  {
    title: "Carosello",
    titleDia: "Carosello",
    genre: "serie di otto scenette che si ispirano al Carosello",
    duration: "15 minuti l’una",
    scene: "tinello",
    actors: "2 maschili e 2 femminili",
    subject: "",
    plot: "",
    meaning: "",
    remarks: "",
  },
  {
    title: "Che disgrazia, ho fatto tredici",
    titleDia: "CHE DISGRÀSSIA, ME G’HO FAT TRÉDES!",
    genre: "Atto unico comico",
    duration: "45 minuti",
    scene: "tinello",
    actors: "n. 9, di cui 5 maschili e 4 femminili",
    subject: "Una vincita al totocalcio.",
    plot: "Un muratore vince al totocalcio una somma ingente. La moglie, esaltata, diffonde la notizia e si dà alle spese pazze. Inizia la processione di amici, parenti e conoscenti che chiedono denaro. Alla fine della giornata, le somme elargite superano quella vinta e per di più l’amico, incaricato di giocare la schedina, confessa di esserselo scordato.",
    meaning:
      "I soldi di fortuna se ne vanno più in fretta di quelli guadagnati.",
    remarks: "",
  },
  {
    title: "Chi ha ucciso la Befana",
    titleDia: "",
    genre: "Commediola giallo-comica",
    duration: "40 minuti",
    scene: "un salotto",
    actors: "4 maschili e 2 femminili",
    subject:
      "testo scritto nell’intento di coinvolgere il pubblico nella scoperta del l’assassino. (utilizzato nelle cosiddette 'Cene con delitto')",
    plot: "La finta segretaria del vedovo di una ricchissima e filantropica signora viene trovata uccisa. I sospetti ricadono sui presunti beneficiari, tutti gravati da indizi.",
    meaning: "La verità è spesso nascosta sotto il velo dell’apparenza",
    remarks: "",
  },
  {
    title: "Dio li crea e poi li accoppia",
    titleDia: " DIO I A CREA E PÒ I A PÉRA",
    genre: "Atto unico comico",
    duration: "30 minuti",
    scene: "Un tinello",
    actors: "n. 5, di cui n. 2 maschili e n. 3 femminili",
    subject: "I matti stanno bene assieme",
    plot: "Peppino non ne può più di ospitare il cognato vedovo, capostazione in pensione con la mania di far partire i treni ad ogni ora del giorno e della notte. Intima a sua moglie di sbarazzarsene. La povera donna, consigliata da un’amica, combina un matrimonio tra lui e la casellante in pensione. L’amica è convinta di fare un dispetto alla casellante e invece le fa un grande favore. Anch’ella, infatti, ha la mania di alzare e abbassare le sbarre!     I due matti partono felici per il viaggio di nozze. Trascorreranno la prima notte vicino alla Stazione Centrale di Milano, così potranno far partire treni ogni momento.",
    meaning: "A volte si pensa di fare un dispetto ed invece si fa un favore",
    remarks: "disponibile anche in lingua italiana",
  },
  {
    title: "Gelo e calore",
    titleDia: "ZÉL E CALÙR",
    genre: "farsa natalizia",
    duration: "45 minuti",
    scene: "Un tinello",
    actors: "2 maschili e n. 4 femminili",
    subject: "L'integrazione",
    plot: "per far conoscere ai suoi familiari il ragazzo extra-comunitario di cui è innamorata, una ragazza lo introduce in casa spacciandolo per l’idraulico che deve riparare la caldaia, rottasi proprio la vigilia di Natale.",
    meaning:
      "la conoscenza diretta di persone di culture e religioni diverse aiuta a superare i pregiudizi degli uni nei confronti degli altri.",
    remarks: "",
  },
  {
    title: "Ho incontrato la volpe e il gatto",
    titleDia: "G’HO ‘NCONTRÀT LA VÓLP E ÈL GAT",
    genre:
      "atto unico, commissionato dal Comune di Brescia nell’ambito del programma di prevenzione delle truffe agli anziani e recitato nelle cinque circoscrizioni dai Vigili Urbani di Brescia.",
    duration: "h 1",
    scene: "Un salotto",
    actors: "n. 8 di cui 4 maschili e 4 femminili",
    subject:
      "tre condomini anziani, vittime di truffe, l’uno all’insaputa dell’altro.",
    plot: "Il Gatto e la Volpe, usando modalità diverse, truffano tre anziani, che, pur essendo amici, non si confidano per paura di essere derisi. Quando questa barriera psicologica viene superata, alla depressione subentra la rabbia e il desiderio di avere giustizia.",
    meaning:
      "La finalità del testo è di informare gli anziani sugli stratagemmi usati dai truffatori per metterli in condizione di saperli riconoscere e non cadere nelle loro trappole; convincerli della necessità di denunziare i fatti criminosi alle Autorità e di avvalersi dell’aiuto psicologico ed economico messo a disposizione dall’Amministrazione Comunale di Brescia",
    remarks: "",
  },
  {
    title: "I miracoli del computer",
    titleDia: "I MIRÀCOI DEL COMPUTER",
    genre: "Atto unico molto comico",
    duration: "30 minuti",
    scene: "Un tinello",
    actors: "n. 6, di cui 3 maschili e 3 femminili",
    subject: "Storia di una nonnetta arzilla che fa la cubista in discoteca",
    plot: "In famiglia più nessuno sopporta la nonna Rosina che passa le sue notti in discoteca e torna a casa all’alba. La nipote, tramite Internet, fa arrivare un vecchio chitarrista e cantante rap. Insieme andranno in tournée e in famiglia tornerà finalmente la quiete. Ma, ahimè, la tournée viene posticipata di un anno. Ora sono due i vecchi scatenati da sopportare! Suonano e cantano a tutte le ore e la vita diventa un inferno, ma la loro vitalità diventerà contagiosa e anche il resto della famiglia si unirà al loro gruppo musicale.",
    meaning:
      "Anche gli anziani hanno il diritto di divertirsi e di esprimere la loro vitalità.",
    remarks: "",
  },
  {
    title: "Il diavolo e l’acqua santa",
    titleDia: "ÈL DIÀOL E L’ACQUA SANTA",
    genre: "Atto unico comico",
    duration: "20/30 minuti",
    scene: "Un tinello",
    actors: "n. 5, di cui 2 maschili e 3 femminili",
    subject: "La gelosia",
    plot: "Una moglie trova tracce di rossetto sulla camicia del marito e si confida con un’amica, raccomandandole di custodire il segreto. Costei, invece di scoraggiare gli assurdi sospetti, dà corpo alle ombre e divulga la notizia per tutto il paese. Tutti puntano il dito contro l’ignaro e innocente marito, soprattutto la cognata … finchè non si scoprirà che ad essere tradita è proprio lei e il marito infedele è il suo!",
    meaning:
      "L’ironia della sorte fa capitare a noi ciò che rimproveriamo agli altri",
    remarks: "",
  },
  {
    title: "Il miracolo di Natale",
    titleDia: "ÈL MIRÀCOL DE NEDÀL",
    genre: "Atto unico, comico, ma anche struggente, adatto per il Natale",
    duration: "30 minuti",
    scene: "Un tinello",
    actors: "n. 6, di cui 3 maschili e 3 femminili.",
    subject: "La solidarietà.",
    plot: "È la vigilia di Natale, Daniela è indaffarata nei preparativi del cenone. Suo marito ha invitato il suo ricchissimo principale e la moglie. Il padrone di casa torna con un ragazzo malconcio e febbricitante, raccattato per strada, che si stringe al petto un violino. Lo soccorrono e lo mettono a letto, perchè temono che i ricchi ospiti lo vedano e ne restino disgustati. Il principale e la signora arrivano e vengono accolti con deferenza e rispetto. La signora Camilla è depressa e Daniela, con le sue continue gaffe, peggiora la situazione. Per di più il ragazzo si sveglia ed entra nella stanza suonando il violino. Ma, con grande sorpresa dei padroni di casa, Camilla e suo marito gli vanno incontro a braccia aperte. Il ragazzo col violino, infatti, è il loro figlio creduto morto.",
    meaning: "Un piccolo atto di solidarietà può alleviare grandi sofferenze",
    remarks: "disponibile anche in lingua italiana",
  },
  {
    title: "Il vedovo della Flaminia",
    titleDia: "ÈL VÉDOV DELA FLAMINIA",
    genre: "Atto unico comico",
    duration: "30 minuti",
    scene: "Un ambulatorio",
    actors: "n. 3 maschili",
    subject: "L’eccessivo attaccamento di certi uomini alla propria automobile",
    plot: "Un meccanico deve dare all’amico l’infausta notizia che la sua storica Lancia Flaminia non è più riparabile. Non ne ha il coraggio e chiede al medico di dargli la notizia al suo posto.Ma, ahimè, la moglie del malcapitato ha lo stesso nome della sua automobile ed egli capisce che è lei che dovrà essere rottamata.",
    meaning:
      "Quando si cercano vie traverse, perché non si ha il coraggio di affrontare direttamente il problema, si causano guai maggiori.",
    remarks: "",
  },
  {
    title: "L’ombrello e diverse scenette",
    titleDia: "L’OMBRÈL …",
    genre: "scenette brevi ed esilaranti",
    duration:
      "scelte opportunamente possono costituire uno spettacolo di cabaret della durata di un’ora.",
    scene: "a piacere",
    actors: "da un minimo di due",
    subject: "situazione comiche e assurde",
    plot: "Situazioni della vita di ogni giorno, rese paradossali e comiche dalle considerazioni e dai dialoghi di personaggi estrosi e imprevedibili.",
    meaning: "I tipi strani sono i più interessanti da conoscere",
    remarks: "",
  },
  {
    title: "La bella età",
    titleDia: "LA BÈLA ETÀ",
    genre: "Atto unico, comico, adatto per anziani",
    duration: "30 minuti",
    scene: "Una stanza camera-cucina",
    actors: "n. 4, di cui n. 2 maschili e n. 2 femminili",
    subject: "Un equivoco scatena la gelosia",
    plot: "La vecchia fidanzata di Carletto viene a sapere che lui va in giro con la Graziella. La sua gelosia si scatena, ma alla fine della vicenda, scoprirà che la Graziella non è la fornaia, ma una bicicletta.",
    meaning:
      "La divertente vicenda è un pretesto per insegnare agli anziani, che vivono soli, quali precauzioni prendere per evitare incidenti tra le mura domestiche.",
    remarks: "",
  },
  {
    title: "La coda della stella cometa",
    titleDia: "LA CÙA DELA STÈLA COMETA",
    genre: "Atto unico, comico, adatto per il Natale",
    duration: "30 minuti",
    scene: "Una canonica",
    actors: "n. 5, di cui n. 1 maschile e n. 4 femminili",
    subject: "La solidarietà",
    plot: "Teresa e Paola, due parrocchiane attive, raccolgono fondi per acquistare una stella cometa d’argento da mettere sopra il Presepio alla Messa di Natale, ma don Redenzio le convince a devolvere la somma ad una loro boriosa e superba amica, caduta in disgrazia",
    meaning: "I veri atti di devozione sono le buone azioni",
    remarks: "disponibile anche in lingua italiana",
  },
  {
    title: "La contessa dei topi",
    titleDia: "LA CONTESSA DEI SORÈCH",
    genre: "Atto unico, comico, adatto per il Natale",
    duration: "30 minuti",
    scene: "Un tinello",
    actors: "n. 5, di cui n. 1 maschile e n. 4 femminili",
    subject: "Un matrimonio combinato",
    plot: "Teresa vuol fare sposare la figlia al contino gobbo e malaticcio, ma la ragazza ama lo squattrinato e bel Gigetto e chiede l’aiuto dei nonni. I due vecchietti scandalizzano la contessa raccontando di strane abitudini della nipote e mandano a monte il matrimonio.",
    meaning: "Un marito ricco non garantisce un matrimonio felice",
    remarks: "",
  },
  {
    title: "La festa della mamma",
    titleDia: "LA FÈSTA DELA MAMA",
    genre: "Atto unico, comico, adatto per la festa della mamma",
    duration: "h 1",
    scene: "Un tinello",
    actors: "n. 12, di cui n. 5 maschili e n. 7 femminili",
    subject: "Una figlia organizza per la madre una festa in diretta TV",
    plot: "È la festa della mamma e la figlia invita una troupe televisiva a filmare l’avvenimento. La presenza delle telecamere eccita le partecipanti che, per risultare più interessanti, ne raccontano di cotte e di crude sulla loro famiglia.",
    meaning:
      "Pur di apparire in televisione, certe persone sono disposte a fare magre figure",
    remarks: "",
  },
  {
    title: "La lavatrice ecologica",
    titleDia: "",
    genre: "Atto unico comico",
    duration: "30 minuti",
    scene: "Un tinello",
    actors: "n. 4, di cui 3 maschili e 1 femminile",
    subject: "La paura dei mariti di essere traditi.",
    plot: "Tre professionisti, in seguito a battute maliziose nei loro confronti, temono che le loro mogli li tradiscano col tecnico della lavatrice. L’elettrodomestico, infatti, si guasta con sospettosa frequenza e decidono di sbarazzarsene. Furbescamente convincono le mogli a sostituirlo con l’ultimo ritrovato della scienza e della tecnica che altro non è che l’antico mastello delle nonne che le giovani mogli non hanno mai visto.",
    meaning: "Quanto è facile per certi uomini darla a bere a certe donne!",
    remarks: "",
  },
  {
    title: "La lingua di Paolo",
    titleDia: "",
    genre: "Atto unico comico, adatto per il Natale",
    duration: "40 minuti",
    scene: "Un tinello",
    actors: "n. 5, di cui 2 maschili e 3 femminile",
    subject: "Un litigio",
    plot: "Antonio e Paolo, due amici per la pelle, litigano per motivi futili e non si frequentano da un anno. È la vigilia di Natale e le loro mogli, con l’aiuto di una nipote, studiano uno stratagemma per rappacificarli. Imitandone la grafia, mandano all’uno una lettera di scusa da parte dell’altro. Al momento il trucco funziona, ma in seguito viene scoperto e si torna alla situazione di partenza. Solo la pazienza della nipote riuscirà alla fine a vincere la testardaggine dei due litiganti",
    meaning:
      "Certe rotture diventano insanabili, non per la gravità del fatto che le ha causate, ma per l’intestardirsi dei due litiganti in un falso orgoglio che rende difficile chiedere scusa.",
    remarks: "",
  },
  {
    title: "La principessa del pisello",
    titleDia: "LA PRINCIPESSA DEL ROAÎÒT",
    genre: "Atto unico comico",
    duration: "h 1",
    scene: "Un tinello",
    actors: "n. 11, di cui 7 maschili e 4 femminili",
    subject: "Un matrimonio combinato",
    plot: "La nuora vedova Teresa è depressa da quando sua figlia si è sposata e tutti, ognuno all’insaputa dell’altro, le trovano un pretendente. In realtà Teresa l’ha già trovato per conto suo ed è preoccupata, perché non sa come annunciarlo al resto della famiglia. All’appuntamento, fissato per caso alla stessa ora e nello stesso luogo, la vedova si troverà alle prese con ben quattro spasimanti.",
    meaning: "Può accadere che le belle sorprese sfocino in sgradevoli guai",
    remarks: "",
  },
  {
    title: "La sindrome della torta",
    titleDia: "LA SINDROME DELA TURTA",
    genre: "Testi comico",
    duration: "h 1",
    scene: "lo studio di una psichiatra",
    actors: "n. 3, di cui 2 femminili e 1 maschile",
    subject: "satira della psicanalisi",
    plot: "La protagonista soffre di una strana sindrome: arriva in ritardo di un’ora ad ogni appuntamento. Si rivolge ad una illustre psichiatra, che l’analizza con i metodi classici della psicanalisi (libere associazioni, ipnosi …) e scopre il dramma infantile, causa di tutti i suoi mali. In realtà, il motivo dei suoi ritardi è molto più banale: l’ora legale.",
    meaning:
      "Critica ad una semplicistica psicologia che attribuisce sempre i comportamenti deviati dei figli a traumi psicologici risalenti all’infanzia e ascrivibili alle manchevolezze dei genitori.",
    remarks: "",
  },
  {
    title: "La supplente del dottore",
    titleDia: "LA SUPLENTE DEL DUTÙR",
    genre: "Atto unico comico",
    duration: "15 minuti",
    scene: "Un tinello",
    actors: "n. 5, di cui 2 maschili e 3 femminili",
    subject: "Uno scambio di persone",
    plot: "Piero è ammalato ed aspetta il medico. Arriva la compagna di scuola della figlia e, scambiandola per la supplente del dottore, pretende di essere visitato da lei, che, invece, scappa terrorizzata",
    meaning: "Banali equivoci possono far nascere spiacevoli situazioni",
    remarks: "",
  },
  {
    title: "La supposta della poesia",
    titleDia: "",
    genre: "Atto unico comico, in rima baciata",
    duration: "20 minuti",
    scene: "Un ambulatorio",
    actors: "n. 2 maschili",
    subject: "Dedicato ai medici che ingozzano i pazienti di medicine",
    plot: "Un paziente, affetto da una curiosa malattia che lo costringe a parlare in rima, chiede aiuto al dottore. Il medico gli prescrive una terapia, che si rivela efficace, ma come effetto collaterale, fa ammalare il dottore della stessa malattia ed ora è lui che parla in rima! Ben presto l’effetto della medicina si annulla e il paziente ha una ricaduta. Ora entrambi parlano in rima e cambiano lavoro: faranno gli attori",
    meaning:
      "Se gli effetti collaterali delle medicine ricadessero sui dottori, essi forse sarebbero più prudenti nelle prescrizioni mediche",
    remarks: "",
  },
  {
    title: "La tournée",
    titleDia: "",
    genre: "Atto unico brillante, ma patetico",
    duration: "30/40 minuti",
    scene: "La sala d’aspetto di una stazione ferroviaria",
    actors:
      "n. 2 femminili + 2 comparse – le attrici devono saper ballare e cantare",
    subject:
      "Due anziane si incontrano in una sala d’aspetto. Prima si disprezzano, poi si conoscono e diventano amiche",
    plot: "Una vecchia donna, vissuta in convento, conosce una coetanea ex-chanteuse degli anni trenta, caduta in disgrazia insieme al duce e decisa a ritornare alla ribalta. L’ex-orfana vuole unirsi a lei per avere dalla vita ciò che le è stato negato. Dall’ex-chanteuse impara il can can, la mossa… Ma, quando finalmente arriva l’impresario che dovrebbe accompagnarle in tournée, il pubblico si accorge che egli è un infermiere che le riporterà là da dov’erano scappate: in manicomio",
    meaning:
      "Se, in tarda età, il bilancio della vita è amaro e insoddisfacente, è ancora possibile progettare un futuro felice e gratificante…quanto meno con la fantasia!",
    remarks: "disponibile anche in lingua italiana",
  },
  {
    title: "La vigilia di Natale",
    titleDia: "LA VIGILIA DE NEDÀL",
    genre: "Atto unico, comico, adatto per il Natale",
    duration: "30 minuti",
    scene: "Un tinello",
    actors: "n. 6, di cui 1 maschile e 5 femminili",
    subject: "La gelosia degli anziani",
    plot: "La nonna Rosina è arrabbiata con la nuora, che ha invitato al cenone della Vigilia di Natale un’antica fiamma del nonno. Il tarlo della gelosia dà corpo alle ombre e Rosina si convince che suo marito sta per fuggire con la vecchia fidanzata.  L’equivoco si chiarirà dopo una serie di situazioni equivoche e divertenti",
    meaning:
      "Amore e gelosia non muoiono col sopraggiungere della vecchiaia e non dobbiamo stupirci o scandalizzarci di fronte agli anziani che vivono questi sentimenti",
    remarks: "disponibile anche in lingua italiana",
  },
  {
    title: "Le suocere stanno bene dipinte sui muri",
    titleDia: "LE MADONE LE STA BE PÜTÜRÀDE SÖI MÜR",
    genre: "Atto unico comico",
    duration: "h 1",
    scene: "Un tinello",
    actors: "n. 8, di cui 4 maschili e 4 femminili",
    subject: "Una suocera impicciona",
    plot: "Trama: La nuora ogni giorno si assenta da casa e torna accalorata. La suocera sospetta un tradimento e riunisce il marito e i consuoceri per discutere della faccenda. Ma anche il figlio ha strani comportamenti: si fa bello, esce e torna accalorato! La faccenda si complica tra equivoci continui, che coinvolgono anche i presunti amanti, ma alla fine tutto si chiarisce.Entrambi gli sposini, nascostamente, andavano a lavorare per poter fare l’uno all’altro un costoso regalo in occasione dell’anniversario di matrimonio",
    meaning:
      "Quando i suoceri si intromettono nella vita coniugale dei figli, commettono pasticci",
    remarks: "",
  },
  {
    title: "Mia figlia sposerà un riccone",
    titleDia: "ME FIÖLA LA SPUSA ÈN SIÒR",
    genre: "Atto unico comico",
    duration: "50 minuti",
    scene: "Un tinello",
    actors: "n. 4 (+ n. 1 comparsa), di cui 2 maschili e 2 femminili",
    subject:
      "La figlia di un mandriano sposerà il figlio di un ricchissimo industriale",
    plot: "Caterina e Battista sono in apprensione, perchè stanno per arrivare i futuri consuoceri, che portano un nome altisonante dell’industria italiana. Li ricevono con tutti gli onori, ma…i due “milionari” hanno un aspetto dimesso e non hanno alcuna intenzione di pagare il pranzo di nozze.    Dopo una serie di esilaranti discussioni fra i quattro, si chiarisce l’equivoco: il cognome altisonante è solo un soprannome. In realtà i consuoceri sono povera gente e il pranzo nuziale si consumerà con polenta e formaggio",
    meaning:
      "Essere se stessi, senza affaticarsi a voler far credere agli altri di essere più di quello che si è o di avere più di quello che si ha, ci pone al riparo da guai e da magre figure",
    remarks: "",
  },
  {
    title: "Mogli e buoi dei paesi tuoi",
    titleDia: "MOÉR E BÓ DEL PAÉS TÓ",
    genre: "Atto unico brillante",
    duration: "h 1",
    scene: "Un tinello",
    actors: "n. 13, di cui 4 maschili e 9 femminili",
    subject: "Un incontro al buio",
    plot: "A causa della presenza della madre, Franco non può incontrare la donna conosciuta tramite un annuncio sul giornale a casa sua e le dà appuntamento presso un suo ignaro amico. Da questa situazione di partenza nascerà una serie di equivoci. Alla fine tutto si chiarirà e ciascuno dei numerosi personaggi troverà l’anima gemella nel proprio paese",
    meaning: "Cerchiamo lontano chi abbiamo accanto",
    remarks: "",
  },
  {
    title: "Oh, bé bé, po’",
    titleDia: "",
    genre: "dialogo natalizio",
    duration: "30 minuti",
    scene: "i giardini pubblici",
    actors: "1 maschile e 1 femminile",
    subject:
      "confronto tra due opposte personalità: un misantropo e una donna che soffre di solitudine",
    plot: "Soffocato da una parentela troppo numerosa e chiassosa, il protagonista desidera trascorrere la vigilia di Natale da solo, al buio e nel silenzio, ma si imbatte in una strana signora che ad ogni costo vuole tenergli compagnia",
    meaning: "Basta poco per alleviare le sofferenze degli altri",
    remarks: "",
  },
  {
    title: "Profumo di Gelsomino",
    titleDia: "",
    genre: "giallo-rosa",
    duration: "45 minuti",
    scene: "un elegante salotto",
    actors: "3 maschili e 3 femminili",
    subject:
      "testo scritto per coinvolgere il pubblico nella ricerca dell’assassino. (utilizzato nelle cosiddette “Cene con delitto”).",
    plot: "La ricca zia è vittima di ripetuti attentati alla sua vita e si rivolge ad un famoso investigatore che, indagando scopre che ogni membro della famiglia nasconde una sua magagna",
    meaning: "Non è tutto oro quello che riluce",
    remarks: "",
  },
  {
    title: "Quant’è brava mia nuora",
    titleDia: "COME L’È BRÀA ME NUORA!",
    genre: "farsa",
    duration: "15 minuti",
    scene: "il tinello di una casa modesta",
    actors: "3 femminili",
    subject: "rapporto suocera – nuora",
    plot: "Due anziane amiche, conversando familiarmente, vanno a gara nell’esaltare le virtù domestiche delle giovani nuore. In realtà entrambe fanno loro da serve",
    meaning: "Significato: Salvare le apparenze è faticoso e spesso inutile.",
    remarks: "",
  },
  {
    title: "Se mi dà di volta il cervello…",
    titleDia: "SE ME GIRA LA CREÈLA",
    genre: "Atto unico, esilarante",
    duration: "h 1",
    scene: "un tinello",
    actors: "n. 7 (+ 4 comparse), di cui 3 maschili e 4 femminili",
    subject: "La terapia di gruppo",
    plot: "Peppino si crede Napoleone. Col colapasta in testa e la spada in pugno, taglia i culmi del granoturco e le teste delle galline dei vicini, convinto di uccidere soldati austriaci. Peppino pensa che sua moglie sia Giuseppina, sua madre Letizia, sua cognata la vivandiera e don Redenzio il cappellano militare.Un insigne psichiatra applica la terapia di gruppo per provocare nel malato una crisi di identità. Il professore si mette in testa il colapasta, impugna la spada e dice a Peppino di essere Napoleone. Le donne confermano e Peppino si convince di non essere Napoleone, ma proprio in quel momento entrano gli infermieri del manicomio. Pensano che il matto sia il professore e lo rinchiudono in manicomio assieme alle donne e a don Redenzio e si complimentano con Peppino che è riuscito a mantenersi sano di mente in mezzo a tanti matti",
    meaning:
      "La vicenda stigmatizza le teorie che coinvolgono i parenti colpevolizzandoli e deresponsabilizzando il familiare problematico.",
    remarks: "",
  },
  {
    title: "Si fa presto a dire un miliardo",
    titleDia: "SE FA PRÈST A DÌ ÈN MILIARDO!",
    genre: "Atto unico comico",
    duration: "50 minuti",
    scene: "un tinello",
    actors: "n. 6 (+ 2 comparse), di cui 3 maschili e 3 femminili",
    subject:
      "Piero si trova con un figlio non suo e una valigia di soldi rubati da altri. Che fare? Tenersi i soldi e rifiutare il figlio?",
    plot: "La bella sposina si diverte, in assenza del marito, col giovane pensionante studente di medicina ed è in dolce attesa. Piero è felice: il bimbo nasce sano e rubicondo e non somiglia affatto a lui che è smorto e malaticcio! Ma un altro fatto gli succede nella stessa giornata. Un vecchio amico lo viene a trovare e gli lascia in consegna una valigia. Solo casualmente Piero scopre che è piena di soldi rubati! La situazione, via via sempre più complicata, lo porta al manicomio. Nel silenzio e nella solitudine ha modo di riflettere e di prendere due sagge decisioni: si terrà il bambino, incolpevole della disonestà della madre e restituirà i soldi rubati",
    meaning:
      "Affrontare la realtà con onestà può essere doloroso o contrario al nostro interesse materiale, ma in cambio ci dà un bene inestimabile: la tranquillità della coscienza.",
    remarks: "",
  },
  {
    title: "Tingeltangel",
    titleDia: "",
    genre:
      "monologhi e dialoghi caratterizzati da un umorismo illogico, assurdo e paradossale",
    duration:
      "scelte opportunamente, le scenette possono costituire uno spettacolo di cabaret della durata di un’ora e più",
    scene: "a piacere",
    actors: "n. 2: 1 maschile e 1 femminile",
    subject:
      "situazioni ovvie, che raccontate e sviscerate come se fossero serie e importanti, diventano paradossali e creano un umorismo irresistibile",
    plot: "marito e moglie alle prese con le situazioni domestiche più banali, a forza di analizzarle, le fanno diventare assurde",
    meaning:
      "un’analisi eccessiva di problemi che non la meritano, li ingigantisce e li rende irrisolvibili o porta a conclusioni illogiche",
    remarks: "traduzione di alcuni brani dell’omonima opera di Karl Valentin",
  },
  {
    title: "Voglia di lavorare saltami addosso",
    titleDia: "VÒÎA DE LAURÀ SÀLTEM ADÒS",
    genre: "Atto unico comico",
    duration: "h 1",
    scene: "Un tinello",
    actors: "n. 4: 3 maschile e 1 femminile",
    subject: "È faticosa la vita di che nasce stanco",
    plot: "Per Peppino alzarsi al mattino ed andare a lavorare è un sacrificio insopportabile, ma ecco che dall’Olanda giunge da un lontano parente una ricca eredità. In cambio Peppino e sua moglie dovranno occuparsi del suo Narciso! Convinti che si tratti di una piantina da annaffiare, Peppino e Gina accettano l’eredità, per poi scoprire che si tratta invece del figlio dello zio: un bambinone mal cresciuto, viziato, capriccioso e prepotente, da cullare, far giocare, allattare col biberon, lavare e vestire come un neonato! La loro vita diventa un inferno al punto che Peppino preferisce rinunciare all’eredità e tornare al lavoro…ma…il bambinone rimarrebbe solo ed, inoltre, ormai nutrono per lui un grande affetto. Si terranno Narciso, anche senza eredità. Narciso si palesa: in realtà lui è lo zio, che è ricorso a questo espediente per mettere alla prova l’onestà e la bontà d’animo dei nipoti, prima di fare testamento in loro favore. Così Peppino torna alla situazione di partenza: niente soldi e niente figlio, ma l’aver provato ad essere padre ha fatto nascere in lui la voglia di lavorare ed il suo problema è risolto",
    meaning:
      "Per avere voglia di vivere, lavorare e fare bisogna avere uno scopo nella vita",
    remarks: "",
  },
  {
    title: "www.noipervoi.it",
    titleDia: "",
    genre: "comico",
    duration: "h 1",
    scene: "Un elegante tinello",
    actors: "n. 10, di cui 3 maschili e 7 femminili",
    subject:
      "Due ricche signore annoiate si dedicano alla solidarietà per svago",
    plot: "Virginia e Monica, due ricche signore annoiate, fondano l’Associazione umanitaria “NOI PER VOI” e cercano i bisognosi di aiuto tramite Internet. La casa si affolla di pazzi e criminali e le due non sono in grado di gestire la situazione. Dopo scene esilaranti, i problemi si risolveranno e le due signore torneranno a dedicarsi alle sole cose che sanno fare: beauty-center, palestra, tennis, piscina e shopping",
    meaning:
      "La solidarietà non è un passatempo, ma un impegno che richiede spirito di sacrificio e adeguate capacità",
    remarks: "",
  },
  {
    title: "Amori di gioventù",
    titleDia: "",
    genre: "",
    duration: "",
    scene: "",
    actors: "",
    subject: "",
    plot: "",
    meaning: "",
    remarks: "",
  },
];

export const getActs = async (): Promise<Act[]> => {
  return acts;
};

export const getAct = async (
  request: FastifyRequest<{ Params: ActTitle }>,
  reply: FastifyReply
): Promise<Act | null> => {
  const act = acts.find(
    act =>
      act.title.toLocaleLowerCase() === request.params.title.toLocaleLowerCase()
  );
  if (!act) {
    return reply.status(404).send({ message: "Act not found" });
  }
  return reply.status(200).send(act);
};

export const addAct = async (
  request: FastifyRequest<{ Body: Act }>,
  reply: FastifyReply
): Promise<Act> => {
  acts = [request.body, ...acts];
  return request.body;
};

export const updateAct = async (
  request: FastifyRequest<{ Params: ActTitle; Body: Act }>,
  reply: FastifyReply
) => {
  acts = acts.map(act =>
    act.title.toLocaleLowerCase() === request.params.title ? request.body : act
  );

  return request.body;
};

export const deleteAct = async (
  request: FastifyRequest<{ Params: { title: string } }>,
  reply: FastifyReply
): Promise<Message> => {
  const idx = acts.findIndex(
    a => a.title.toLocaleLowerCase() === request.params.title
  );
  if (idx === -1) {
    return reply
      .code(404)
      .send({ message: `${request.params.title} not found` });
  }

  acts = acts.filter(
    act =>
      act.title.toLocaleLowerCase() !== request.params.title.toLocaleLowerCase()
  );

  return { message: `${request.params.title} deleted` };
};
