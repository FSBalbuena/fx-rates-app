# fx-rates-app
A simple FX Rate tha allows creation of new rates with a fee.

## Start
*   `npm run buid`
*   `npm start`

## Routes
*   **/** - Home
*   **/rates** - Display availables rates
    (This route accepts /rates?currency=[CURRENCY])
*   **/create** - Creates a new rate for a base 
currency
    (This route accepts /create?currency=[CURRENCY]&fee=[fee])


## API
The API of the app had being thought to be a handler for Fixer.oi`s API responses.

|   method  |   route   |   response schema |
|-----------|-----------|-------------------|
|   GET     |   api/rates       |   [Symbols](### Get /)|
|   GET     |   api/rates/:id       |   [pair of rates](### Get rates/:id)|
|   POST     |   api/rates       |   [rates](### Post /)|


### Get /
It will return a list with available currency symbols on string.
```js
{
    "symbols": [
        "EUR",
        "USD",
        "ARS",
        "BRL"
    ]
}
```

### Get rates/:id
the :id will be our base currency, and the API will return the pairs rates for that base with this schema.

```js
{
    "data": [
        {
            "name": "string",
            "rates": [
                {
                    "name": "string",
                    "rate": "number"
                },
                {
                    "name": "string",
                    "rate": "number"
                }
            ]
        },
        //...schema repeats for all available symbols it self
    ]
}
```
* this is an example of USD response
    ```js
    {
    "data": [
        {
            "name": "USD - EUR",
            "rates": [
                {
                    "name": "USD/EUR",
                    "rate": 0.89739
                },
                {
                    "name": "EUR/USD",
                    "rate": 1.11434
                }
            ]
        },
        {
            "name": "USD - ARS",
            "rates": [
                {
                    "name": "USD/ARS",
                    "rate": 59.73482
                },
                {
                    "name": "ARS/USD",
                    "rate": 0.01674
                }
            ]
        },
        {
            "name": "USD - BRL",
            "rates": [
                {
                    "name": "USD/BRL",
                    "rate": 3.9972
                },
                {
                    "name": "BRL/USD",
                    "rate": 0.25018
                }
            ]
        }
    ]
}
    ```
* This is an example of **Error response**
    ```js
    {
        "message": "Not available currency"
    }
    ```
### Post /
* **Body POST**

    This post route expect a bodywith this schema:
    ```js
    {
        base:"string",
        destination:"string"
    }
    //example post
    {
        base:"USD",
        destination:"ARS"
    }
    ```
* **response**

    It will return the rates pair for our symbols (This schema it`s used inside of get rates/:id response):
    ```js

    {
        "rates": [
            {
                "name": "string",
                "rate": "number"
            },
            {
                "name": "string",
                "rate": "number"
            }
        ]
    }
    // a example response
    
    {
        "rates": [
            {
                "name": "USD/ARS",
                "rate": 59.73482
            },
            {
                "name": "ARS/USD",
                "rate": 0.01674
            }
        ]
    }
    ```
* **Error response**
    this error response it`s a simple message key.:
    ```js
        {
            "message": "Not available pair of currency"
        }
    ```


