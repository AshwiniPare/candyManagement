var itemList = document.getElementById('items');

function saveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.name.value;
    const desc = event.target.desc.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;

    const myObj = {
        name,
        desc,
        price,
        quantity
    }

    axios.post('https://crudcrud.com/api/909b34e125cd4c7bb8ed7ff8ca62ba31/candyData', myObj)
    .then((response) => {
        showItemOnScreen(response.data)
        console.log(response)
    })
    .catch((err) => {
        document.body.innerHTML = document.body.innerHTML + "<h4> something is wrong</h4>"
        console.error(err);
    })   
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/909b34e125cd4c7bb8ed7ff8ca62ba31/candyData")
        .then((response) => {
            console.log(response)

            for(let i=0; i<response.data.length; i++)
                showItemOnScreen(response.data[i]);
        })
        .catch(error => console.error(error))
})

function showItemOnScreen(myObj)
{
    const parentElem = document.getElementById('items');
    const childElem = document.createElement('li');
    childElem.textContent = myObj.name+"-"+myObj.desc+"-"+myObj.price+" " +myObj.quantity;

    //adding delete button
    const buyOneBtn = document.createElement('input');
    buyOneBtn.type="button";
    buyOneBtn.value="Buy1";
    buyOneBtn.onclick = () => {
       let qty = myObj.quantity-1;
       if (qty>0) { 
            axios.put(`https://crudcrud.com/api/909b34e125cd4c7bb8ed7ff8ca62ba31/candyData/${myObj._id}`,{
                        name: myObj.name,
                        desc: myObj.desc,
                        price: myObj.price,
                        quantity: qty
                    })
                .then((response) => {
                        
                        childElem.textContent = myObj.name+"-"+ myObj.desc+"-"+myObj.price+" " + qty;
                        myObj.quantity = qty;
                        childElem.appendChild(buyOneBtn);
                        childElem.appendChild(buyTwoBtn);
                        childElem.appendChild(buyThreeBtn);
                        parentElem.appendChild(childElem);
                    })
                .catch(error => console.error(error))
        } else {
            alert('Quantity is not available');
        }
    }


    const buyTwoBtn = document.createElement('input');
    buyTwoBtn.type="button";
    buyTwoBtn.value="Buy2";
    buyTwoBtn.onclick = () => {
       let qty = myObj.quantity-2;
       if (qty>0) { 
        axios.put(`https://crudcrud.com/api/909b34e125cd4c7bb8ed7ff8ca62ba31/candyData/${myObj._id}`,{
                    name: myObj.name,
                    desc: myObj.desc,
                    price: myObj.price,
                    quantity: qty
                })
                .then((response) => {
                    
                    childElem.textContent = myObj.name+"-"+myObj.desc+"-"+myObj.price+" " + qty;
                    myObj.quantity = qty;
                    childElem.appendChild(buyOneBtn);
                    childElem.appendChild(buyTwoBtn);
                    childElem.appendChild(buyThreeBtn);
                    parentElem.appendChild(childElem);
                })
                .catch(error => console.error(error))
            } else {
                alert('Quantity is not available');
            }
    }
  
    const buyThreeBtn = document.createElement('input');
    buyThreeBtn.type="button";
    buyThreeBtn.value="Buy3";
    buyThreeBtn.onclick = () => {
       let qty = myObj.quantity-3;
       if (qty>0) { 
        axios.put(`https://crudcrud.com/api/909b34e125cd4c7bb8ed7ff8ca62ba31/candyData/${myObj._id}`,{
                    name: myObj.name,
                    desc: myObj.desc,
                    price: myObj.price,
                    quantity: qty
                })
                .then((response) => {
                    
                    childElem.textContent = myObj.name+"-"+myObj.desc+"-"+myObj.price+" " + qty;
                    myObj.quantity = qty;
                    childElem.appendChild(buyOneBtn);
                    childElem.appendChild(buyTwoBtn);
                    childElem.appendChild(buyThreeBtn);
                    parentElem.appendChild(childElem);
                })
                .catch(error => console.error(error))
            } else {
                alert('Quantity is not available');
            }
    }

    childElem.appendChild(buyOneBtn);
    childElem.appendChild(buyTwoBtn);
    childElem.appendChild(buyThreeBtn);
    parentElem.appendChild(childElem);
    
}
