# KODECAMP 5.0 NODE.JS BEGINNER TRACK
This is a REST API project for an e-commerce app that:
+ Provides two POST endpoints; for registering and logging in users. 
+ Provides a single GET enpoint that is not protected so anyone logged in or not can access it, and it returns all the products in the app
+ Provides two POST endpoints that are protected and only admins are authorized to make requests.

## Tech Stack
+ Node.js
+ Express.js 

## Local setup instructions
1. Clone the repository

```bash
git clone https://github.com/njaumatilda/task_4_e-commerce_auth_app.git
```

2. Navigate to the project directory

```bash
cd task_4_e-commerce_auth_app
```

3. Install dependencies

```bash
npm install
```

4. Configure environment variables

To run this project, you will need to create a `.env` file in the project directory and make sure it is included in the `.gitignore` file. Configure the following environment variables:

```env
DB_URL = your-db-url
PORT = your-port
SALT = your-salt
JWT_KEY = your-secret-key
```

> Replace `your-db-url` with your specified db url, `your-port` with your specified port, `your-salt` with your specified salt and `your-secret-key` with your specified secret key

6. Start the server

```bash
npm start
```

## API Documentation
Here is the reference on the usage of the API: 
[API Documentation](https://documenter.getpostman.com/view/38132076/2sB34kEJfY)

## Deployment
The API has been deployed to a publicly accessible endpoint on Render:
[Live URL](https://task-4-e-commerce-auth-app.onrender.com/)

## Author
[Matilda Njau](https://github.com/njaumatilda) 