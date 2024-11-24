# Solution for 1: data types

Everything that I studied, that is, all the theory with the programs is metioned in the excercise_.js file
I have also attached a js file to run and check the code.

The question is quite simple. We need to mention the data types that we would need to complete a shopping experience.

The experience can be divided into 5 different parts:

## User Login detials
| Name (Property) | Data Type | Reason                                                                                  |
|------------------|-----------|----------------------------------------------------------------------------------------|
| `id`            | String    | - Unique identifier for the user.                                                     <br> - String is used as it will be a combination of letters and numbers. |
| `name`          | String    | - Name of Customer.                                                                   <br> - String is used to store names. |
| `email`         | String    | - Authentication.                                                                     <br> - Combination of letters, numbers, and special characters. |
| `isLoggedIn`    | Boolean   | - Check the status of a session.                                                      <br> - A user can be logged in or not, thus Boolean. |

---

## Product Information
| Name (Property) | Data Type | Reason                                                                                  |
|------------------|-----------|----------------------------------------------------------------------------------------|
| `id`            | String    | - Unique identifier for each product.                                                 <br> - String is used as it will be a combination of letters and numbers. |
| `name`          | String    | - Name of Product.                                                                    <br> - String is used to store names. |
| `price`         | Double    | - Represents the cost of the product.                                                 <br> - Number is used to perform final cost calculations. |
| `quantity`      | Integer   | - Number of products available.                                                       |
| `isAvailable`   | Boolean   | - Checks if a product is available or not.                                            <br> - A product can be available or not, thus Boolean. |

---

## Shopping Cart
| Name (Property) | Data Type | Reason                                                                                  |
|------------------|-----------|----------------------------------------------------------------------------------------|
| `items`         | Array     | - Holds all the products added to the cart.                                           |
| `totalPrice`    | Double    | - Sum of prices will be a double.                                                     |
| `discount`      | Double    | - Stores discount percentage or amount.                                               |

---

## Payment Details
| Name (Property) | Data Type | Reason                                                                                  |
|------------------|-----------|----------------------------------------------------------------------------------------|
| `cardNumber`    | String    | - Allows payment processing systems to validate it.                                    <br> - It will be a combination of numbers and dashes. |
| `totalPaid`     | Double    | - Reflects the final amount after discounts.                                           |

---

## Order Summary
| Name (Property) | Data Type | Reason                                                                                  |
|------------------|-----------|----------------------------------------------------------------------------------------|
| `orderId`       | String    | - Unique identifier for each order.                                                    |
| `items`         | Array     | - Lists purchased products.                                                            |
| `totalPrice`    | Double    | - Reflects the amount charged.                                                         |
| `deliveryDate`  | String    | - Displays the estimated delivery date.                                                |
