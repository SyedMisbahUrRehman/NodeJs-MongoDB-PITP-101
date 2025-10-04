
# StudentDB API

A simple **Node.js + Express + MongoDB** project for managing student data.
It supports both **local MongoDB (Compass)** and **MongoDB Atlas (cloud)** connections, configured through environment variables.

---

## 🚀 Features

* RESTful API built with **Express.js**
* **MongoDB** integration with Mongoose
* Environment-based configuration (local & production)
* Easy setup for local development or deployment

---

## 📦 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Compass / Atlas)**
* **Mongoose**
* **dotenv**

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/studentdb-api.git
cd studentdb-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root folder and copy values from `.env.example`.

```env
PORT=3000
NODE_ENV=development

# Local (Compass)
MONGO_URI_DEV=mongodb://127.0.0.1:27017/studentdb

# Atlas (production)
MONGO_URI_PROD=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/studentdb?retryWrites=true&w=majority
```

> ⚠️ Replace `<username>` and `<password>` with your MongoDB Atlas credentials in production.

---

## ▶️ Running the Project


```bash
npm run dev

