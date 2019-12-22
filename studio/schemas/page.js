export default {
    "type": "document",
    "name": "page",
    "title": "Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Page Subtitle",
            "description": "Appears below the page title",
            "validation": null
        },
        {
            "type": "image",
            "name": "content_img_path",
            "title": "Content Image",
            "validation": null
        },
        {
            "type": "object",
            "name": "home_sections",
            "title": "Home Sections",
            "description": "If page is to be featured in the home page carousel or spotlights",
            "validation": null,
            "fields": [
                {
                    "type": "object",
                    "name": "spotlight",
                    "title": "Spotlight",
                    "description": "Home page spotlight",
                    "validation": null,
                    "fields": [
                        {
                            "type": "boolean",
                            "name": "enabled",
                            "title": "Enabled",
                            "validation": null
                        },
                        {
                            "type": "object",
                            "name": "image",
                            "title": "Home Spotlight Image",
                            "validation": null,
                            "fields": [
                                {
                                    "type": "image",
                                    "name": "url",
                                    "title": "Image",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "data_position",
                                    "title": "Data Position",
                                    "description": "example: left",
                                    "validation": null
                                }
                            ]
                        },
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Home Spotlight Title",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "excerpt",
                            "title": "Home Spotlight Excerpt",
                            "description": "Excerpt to bedisplayed in the home spotlight",
                            "validation": null
                        },
                        {
                            "type": "number",
                            "name": "weight",
                            "title": "Spotlight Weight",
                            "description": "The index of the spotlight in home spotlights",
                            "validation": Rule => Rule.integer()
                        }
                    ]
                },
                {
                    "type": "object",
                    "name": "carousel",
                    "title": "Carousel",
                    "description": "Home page Carousel",
                    "validation": null,
                    "fields": [
                        {
                            "type": "boolean",
                            "name": "enabled",
                            "title": "Enabled",
                            "validation": null
                        },
                        {
                            "type": "object",
                            "name": "image",
                            "title": "Home Carousel Image",
                            "validation": null,
                            "fields": [
                                {
                                    "type": "image",
                                    "name": "url",
                                    "title": "Image",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "data_position",
                                    "title": "Data Position",
                                    "description": "example: left",
                                    "validation": null
                                }
                            ]
                        },
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Carousel Section Title",
                            "validation": null
                        },
                        {
                            "type": "markdown",
                            "name": "subtitle",
                            "title": "Carousel Section Subtitle",
                            "description": "Text below the section title",
                            "validation": null
                        },
                        {
                            "type": "number",
                            "name": "weight",
                            "title": "Carousel Weight",
                            "description": "The index of the carousel section",
                            "validation": Rule => Rule.integer()
                        }
                    ]
                }
            ]
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Page Menus",
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
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Page URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
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
                    "page"
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