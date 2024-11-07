# SwiggyClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Code Explanation
##Services created
1.Login Service - it has following functionality 1.) login => login user validate data in mockapi  2.) signup => store user data in mockapi 3.) expose userdata as observale 4.) check if user is logged in 5.) logout- delete userdata value and local storage.
2. Order Service - it simply stores users order in mockapi.
3. Restaurant Service - here i have maintained restaurant data and also used to get restaurant by id.

##Components created
1.Navbar - it is used in homepage and menuPage of restaurants it has login , signup , cart , favourites .
2.Home - 
a.) Section A => It's home page of swiggy that has first section that is display food on clicking which will display restaurants having that food here data was limited so most of them will show nothing but i made sure that starting pizza , burger and biryani had some restraunt related to it to show the functionality
b.) Section B => next is scrollable section that has all the restaurants
c.) Section C => This section has search functionality allowing to search by restaurant by name

3. Login - I made sure that user has to login before assesssing cart so this component fetches data from mockapi and check whether user exist or not
4. Sign Up - This componet is for sign up that stores users name and password in mockapi
5. rest-menu-page - This componet is a reusable component which takes restaurant id as input and gets restaurant data from restaurant service finds restaurant with that id and displays it's menu . Here we have buttons to add food to favourite and cart
6. food-page - this component is used to display restaurant that have given food in it's menu gets foodid in params than uses restaurant service to get restaurant data and filters restaurant based on foodid and display only those which has that food 
7. Favourite-food  -  This component fetch data from local storage and gets data stored by user by when clicking add to fav button in rest-menu-page . Here user have option to remove it
8. cart - This component also ge data from local storage uses mockapi to post data of orders there.
9. resuable-food-card - this component is used several times to display food data
10. resuable-rest-card - this component is used to display restaurants as card .


