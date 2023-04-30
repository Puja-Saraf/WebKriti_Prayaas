<h1 align="center"><span><img src='client/src/img/logo.png' height='30px' style='margin-right:10px;'/></span>Prayaas</h1>
<h2 align="center">Let Dreams, Live On...</h2>

---

## 🤔 What is Prayaas?

Prayaas is a non-profit organization run by the students of IIIT Allahabad, connecting hundreds of people with a single aim-to lighten up the future of some frisky little kids. Prayaas is not just a teaching program from 5pm-6pm, it has much more to it. It is a continuous effort to illuminate the dark areas near Jhalwa, Prayagraj, some of which have never experienced the light of education before. Prayaas is just a small push in the right direction at the right time. And as you would expect, sometimes even a small push can do wonders ✨.

## 🏁 Getting Started (to run locally)

Follow the steps below, after cloning the repository:

### 🖐 Requirements

**For Installing:**

- Node

**For Running:**

- Create a .env file inside the server folder and then delcare the following variables inside it

  - MONGO_URL="Your mongodb connection string"
  - STRIPE_PUBLISHABLE_KEY="your STRIPE PUBLISHABLE KEY"
  - STRIPE_SECRET_KEY="your STRIPE SECRET KEY"

- Go to frontend/package.json and add the following line:-
  `"proxy":"http://localhost:8000",`
- Go to client/src/api/index.js and change the base url from `https://prayaas.onrender.com/v1` to `http://localhost:8000/v1` (at line no. 2)

### ⏳ Installation

- At the root of the project directory, use npm to install the server-side and client-side dependencies

```bash
npm install
```

This command installs all the server-side dependencies needed for the game to run locally.

- Use npm to run

```bash
npm run watch
```

- You can also test the deployment using

```bash
npm run deploy
```

This command gets the server running on localhost port 8000 and the client runs on localhost port 3000.

Head over to http://localhost:3000/ and enjoy! 🎉
<br/>

### 💻Postman Collection

Click below to fork our postman collection and play around with our api

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21161585-d244fa0d-a935-4848-b91d-8ae744a3b682?action=collection%2Ffork&collection-url=entityId%3D21161585-d244fa0d-a935-4848-b91d-8ae744a3b682%26entityType%3Dcollection%26workspaceId%3Db6ae606e-00db-4b39-b8a6-136f9150dd47)

<!-- ## 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated. The **Issues** tab is a good place to begin!

1. Fork the project repo
2. Clone the forked repo on your machine
3. Create your feature branch (`git checkout -b feature/AmazingFeature`)
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch on your forked repo (`git push origin feature/AmazingFeature`)
6. Open a pull request -->

<!-- ## 👻 Testing

The project includes unit tests for testing all the routes and controllers, written using jest and supertest.

Run all tests

```bash
npm run test
``` -->

## 👨‍💻👩‍💻 Contributors

- [Prakhar Jalan](https://www.linkedin.com/in/jalansprakhar/)
- [Puja Saraf](https://www.linkedin.com/in/pujaa-saraf/)

<br>

_(Since Prayaas is currently hosted on the free tier on render, please give it some time to load it initially)_
