import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import bodyParser from "body-parser";
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Proxy each path to its service's public IP + port
// app.use("/s1", proxy("http://<IP_OF_it21310546>:5000"));
// app.use("/s2", proxy("http://<IP_OF_it21311772>:5000"));
// app.use("/s3", proxy("http://<IP_OF_it21467448>:5000"));
// app.use("/s4", proxy("http://<IP_OF_it21894510>:5000"));
// // Optional root health-check
// app.get("/", (req, res) => res.send("Gateway is up"));


// app.listen(PORT, () => {
//   console.log(`Gateway is Listening to Port ${PORT}`);
// });

// simple health-check
app.get('/health', (_req, res) => res.send('OK'));

// proxy rules
app.use('/service1', createProxyMiddleware({ target: 'http://it21310546-service:8001', changeOrigin: true,   pathRewrite: { '^/service1': '' }  }));
app.use('/service2', createProxyMiddleware({ target: 'http://it21311772-service:8002', changeOrigin: true, pathRewrite: { '^/service2': '' } }));
app.use('/service3', createProxyMiddleware({ target: 'http://it21467448-service:8003', changeOrigin: true, pathRewrite: { '^/service3': '' } }));
app.use('/service4', createProxyMiddleware({ target: 'http://it21894510-service:8004', changeOrigin: true, pathRewrite: { '^/service4': '' } }));

app.listen(process.env.PORT || 80, () => {
  console.log('Gateway listening');
});
