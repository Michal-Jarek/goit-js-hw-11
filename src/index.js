import axios from "axios";

const apiKey = '?key=30058964-66debb9f20d9f056f9054d1c1';
const requirements = 'image_type=photo&orientation=horizontal';
let code = `${apiKey}&${requirements}`

const searchInstance = axios.create({
    baseURL: `https://pixabay.com/api`,
});

searchInstance.get(`${code}&q=peach+woman`)
.then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


// axios
//   .get(
//     'https://pixabay.com/api/?key=30058964-66debb9f20d9f056f9054d1c1&q=yellow+flowers&image_type=photo&pretty=true'
//   )
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });