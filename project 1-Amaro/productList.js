const mockDatabase = [
    { _id: '123', name: 'Goalie Gloves', published: true, color: 'black' },
    { _id: '583', name: 'Soccer Cleats', published: true, color: 'black' },
    { _id: '954', name: 'Soccer Gear', published: false, color: 'black' },
    { _id: '384', name: 'Soccer Balls', published: false, color: 'black' },
    { _id: '183', name: 'Goalie Jersey', published: true, color: 'black' },
    { _id: '007', name: 'Soccer Shorts', published: false, color: 'black' },
    { _id: '304', name: 'Soccer Jerseys', published: true, color: 'black' },
    { _id: '729', name: 'Soccer Scarves', published: false, color: 'black' },
    { _id: '734', name: 'Soccer Referee Gear', published: true, color: 'black' },
];

function renderList (results) {
    const productDiv = document.querySelector('#store-products');

    productDiv.innerHTML = '';
    const products = results.map((result, index) => {
        return '<div>' + result.name + '</div>';
        <div class="store-product soccer balls">
                    <img src="./img/Soccer Balls.jpg" alt="">
                    <div class="product-details">
                        <h2> soccer balls </h2>
                        <p><span>$9.99 </span> $40.00</p>
                    </div>

                <div class="store-product soccer cleats">
                    <img src="./img/Soccer Cleats.jpg" alt="">
                    <div class="product-details">
                       <h2> soccer cleats </h2>
                       <p><span>$9.99 </span> $240.00</p>
                    </div>

                <div class="store-product soccer Gear">
                    <img src="./img/Soccer Gear.jpg" alt="">
                    <div class="product-details">
                        <h2> Soccer Gear </h2>
                        <p><span>$9.99 </span> $150.00</p>
                    </div>

                <div class="store-product soccer goalie gloves">
                    <img src="./img/Soccer Goalie Gloves.jpg" alt="">
                    <div class="product-details">
                        <h2> Soccer goalie gloves </h2>
                        <p><span>$29.99 </span> $99.99</p>
                    </div>
                <div class="store-product soccer goalie jersey">
                    <img src="./img/Soccer Goalie Jersey.jpg" alt="">
                    <div class="product-details">
                        <h2> Soccer Goalie Jersey </h2>
                        <p><span>$39.99 </span> $79.99</p>
                    </div>
                <div class="store-product soccer Jersey">
                    <img src="./img/Soccer Jersey.jpg" alt="">
                    <div class="product-details">
                        <h2> Soccer Jersey </h2>
                        <p><span>$29.99 </span> $149.99</p>
                    </div>
                <div class="store-product soccer Referee Gear">
                    <img src="./img/Soccer Referee Gear.jpg" alt="">
                    <div class="product-details">
                        <h2> Soccer Referee Gear </h2>
                        <p><span>$19.99 </span> $89.99</p>
                    </div>
                <div class="store-product soccer scarves">
                    <img src="./img/Soccer Scarves.jpg" alt="">
                    <div class="product-details">
                        <h2> Soccer Scarves </h2>
                        <p><span>$5.99 </span> $49.99</p>
                    </div>
                <div class="store-product soccer shorts">
                    <img src="./img/Soccer Shorts.jpg" alt="">
                    <div class="product-details">
                        <h2> Soccer Shorts</h2>
                        <p><span>$9.99 </span> $59.99</p>
                    </div>
                </div>
    });

    products.forEach((item) => {
        productDiv.innerHTML += item;
    });


}

renderList(mockDatabase);

function orderBy(sortValue) {
    var SortedResults = (sortValue == 'price') ?
        mockDatabase.sort(function a,b) {
            price.sort(function(a,b){return a-b})
                let lowest = price[0];
            price.sort(function(a,b){return b-a})
                let highest = price[price.length-1];
        }) :
    renderList(sortedResults);
    

    document.querySelector('#orderBy').addEventListener('change', function(event)
    [
        orderBy(event.target.value);
    );

    function togglePrice(showPrice) {
        var filteredResults = mockDatabase.filter(function (result) {
            return showPrice || result.published;

        }
        );
        renderList(filteredResults);
    }
    document.querySelector('#price').addEventListener('change', function(event) {
        var value=event.target.value == 'true';
        togglePrice(value);
    }
    );
    })();


