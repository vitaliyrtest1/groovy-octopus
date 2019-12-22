export default {
    "type": "document",
    "name": "home",
    "title": "Home",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Page title",
            "validation": null
        },
        {
            "type": "object",
            "name": "banner",
            "title": "Banner",
            "description": "Home page banner",
            "validation": null,
            "fields": [
                {
                    "type": "array",
                    "name": "items",
                    "title": "Banner sections",
                    "description": "Sections displayed on the left side of the banner",
                    "validation": null,
                    "of": [
                        {
                            "type": "object",
                            "fields": [
                                {
                                    "type": "string",
                                    "name": "title",
                                    "title": "Section Title",
                                    "description": "Banner Section Title",
                                    "validation": null
                                },
                                {
                                    "type": "markdown",
                                    "name": "subtitle",
                                    "title": "Banner Section Subtitle",
                                    "description": "The text that appears below the banner section title",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "accent_color",
                                    "title": "Banner Item Color",
                                    "initialValue": "accent1",
                                    "validation": Rule => Rule.required(),
                                    "options": {
                                        "list": [
                                            "accent1",
                                            "accent2",
                                            "accent3"
                                        ]
                                    }
                                },
                                {
                                    "type": "object",
                                    "name": "action",
                                    "title": "Banner Section Action",
                                    "description": "The action button for the banner section",
                                    "validation": null,
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
                                            "title": "Is Scrolly",
                                            "validation": null
                                        },
                                        {
                                            "type": "boolean",
                                            "name": "is_primary",
                                            "title": "Is Primary",
                                            "initialValue": true,
                                            "validation": null
                                        }
                                    ]
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
                    "type": "array",
                    "name": "slider",
                    "title": "Banner Image Slider",
                    "description": "List of images to be displayed in the banner image slider",
                    "validation": null,
                    "of": [
                        {
                            "type": "object",
                            "fields": [
                                {
                                    "type": "image",
                                    "name": "img_path",
                                    "title": "Image",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "img_title",
                                    "title": "Image Title",
                                    "description": "The title of the image (only used in the CMS)",
                                    "initialValue": "image",
                                    "validation": Rule => Rule.required()
                                },
                                {
                                    "type": "string",
                                    "name": "data_position",
                                    "title": "Image Data Position",
                                    "description": "Example: top left",
                                    "validation": null
                                }
                            ],
                            "preview": {
                                "select": {
                                    "title": "img_title"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "boolean",
            "name": "show_contact",
            "title": "Show Contact Section",
            "description": "Displays the contact section at the bottom of the page",
            "validation": null
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Home Sections",
            "validation": null,
            "of": [
                {
                    "type": "features"
                },
                {
                    "type": "carousel"
                },
                {
                    "type": "spotlight"
                }
            ]
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Home Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "home"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Home URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
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
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}