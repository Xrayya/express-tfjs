// import tf from '@tensorflow/tfjs-node';
const tf = require('@tensorflow/tfjs-node');
const dotenv = require('dotenv')

dotenv.config();

console.log("model", `file://${process.cwd()}/${process.env.MODEL_URL}`)

async function loadModel() {
  // return tf.loadLayersModel(`file://${process.cwd()}/${process.env.MODEL_URL!}`);
  return tf.loadLayersModel(`file://${process.cwd()}/${process.env.MODEL_URL}`);
}

const a = loadModel();
