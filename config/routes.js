/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/api/node/blocks': { action: 'last-block' },
  '/api/node/blocks/num/:num': { action: 'block-hash-by-number' },
  'POST /api/node/blocks/hash': { action: 'block-by-hash' },
  '/api/node/blocks/:x/:n': { action: 'x-blocks-after-n' },
  '/api/node/accounts/count/': { action: 'accounts-count' },
  '/api/node/address/transactions/count/:address': { action: 'account-transactions-count' },
  '/api/node/address/transactions/:address': { action: 'account-transactions' },
  '/api/node/address/balance/:address': { action: 'account-balance' },
  '/api/node/transactions/count': { action: 'transactions-count' },
  'POST /api/node/transactions/block': { action: 'transactions-from-block' },
  'POST /api/node/transactions/hash': { action: 'transaction-by-hash' },
  '/api/node/transactions/:x/:n': { action: 'x-transactions-after-nth' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
