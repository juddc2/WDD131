const steps = ["one", "two", "three" ];
function listtemplate(step) {
    return <li>${step}</li>;
}
const stepshtml=steps.map(listtemplate);
document.querySelector("#mylist").innerHTML = stepshtml.join('');


let fruit= ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let shortFruit = fruit.filter((item)=> item.length < 6);

console.log(shortFruit);


