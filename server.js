import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import App from './src/App';
import http from 'http';

var PORT = process.env.PORT||3000;
let app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get(['/','/services/','/services/web-development','/services/ecommerce','/services/cloud-development'], function (req, res) {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve(__dirname+'/build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }
    
        return res.send(
          data.replace('<main class="main" id="main_content"></main> ', `<main class="main" id="main_content">${app}</main>`)
        );
      });
});
app.get(['/main.css','/services/main.css'],function(req,res){
  res.sendFile(path.resolve(__dirname+'/src/main.css'))
})
app.get('/services/app.js',function(req,res){
    res.sendFile(path.resolve(__dirname+'/build/app.js'))
})
app.get("/services.json",function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
    "en":{
        "services": [
            {
                "nameTitle": "Web Development",
                "content": "This service can allows your customers to have a system tailored to their business, allowing you to better manage the statistics of your business in relation to finances and the satisfaction of the target public in order to facilitate decision making and especially the user experience.",
                "svgBenefits": 
                [
                  "Self-managing design.",
                  "Statistics in real time.",
                  "Custom User Experiences.",
                  "Graphic Arts made to measure.",
                  "Support in interface design and user experiences."
                ],
                "includes":
                [
                    "Hosting",
                    "Cpanel Control Panel.",
                    "Guarantee and Return of money.",
                    "SSL Certificate.",
                    "Unlimited email",
                    "BackUp or full backup of the system.",
                    "Nodejs Middleware.",
                    "Complete Documentation of the System." 
                ],
                "url":"/services/web-development"
            },
            {
                "nameTitle": "Cloud Development",
                "content": "On some occasions it is more feasible to host web applications in the cloud than a local machine because it allows to your customers have a scalable system in terms of price and latency, which makes the system much cheaper besides being made to the measure of your business with the advantage of better controlling the expenses that the system requires.",
                "svgBenefits": 
                [
                  "Self-managing design.",
                  "Statistics in real time.",
                  "Custom User Experiences.",
                  "Graphic Arts made to measure.",
                  "Support in interface design and user experiences."
                ],
                "includes":
                [
                    "Real costs for consumption of data or services",
                    "Guarantee and Money Back",
                    "SSL Certificate.",
                    "Nodejs Middleware." 
                ],
                "url":"/services/cloud-development"
            },
            {
                "nameTitle": "E-commerce",
                "content": "Sometimes you need build from zero an online store to sell your products or services in High level languages (Java, C #, PHP, Python) and synchronize the store with your social networks in a safe and efficient way.",
                "svgBenefits": 
                [
                  "Statistics in real time.",
                  "Custom User Experiences.",
                  "Graphic Arts made to measure.",
                  "Support in interface design and user experiences."
                ],
                "includes":
                [
                    "Real costs for consumption of data or services",
                    "Guarantee and Money Back",
                    "SSL Certificate.",
                    "Nodejs Middleware.",
                    "Paypal Integration" ,
                    "Any Bank API Integration",
                    "Data Encryption"
                ],
                "url":"/services/e-commerce"
            }
      ]
    }
  }, null, 3));
});

app.use(['/fonts/','/services/web-development/fonts/','/services/ecommerce/fonts/','/services/cloud-development/fonts/'],express.static(path.resolve(__dirname+'/public/fonts/')));
app.use(['/img/','/services/web-development/img/','/services/ecommerce/img/','/services/cloud-development/img/'],express.static(path.resolve(__dirname+'/public/img/')));
app.use(['/js/','/services/','/services/web-development/js/','/services/ecommerce/js/','/services/cloud-development/js/'],express.static(path.resolve(__dirname+'/public/js/')));
app.use(['/img/home/','/services/web-development/img/home/','/services/ecommerce/img/home/','/services/cloud-development/img/home/'],express.static(path.resolve(__dirname+'/public/img/home/')));
app.use(['/','/services/','/services/web-development/','/services/ecommerce/','/services/cloud-development/'],express.static(path.resolve(__dirname+'/build/')));

var httpServer=http.createServer(app)

httpServer.listen(PORT,function(){
  console.log('Server Started on http://localhost:'+PORT);
});// npm run build : "webpack  --watch --mode production",