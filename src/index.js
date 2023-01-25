/* Requirement Statement:
Create a JavaScript object called user that stores all the details for a particular user of your app. This object should have at least
the following properties: name, surname, date_of_birth, address, country, email, telephone, company, profile_picture, and shopping_cart.
The shopping cart property should be used to store an array of items in the user’s shopping cart.

Create and render a React element that displays all the information about the user in an attractive way. This element should:
  ■ Include at least 1 React-Bootstrap component.
  ■ Apply a custom stylesheet that you have created.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';                        // React-Bootstrap Table componant
import profile_pic from './NcInme.png'
import './index.css';

// defining the user object as per the requirements.
const user = {
  fname: "Hyper",
  surname: "Dave",
  date_of_birth: "12-Dec-2000",
  address: "A Cross, London",
  postcode: "CC1x 0BL",
  country: "United Kingdom",
  email: "xcv@abc.com",
  telephone: "+44 123456789",
  company: "ABC Pvt. Ltd",
  profile_picture: profile_pic,
  shopping_cart: {
    item1: { srN: 1, item: "iPhone", price: 1200 },
    item2: { srN: 2, item: "AirPod", price: 120 },
    item3: { srN: 3, item: "Apple Watch", price: 320 },
  }
}

// defining the element as per the requirements. I am using table to display various fields on the HTML page.
const element = (<section>
  <img src={user.profile_picture} />
  {/* user details section */}
  <h4>User Details</h4>
  <table>
    <tr>
      <td class="user">
        <b>Name:</b> {user.fname}
      </td>
      <td class="user">
        <b>Surname:</b> {user.surname}
      </td>
      <td class="user">
        <b>Date of Birth:</b> {user.date_of_birth}
      </td>
    </tr>
    <tr>
      <td>
        <b>Company:</b> {user.company}
      </td>
      <td>
        <b>Email:</b> {user.email}
      </td>
      <td>
        <b>Telephone:</b> {user.telephone}
      </td>
    </tr>
    <tr>
      <td>
        <b>Address:</b> {user.address}
      </td>
      <td>
        <b>Postcode:</b> {user.postcode}
      </td>
      <td>
        <b>Country:</b> {user.country}
      </td>
    </tr>
  </table>

  {/* Shopping Cart section. I have used React-Bootstrap Table componant here. */}
  <h4>Shopping Cart</h4>
  <Table striped>
    <thead >
      <tr>
        <th class="sr-no">Sr. No.</th>
        <th class="item">Item</th>
        <th class="price">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {user.shopping_cart.item1.srN}
        </td>
        <td>
          {user.shopping_cart.item1.item}
        </td>
        <td>
          ${user.shopping_cart.item1.price}
        </td>
      </tr>
      <tr>
        <td>
          {user.shopping_cart.item2.srN}
        </td>
        <td>
          {user.shopping_cart.item2.item}
        </td>
        <td>
          ${user.shopping_cart.item2.price}
        </td>
      </tr>
      <tr>
        <td>
          {user.shopping_cart.item3.srN}
        </td>
        <td>
          {user.shopping_cart.item3.item}
        </td>
        <td>
          ${user.shopping_cart.item3.price}
        </td>
      </tr>
    </tbody>
  </Table>
</section>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);

