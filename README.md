## Extend the Coin Explorer to create a detail view of each coin. You have to make the  following URLs on your existing app.

* /coins/{coin_id} https://api.coinpaprika.com/v1/coins/{coin_id}

* /coins/{coin_id}/exchanges https://api.coinpaprika.com/v1/coins/{coin_id}/exchanges

* /coins/{coin_id}/markets https://api.coinpaprika.com/v1/coins/{coin_id}/markets

* Documentation: https://api.coinpaprika.com/?ref=public-apis#operation/getCoinById

* Coin Markets & Coin Exchanges: These two ROUTES should be inside of the Coin Detail. 


### Global Requirements:

* Use Container/Presenter pattern with class components.

* DO NOT use Hooks. I know they are awesome, we will use them later.

* ALL PRESENTERS should use PropTypes.
  
* Use PropTypes.shape

* Use async/await

* All AJAX requests MUST be made with an AXIOS INSTANCE ('axios.create')

* Containers MUST NEVER call Axios directly, they should call the instance.

* Use a Loader Component.

* Coin Markets and Coin Exchanges should be ROUTES. 