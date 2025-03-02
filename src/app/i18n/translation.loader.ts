import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

const TRANSLATIONS = {
  en: {
    HEADER: {
      TITLE: 'Work Insight',
      LANGUAGE: 'Language',
      HOME: 'Home',
      ABOUT: 'About',
    },
    HOME: {
      TITLE: ' The Future of Work: Balancing Productivity and Well-being',
      CONTENT:
        'The landscape of work has transformed dramatically over the past decade. Remote work, once considered a perk, has become a mainstay for many industries. Meanwhile, artificial intelligence and automation continue to reshape job functions across sectors. As we navigate these changes, a critical question emerges: How can we maintain productivity while prioritizing human well-being?',
      CONTENT_2:
        'Recent studies indicate that 73% of employees experience some form of burnout, despite technological advances meant to streamline workloads. This paradox suggests that our approach to productivity might need recalibration.',
      TITLE_2: 'The Productivity Paradox',
      CONTENT_3:
        'Despite having more tools than ever to enhance efficiency, many workers report feeling overwhelmed. The constant connectivity enabled by technology has blurred the lines between work and personal life, creating an "always on" culture that can be detrimental to mental health.',
      CONTENT_4:
        'Dr. Michael Chen, organizational psychologist at Stanford University, explains: "We\'ve optimized for maximum output without adequately considering the human inputs required. Sustainable productivity requires periods of rest and recovery."',
      CONTENT_5:
        '"The goal shouldn\'t be to work more hours, but to make those hours more meaningful."',
      TITLE_3: 'Reimagining Work Structures',
      CONTENT_6:
        'Progressive organizations are experimenting with alternative work models that challenge conventional wisdom:',
      LIST_ITEM_1:
        'Four-day workweeks have shown promising results in pilot programs across Europe and New Zealand, with many companies reporting maintained or increased productivity alongside improved employee satisfaction',
      LIST_ITEM_2:
        'Results-only work environments (ROWE) focus on outcomes rather than hours worked, giving employees greater autonomy over when and how they complete tasks.',
      LIST_ITEM_3:
        'Hybrid models combine in-office collaboration with remote flexibility, aiming to capture the benefits of both approaches.',
      CONTENT_7:
        'These innovations share a common thread: they prioritize human needs alongside business objectives, recognizing that the two are fundamentally intertwined rather than opposed.',
      TITLE_4: 'Technology as Partner, Not Master',
      CONTENT_8:
        'As AI capabilities expand, concerns about job displacement persist. However, research suggests that the most effective applications of technology complement human skills rather than replace them entirely.',
      CONTENT_9:
        '"The future belongs to human-AI collaboration," notes robotics engineer Priya Patel. "The most successful organizations will be those that use automation to handle routine tasks while empowering humans to focus on creative problem-solving, emotional intelligence, and ethical decision-making."',
      CONTENT_10:
        'This perspective shifts the narrative from competition with machines to partnership, suggesting that technology might ultimately create more fulfilling work by eliminating drudgery.',
      TITLE_5: 'The Way Forward',
      CONTENT_11:
        'As we reimagine work for the coming decades, several principles can guide our approach:',
      LIST_ITEM_2_1: 'Measure value created rather than time spent',
      LIST_ITEM_2_2: 'Design workflows that respect human cognitive limits',
      LIST_ITEM_2_3: 'Create boundaries that protect personal time',
      LIST_ITEM_2_4: 'Invest in continuous learning as roles evolve',

      CONTENT_12:
        'By embracing these principles, we can work toward a future where productivity and well-being reinforce rather than undermine each other—a future where work enhances rather than diminishes our lives.',
    },
    ABOUT: {
      TITLE: 'About Us',
      CONTENT:
        'We are a team dedicated to building great Angular applications.',
    },
  },
  yo: {
    HEADER: {
      TITLE: 'Àmọ̀na Ìṣẹ́',
      LANGUAGE: 'Èdè',
      HOME: 'Ilé',
      ABOUT: 'Nípà',
    },
    HOME: {
      TITLE: 'Ọjọ́-ọ̀la Iṣẹ́: Bí a ṣe le Dọgbadọgba Iṣẹ́-ṣiṣe àti Ilera',
      CONTENT:
        'Aṣà ti iṣẹ ti yipada gidigidi ni ọdun mẹwa sẹyin. Ṣiṣẹ latọna jijin, eyiti a fi mọ̀ gẹgẹ bi anfààní tẹlẹ, ti di ipilẹ fun ọpọlọpọ awọn ile-iṣẹ. Bakan naa, oye atọwọda ati adaṣe n tẹsiwaju lati tunṣe awọn iṣẹ ni awọn apa ile-iṣẹ lọpọlọpọ. Bi a ṣe n ṣàbẹwò awọn ayipada wọnyi, ibeere pataki kan dide: Bawo ni a ṣe le ṣetọju iṣẹ ṣiṣe lakoko ti a fi àkókò ṣààyè fun ilera ti ẹda eniyan?',
      CONTENT_2:
        'Ìwádìí to ṣẹṣẹ ṣe fihan pé 73% ti awọn oṣiṣẹ n ni iriri rirẹ gidigidi, pelu ilọsiwaju imọ-ẹrọ ti a pinnu lati dẹrọ iṣẹ. Iyatọ yii fi han pe ọna wa si iṣẹ ṣiṣe le nilo atunṣe.',
      TITLE_2: 'Àdìtú Iṣẹ́-ṣiṣe',
      CONTENT_3:
        'Pẹ̀lú gbogbo àwọn irinṣẹ tí ó pọ sí i láti mú iṣẹ́ dàrúkọ, ọ̀pọ̀lọpọ̀ oṣiṣẹ ṣì sọ pé wọn ń rí ìdààmú. Àṣà ìbánisọ̀rọ̀ títí kan, tí imọ̀ ẹrọ ti mú wá, ti fọ ààlà tó wà láàrin iṣẹ́ àti ìgbéayé ikọ̀kọ̀, ó sì ti dá àṣà “ṣíṣẹ́ lásìkò gbogbo,” èyí tó le ba ilera ọpọlọ jẹ.',
      CONTENT_4:
        'Dr. Michael Chen, onímọ̀-èrò ìṣèdápọ̀ ní Yunifásítì Stanford, ṣàlàyé pé: “A ti pèsè ohun gbogbo fún iṣẹ́ tí ó pọ jù, láì fi àkókò rò àwọn ohun tí ènìyàn nilo láti ṣe é. Iṣẹ́-ṣiṣe aláyọ̀dà yẹ kí ó ní àkókò ìsinmi àti ìmúpadàbò̀.”',
      CONTENT_5:
        '“Èdá kì í ṣe láti ṣiṣẹ́ púpọ̀ sí i, ṣùgbọ́n láti mú kí wákàtí iṣẹ́ yè wò fúnni.”',
      TITLE_3: 'Ìròyìn Tuntun nípa Ìlò Iṣẹ́',
      CONTENT_6:
        'Àwọn àjọ iṣẹ́ tí ó ni ìwòyípadà ń ṣe ìdánwò pẹ̀lú àwọn àtúnṣe tuntun sí ẹ̀kọ́ iṣẹ́, tí ó ń gbìyànjú láti da àṣà ìbílẹ̀ ru.',
      LIST_ITEM_1:
        'Ìṣẹ́ ọjọ́ mẹ́rin l’ọ̀sẹ̀ ti fi hàn pé ó dára ní àwọn ètò ìdánwò káàkiri Yúróòpù àti New Zealand, níbi tí ọ̀pọ̀lọpọ̀ ilé iṣẹ́ ti sọ pé iṣẹ́-ṣiṣe ko dinku, dipo náà ó pọ sí i, ní ti ayọ̀ àwọn oṣiṣẹ náà sì túbọ̀ dara.',
      LIST_ITEM_2:
        'Àwọn àyíká iṣẹ́ tí ó da lori abajade nìkan (ROWE) fojú fó iye wákàtí tí a ṣiṣẹ́, dipo náà, wọ́n fojú pamọ̀ sí àwọn àbájade. Èyí fún àwọn oṣiṣẹ ní ominira púpọ̀ lori ìgbà àti bí wọn ṣe parí iṣẹ́ wọn.',
      LIST_ITEM_3:
        'Àwọn àwòṣe onírúurú (Hybrid models) darapọ̀ iṣẹ́ ní ọ́fiisi pẹ̀lú ìrọrun iṣẹ́ latọna jijin, ní èrò pé wọn yóò gba àǹfààní méjèèjì.',
      CONTENT_7:
        'Àwọn ìmòtótọ́ tuntun wọ̀nyí ní ohun kan tó wọ́pọ̀: wọ́n fi pàtàkì sáwọn aini ènìyàn pẹ̀lú àwọn èròngbà ìṣèlú ilé-iṣẹ́, ní mímọ̀ pé méjèèjì jọ wà lógún, kì í ṣe pé wọ́n kọ ara wọn.',
      TITLE_4: 'Imọ̀ ẹrọ gẹ́gẹ́ bí Ọ̀rẹ́, Kì í ṣe Ọga',
      CONTENT_8:
        'Bí ìmúdàgba AI ṣe ń gòkè sí i, ìbẹ̀rù pàtàkì ló wà nípa ìyọkù iṣẹ́. Ṣùgbọ́n, ìwádìí fihan pé àwọn ìlò imọ̀ ẹrọ tó munadoko jù ni àwọn tí ó fi ara wọn ràn àwọn ọgbọ́n ènìyàn dọgba, dipo tí wọ́n fi rọ́pò wọn patápátá.',
      CONTENT_9:
        '“Ọjọ́-ọ̀la jẹ́ ti ìfọwọ́sowọ́pọ̀ láàrin ènìyàn àti AI,” ni Priya Patel, onímọ̀-ẹ̀rọ rọ́bọ́tìì, sọ. “Àwọn ilé iṣẹ́ tó máa ṣàṣeyọrí jù ni àwọn tí yóò lo adaṣe láti ṣe àwọn iṣẹ́ àtẹ̀gùn, nígbà tó fi fun ènìyàn láyè láti fojú sókè sí ìpinnu oníwà-bí-bọ̀, ọgbọ́n inú, àti ìdá ònà tó dá lórí àbájáde.”',
      CONTENT_10:
        'Ìwòye yìí yí ìtàn padà kúrò nínú ìje lárírin ènìyàn àti ẹ̀rọ, sí àjọṣe. Ó fi hàn pé imọ̀ ẹrọ le dá iṣẹ́ tó yè wò fúnni sí i, nípa yọ àwọn iṣẹ́ tí ó rẹ̀dọ̀fin kúrò.',
      TITLE_5: 'Ọ̀nà Tó Kàn Lọ',
      CONTENT_11:
        'Bí a ṣe ń tún ìlò iṣẹ́ rò fún àwọn ọdún tí ó ń bọ̀, ọ̀pọ̀ ìlànà le ṣe ìtọ́nisọ́na fún ọ̀nà wa:',
      LIST_ITEM_2_1: 'Diẹ̀ kà àbájade tí a ṣẹ̀dá ju iye àkókò tí a lo.',
      LIST_ITEM_2_2:
        'Ṣẹ̀dá àwọn ilé iṣẹ́ tó bọ́gbọ́n mu, tí yóò bọ̀wọ̀ fún ààlà agbọ́n èdá ènìyàn.',
      LIST_ITEM_2_3: 'Ṣ’èdá ààlà tí yóò dáàbò bo àkókò ẹni.',
      LIST_ITEM_2_4: 'Fi inawo sí ẹ̀kọ́ títí láé bí ipa iṣẹ́ ṣe ń yí padà.',
      CONTENT_12:
        'Nípa gbìyànjú sí àwọn ìlànà wọ̀nyí, a le lọ sí ọjọ́-ọ̀la kan níbi tí iṣẹ́-ṣiṣe àti ilera yóò fi mú ara wọn lárugẹ, dipo kí wọ́n sọ ara wọn di òṣùwọ̀n—ọjọ́-ọ̀la kan níbi tí iṣẹ́ yóò fi mú ìgbéayé wa dára, kì í ṣe pé ó máa dinku rẹ̀.',
    },
    ABOUT: {
      TITLE: 'Nípà Wa',
      CONTENT:
        'A jẹ́ ẹgbẹ́ kan tí ó fi ara dà sí ìṣèdá àwọn àpẹ̀júwe Angular tó gàárí.',
    },
  },
  fr: {
    HEADER: {
      TITLE: 'Aperçu du Travail',
      LANGUAGE: 'Langue',
      HOME: 'Accueil',
      ABOUT: 'À propos',
    },
    HOME: {
      TITLE:
        "L'Avenir du Travail : Trouver un Équilibre entre Productivité et Bien-être",
      CONTENT:
        "Le paysage du travail s'est transformé de manière spectaculaire au cours de la dernière décennie. Le télétravail, autrefois considéré comme un privilège, est devenu une norme dans de nombreuses industries. Pendant ce temps, l'intelligence artificielle et l'automatisation continuent de remodeler les fonctions professionnelles dans divers secteurs. Alors que nous naviguons à travers ces changements, une question cruciale se pose : comment maintenir la productivité tout en donnant la priorité au bien-être humain ?",
      CONTENT_2:
        "Des études récentes indiquent que 73 % des employés ressentent une forme d'épuisement professionnel, malgré les avancées technologiques censées alléger la charge de travail. Ce paradoxe suggère que notre approche de la productivité pourrait nécessiter un réajustement.",
      TITLE_2: 'Le Paradoxe de la Productivité',
      CONTENT_3:
        "Bien que nous ayons plus d'outils que jamais pour améliorer l'efficacité, de nombreux travailleurs déclarent se sentir débordés. La connectivité permanente rendue possible par la technologie a brouillé la frontière entre travail et vie personnelle, créant une culture du 'toujours connecté' qui peut nuire à la santé mentale.",
      CONTENT_4:
        'Dr. Michael Chen, psychologue organisationnel à l\'Université de Stanford, explique : "Nous avons optimisé la production maximale sans considérer suffisamment les besoins humains nécessaires. Une productivité durable nécessite des périodes de repos et de récupération."',
      CONTENT_5:
        '"L\'objectif ne devrait pas être de travailler plus d\'heures, mais de rendre ces heures plus significatives."',
      TITLE_3: 'Réimaginer les Structures du Travail',
      CONTENT_6:
        'Les organisations progressistes expérimentent de nouveaux modèles de travail qui remettent en question les idées conventionnelles :',
      LIST_ITEM_1:
        "La semaine de travail de quatre jours a montré des résultats prometteurs dans des programmes pilotes à travers l'Europe et la Nouvelle-Zélande, de nombreuses entreprises rapportant une productivité maintenue ou accrue, ainsi qu'une satisfaction améliorée des employés.",
      LIST_ITEM_2:
        'Les environnements de travail axés uniquement sur les résultats (ROWE) se concentrent sur les résultats plutôt que sur les heures travaillées, offrant aux employés une plus grande autonomie quant au moment et à la manière dont ils accomplissent leurs tâches.',
      LIST_ITEM_3:
        'Les modèles hybrides combinent la collaboration en présentiel avec la flexibilité du travail à distance, cherchant à tirer parti des avantages des deux approches.',
      CONTENT_7:
        "Ces innovations ont un point commun : elles donnent la priorité aux besoins humains en parallèle des objectifs commerciaux, reconnaissant que les deux sont intrinsèquement liés plutôt qu'opposés.",
      TITLE_4: 'La Technologie comme Partenaire, et non comme Maître',
      CONTENT_8:
        "Alors que les capacités de l'IA se développent, les préoccupations concernant le remplacement des emplois persistent. Cependant, la recherche suggère que les applications les plus efficaces de la technologie complètent les compétences humaines plutôt que de les remplacer entièrement.",
      CONTENT_9:
        "\"L'avenir appartient à la collaboration entre l'humain et l'IA\", note l'ingénieure en robotique Priya Patel. \"Les organisations les plus performantes seront celles qui utiliseront l'automatisation pour gérer les tâches routinières tout en permettant aux humains de se concentrer sur la résolution créative de problèmes, l'intelligence émotionnelle et la prise de décision éthique.\"",
      CONTENT_10:
        'Cette perspective déplace le récit de la concurrence avec les machines vers le partenariat, suggérant que la technologie pourrait, en fin de compte, créer un travail plus épanouissant en éliminant les tâches ingrates.',
      TITLE_5: 'La Voie à Suivre',
      CONTENT_11:
        'Alors que nous réimaginons le travail pour les décennies à venir, plusieurs principes peuvent guider notre approche :',
      LIST_ITEM_2_1: 'Mesurer la valeur créée plutôt que le temps passé',
      LIST_ITEM_2_2:
        'Concevoir des flux de travail qui respectent les limites cognitives humaines',
      LIST_ITEM_2_3: 'Créer des limites qui protègent le temps personnel',
      LIST_ITEM_2_4:
        "Investir dans l'apprentissage continu à mesure que les rôles évoluent",
      CONTENT_12:
        'En adoptant ces principes, nous pouvons aller vers un avenir où productivité et bien-être se renforcent mutuellement plutôt que de se nuire – un avenir où le travail enrichit nos vies au lieu de les appauvrir.',
    },
    ABOUT: {
      TITLE: 'À Propos de Nous',
      CONTENT:
        "Nous sommes une équipe dédiée à la création d'excellentes applications Angular.",
    },
  },
};

export function createTranslateLoader(http: HttpClient) {
  return new CustomTranslateLoader(http);
}

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    // First try to load from the server
    // If that fails, fall back to hardcoded translations
    return of(
      TRANSLATIONS[lang as keyof typeof TRANSLATIONS] || TRANSLATIONS['en']
    );
  }
}
