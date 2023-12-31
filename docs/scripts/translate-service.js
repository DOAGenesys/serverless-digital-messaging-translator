// Genesys Cloud Language Code to AWS Translate Language Code
const languageCodeMapping = {
    'cs': 'cs',
    'da': 'da',
    'de': 'de',
    'en-us': 'en',
    'en-uk': 'en',
    'es': 'es',
    'fr': 'fr',
    'it': 'it',
    'nl': 'nl',
    'no': 'no',
    'pl': 'pl',
    'pt-br': 'pt',
    'fi': 'fi',
    'sv': 'sv',
    'tr': 'tr',
    'th': 'th',
    'ja': 'ja',
    'zh-cn': 'zh',
    'zh-tw': 'zh-TW'
}

export default {
    translateText(text, language, callback){
        let language_code = languageCodeMapping[language] ? 
                    languageCodeMapping[language] : language;

        console.log("Determined language code in translate-service.js:", language_code);

        let data = {
            raw_text: text,
            source_language: 'auto',
            target_language: language_code
        }

        fetch('/api/translate',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        .then(response => response.json())
        .then(translationData => {
            console.log(JSON.stringify(translationData));

            callback(translationData);
        })
        .catch(e => console.error(e));
    }
}
