# Packiyo WMS (Warehouse Management System)

## Features

**Notes**: Per email message, only the following features will be implemented (_"Include features such as product listing, order creation, and order details display."_)

### Container `/*`

- [ ] App Header
  - Contains a Packiyo logo, 2 links for Products and Orders and an avatar with the user ID
- [ ] App Footer
  - Logo with a redirect to Packiyo's website

### Landing Page `/`

- [ ] (Page) Home
  - Welcome message
  - A brief description of the app
  - A button that redirects to the products page

### Product Features `/products`

- [ ] (Page) Home
  - Ecommerce-like products listing displaying 100 products per page
  - Interactive products that when clicked will redirect to their `/show` page
  - There should be a button that lets you create an order with the product
- [ ] (Page) Show
  - Ecommerce-like product page with attributes listing and description
  - There should be a button that lets you add the product to a new order

### Order Features `/orders`

- [ ] (Page) Home
  - Ecommerce-like orders listing displaying 100 orders per page
  - Interactive orders that when clicked will redirect to their `/show` page
- [ ] (Page) Show
  - Ecommerce-like order page with attributes listing and description
  - When possible display the products that are part of the order and the customer's information
- [ ] (Page) Create
  - Form to create a new order where it's possible to add products to the order.
  - The form should let you fill all the data that is needed by the API but for the sake of simplicity, we will only ask for the products that are part of the order and the rest of the data will be mocked.
