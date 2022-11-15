import type { NextPage } from 'next'
import Head from 'next/head'

export default function Index() {
  const adberbList = [
    "la réinterprètation",
    "la métaphore",
    "l'adaptation",
    "la relecture",
    "une nouvelle définition"
]
const conteList = [
  "La Marquise de Salusses, ou La Patience de Griselidis écrit en 1691 de	Charles Perrault",
  "Les Souhaits ridicules écrit en 1693 de Charles Perrault",
  "La Princesse au petit pois	de 1835 par	le Danois Hans Christian Andersen",
  "Les Fleurs de la petite Ida de 1835 par le Danois Hans Christian Andersen",
  "Le Briquet	de 1835 par	le Danois Hans Christian Andersen"
]

const endList = [
  "pour vous faire vivre vos peurs les plus primaires",
  "pour vous faire ressentir malgré tout des sueurs froide",
  "pour une approche plus consensuel",
  "pour une expérience feutrée prise sur le vif",
  "pour un public d'initié",
  "pour une expérience complexes",
  "pour une expérience sensorielle",
  "pour un cadrage qui va a l'essentiel",
  "pour une nouvelle expérience",
  "pour une nouvelle vision plus terre à terre",
  "pour affûter notre rétine de cinéphile",
  "pour vous retrancher au plus profond de vous-même",
  "pour nous faire vivre une expérience de vie",
  "pour vous mettre en appétit",
  "pour lequel vous ne ressortirez pas indifférent",
]

const fableList = [
  "À Madame de Montespan",
  "À Monseigneur le Dauphin",
  "L'Aigle et l'Escarbot",
  "L'Aigle et la Pie",
  "L'Aigle et le Hibou",
  "L'Aigle, la Laie, et la Chatte",
  "L'Alouette et ses petits, avec le Maître d'un champ",
  "L'Amour et la Folie",
  "L'Âne chargé d'éponges, et l'Âne chargé de sel",
  "L'Âne et le Chien",
  "L'Âne et le Petit Chien",
  "L'Âne et ses maîtres",
  "L'Âne portant des reliques",
  "L'Âne vêtu de la peau du lion",
  "Un animal dans la Lune",
  "Les Animaux malades de la peste",
  "L'Araignée et l'Hirondelle",
  "L'Astrologue qui se laisse tomber dans un puits",
  "L'Avantage de la Science",
  "L'Avare qui a perdu son trésor",
  "Le Bassa et le Marchand",
  "La Belette entrée dans un grenier",
  "Belphégor",
  "Le Berger et la Mer",
  "Le Berger et le Roi",
  "Le Berger et son troupeau",
  "La Besace",
  "Le Bûcheron et Mercure",
  "Le Cerf et la Vigne",
  "Le Cerf se voyant dans l'eau",
  "Le Cerf malade",
  "Le Chameau et les Bâtons flottants",
  "Le Charlatan",
  "Le Chartier embourbé",
  "Le Chat et un vieux rat",
  "Le Chat et les Deux Moineaux",
  "Le Chat et le Renard",
  "Le Chat et le Rat",
  "Le Chat, la Belette, et le Petit Lapin",
  "La Chatte métamorphosée en femme",
  "La Chauve-souris et les Deux Belettes",
  "La Chauve-souris, le Buisson, et le Canard",
  "Le Chêne et le Roseau",
  "Le Cheval et l'Âne",
  "Le Cheval et le Loup",
  "Le Cheval s'étant voulu venger du cerf"
]
const femaleList = [
  "engagée",
  "intimiste",
  "minimaliste",
  "a plusieurs sens de lecture",
  "colorée et sonore",
  "lancinante et contemplative",
  "innovante",
  "atypique",
  "jouissive",
  "attachante",
  "avant-gardiste",
  "profonde avec du sens",
  "en harmonie avec son temps",
  "avec une nouvelle esthétique folle",
  "qui nous fait découvrir son univers multiples et complexes",
  "captée a travers un filtre jaunie",
  "digne d'un grand blockbuste",
  "charismatique",
  "avec une granularité folle",
]
const fourthParagraphList = [
  "En réalisant ses désirs, autrement dit en se réalisant soi-même, l'homme réalise l'absolu.",
  "Le cinéma blanchit l'argent sale. L'argent sale noircit le cinéma.",
  "Le problème crucial de notre temps est engendré par la stagnation des théories politiques à une époque de progrès technologiques.",
  "La réalisation est la chance d'avoir plusieurs vies.",
  "Je n'invente rien, je montre ce que je vois.",
  "J'aime mélanger des acteurs venant d'horizons différents, les faire jouer ensemble.",
  "Vous savez, trouvez le film à qui l'on décerne la palme d'or, c'est comme ouvrir un cadeau de Noël.",
  "Je suis ici uniquement pour faire la meilleure chose qu'un réalisateur sache faire ; regarder des films réalisés par d'autres, dont je ne sais rien."
]

const itemList = [
  "du Tableau",
  "de la Fable",
  "du Livre",
  "du Conte"
]

const livreList = [
  "Parfois les ennuis mettent un chapeau de José Parrondo",
  "Robe de marié de Pierre Lemaitre",
  "N'entre pas dans mon âme avec tes chaussures de Paola Pigani",
  "Tartes aux pommes et fin du monde de Guillaume Siaudeau",
  "Retombées de sombrero de Richard Brautigan",
  "L'oiseau à deux becs de Sylvain Alzial",
  "Le Japon n'existe pas de Alberto Torres-Blandina",
  "Allumer le chat de Barbara Constantine",
  "La colère des aubergines de Bulbul Sharma",
  "Les pingouins n’ont jamais froid de Andreï Kourkov",
  "Le Loup-Noël de Michel Gay",
  "Salam Ouessant de Azouz Begag",
  "L'ivresse du kangourou et autres histoires du bush de Kenneth Cook",
  "Le lundi commence le samedi de Arcadi Strougatski",
  "Le théorème du lampadaire de Jean-Paul Fitoussi",
  "La triste fin du petit Enfant Huître et autres histoires de Tim Burton",
  "Le mécanicien des roses de Hamid Ziarati",
  "L'allumeur de rêves berbères de Fellag"
]

const maleList = [
  "engagé",
  "intimiste",
  "minimaliste",
  "a plusieurs sens de lecture",
  "coloré et sonore",
  "lancinant et contemplatif",
  "innovant",
  "atypique",
  "jouissif",
  "attachant",
  "avant-gardiste",
  "profond avec du sens",
  "en harmonie avec son temps",
  "conservateur dans son approche",
  "avec une nouvelle esthétique folle",
  "qui nous fait découvrir son univers multiples et complexes",
  "capté a travers un filtre jaunie",
  "digne d'un grand blockbuste",
  "charismatique",
  "avec une granularité folle",
]
const subjectList = [
  "Une oeuvre",
  "Un film",

]

const tableauList = [
  "MONA LISA PAR LÉONARD DE VINCI",
  "ÉCOLE D'ATHÈNES PAR RAPHAËL",
  "LA CRÉATION D'ADAM PAR MICHEL-ANGE",
  "LA JEUNE FILLE À LA PERLE PAR JOHANNES VERMEER",
  "LA RONDE DE NUIT PAR REMBRANDT",
  "LA CÈNE PAR LÉONARD DE VINCI",
  "LES NYMPHÉAS PAR CLAUDE MONET",
  "LA NUIT ÉTOILÉE PAR VAN GOGH",
  "GUERNICA PAR PABLO PICASSO",
  "LES ÉPOUX ARNOLFINI PAR JAN VAN EYCK",
  "LE BAISER PAR GUSTAV KLIMT",
  "LA PERSISTANCE DE LA MÉMOIRE PAR DALI",
  "AMERICAN GOTHIC PAR GRANT WOOD",
  "TERRASSE DU CAFÉ LE SOIR PAR VAN GOGH",
  "LA NAISSANCE DE VÉNUS PAR SANDRO BOTTICELLI",
  "BAL DU MOULIN DE LA GALETTE PAR RENOIR",
  "LE JARDIN DES DÉLICES PAR JÉRÔME BOSCH",
  "LA MADONE SIXTINE PAR RAPHAËL",
  "LA DANSE PAR MATISSE",
  "MONT SAINTE-VICTOIRE PAR CÉZANNE",
  "LE CRI PAR EDVARD MUNCH",
  "LE DÉJEUNER SUR L'HERBE PAR EDUARD MANET",
]

const thirdParagraphPart1 = [
  "Pour une mise en scène",
  "Pour une direction d'acteurs",
  "Pour une photographie"
]
const thirdParagraphPart2 = [
  "qui va mettre tout le monde d'accord",
  "qui va trouver son public",
  "qui va renouveler le genre",
  "qui sait prend son temps",
  "qui va renouveler le genre",
  "à mis chemin entre la nouvelle vague et un nouveau souffle du documentaire",
  "qui a sût retiré l'essence même du genre",
  "qui sait vie avec son temps",
  "qui va traverser de nouvelles générations futures",
  "qui apporte un nouveau souffle"
]

  let start: string[] = []
  const begin = subjectList[random(subjectList.length)];
  if (begin === subjectList[0]) {
    start = femaleList;
  } else {
    start = maleList;
  }
  const firstParagraph = begin + " " + start[random(start.length)] + " " + endList[random(endList.length)] + "."
  const item = itemList[random(itemList.length)];
  let secondParagraph = "C'est " + adberbList[random(adberbList.length)] + " " + item + ": ";
  if (item === item[0]) {
    secondParagraph = secondParagraph + tableauList[random(tableauList.length)] + "."
  } else if (item === item[1]) {
    secondParagraph = secondParagraph + fableList[random(fableList.length)] + "De Jean de La Fontaine."
  } else if (item === item[2]) {
    secondParagraph = secondParagraph + livreList[random(livreList.length)] + "."
  } else {
    conteList
    secondParagraph = secondParagraph + conteList[random(conteList.length)] + "."
  }

  const thirdParagraph = thirdParagraphPart1[random(thirdParagraphPart1.length)] + " " + thirdParagraphPart2[random(thirdParagraphPart2.length)]
  const fourthParagraph = "Comme le réalisateur le souligne: '" + fourthParagraphList[random(fourthParagraphList.length)] + "'"
  const porps = {
    headtitre: "Review generator",
    titre: "Générateur de critique évolué pour te la péter en société.",
    finexcuse: ", donc je ne peux pas t'augmenter.",
    promesse: "La prochaine fois c'est promis...",
    label: "Raconte-toi là encore => ",
    btntext: "ICI",
    conclusion: "Tu n'as pas vu le film, mais tu veux donner ton avis...",
    signature: "By Maysk@"

  }
  return (
    <div className="container-xl">
      <Head>
        <title>{porps.headtitre}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <br />
        <br />
        <h1 className="text-center">{porps.titre}</h1>
        <h5 className='text-center text-muted'>{porps.conclusion}</h5>

        <div className="row">
          <div className="col">
          </div>
          <div className="col-10">
            <br />
            <hr />
            <form action="/" method="GET">
              <p className='text-center fs-5'>{firstParagraph}</p>
              <p className='text-center fs-5'>{secondParagraph}</p>
              <p className='text-center fs-5'>{thirdParagraph}</p>
              <p className='text-center fs-5 fst-italic'>{fourthParagraph}</p>
              <hr />
              <label>{porps.label}<button type="submit" className="btn btn-success">{porps.btntext}</button></label>
            </form>
            <hr />
          </div>
          <div className="col"></div>
        </div>
      </main>
      <footer>
        <br />
        <br />
        <p className='text-end text-muted'>{porps.signature}</p>
      </footer>
    </div>
  )
}


function random(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}