# Express Basics Assignment

A simple Express.js server demonstrating basic routing, dynamic route
parameters, multiple route parameters, query parameters, and
request/response logging.

## Project Structure

```
express-basics-assignment/
│
├── server.js        # Main Express server with all routes
├── package.json     # Project metadata and dependencies
└── README.md        # Documentation (this file)
```

## Steps to Run the Server

1. **Prerequisites**: Make sure [Node.js](https://nodejs.org/) (v14+) and npm are installed.
   ```bash
   node -v
   npm -v
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```
   or, for auto-restart during development (requires nodemon):
   ```bash
   npm run dev
   ```

4. You should see:
   ```
   Server is running at http://localhost:3000
   ```

5. Open your browser or use `curl`/Postman to hit the routes at
   `http://localhost:3000`.

## Routes / Explanation

### Task 1 — Basic Routes

| Method | Route      | Response                  |
|--------|-----------|----------------------------|
| GET    | `/`        | `Welcome to Home Page`    |
| GET    | `/about`   | `This is About Page`      |
| GET    | `/contact` | `This is Contact Page`    |

Simple static routes, each returning a fixed plain-text string via `res.send()`.

### Task 2 — Route Parameter (Dynamic Route)

| Method | Route         | Description                                  |
|--------|---------------|-----------------------------------------------|
| GET    | `/user/:name` | Reads `:name` from the URL via `req.params.name` |

**Example:**
```
/Users/rimamaji/Desktop/Screenshot 2026-09-04 at 10.59.04 PM.png
```

### Task 3 — Multiple Route Parameters

| Method | Route                        | Description                                            |
|--------|------------------------------|---------------------------------------------------------|
| GET    | `/product/:id/:category`     | Reads both `:id` and `:category` via `req.params`       |

**Example:**
!(<Screenshot 2026-09-04 at 11.04.40 PM.png>)

### Task 4 — Query Parameters

| Method | Route      | Description                                                   |
|--------|-----------|------------------------------------------------------------------|
| GET    | `/search`  | Reads `name` and `role` from the query string via `req.query`   |

**Example:**


### Task 5 — Request–Response Logging

A global middleware (`app.use`) runs on **every** incoming request, before
any route handler, and logs the HTTP method and the full requested URL
(including query strings) to the terminal:

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
```

### Bonus: 404 Handler

Any route not matched by the above returns:
```
404 - Route Not Found
```

## Sample Outputs

### Browser / curl responses

```
GET /                                    -> Welcome to Home Page
GET /about                               -> This is About Page
GET /contact                             -> This is Contact Page
GET /user/john                           -> Hello john
GET /product/101/electronics             -> Product ID: 101, Category: electronics
GET /search?name=john&role=developer     -> Name: john, Role: developer
GET /unknown-route                       -> 404 - Route Not Found
```

### Terminal (console) log output

When the above requests are made, the server terminal prints:

```
Server is running at http://localhost:3000
GET /
GET /about
GET /contact
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer
GET /unknown-route
```

## Testing the Routes (example curl commands)

```bash
curl http://localhost:3000/
curl http://localhost:3000/about
curl http://localhost:3000/contact
curl http://localhost:3000/user/john
curl http://localhost:3000/product/101/electronics
curl "http://localhost:3000/search?name=john&role=developer"
```

## Tech Stack

- **Node.js**
- **Express.js** (v4)