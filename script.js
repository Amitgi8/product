let a = fetch("https://fakestoreapi.com/products")
a.then((value)=>{
    return value.json()
}).then((product)=>{
    var list=document.getElementById("list");

     for (let index = 0; index < product.length; index++) {
        const element = product[index];
        console.log("element",element)

        const li= document.createElement('li');
        li.innerHTML=`
        <h1>${element.title}</h1>
        <p>${element.price}</p>
        <p>${element.description}</p>
        <p>${element.category}</p>
        <img src="${element.image}"/>
        `
        list.appendChild(li)
    }
})