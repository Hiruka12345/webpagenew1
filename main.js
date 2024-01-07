document.getElementById('toggleNavButton').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
      navLinks.style.display = 'block';
    } else {
      navLinks.style.display = 'none';
    }
  });
  
  
  
  const MANUFACTURER_NAME = "Badminton committe"; 
      function calculateTotal() {
        const ticketType = document.getElementById('ticketType').value;
        const numChildren = parseInt(document.getElementById('numChildren').value) || 0;
        const numAdults = parseInt(document.getElementById('numAdults').value) || 0;
        const duration = parseInt(document.getElementById('duration').value) || 0;
        const foodTokens = parseInt(document.getElementById('foodTokens').value) || 0;
        const rackets = parseInt(document.getElementById('rackets').value) || 0;
  
        let totalCost = 0;
  
        totalCost += numChildren * 350; 
        totalCost += numAdults * 500; 
        totalCost += (duration / 60) * 250; 
        totalCost += foodTokens * 500;
        totalCost += rackets * 1000; 
  
        document.getElementById('totalCost').innerText = totalCost + ' LKR';
  
        return totalCost;
      }
      function addToOrder() {
    const ticketType = document.getElementById('ticketType').value;
    const numChildren = document.getElementById('numChildren').value;
    const numAdults = document.getElementById('numAdults').value;
    const duration = document.getElementById('duration').value;
    const foodTokens = document.getElementById('foodTokens').value;
    const rackets = document.getElementById('rackets').value;
  
    const currentOrder = `
        <strong>Ticket Type:</strong> ${ticketType}<br>
        <strong>Children:</strong> ${numChildren}<br>
        <strong>Adults:</strong> ${numAdults}<br>
        <strong>Duration:</strong> ${duration} mins<br>
        <strong>Food Tokens:</strong> ${foodTokens}<br>
        <strong>Rackets:</strong> ${rackets}<br><br>
    `;
  
    const totalCost = calculateTotal();
  
    let overallOrderElement = document.getElementById('overallOrder');
    let overallCostElement = document.getElementById('overallCost');
  
    
    overallCostElement.innerText = totalCost + ' LKR';
  
   
    if (overallOrderElement.innerText === 'No overall order') {
        overallOrderElement.innerHTML = currentOrder;
    } else {
        overallOrderElement.innerHTML += currentOrder; 
    }
  
    
    localStorage.setItem('currentOrder', currentOrder);
    localStorage.setItem('overallOrder', overallOrderElement.innerHTML);
    localStorage.setItem('overallCost', totalCost + ' LKR');
  
  
    document.getElementById('totalCost').innerText = '0 LKR';
  }
  
  
  
  function placeOrder() {
    const overallCost = localStorage.getItem('overallCost');
    
    
    document.getElementById('overallCost').innerText = overallCost + ' LKR';
  
    alert(`Thank you for your custom reservation with ${MANUFACTURER_NAME}!`);
  
  
    document.getElementById('overallOrder').innerText = 'No overall order';
    document.getElementById('overallCost').innerText = '0 LKR';
  
  }
  
  
  
  
  
  function saveFormDataToLocalStorage() {
        const ticketType = document.getElementById('ticketType').value;
        const numChildren = document.getElementById('numChildren').value;
        const numAdults = document.getElementById('numAdults').value;
        const duration = document.getElementById('duration').value;
        const foodTokens = document.getElementById('foodTokens').value;
        const rackets = document.getElementById('rackets').value;
  
       
        const formData = {
          ticketType,
          numChildren,
          numAdults,
          duration,
          foodTokens,
          rackets,
        };
  
       
        localStorage.setItem('reservationFormData', JSON.stringify(formData));
      }
      function updateOverallCostOnFirstPage() {
    const overallCost = localStorage.getItem('overallCost');
  
   
    if (!overallCost) {
      localStorage.setItem('overallCost', '0 LKR');
      document.getElementById('overallCost').innerText = '0 LKR';
    } else {
      document.getElementById('overallCost').innerText = overallCost;
    }
  }
  

  function addToFavourites() {
    const currentOrder = localStorage.getItem('currentOrder');
    const overallCost = localStorage.getItem('overallCost'); 
    if (currentOrder && overallCost) {
      localStorage.setItem('favouriteOrder', currentOrder);
      localStorage.setItem('favouriteOrderCost', overallCost); 
      alert('Order added to favourites!');
    } else {
      alert('No order to add to favourites!');
    }
  }
  
  
  function orderFavourite() {
    const favouriteOrder = localStorage.getItem('favouriteOrder');
    const favouriteOrderCost = localStorage.getItem('favouriteOrderCost'); 
  
    if (favouriteOrder && favouriteOrderCost) {
      const currentOverallCost = parseInt(localStorage.getItem('overallCost').replace(' LKR', ''), 10); 
      const newOverallCost = currentOverallCost + parseInt(favouriteOrderCost.replace(' LKR', ''), 10);
  
      
      localStorage.setItem('overallCost', newOverallCost + ' LKR');
      document.getElementById('overallCost').innerText = newOverallCost + ' LKR';
  
      document.getElementById('currentOrder').innerHTML = favouriteOrder;
      alert('Favourite order added to the current order!');
    } else {
      alert('No favourite order set!');
    }
  }
  
  
  document.getElementById('addToFavouritesButton').addEventListener('click', addToFavourites);
  document.getElementById('orderFavouriteButton').addEventListener('click', orderFavourite);
  
  
  
  
  
  
  
     
      document.getElementById('nextButton').addEventListener('click', function() {
        saveFormDataToLocalStorage();
        
        window.location.href = 'http://127.0.0.1:5500/Html2.html'; 
      });
  
      