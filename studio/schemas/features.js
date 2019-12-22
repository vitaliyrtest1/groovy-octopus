export default {
    "type": "object",
    "name": "features",
    "title": "Features",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Section title (Also used bt the CMS, even if it is not displayed on the page)",
            "initialValue": "Features Section",
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
                    "features.html"
                ]
            }
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "Text below the section title",
            "validation": null
        },
        {
            "type": "array",
            "name": "features",
            "title": "Features List",
            "description": "The list of features",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Feature Title",
                            "validation": null
                        },
                        {
                            "type": "markdown",
                            "name": "subtitle",
                            "title": "Feature Subtitle",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Feature Icon",
                            "description": "Font Awesome Icon",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "icon_accent_color",
                            "title": "Icon Accent Color",
                            "validation": null,
                            "options": {
                                "list": [
                                    "accent1",
                                    "accent2",
                                    "accent3",
                                    "accent4"
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
            ]
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
                    "features"
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