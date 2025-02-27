const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`


		// You can make each element inside of that…
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.title // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.image // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too







		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
			<div class="words"
				<p><em>${item.hue}</em></p>
				<p><em>${item.temp}</em></p>
                <p><em>${item.time}</em></p>
                <p><em>${item.type}</em></p>
                <p><em>${item.weather}</em></p>
                <p><em>${item.location}</em></p>
			</div>
			
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert



		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})

const buttons = document.querySelectorAll('.filter-button');
buttons.addEventListener("click", displayImages());

function displayImages(itemImage){

	const item = data.items.find(item => item.id === itemId);
	const image = item.itemImage.find(image => image.id === imageId);
	const img = document.createElement('img');
	document.getElementById("collection").appendChild(img);

}

buttons.forEach((button) => {
	button.addEventListener('click', function(){
		const filterValue = button.dataset.filter;
		displayImages(filterValue);
	});
});
