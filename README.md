# Digital-Market
Digital-market is my databases course project.

Running here: https://digital-market.herokuapp.com/

### Stack Used
 - ***ReactJS, React-Router, Babel, Webpack***
 - ***MySQL***
NoSQL db would be better for this project, but SQL was required for course project.

 - ***NodeJS, Express***

 - ***Bulma***
Better bootstrap analogue.

https://www.figma.com/file/GaOjMklD6QmiZbPJQPG3OLou/DigitalMarket?node-id=0%3A1
### Known issues:
 - Logout action throws ``TypeError: NetworkError when attempting to fetch resource`` in Firefox

### Fixed issues:
  - When product from cart deleted from database, re-login is required for cart update.
  - When page loading, in header you may see Log in & Register buttons for a moment, when you are logged in.