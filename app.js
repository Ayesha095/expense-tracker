const balance=document.getElementById("balance");
const moneyPlus=document.getElementById("income");
const moneyMinus=document.getElementById("expense");
const list=document.getElementById("list");
const form=document.getElementById("form");
const text=document.getElementById("text");
const amount=document.getElementById("amount");

const dummyTransactions=[
    {id: 1, text: "Flower",amount:-20},
    {id: 2, text: "Salary",amount:300},
    {id: 3, text: "Book",amount:-10},
    {id: 4, text: "Camera",amount:150},
];

function addTransactionDOM(transaction){
    const sign = transaction.amount>0 ? "+" : "-";

    const icon = transaction.amount > 0 ? "up" : "down";

    const item= document.createElement("li");

    item.classList.add(transaction > 0 ? "plus" : "minus");

    item.innerHTML= 
}
