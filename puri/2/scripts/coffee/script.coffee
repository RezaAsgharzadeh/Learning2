s = 10
v = 20

items = [1, 2, 'tr', true]

for item in items

	console.log item


itoms =

	salam: 'daram'
	pool: 'nadaram'
	'salam khubi': 'na'
	var: true

for itom, val of itoms

	console.log itom, val

for i in [0..100] by 10

	console.log i

x = 10

if x is 10

	console.log 'dah'

x = 1

unless x is 10

	console.log 'nist'

x = null

if x

	console.log 's'

else

	console.log 'p'

div = document.createElement 'div'

div.classList.add 'center'

div.innerHTML = "Lean"

document.body.appendChild div


div.addEventListener 'click', (event) =>

	console.log 'ok'

salam = =>

	console.log 'salam'

salam = ->

	console.log 'hello'

do salam

class cal

	constructor: ->

		console.log 'sho'

	get: ->

		s = '20e'

x = new cal

console.log x.get()