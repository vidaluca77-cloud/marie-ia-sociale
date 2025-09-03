// Configuration pour Marie IA - Assistante sociale virtuelle
// Ce fichier contient les paramètres et configurations pour le service

// Configuration de Marie IA
const MARIE_CONFIG = {
    // Informations sur l'assistante
    name: "Marie",
    title: "Assistante sociale IA de Caen",
    description: "Service d'aide sociale virtuel gratuit pour la région de Caen",
    
    // Configuration pour l'IA (gérée côté serveur via Vercel)
    ai: {
        enabled: true,
        fallbackToKeywords: true
    },
    
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
    
    // Base de connaissances des aides sociales françaises - Spécialisée Caen
    socialAids: {
        employment: {
            keywords: ["emploi", "chômage", "travail", "pôle emploi", "rsa"],
            response: "Je comprends votre situation d'emploi. À Caen, contactez Pôle Emploi au 39 49 pour vos allocations et recherche d'emploi. Pour le RSA, rendez-vous au CCAS de Caen (02 31 30 47 90). Des formations gratuites sont disponibles via la Région Normandie. L'association APEC peut aussi vous aider. Courage, des solutions existent !"
        },
        housing: {
            keywords: ["logement", "loyer", "apl", "caf", "hlm"],
            response: "Pour le logement à Caen, demandez les APL à la CAF Calvados (32 30). Pour les impayés, le FSL est géré par le Conseil Départemental (02 31 57 14 14). Logement social : Caen la Mer Habitat (02 31 45 90 00). En urgence, appelez le 115 ou le CCAS Caen (02 31 30 47 90). Chaque situation peut être accompagnée."
        },
        student: {
            keywords: ["étudiant", "études", "université", "crous", "bourse"],
            response: "Étudiant à Caen ? Contactez le CROUS Normandie pour vos bourses et logement universitaire. L'Université de Caen a un service social étudiant. Pour l'aide alimentaire, l'AGORAé propose une épicerie solidaire. Le CCAS Caen (02 31 30 47 90) aide aussi les étudiants en difficulté. N'hésitez pas à demander de l'aide."
        },
        family: {
            keywords: ["enfant", "famille", "parent", "caf", "allocation"],
            response: "Pour vos enfants, la CAF Calvados (32 30) gère toutes les allocations familiales. Parents isolés : demandez l'ASI. La Mairie de Caen (02 31 30 41 00) propose des aides pour la garde d'enfants et activités. Le CCAS (02 31 30 47 90) vous accompagne. Restos du Cœur (02 31 84 12 34) aide les familles."
        },
        training: {
            keywords: ["formation", "reconversion", "cpf", "qualifiante"],
            response: "À Caen, utilisez votre CPF pour vous former. Pôle Emploi (39 49) propose des formations gratuites. La Région Normandie finance certaines formations. AFPA Caen forme aux métiers techniques. Si vous avez moins de 26 ans, la Mission Locale peut vous aider. Investir en soi, c'est préparer l'avenir !"
        },
        health: {
            keywords: ["santé", "médical", "cmu", "complémentaire", "sécurité sociale"],
            response: "Pour la santé à Caen, votre CPAM gère la Sécurité sociale. Faibles revenus ? Demandez la Complémentaire santé solidaire. Le Centre Hospitalier de Caen a un service social. Des permanences santé existent dans les quartiers. Le CCAS (02 31 30 47 90) vous oriente. Votre santé est prioritaire."
        },
        elderly: {
            keywords: ["âgé", "retraite", "senior", "apa", "aide à domicile"],
            response: "Seniors de Caen, le Conseil Départemental (02 31 57 14 14) évalue l'APA. La Mairie propose des services d'aide à domicile. Le CCAS (02 31 30 47 90) coordonne les aides locales. Des clubs seniors existent dans chaque quartier. Le CLIC vous informe sur vos droits. Vous méritez un accompagnement adapté."
        },
        disability: {
            keywords: ["handicap", "invalidité", "aah", "mdph", "adaptation"],
            response: "À Caen, la MDPH du Calvados évalue vos droits au handicap. L'AAH et les aides sont gérées par la CAF (32 30). L'APAJH Calvados vous accompagne. Pour l'adaptation du logement, contactez l'ANAH. Le CCAS (02 31 30 47 90) vous aide dans vos démarches. Chaque situation mérite attention."
        },
        food: {
            keywords: ["alimentaire", "manger", "courses", "nourriture", "faim"],
            response: "Pour l'aide alimentaire à Caen : Restos du Cœur (02 31 84 12 34), Secours Populaire (02 31 86 88 31), Banque Alimentaire du Calvados. Épiceries solidaires dans les quartiers. Le CCAS (02 31 30 47 90) délivre des bons alimentaires d'urgence. Personne ne doit avoir faim, des solutions existent."
        }
    },
    
    // Organismes de contact utiles - Caen et région
    contacts: {
        national: {
            "3939": "Numéro national d'information sur les droits sociaux",
            "115": "Numéro d'urgence sociale pour l'hébergement",
            "113": "Numéro d'urgence pour les personnes sourdes et malentendantes"
        },
        caen: {
            "CCAS Caen": "02 31 30 47 90 - Centre Communal d'Action Sociale",
            "Restos du Cœur Caen": "02 31 84 12 34 - Aide alimentaire",
            "Secours Populaire Caen": "02 31 86 88 31 - Aide générale",
            "CAF Calvados": "32 30 - Allocations familiales",
            "Pôle Emploi Caen": "39 49 - Emploi et formation",
            "Mairie de Caen": "02 31 30 41 00 - Services municipaux",
            "Conseil Départemental 14": "02 31 57 14 14 - Aides départementales"
        },
        local: [
            "CCAS Caen (02 31 30 47 90)",
            "Restos du Cœur Caen (02 31 84 12 34)",
            "Secours Populaire Caen (02 31 86 88 31)",
            "CAF Calvados (32 30)",
            "Pôle Emploi Caen (39 49)",
            "Mairie de Caen (02 31 30 41 00)"
        ]
    },
    
    // Messages d'aide et d'erreur
    messages: {
        welcome: "Bonjour ! Je suis Marie, votre assistante sociale virtuelle de Caen. Comment puis-je vous aider aujourd'hui ?",
        listening: "Je vous écoute... Parlez maintenant.",
        processing: "Je traite votre demande avec l'intelligence artificielle...",
        speaking: "Marie vous répond...",
        error: "Désolée, je n'ai pas pu comprendre. Pouvez-vous répéter s'il vous plaît ?",
        noSpeech: "Je n'ai pas entendu votre question. Cliquez à nouveau sur le bouton et parlez plus fort.",
        browserNotSupported: "Votre navigateur ne supporte pas la reconnaissance vocale. Utilisez Chrome, Edge ou Safari récent.",
        apiKeyMissing: "Clé API OpenAI non configurée. Utilisez le mode hors ligne.",
        apiError: "Erreur de connexion à l'IA. Utilisation du mode hors ligne.",
        defaultResponse: "Je comprends votre situation. Je vous recommande de contacter le CCAS de Caen au 02 31 30 47 90 qui pourra évaluer vos droits. Vous pouvez aussi appeler le 3939 pour les droits sociaux. Les Restos du Cœur (02 31 84 12 34) et le Secours Populaire (02 31 86 88 31) peuvent vous aider rapidement. N'hésitez pas, chaque situation mérite un accompagnement adapté."
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

// Fonction pour appeler notre API sécurisée
async function callMarieAI(userMessage) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: userMessage
            })
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        if (data.success && data.response) {
            console.log(`Réponse reçue depuis: ${data.source}`);
            return data.response;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error("Erreur API Marie:", error);
        return null;
    }
}

// Fonction utilitaire pour analyser le texte utilisateur et générer une réponse
async function analyzeUserInput(input) {
    // Essayer d'abord l'API Marie (qui gère OpenAI en arrière-plan)
    const aiResponse = await callMarieAI(input);
    if (aiResponse) {
        return aiResponse;
    }

    // Fallback vers le système de mots-clés local
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

// Export des fonctions
window.analyzeUserInput = analyzeUserInput;
window.callMarieAI = callMarieAI;

console.log("Configuration Marie IA chargée avec succès !");
console.log("Catégories d'aide disponibles:", Object.keys(MARIE_CONFIG.socialAids));
console.log("Contacts utiles:", MARIE_CONFIG.contacts);
