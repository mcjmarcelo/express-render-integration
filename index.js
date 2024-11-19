// Create the HTML structure dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Create the main container
    const container = document.createElement('div');
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.margin = '20px';

    // Create the header
    const header = document.createElement('h1');
    header.textContent = 'Simple Express API Integration';
    container.appendChild(header);

    // Create the product list section
    const productSection = document.createElement('div');
    productSection.className = 'product-list';
    productSection.style.marginBottom = '20px';

    // Add the section title
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = 'Products';
    productSection.appendChild(sectionTitle);

    // Add the button to fetch products
    const fetchButton = document.createElement('button');
    fetchButton.id = 'fetchProducts';
    fetchButton.textContent = 'Get Products';
    productSection.appendChild(fetchButton);

    // Add the unordered list to display products
    const productList = document.createElement('ul');
    productList.id = 'productList';
    productSection.appendChild(productList);

    // Append the product section to the container
    container.appendChild(productSection);

    // Add the container to the body
    document.body.appendChild(container);

    // Event listener for fetching products
    fetchButton.addEventListener('click', async () => {
        try {
            // Send request to fetch product data
            const response = await fetch('http://localhost:3000/products');
            const products = await response.json();
            // Display products in the list
            productList.innerHTML = '';
            products.forEach(product => {
                const li = document.createElement('li');
                li.textContent = `${product.name} - $${product.price}`;
                productList.appendChild(li);
            });
        } catch (error) {
            // Handle errors when fetching products
            productList.innerHTML = '<li>Error fetching products.</li>';
        }
    });
});
