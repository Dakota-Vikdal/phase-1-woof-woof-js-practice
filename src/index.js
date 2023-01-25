function getRequest() {
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(data => goodDog(data))
}
getRequest();

//Dog bar
const dogBar = document.querySelector("#dog-bar")

//Dog info
const dogInfo = document.querySelector("#dog-info")

const dogImage = document.createElement('img');
const h2 = document.createElement('h2');
const btn = document.createElement('button');

dogInfo.append(dogImage, h2, btn);

btn.addEventListener('click', () => {
    if (btn.textContent === "Good Dog") {
        btn.textContent = "Bad Dog"
    } else {btn.textContent = "Good Dog"}
})

function goodDog(dogs) {
    dogs.forEach(dog => {
       const spanElement = document.createElement('span');
        dogBar.append(spanElement);
        spanElement.textContent = dog.name;
        spanElement.addEventListener('click', () => {
            dogImage.src = dog.image;
            h2.textContent = dog.name;
            btn.textContent = dog.isGoodDog ? "Good Dog" : "Bad Dog"
        })
    })

}








// function dogData(){
    // fetch('http://localhost:3000/pups')
    // .then(res => res.json())
    // .then(data => manyDogs(data))
// }
// dogData();
// 
// const dogBar = document.querySelector("#dog-bar")
//Dog info
// const dogInfo = document.querySelector("#dog-info")
// 
// const dogImage = document.createElement('img')
// const h2 = document.createElement('h2');
// const btn = document.createElement('button');
// 
// dogInfo.append(dogImage, h2, btn);
// btn.addEventListener('click', () => {
    // if (btn.textContent === "Good Dog") {
        // btn.textContent = "Bad Dog"
    // } else {btn.textContent = "Good Dog"}
// })
// 
// function manyDogs(dogs) {
    // dogs.forEach(dog => {
        // const dogSpan = document.createElement('span');
        // dogSpan.textContent = dog.name;
        // dogBar.append(dogSpan);
        // dogSpan.addEventListener('click', (e) => {
        //    dogImage.src = dog.image
        //    h2.textContent = dog.name
        //    btn.textContent = dog.isGoodDog ? "Good Dog" : "Bad Dog"
// 
        //    
        // })   
        // 
    // })
// }
// 
// 