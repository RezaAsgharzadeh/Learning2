rectangle_count = Math.floor window.innerWidth / 260


#function and events
createDivs = (count) ->

	div = document.createElement 'div'

	div.classList.add 'windows-schema'

	div.setAttribute 'id', 'windowsID'

	div.style.backgroundColor = colors[do x]
		
	div.style.left = "#{count % rectangle_count * 260 + 28}px"

	div.style.top = "#{Math.floor(count / rectangle_count) * 160 + 28}px"

	document.body.appendChild div


responsivePage = ->
	
	rectangle_count = Math.floor window.innerWidth / 260

	do window.location.reload
	

	# div.setAttribute 'style', "background-color: #{number};"


colors = ["#1abc9c", "#1abc9c", "#2ecc71", "#27ae60", "#3498db", "#3498db", "#3498db", "#3498db", "#c0392b", "#f39c12", "#d35400"]

x = ->

	number = do Math.random * 10

	number = Math.floor number
	#number = math.round number

for i in [0..69]

	createDivs i

#style = document.styleSheets[0]

#style.cssRules[0].style.backgroundColor 'red'

divs = document.getElementById 'windowsID'


window.addEventListener 'resize', responsivePage
