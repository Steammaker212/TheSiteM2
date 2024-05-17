const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.style.transition = 'left 0.3s ease-out';
    menu.style.left = menu.style.left === '-290px'? '0' : '-290px';
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('products');
        data.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product');
          const image = document.createElement('img');
          image.src = product.image;
          image.alt = product.name;
          productDiv.appendChild(image);
          const name = document.createElement('h3');
          name.textContent = product.name;
          productDiv.appendChild(name);
  
          const description = document.createElement('p');
          description.textContent = product.description;
          productDiv.appendChild(description);
          const buyNowBtn = document.createElement('button');
          buyNowBtn.textContent = 'Buy Now';
          buyNowBtn.addEventListener('click', () => {
            window.location.href = product.link;
          });
          productDiv.appendChild(buyNowBtn);
          container.appendChild(productDiv);
        });
      })
      .catch(error => console.error('Error fetching product data:', error));
  });
  
  function redirectToLogin() {
    window.location.href = 'login.html';
  }
  
  function redirectToCart() {
    window.location.href = 'addtocart.html';
  }
  