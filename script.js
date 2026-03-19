let transactions = JSON.parse(localStorage.getItem("transactions")) || []

function renderTransactions(){

let list = document.getElementById("list")
list.innerHTML=""

let income=0
let expense=0

transactions.forEach((t,index)=>{

let li = document.createElement("li")

li.className = t.amount > 0 ? "income" : "expense"

li.innerHTML = `
${t.text} ₹${t.amount}
<button onclick="deleteTransaction(${index})">X</button>
`

list.appendChild(li)

if(t.amount>0){
income += t.amount
}else{
expense += Math.abs(t.amount)
}

})

document.getElementById("income").innerText = income
document.getElementById("expense").innerText = expense
document.getElementById("balance").innerText = "Balance: ₹" + (income-expense)

localStorage.setItem("transactions",JSON.stringify(transactions))

}

function addTransaction(){

let text = document.getElementById("text").value
let amount = document.getElementById("amount").value

if(text=="" || amount=="") return

transactions.push({
text:text,
amount:Number(amount)
})

document.getElementById("text").value=""
document.getElementById("amount").value=""

renderTransactions()

}

function deleteTransaction(index){

transactions.splice(index,1)

renderTransactions()

}

renderTransactions()