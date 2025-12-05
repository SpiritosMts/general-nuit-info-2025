export interface QuizQuestion {
  id: string
  category: 'systeme' | 'logiciels' | 'materiel' | 'pratiques' | 'formation'
  question: string
  options: {
    text: string
    score: number
    explanation?: string
  }[]
  tip?: string
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Système d'exploitation
  {
    id: 'os_primary',
    category: 'systeme',
    question: 'Quel système d\'exploitation utilisent principalement vos postes de travail ?',
    options: [
      { text: 'Windows 10/11 exclusivement', score: 0, explanation: 'Forte dépendance à Microsoft' },
      { text: 'Windows avec quelques postes Linux', score: 1, explanation: 'Début de diversification' },
      { text: 'Mix Windows/Linux/macOS', score: 2, explanation: 'Bonne diversité' },
      { text: 'Principalement Linux (Ubuntu, Debian, etc.)', score: 3, explanation: 'Excellente autonomie !' },
    ],
    tip: 'Linux offre une alternative gratuite, sécurisée et durable. Ubuntu et Linux Mint sont parfaits pour débuter.'
  },
  {
    id: 'os_server',
    category: 'systeme',
    question: 'Vos serveurs internes fonctionnent sous quel système ?',
    options: [
      { text: 'Windows Server uniquement', score: 0 },
      { text: 'Services cloud (Azure, AWS)', score: 1 },
      { text: 'Mix Windows Server et Linux', score: 2 },
      { text: 'Linux (Debian, Ubuntu Server, etc.)', score: 3 },
    ],
    tip: 'Les serveurs Linux dominent le marché mondial pour leur stabilité et sécurité.'
  },
  // Logiciels
  {
    id: 'office_suite',
    category: 'logiciels',
    question: 'Quelle suite bureautique utilisez-vous principalement ?',
    options: [
      { text: 'Microsoft 365 (abonnement)', score: 0, explanation: 'Coût récurrent et dépendance au cloud Microsoft' },
      { text: 'Microsoft Office (licence)', score: 1, explanation: 'Moins de dépendance mais formats propriétaires' },
      { text: 'Mix Microsoft Office et LibreOffice', score: 2, explanation: 'Transition en cours' },
      { text: 'LibreOffice / OnlyOffice', score: 3, explanation: 'Indépendance et formats ouverts !' },
    ],
    tip: 'LibreOffice est compatible avec les formats Microsoft et totalement gratuit.'
  },
  {
    id: 'email',
    category: 'logiciels',
    question: 'Comment gérez-vous les emails de l\'établissement ?',
    options: [
      { text: 'Gmail / Google Workspace', score: 0 },
      { text: 'Microsoft 365 / Outlook', score: 0 },
      { text: 'Serveur mail académique', score: 2 },
      { text: 'Solution auto-hébergée (Zimbra, etc.)', score: 3 },
    ],
    tip: 'Les solutions académiques ou auto-hébergées garantissent la souveraineté des données.'
  },
  {
    id: 'cloud_storage',
    category: 'logiciels',
    question: 'Où stockez-vous vos documents partagés ?',
    options: [
      { text: 'Google Drive / OneDrive', score: 0 },
      { text: 'Dropbox ou autre cloud commercial', score: 0 },
      { text: 'ENT académique / Apps.education.fr', score: 2 },
      { text: 'Nextcloud auto-hébergé', score: 3 },
    ],
    tip: 'Nextcloud offre une alternative complète aux clouds propriétaires.'
  },
  {
    id: 'video_conf',
    category: 'logiciels',
    question: 'Quel outil utilisez-vous pour les visioconférences ?',
    options: [
      { text: 'Zoom / Google Meet', score: 0 },
      { text: 'Microsoft Teams', score: 0 },
      { text: 'BigBlueButton (via ENT)', score: 2 },
      { text: 'Jitsi Meet ou BigBlueButton auto-hébergé', score: 3 },
    ],
    tip: 'BigBlueButton est conçu spécialement pour l\'éducation et respecte le RGPD.'
  },
  {
    id: 'browser',
    category: 'logiciels',
    question: 'Quel navigateur est installé par défaut sur vos postes ?',
    options: [
      { text: 'Google Chrome', score: 0, explanation: 'Collecte massive de données' },
      { text: 'Microsoft Edge', score: 0 },
      { text: 'Firefox', score: 3, explanation: 'Respect de la vie privée et open source' },
      { text: 'Brave / LibreWolf', score: 3 },
    ],
    tip: 'Firefox est développé par Mozilla, une fondation à but non lucratif.'
  },
  // Matériel
  {
    id: 'hardware_age',
    category: 'materiel',
    question: 'Quel est l\'âge moyen de votre parc informatique ?',
    options: [
      { text: 'Moins de 3 ans (renouvellement fréquent)', score: 1 },
      { text: '3 à 5 ans', score: 2 },
      { text: '5 à 8 ans avec Linux pour prolonger', score: 3 },
      { text: 'Plus de 8 ans, fin de vie', score: 0 },
    ],
    tip: 'Linux peut redonner vie à des machines de plus de 10 ans !'
  },
  {
    id: 'hardware_source',
    category: 'materiel',
    question: 'D\'où provient votre matériel informatique ?',
    options: [
      { text: 'Neuf uniquement (grandes marques)', score: 0 },
      { text: 'Neuf avec quelques reconditionnés', score: 1 },
      { text: 'Mix neuf et reconditionné', score: 2 },
      { text: 'Priorité au reconditionné et réemploi', score: 3 },
    ],
    tip: 'Le matériel reconditionné réduit l\'empreinte carbone de 80% !'
  },
  {
    id: 'repair',
    category: 'materiel',
    question: 'Que faites-vous quand un ordinateur tombe en panne ?',
    options: [
      { text: 'Remplacement systématique', score: 0 },
      { text: 'Réparation si garantie', score: 1 },
      { text: 'Tentative de réparation en interne', score: 2 },
      { text: 'Atelier réparation avec élèves + Linux', score: 3 },
    ],
    tip: 'Créer un atelier de réparation est pédagogique et écologique.'
  },
  // Pratiques
  {
    id: 'data_backup',
    category: 'pratiques',
    question: 'Comment sauvegardez-vous vos données critiques ?',
    options: [
      { text: 'Cloud Google/Microsoft uniquement', score: 0 },
      { text: 'NAS local sans sauvegarde externe', score: 1 },
      { text: 'Sauvegarde locale + cloud souverain', score: 2 },
      { text: 'Stratégie 3-2-1 avec solutions libres', score: 3 },
    ],
    tip: 'La règle 3-2-1 : 3 copies, 2 supports différents, 1 hors site.'
  },
  {
    id: 'digital_sobriety',
    category: 'pratiques',
    question: 'Avez-vous une politique de sobriété numérique ?',
    options: [
      { text: 'Non, pas du tout', score: 0 },
      { text: 'Quelques consignes informelles', score: 1 },
      { text: 'Charte en cours de rédaction', score: 2 },
      { text: 'Charte appliquée + indicateurs suivis', score: 3 },
    ],
    tip: 'La sobriété numérique réduit les coûts et l\'impact environnemental.'
  },
  {
    id: 'rgpd',
    category: 'pratiques',
    question: 'Comment gérez-vous la conformité RGPD des outils numériques ?',
    options: [
      { text: 'Pas vraiment vérifié', score: 0 },
      { text: 'On fait confiance aux grands éditeurs', score: 0 },
      { text: 'Vérification ponctuelle', score: 1 },
      { text: 'Audit régulier + privilège aux outils conformes', score: 3 },
    ],
    tip: 'Les outils libres européens sont généralement plus conformes au RGPD.'
  },
  // Formation
  {
    id: 'teacher_training',
    category: 'formation',
    question: 'Les enseignants sont-ils formés aux outils libres ?',
    options: [
      { text: 'Non, aucune formation', score: 0 },
      { text: 'Quelques initiatives isolées', score: 1 },
      { text: 'Formations ponctuelles proposées', score: 2 },
      { text: 'Programme de formation structuré', score: 3 },
    ],
    tip: 'La Forge des Communs Numériques Éducatifs propose des ressources gratuites.'
  },
  {
    id: 'student_awareness',
    category: 'formation',
    question: 'Les élèves sont-ils sensibilisés à la sobriété numérique ?',
    options: [
      { text: 'Non, ce n\'est pas abordé', score: 0 },
      { text: 'Parfois en EMC ou SNT', score: 1 },
      { text: 'Projets pédagogiques dédiés', score: 2 },
      { text: 'Intégré au projet d\'établissement', score: 3 },
    ],
    tip: 'Former les citoyens de demain est essentiel pour un numérique durable.'
  },
]

export const CATEGORIES = {
  systeme: { name: 'Système d\'exploitation', icon: '💻', color: 'bg-blue-500' },
  logiciels: { name: 'Logiciels', icon: '📦', color: 'bg-purple-500' },
  materiel: { name: 'Matériel', icon: '🔧', color: 'bg-orange-500' },
  pratiques: { name: 'Pratiques', icon: '📋', color: 'bg-green-500' },
  formation: { name: 'Formation', icon: '🎓', color: 'bg-yellow-500' },
}
