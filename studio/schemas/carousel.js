export default {
    "type": "object",
    "name": "carousel",
    "title": "Carousel",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Section title (Also used bt the CMS, even if it is not displayed on the page)",
            "initialValue": "Carousel Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "background_accent_color",
            "title": "Background Accent Color",
            "description": "Sets the color used for the section background",
            "validation": null,
            "options": {
                "list": [
                    "accent1",
                    "accent2",
                    "accent3",
                    "accent4"
                ]
            }
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "carousel.html"
                ]
            }
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
                    "carousel"
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