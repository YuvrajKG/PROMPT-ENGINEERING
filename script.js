// JavaScript for Add to Cart Modal
document.getElementById("addToCart").addEventListener("click", function () {
    var myModal = new bootstrap.Modal(document.getElementById('cartModal'), {
        keyboard: false
    });
    myModal.show();
});
