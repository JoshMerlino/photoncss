<p align="center">
  <img src="/img/icon.png?raw=true" width="20%">
</p>
<h1 align="center">Photon CSS</h1>
<h3 align="center">The next generation of web design.</h3>
<h5 align="center" version>v3.18.113</h5>

<hr>
<br>

# Using in production

## Important
you should no longer use LESS in production. We recommend you change your setup to the following. LESS in production is now depreciated but works. Were trying to make Photon as fast as possible, so doing this will cut down on around a second (on a high end computer) of load times. You can get a pre-compiled version of Photon [here](https://photoncss.herokuapp.com/theme).

### Sample file setup
```
|- index.html
|- /src
   |- /js
      |- jquery.js
      |- script.js
   |- /less
      |- style.less
      |- theme.less
   |- /css
      |- main.css
      |- main.css.map
   |- /photon ...
```

### Importing styles and scripts

`/index.html`
```html
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="/src/css/main.css" />
		<script src="/src/js/jquery.js"></script>
		<script src="/src/photon/src/photon.js"></script>
	</head>
	<body>
		<!-- Elements go here -->
		<script src="/src/js/script.js"></script>
	</body>
</html>
```
<br>
`/src/less/style.less`
```css
@import "../../src/less/theme";
@import "../../src/photon/src/photon";
```

### Compiling to CSS
We strongly recommend using the `lessc` LESS compiler.
```bash
$ npm i -g less
```

To compile your LESS run this in your project root `(/)`
```bash
$ lessc -x ./src/less/style.less ./src/css/main.css --source-map
```

### Create custom themes [here](https://photon-css.000webhostapp.com/theme)

#
`/src/js/script.js`
```javascript
$(() => Photon.ready());
```
