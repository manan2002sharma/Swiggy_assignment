# SwiggyClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version **17.3.9**.

## Development Server

- Run `ng serve` for a development server.
- Navigate to `http://localhost:4200/`.
- The application will automatically reload if you change any of the source files.

## Code Explanation

### Services Created

1. **Login Service**
   - **Functionality**:
     - **Login**: Validates user data in the mock API.
     - **Signup**: Stores user data in the mock API.
     - **Expose User Data**: Provides user data as an observable.
     - **Check Login Status**: Verifies if the user is logged in.
     - **Logout**: Deletes user data and clears local storage.

2. **Order Service**
   - Stores user orders in the mock API.

3. **Restaurant Service**
   - Maintains restaurant data and retrieves restaurant details by ID.

### Components Created

1. **Navbar**
   - Used in the homepage and restaurant menu page.
   - Features: Login, Signup, Cart, Favourites.

2. **Home**
   - **Section A**: Displays food options that, when clicked, show related restaurants. Initial data includes pizza, burger, and biryani.
   - **Section B**: A scrollable section showcasing all restaurants.
   - **Section C**: Search functionality to find restaurants by name.

3. **Login**
   - Ensures users log in before accessing the cart. Fetches data from the mock API to check user existence.

4. **Sign Up**
   - Allows users to sign up and stores their name and password in the mock API.

5. **Restaurant Menu Page**
   - A reusable component that takes a restaurant ID as input and retrieves restaurant data. Displays the menu with options to add food to favourites and the cart.

6. **Food Page**
   - Displays restaurants that offer a specified food item. Uses the restaurant service to filter and show relevant restaurants based on the food ID.

7. **Favourite Food**
   - Fetches data from local storage to show items added to favourites. Users can remove items from their favourites.

8. **Cart**
   - Retrieves data from local storage and uses the mock API to post order data.

9. **Reusable Food Card**
   - A component used multiple times to display food data.

10. **Reusable Restaurant Card**
    - A component used to display restaurants in a card format.

## Conclusion

This README provides an overview of the SwiggyClone project, detailing the services and components created for a comprehensive food delivery application. For any further inquiries or contributions, feel free to reach out!

