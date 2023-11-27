📝 Proposal
- During the project, I created an API for a medieval items store using TypeScript and Sequelize. The application was organized into layers, including services and controllers to handle the operations of creating, reading, and updating information.
- To ensure security, I implemented JWT authentication on certain routes, protecting access to specific resources. Additionally, I developed tests to verify the correct functioning of the routes and ensure code quality.
- Through the API, users can create orders for custom medieval items, such as swords, and retrieve information related to the products available in the store. It is also possible to update item data, such as price and description, as needed.
- The main objective was to provide a secure and functional experience for users, allowing them to interact with the medieval store efficiently and intuitively.

📄 API Documentation
- Endpoint Description
- POST /products Registers a new product in the "products" table of the database.
- GET /products Lists all products registered in the "products" table of the database.
- GET /orders Lists all orders registered in the "orders" table of the database, including the associated product IDs for each order.
- POST /login Performs user login, validating the "username" and "password" fields in the database, and returns a JWT token containing the ID and username of the authenticated user.
- POST /orders Registers a new order in the "orders" table of the database. Updates the products related to the provided IDs in the "productIds" key with the order ID.

💡 Tools
- Programming Language: TypeScript
- Development Framework: Express
- Database: MySQL
- ORM (Object-Relational Mapping): Sequelize
- Static Code Analysis Tool: ESLint
- Code Formatting Tool: Prettier
- Authentication Tool: JWT
