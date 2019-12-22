export default {
    "type": "object",
    "name": "spotlight",
    "title": "Spotlight",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Section title (Also used bt the CMS, even if it is not displayed on the page)",
            "initialValue": "Spotlight Section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "spotlight.html"
                ]
            }
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Spotlight Section Subtitle",
            "validation": null
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "spotlight"
                ]
            }
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