# LunchedIn

--------------------------------
LunchedIn App is going to be an account based centralized
application to coordinate ordering lunch in an office setting.
It handles "deciding" where to eat, as well as compiles the orders from
the different users. You will be able to generate a "Group" to which you can
initiate orders with. Once an order has been started, there will be a brief
voting period, allowing you to decide where to eat. Once the voting has
finished, the participants will then be able to decide what they want
from the selected restaurant, or they can choose to drop out.
Long term additions:
- integrated payments
- integrated menus


---------------------------------
# LunchedIn Current State:
- Simple "ADD/DELETE" to a list function.
- No "user" functionality, anyone can edit the entries.
- the "update order" button is broken with the "add order" button
    -if you select "update order" and then click "add order" that order
    becomes broken and you have to manually delete it from the database.
- Bootstrapped SCSS - Needs custom design


---------------------------------
# To Get started
- $ git clone https://github.com/SchulersHub/LunchedIn.git
- cd LunchedIn\lunchedin-app
- npm install
- create database directories @ C:\data\db
- create a "orders" database (use orders)
