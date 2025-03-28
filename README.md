# SimpleCRM - Invoice Management Application

## 📖 Project Context

The company **SimpleCRM** has expressed the need to develop a **web application for invoice creation** to **simplify and automate** the invoicing process for businesses and freelancers.

The goal is to design a **modern, dynamic, responsive, and intuitive** application based on **ReactJS** technology. It should allow the **management of clients, products, and invoices**.

---

## 🚀 Application Features

### 📌 **Main Pages**

- **Home**: The application's homepage.  
  ![Home Page](/public/crm_home.png)

- **Add Invoice**: Interface for creating a new invoice.  
  ![Add Invoice](/public/crm_add.png)

- **Invoice Details**: Page displaying the details of a specific invoice.  
  ![Invoice Details](/public/crm.details.png)

### 🏗️ **Components and Features**

1. **App Component**: The main entry point, including the primary pages.
2. **CreateInvoice**: Interface for creating an invoice.
   - **AddInvoiceDetails**: Form for entering client details and invoice date.
   - **ArticleList**: List of items added to the invoice.
3. **InvoiceList**: List of created invoices with the following information:
   - Invoice ID
   - Client name
   - Amount before tax / VAT / Total amount
   - Button to display invoice details (via a **modal**).
4. **Article**: A single article displayed with:
   - Product name
   - Quantity
   - Unit price (generated from the product table)
   - Discount (generated from the discount table)
   - Automatically calculated total amount.
5. **InvoiceDetails**: List of items added to an invoice.
6. **AddClient**: Form for adding a client (Name, Address, Phone, Email).

---

## 🛠️ Technologies Used

- **Frontend**: React v16.5.2 (Class Components, Lifecycle Methods)
- **UI Design**: Figma
- **Manual Configuration**: Babel and Webpack (without `create-react-app` or `vite`)
- **Data Storage**: `localStorage` for storing invoices and clients
- **State Management**: Context API (Bonus)
- **Languages**: HTML5, CSS3, JavaScript (ES6+)

---

## 💻 Installation

1. **Clone the project**:

   ```bash
   git clone https://github.com/your-username/simplecrm.git
   cd simplecrm
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

4. Access the application: `http://localhost:3000`

---

## 🎉 Contribution

Contributions are welcome!

- Fork the repo
- Create a branch (`feature/improvement`)
- Submit a PR

---

## 📄 License

This project is licensed under the MIT License. See the **LICENSE** file for details.

---

## 📬 Contact

For any questions, feel free to contact me:

- **Email**: [aboulouafareda@gmail.com]
- **LinkedIn**: [Reda Aboulouafa](www.linkedin.com/in/reda-aboulouafa-993a11220)

