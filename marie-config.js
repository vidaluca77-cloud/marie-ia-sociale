// Configuration pour Marie IA - Assistante sociale virtuelle
// Ce fichier contient les paramètres et configurations pour le service

// Configuration de Marie IA
const MARIE_CONFIG = {
    // Informations sur l'assistante
    name: "Marie",
    title: "Assistante IA d'aide sociale",
    description: "Service d'aide sociale virtuel gratuit pour la France",
    
    // Configuration vocale
    voice: {
        language: "fr-FR",
        rate: 0.9,
        pitch: 1.0,
        volume: 1.0
    },
    
    // Configuration de la reconnaissance vocale
    speechRecognition: {
        language: "fr-FR",
        continuous: false,
        interimResults: false,
        maxAlternatives: 1
    },
    
    // Base de connaissances des aides sociales françaises
    socialAids: {
        employment: {
            keywords: ["emploi", "chômage", "travail", "pôle emploi", "rsa"],
            response: "Je comprends votre situation concernant l'emploi. Vous pouvez vous tourner vers Pôle Emploi pour les allocations chômage et l'aide à la recherche d'emploi. Il existe aussi le RSA si vous n'avez pas droit au chômage, ainsi que des formations professionnelles gratuites. Contactez votre conseiller Pôle Emploi ou votre CCAS local pour un accompagnement personnalisé."
        },
        housing: {
            keywords: ["logement", "loyer", "apl", "caf", "hlm"],
            response: "Pour l'aide au logement, vous pouvez demander les APL auprès de la CAF. Il existe aussi le FSL, Fonds de Solidarité Logement, pour les impayés. Si vous cherchez un logement social, inscrivez-vous sur votre commune. En urgence, contactez le 115 ou votre CCAS pour un hébergement temporaire."
        },
        student: {
            keywords: ["étudiant", "études", "université", "crous", "bourse"],
            response: "En tant qu'étudiant, vous pouvez bénéficier de bourses du CROUS, d'aides d'urgence du FSDIE, et d'APL pour le logement. Il existe aussi des épiceries solidaires et des aides spécifiques de votre université. Contactez le service social de votre établissement."
        },
        family: {
            keywords: ["enfant", "famille", "parent", "caf", "allocation"],
            response: "Pour les familles, la CAF propose de nombreuses aides : allocations familiales, complément familial, PAJE pour les jeunes enfants. Les parents isolés peuvent bénéficier de l'ASI. Il existe aussi des aides pour la garde d'enfants et des tarifs préférentiels dans les crèches publiques."
        },
        training: {
            keywords: ["formation", "reconversion", "cpf", "qualifiante"],
            response: "Pour la formation professionnelle, vous avez droit au CPF, Compte Personnel de Formation. Pôle Emploi propose aussi des formations gratuites. Les Régions financent certaines formations qualifiantes. Renseignez-vous auprès de votre conseiller Pôle Emploi ou dans une Mission Locale si vous avez moins de 26 ans."
        },
        health: {
            keywords: ["santé", "médical", "cmu", "complémentaire", "sécurité sociale"],
            response: "Pour la santé, vous avez droit à la Sécurité sociale de base. Si vous avez de faibles revenus, vous pouvez bénéficier de la Complémentaire santé solidaire (ex-CMU-C). En cas d'urgence médicale sans moyens, contactez les services sociaux de l'hôpital."
        },
        elderly: {
            keywords: ["âgé", "retraite", "senior", "apa", "aide à domicile"],
            response: "Pour les personnes âgées, il existe l'APA (Allocation Personnalisée d'Autonomie), des aides pour l'adaptation du logement, et des services d'aide à domicile. Contactez votre conseil départemental ou votre CCAS pour une évaluation de vos besoins."
        },
        disability: {
            keywords: ["handicap", "invalidité", "aah", "mdph", "adaptation"],
            response: "Pour les personnes en situation de handicap, la MDPH évalue vos droits. Vous pouvez bénéficier de l'AAH, d'aides à l'adaptation du logement, et d'accompagnement professionnel. N'hésitez pas à contacter votre MDPH locale."
        }
    },
    
    // Organismes de contact utiles
    contacts: {
        national: {
            "3939": "Numéro national d'information sur les droits sociaux",
            "115": "Numéro d'urgence sociale pour l'hébergement",
            "113": "Numéro d'urgence pour les personnes sourdes et malentendantes"
        },
        local: [
            "CCAS (Centre Communal d'Action Sociale)",
            "Mairie",
            "Conseil départemental",
            "CAF (Caisse d'Allocations Familiales)",
            "CPAM (Caisse Primaire d'Assurance Maladie)",
            "Pôle Emploi",
            "Mission Locale (pour les moins de 26 ans)"
        ]
    },
    
    // Messages d'aide et d'erreur
    messages: {
        welcome: "Bonjour ! Je suis Marie, votre assistante virtuelle spécialisée dans l'aide sociale en France. Comment puis-je vous aider aujourd'hui ?",
        listening: "Je vous écoute... Parlez maintenant.",
        processing: "Je traite votre demande...",
        error: "Désolée, je n'ai pas pu comprendre. Pouvez-vous répéter s'il vous plaît ?",
        noSpeech: "Je n'ai pas entendu votre question. Cliquez à nouveau sur le bouton et parlez plus fort.",
        browserNotSupported: "Votre navigateur ne supporte pas la reconnaissance vocale. Utilisez Chrome, Edge ou Safari récent.",
        defaultResponse: "Je comprends votre situation. Je vous recommande de contacter votre CCAS local qui pourra évaluer vos droits de manière personnalisée. Vous pouvez aussi appeler le 3939, numéro national d'information sur les droits sociaux. N'hésitez pas à vous rendre en mairie pour être orienté vers les bons services. Chaque situation est unique et mérite un accompagnement adapté."
    },
    
    // Configuration UI
    ui: {
        colors: {
            primary: "#667eea",
            secondary: "#764ba2",
            success: "#00b894",
            warning: "#fdcb6e",
            error: "#e17055",
            listening: "#ff6b6b"
        },
        animations: {
            pulseSpeed: 1.5,
            transitionSpeed: 0.3
        }
    },
    
    // Exemples de questions fréquentes
    examples: [
        "J'ai perdu mon emploi, quelles aides puis-je demander ?",
        "Je suis étudiant et j'ai des difficultés financières",
        "Comment obtenir une aide au logement ?",
        "J'ai des enfants et je suis parent isolé",
        "Je cherche une aide pour me former professionnellement",
        "Je suis en situation de handicap, quels sont mes droits ?",
        "Comment bénéficier de la complémentaire santé ?",
        "J'ai des problèmes de santé et pas d'argent"
    ]
};

// Export de la configuration (si utilisé en module)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MARIE_CONFIG;
}

// Variable globale pour l'accès depuis index.html
window.MARIE_CONFIG = MARIE_CONFIG;

// Fonction utilitaire pour analyser le texte utilisateur
function analyzeUserInput(input) {
    const lowerInput = input.toLowerCase();
    
    // Parcourir toutes les catégories d'aides
    for (const [category, data] of Object.entries(MARIE_CONFIG.socialAids)) {
        for (const keyword of data.keywords) {
            if (lowerInput.includes(keyword)) {
                return data.response;
            }
        }
    }
    
    // Si aucun mot-clé spécifique trouvé, retourner la réponse par défaut
    return MARIE_CONFIG.messages.defaultResponse;
}

// Export de la fonction d'analyse
window.analyzeUserInput = analyzeUserInput;

console.log("Configuration Marie IA chargée avec succès !");
console.log("Catégories d'aide disponibles:", Object.keys(MARIE_CONFIG.socialAids));
console.log("Contacts utiles:", MARIE_CONFIG.contacts);
