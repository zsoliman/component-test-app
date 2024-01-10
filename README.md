## Rsuite Nav bar
# 1: 
In terminal, run: `npm install rsuite --save`

# 2:
Separate js code from rsuite into App.js and Component.jsx

## 2a:
in App.js
Change: `React.useState(null);` to `useState(null);`
Add: `import { useState } from 'react';`

# 3:
Add to App.css: `@import "rsuite/dist/rsuite.css";`

# Reminder:
Check the rsuite sandbox for anything missing