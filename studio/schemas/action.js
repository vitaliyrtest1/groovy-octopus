export default {
    "type": "object",
    "name": "action",
    "title": "Action",
    "fields": [
        {
            "type": "string",
            "name": "label",
            "title": "Label",
            "validation": null
        },
        {
            "type": "string",
            "name": "url",
            "title": "URL",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_scrolly",
            "title": "IS Scrolly",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "is_primary",
            "title": "Is Primary",
            "validation": null
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
            "title": "label"
        }
    }
}