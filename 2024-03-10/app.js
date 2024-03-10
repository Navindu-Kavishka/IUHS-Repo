

// const customer={
//     name:"wimal",
//     age:30
// }


// const numbers= [10,20,30,60,40];

// let table = document.getElementById("customerTable");

// console.log(table);

// let body =`<tr>
//                 <td>Name</td>
//                 <td>Age</td>
//             </tr>`;



// const customers=[
//     {
//         name:"sunil",
//         age:40
//     },
//     {
//         name:"kamal",
//         age:50
//     },
//     {
//         name:"wimal",
//         age:45
//     },
//     {
//         name:"nimal",
//         age:70
//     },
//     {
//         name:"sunimal",
//         age:20
//     },
//     {
//         name:"sumanapala",
//         age:80
//     },
// ];

// // for(let i =0 ;i<customers.length;i++){
// //     body+=` <tr>
// //                 <td>${customers[i].name}</td>
// //                 <td>${customers[i].age}</td>
// //             </tr>`;
// //     console.log(customers[i].name);
// // }

// function name(params) {
//     console.log(p);
// }

// customers.forEach( element => {
//     console.log(element.name);
//     body+=` <tr>
//     <td>${element.name}</td>
//     <td>${element.age}</td>
// </tr>`;
// });


// table.innerHTML=body;

// console.log(customers[0].name);


fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data =>{
    console.log(data);
});


