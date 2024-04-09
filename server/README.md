//Start Back-End
>npm run start 
---------------


//Server
#Server is Running on Port ( 5000 )
#BackEnd End point start with ( http://localhost:5000 )  -> Localhost:Port
---------------------------------------------------------------------------


//Technology and packages used
>Express         -> Create back-end server
>mongoose        -> Connect with mongoDB
>cors            -> Access Resources
-------------------------------------------


//Models
>Products         -> Create Datatable and make schema
#use mongoose Schema
------------------------------------------------------


//.env
>Implement Port, MongoDB compass URL
>Implement Pagination (page, limit) values
-------------------------------------------


//Routes
>products.js        ( Implement all routes Here [view product, products create,product update, product delete])
--------------------------------------------------------------------------------------------------------



//utility -> validateRequestPayload()
>The Function to do validation mechanism
>Pass (payload, validateObject) as Parameters
>And when get error it return errors
----------------------------------------------



//List Products -> router('/')
>get req.query value for page (OR) import config file PAGE value 
>get req.query value for limit (OR) import config file LIMIT value
>get search value using req.query and Assign searchItem and search product "name" using searchItem
--------------------------------------------------------------------------------------------------



//Config file
>get .env file PAGE value and Assign it to PAGE OR (defalut = 1)
>get .env file LIMIT value and Assign it to LIMIT OR (defalut = 10)
-------------------------------------------------------------------



############################################################################################
#Additional Learning Things
> req.params eg : /products/:id = /products/1234 ->    id = req.params.id     =>  id = 1234
> req.query  eg : /products?page=1               ->    page = req.query.page  => page = 1
> req.body   eg : { name : 'abc'}                ->    name = req.body.name   => name = "abc"