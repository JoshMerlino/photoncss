# Photon CSS

Browse our documentation on our official website: https://photoncss.github.io/

## Getting Started: NodeJS
```bash
$ npm install --save-dev photoncss jquery
```

```javascript
import $ from "jquery";
import Photon from "photoncss";
import "photoncss/dist/photon.min.css";

import React from "react";
import { Button } from "photoncss/modules/Button";

function Component() {
	return <Button variant="raised" color="primary">button</Button>
}
```

## Or using the browser:
```html
<html>
	<head>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PhotonCSS/Photon@beta/dist/photon.min.css" />

		<script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
		<script src="https://cdn.jsdelivr.net/gh/PhotonCSS/Photon@beta/dist/photon.min.js"></script>
	</head>

	<body>
		<button class="btn raised primary waves-effect">button</button>
	</body>
</html>
```
