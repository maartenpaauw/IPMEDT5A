FORMAT: 1A

# IPMEDT5A

# Actions
Class ActionController

## Display a listing of actions. [GET /api/actions]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "name": "demo_opgepakt",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified action. [GET /api/actions/{action}]


+ Parameters
    + action: (string, required) - The name of the action.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "name": "demo_opgepakt",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46"
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# Demos
Class DemoController

## Display a listing of demo shoes. [GET /api/demos]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "product_id": 45,
                        "uuid": "d20fe26a-f9d2-335e-a029-a8628520a76e",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46",
                        "product": {
                            "id": 45,
                            "shoe_id": 10,
                            "size_id": 23,
                            "sku": "3725077122970",
                            "price": "762.27",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46",
                            "shoe": {
                                "id": 10,
                                "name": "SlateBlue",
                                "brand": "Walter PLC",
                                "created_at": "2017-03-25 23:18:46",
                                "updated_at": "2017-03-25 23:18:46"
                            },
                            "size": {
                                "id": 23,
                                "eu_size": "41.0",
                                "created_at": "2017-03-25 23:18:46",
                                "updated_at": "2017-03-25 23:18:46"
                            }
                        }
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified demo. [GET /api/demos/{demo}]


+ Parameters
    + demo: (string, required) - The uuid of the demo.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "product_id": 45,
                    "uuid": "d20fe26a-f9d2-335e-a029-a8628520a76e",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46",
                    "product": {
                        "id": 45,
                        "shoe_id": 10,
                        "size_id": 23,
                        "sku": "3725077122970",
                        "price": "762.27",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46",
                        "shoe": {
                            "id": 10,
                            "name": "SlateBlue",
                            "brand": "Walter PLC",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46"
                        },
                        "size": {
                            "id": 23,
                            "eu_size": "41.0",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46"
                        }
                    }
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# Products
Class ProductController

## Display a listing of products. [GET /api/products]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "shoe_id": 1,
                        "size_id": 1,
                        "sku": "8198284818519",
                        "price": "516.43",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46",
                        "shoe": {
                            "id": 1,
                            "name": "LimeGreen",
                            "brand": "Heathcote-Ondricka",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46"
                        },
                        "size": {
                            "id": 1,
                            "eu_size": "30.0",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46"
                        }
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified resource. [GET /api/products/{product}]


+ Parameters
    + demo: (integer, required) - The id of the product.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "shoe_id": 1,
                    "size_id": 1,
                    "sku": "8198284818519",
                    "price": "516.43",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46",
                    "shoe": {
                        "id": 1,
                        "name": "LimeGreen",
                        "brand": "Heathcote-Ondricka",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    },
                    "size": {
                        "id": 1,
                        "eu_size": "30.0",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    }
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# Shelves
Class ShelfController

## Display a listing of the shelves. [GET /api/shelves]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "demo_id": 3,
                        "mac_address": "91:86:26:67:1E:53",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46",
                        "demo": {
                            "id": 3,
                            "product_id": 11,
                            "uuid": "aa5ebcd1-5602-3413-9d43-80e1a1123151",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46",
                            "product": {
                                "id": 11,
                                "shoe_id": 10,
                                "size_id": 12,
                                "sku": "5610726471739",
                                "price": "113.50",
                                "created_at": "2017-03-25 23:18:46",
                                "updated_at": "2017-03-25 23:18:46",
                                "shoe": {
                                    "id": 10,
                                    "name": "SlateBlue",
                                    "brand": "Walter PLC",
                                    "created_at": "2017-03-25 23:18:46",
                                    "updated_at": "2017-03-25 23:18:46"
                                },
                                "size": {
                                    "id": 12,
                                    "eu_size": "35.5",
                                    "created_at": "2017-03-25 23:18:46",
                                    "updated_at": "2017-03-25 23:18:46"
                                }
                            }
                        }
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified shelf. [GET /api/shelves/{shelf}]


+ Parameters
    + shelf: (string, required) - The mac_address of the shelf.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "demo_id": 3,
                    "mac_address": "THE_MAC_ADDRESS",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46",
                    "demo": {
                        "id": 3,
                        "product_id": 11,
                        "uuid": "aa5ebcd1-5602-3413-9d43-80e1a1123151",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46",
                        "product": {
                            "id": 11,
                            "shoe_id": 10,
                            "size_id": 12,
                            "sku": "5610726471739",
                            "price": "113.50",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46",
                            "shoe": {
                                "id": 10,
                                "name": "SlateBlue",
                                "brand": "Walter PLC",
                                "created_at": "2017-03-25 23:18:46",
                                "updated_at": "2017-03-25 23:18:46"
                            },
                            "size": {
                                "id": 12,
                                "eu_size": "35.5",
                                "created_at": "2017-03-25 23:18:46",
                                "updated_at": "2017-03-25 23:18:46"
                            }
                        }
                    }
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Connect a brand new shelf to the API. [POST /api/shelves/connect]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE
    + Body

            {
                "mac_address": "THE_MAC_ADDRESS"
            }

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 4,
                    "demo_id": null,
                    "mac_address": "THE_MAC_ADDRESS",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46",
                    "demo": null
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Add a demo_opgepakt statistic to the database. [POST /api/shelves/{shelf}/actions/picked_up]


+ Parameters
    + shelf: (string, required) - The mac_address of the shelf.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "action_id": 1,
                    "shelf_id": 6,
                    "tag_id": null,
                    "created_at": "2017-03-19 09:59:20",
                    "updated_at": "2017-03-25 23:18:46",
                    "action": {
                        "id": 1,
                        "name": "demo_opgepakt",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    },
                    "shelf": {
                        "id": 6,
                        "demo_id": null,
                        "mac_address": "8F:01:C8:BF:97:44",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46",
                        "demo": null
                    },
                    "tag": null
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# Shoes
Class ShoeController

## Display a listing of the shoes. [GET /api/shoes]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "name": "LimeGreen",
                        "brand": "Heathcote-Ondricka",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified shoe. [GET /api/shoes/{shoe}]


+ Parameters
    + shoe: (integer, required) - The id of the shoe.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 2,
                    "name": "Teal",
                    "brand": "Ratke-Runolfsdottir",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46"
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# Sizes
Class SizeController

## Display a listing of the sizes. [GET /api/sizes]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "eu_size": "30.0",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified size. [GET /api/sizes/{size}]


+ Parameters
    + size: (integer, required) - The eu_size of the size.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 21,
                    "eu_size": "40.0",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46"
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# IPMEDT5AHttpControllersStatisticController
Class StatisticController

## Display a listing of the statistics. [GET /api/statistics]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "action_id": 1,
                        "shelf_id": 6,
                        "tag_id": null,
                        "created_at": "2017-03-19 09:59:20",
                        "updated_at": "2017-03-25 23:18:46",
                        "action": {
                            "id": 1,
                            "name": "demo_opgepakt",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46"
                        },
                        "shelf": {
                            "id": 6,
                            "demo_id": null,
                            "mac_address": "8F:01:C8:BF:97:44",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46",
                            "demo": null
                        },
                        "tag": null
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified statistic. [GET /api/statistics/{statistic}]


+ Parameters
    + statistic: (integer, required) - The id of the statistic.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "action_id": 1,
                    "shelf_id": 6,
                    "tag_id": null,
                    "created_at": "2017-03-19 09:59:20",
                    "updated_at": "2017-03-25 23:18:46",
                    "action": {
                        "id": 1,
                        "name": "demo_opgepakt",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    },
                    "shelf": {
                        "id": 6,
                        "demo_id": null,
                        "mac_address": "8F:01:C8:BF:97:44",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46",
                        "demo": null
                    },
                    "tag": null
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# Tags
Class TagController

## Display a listing of the resource. [GET /api/tags]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "size_id": 19,
                        "uuid": "0f299533-7ef3-315c-94f6-127db4fad343",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46",
                        "size": {
                            "id": 19,
                            "eu_size": "39.0",
                            "created_at": "2017-03-25 23:18:46",
                            "updated_at": "2017-03-25 23:18:46"
                        }
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified tag. [GET /api/tags/{tag}]


+ Parameters
    + tag: (string, required) - The uuid of the tag.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "size_id": 19,
                    "uuid": "0f299533-7ef3-315c-94f6-127db4fad343",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46",
                    "size": {
                        "id": 19,
                        "eu_size": "39.0",
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    }
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# Settings
Class SettingController

## Display a listing of the settings. [GET /api/settings]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": [
                    {
                        "id": 1,
                        "key": "kan_aanpassen",
                        "value": true,
                        "created_at": "2017-03-25 23:18:46",
                        "updated_at": "2017-03-25 23:18:46"
                    }
                ]
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Display the specified setting. [GET /api/settings/{setting}]


+ Parameters
    + setting: (string, required) - The key of the setting.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "key": "kan_aanpassen",
                    "value": true,
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46"
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

## Toggle the value of the setting. [POST /api/settings/{setting}]


+ Parameters
    + setting: (string, required) - The key of the setting.

+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "data": {
                    "id": 1,
                    "key": "kan_aanpassen",
                    "value": false,
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46"
                }
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Failed to authenticate because of bad credentials or an invalid authorization header.",
                "status_code": 401
            }

+ Response 401 (application/json)
    + Body

            {
                "message": "Could not decode token: The token 'TOKEN_HERE' is an invalid JWS",
                "status_code": 401
            }

# Authorisation [/authenticate]
Class AuthenticateController

## Authenticate a user. [POST /authenticate/authenticate]


+ Request (application/json)
    + Body

            {
                "email": "YOUR_EMAIL",
                "password": "YOUR_PASSWORD"
            }

+ Response 200 (application/json)
    + Body

            {
                "token": "YOUR_TOKEN"
            }

+ Response 401 (application/json)
    + Body

            {
                "error": "invalid_credentials"
            }

+ Response 500 (application/json)
    + Body

            {
                "error": "could_not_create_token"
            }

## Authenticate a shelf. [POST /authenticate/authenticate/shelf]


+ Request (application/json)
    + Body

            {
                "mac_address": "MAC_ADDRESS_SHELF",
                "private_key": "ENV_JWT_PRIVATE_KEY"
            }

+ Response 200 (application/json)
    + Body

            {
                "token": "YOUR_TOKEN"
            }

+ Response 401 (application/json)
    + Body

            {
                "error": "invalid_credentials"
            }

+ Response 500 (application/json)
    + Body

            {
                "error": "could_not_create_token"
            }

## Check the token. [POST /authenticate/authenticate/check]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "user": {
                    "id": 1,
                    "name": "YOUR_NAME",
                    "email": "YOUR_EMAIL",
                    "created_at": "2017-03-25 23:18:46",
                    "updated_at": "2017-03-25 23:18:46"
                }
            }

+ Response 401 (application/json)
    + Body

            [
                "token_expired"
            ]

+ Response 400 (application/json)
    + Body

            [
                "token_invalid"
            ]

+ Response 500 (application/json)
    + Body

            [
                "token_absent"
            ]

## Check the token. [POST /authenticate/authenticate/shelf/check]


+ Request (application/json)
    + Headers

            Authorization: Bearer TOKEN_HERE

+ Response 200 (application/json)
    + Body

            {
                "shelf": {
                    "id": 1,
                    "demo_id": 3,
                    "mac_address": "60:DB:65:4D:08:CA",
                    "created_at": "2017-03-31 11:09:55",
                    "updated_at": "2017-03-31 11:09:55",
                    "demo": {
                        "id": 3,
                        "product_id": 293,
                        "uuid": "8b6d3cbf-f1c2-37f7-ad6b-a3c461c1c90f",
                        "created_at": "2017-03-31 11:09:55",
                        "updated_at": "2017-03-31 11:09:55",
                        "product": {
                            "id": 293,
                            "shoe_id": 2,
                            "size_id": 2,
                            "sku": "1975872688085",
                            "price": "504.65",
                            "created_at": "2017-03-31 11:09:55",
                            "updated_at": "2017-03-31 11:09:55",
                            "shoe": {
                                "id": 2,
                                "name": "Aquamarine",
                                "brand": "Cruickshank-Thiel",
                                "created_at": "2017-03-31 11:09:55",
                                "updated_at": "2017-03-31 11:09:55"
                            },
                            "size": {
                                "id": 2,
                                "eu_size": "30.5",
                                "created_at": "2017-03-31 11:09:54",
                                "updated_at": "2017-03-31 11:09:54"
                            }
                        }
                    }
                }
            }

+ Response 401 (application/json)
    + Body

            [
                "token_expired"
            ]

+ Response 400 (application/json)
    + Body

            [
                "token_invalid"
            ]

+ Response 500 (application/json)
    + Body

            [
                "token_absent"
            ]