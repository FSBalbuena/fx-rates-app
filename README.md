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

