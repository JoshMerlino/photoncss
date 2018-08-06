<p align="center">
  <img src="/img/icon.png?raw=true" width="20%">
</p>
<h1 align="center">Photon CSS</h1>
<h3 align="center">The next generation of web design.</h3>

<hr>
<br>

# Using in production

### Sample file setup
```
|- index.html
|- /src
   |- /js
      |- jquery.js
      |- less.js
      |- script.js
   |- /less
      |- style.less
      |- theme.less
```

### Importing styles and scripts

`/index.html`
```html
<html>
	<head>
		<link rel="stylesheet/less" type="text/css" href="/src/less/style.less" />
		<script src="/src/js/less.js" type="text/javascript"></script>
		<script src="/src/js/jquery.js"></script>
		<script src="https://cdn.rawgit.com/PhotonCSS/Photon/beta/src/photon.js"></script>
	</head>
	<body>
		<!-- Elements go here -->
		<script src="/src/js/script.js"></script>
	</body>
</html>
```
#
`/src/less/style.less`
```css
@import "/src/less/theme";
@import "https://cdn.rawgit.com/PhotonCSS/Photon/beta/src/photon";
```

### Create custom themes [here](https://photon-css.000webhostapp.com/theme)
### View pre-made themes [here](https://github.com/PhotonCSS/themes)

#
`/src/js/script.js`
```javascript
$(() => Photon.ready());
```
