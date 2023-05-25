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
    
    sendPostRequest(myObj);
}

async function sendPostRequest (myObj) {
   try {
        const response = await axios.post('http://localhost:3000/candy/add-candy', myObj)
        showItemOnScreen(response.data.newCandyDetail)
   }
   catch(err) {
        console.error(err);
   }
}

async function sendGetRequest() {
    try {
        const response = await axios.get("http://localhost:3000/candy/get-candies")
        for(let i=0; i<response.data.allCandies.length; i++)
                showItemOnScreen(response.data.allCandies[i]);
    }
    catch(err) {
        console.error(err);
    }
}


window.addEventListener("DOMContentLoaded", sendGetRequest);

 function showItemOnScreen(myObj)
{
    const parentElem = document.getElementById('items');
    const childElem = document.createElement('li');
    childElem.textContent = myObj.name+"-"+myObj.desc+"-"+myObj.price+"-" +myObj.quantity;

    //adding buy1 button
    const buyOneBtn = document.createElement('input');
    buyOneBtn.type="button";
    buyOneBtn.value="Buy1";
  
    buyOneBtn.onclick = async () => {
        try {
            let qty = myObj.quantity-1;
            if (qty>=0) { 
                    const response  = await axios.put(`http://localhost:3000/candy/update-candy/${myObj.id}`,{
                                name: myObj.name,
                                desc: myObj.desc,
                                price: myObj.price,
                                quantity: qty
                    })
  
                    childElem.textContent = myObj.name+"-"+ myObj.desc+"-"+myObj.price+"-" + qty;
                    myObj.quantity = qty;
                    childElem.appendChild(buyOneBtn);
                    childElem.appendChild(buyTwoBtn);
                    childElem.appendChild(buyThreeBtn);
                    parentElem.appendChild(childElem);
                          
                        
            } else {
                    alert('Quantity is not available');
            }
        }
        catch(err) {
            console.error(err);
        }
    }


    const buyTwoBtn = document.createElement('input');
    buyTwoBtn.type="button";
    buyTwoBtn.value="Buy2";
    buyTwoBtn.onclick = async () => {
        try {
            let qty = myObj.quantity-2;
            if (qty>=0) { 
                    const response  = await axios.put(`http://localhost:3000/candy/update-candy/${myObj.id}`,{
                                name: myObj.name,
                                desc: myObj.desc,
                                price: myObj.price,
                                quantity: qty
                    })
  
                    childElem.textContent = myObj.name+"-"+ myObj.desc+"-"+myObj.price+"-" + qty;
                    myObj.quantity = qty;
                    childElem.appendChild(buyOneBtn);
                    childElem.appendChild(buyTwoBtn);
                    childElem.appendChild(buyThreeBtn);
                    parentElem.appendChild(childElem);
                          
                        
            } else {
                    alert('Quantity is not available');
            }
        }
        catch(err) {
            console.error(err);
        }
    }
  
    const buyThreeBtn = document.createElement('input');
    buyThreeBtn.type="button";
    buyThreeBtn.value="Buy3";
    buyThreeBtn.onclick = async () => {
        try {
            let qty = myObj.quantity-3;
            if (qty>=0) { 
                    const response  = await axios.put(`http://localhost:3000/candy/update-candy/${myObj.id}`,{
                                name: myObj.name,
                                desc: myObj.desc,
                                price: myObj.price,
                                quantity: qty
                    })
  
                    childElem.textContent = myObj.name+"-"+ myObj.desc+"-"+myObj.price+"-" + qty;
                    myObj.quantity = qty;
                    childElem.appendChild(buyOneBtn);
                    childElem.appendChild(buyTwoBtn);
                    childElem.appendChild(buyThreeBtn);
                    parentElem.appendChild(childElem);
                          
                        
            } else {
                    alert('Quantity is not available');
            }
        }
        catch(err) {
            console.error(err);
        }
    }

    childElem.appendChild(buyOneBtn);
    childElem.appendChild(buyTwoBtn);
    childElem.appendChild(buyThreeBtn);
    parentElem.appendChild(childElem);
    
}
