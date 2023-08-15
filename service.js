const express = require('express');
const cors = require('cors');
const {v4:iiidv4}=require('uuid');
const stripe = require('stripe')('sk_test_51N9HvqSDku7gnpYeNe6aZM2nlacjnsP73WQympw1dLweQq9fhq9WadatUrDLvq5fDGrlZCj1ZU5NS7ZihOZZNbLp00syNHGMtI')

const app = express();
app.use(cors());

app.use(express.json());
