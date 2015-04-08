He wants to be able to inform his clients how products are being portrayed in the new fancy nickelodeon, giphy.com.

I want to be able to input a given product or a brand and see some gifs from giphy.com that match my search term. This way I can get a snapshot of how people are relating to my client's products.

http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

#Spec:
Wants to be able to input a search term and see matching gifs. 
### Create server that handles rendering of searchPage and resultPage. Server should consume API.
	1. create main index page with a form for search input.
	2. Input search term in Form, use search term for API request.
	3. Render new page with n number of results populated 
	4. Include link to return to main page. 