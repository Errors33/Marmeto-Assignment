document.addEventListener('DOMContentLoaded', function () {
    // Image thumbnail click event
    document.querySelectorAll('.thumbnails img').forEach(img => {
        img.addEventListener('click', e => {
            document.getElementById('main-image').src = e.target.src;
        });
    });

    // Size selection
    document.querySelectorAll('.size').forEach(btn => {
        btn.addEventListener('click', e => {
            document.querySelectorAll('.size').forEach(b => b.classList.remove('selected'));
            e.target.classList.add('selected');
        });
    });

    // Quantity buttons
    document.querySelector('.qty-btn:first-child').addEventListener('click', () => {
        let qty = parseInt(document.querySelector('input[type="text"]').value, 10);
        if (qty > 1) {
            document.querySelector('input[type="text"]').value = qty - 1;
        }
    });

    document.querySelector('.qty-btn:last-child').addEventListener('click', () => {
        let qty = parseInt(document.querySelector('input[type="text"]').value, 10);
        document.querySelector('input[type="text"]').value = qty + 1;
    });

    // Add to cart functionality
    document.querySelector('.add-to-cart').addEventListener('click', () => {
        const selectedColor = document.querySelector('.color.selected');
        const selectedSize = document.querySelector('.size.selected input:checked');
        const quantity = document.querySelector('input[type="text"]').value;

        if (selectedColor && selectedSize) {
            const productDetails = {
                color: selectedColor.style.backgroundColor,
                size: selectedSize.value,
                quantity: quantity
            };
            console.log('Added to Cart:', productDetails);
            alert('Product added to cart!');
        } else {
            alert('Please select a color and size.');
        }
    });
});