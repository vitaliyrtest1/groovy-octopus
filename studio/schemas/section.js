export default {
    "type": "object",
    "name": "section",
    "title": "Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Section title (Also used bt the CMS, even if it is not displayed on the page)",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": true,
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}