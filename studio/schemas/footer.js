export default {
    "type": "document",
    "name": "footer",
    "title": "Footer Configuration",
    "fields": [
        {
            "type": "object",
            "name": "contact",
            "title": "Contact",
            "description": "The contact section of the footer",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Title",
                    "description": "The contact section title",
                    "validation": null
                },
                {
                    "type": "markdown",
                    "name": "subtitle",
                    "title": "Subtitle",
                    "description": "The contact section subtitle",
                    "validation": null
                }
            ]
        },
        {
            "type": "link_column",
            "name": "links_col1",
            "title": "First links column",
            "validation": null
        },
        {
            "type": "link_column",
            "name": "links_col2",
            "title": "Second links column",
            "validation": null
        },
        {
            "type": "link_column",
            "name": "links_col3",
            "title": "Third links column",
            "validation": null
        },
        {
            "type": "link_column",
            "name": "links_col4",
            "title": "Fourth links column",
            "validation": null
        },
        {
            "type": "array",
            "name": "social_links",
            "title": "Social Links",
            "description": "Contact Methods",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "text",
                            "title": "Contact method description",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Icon",
                            "description": "Font Awesome Icon",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "link",
                            "title": "URL",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "text"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "copyright",
            "title": "Copyright",
            "description": "Copyright displayed at the bottom of the page",
            "validation": null
        },
        {
            "type": "array",
            "name": "links",
            "title": "Copyright Links",
            "description": "A list of links displayed in the footer, next to the copyright text.",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "text",
                            "title": "Link text",
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
                            "name": "new_window",
                            "title": "Open in new window",
                            "initialValue": true,
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "text"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Footer Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_data/footer.yml"
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
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}