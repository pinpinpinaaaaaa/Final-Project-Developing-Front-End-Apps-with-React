# Paradise Nursery

Paradise Nursery is a houseplant shop app for the final project of Coursera's "Developing Front-End Apps with React". You can browse plants, add them to a cart, change quantities and see the total price.

Built with React 18, Redux Toolkit and Vite. Deployed on GitHub Pages.

## Pages

- Landing page: company name, short company description and a Get Started button.
- Plants: 24 plants in 4 categories (Air Purifying, Aromatic Fragrant, Insect Repellent, Low Maintenance). The Add to Cart button turns off after you add a plant.
- Cart: thumbnail, name, unit price, quantity and subtotal for each plant, plus +/- and Delete buttons, the cart total, Continue Shopping and Checkout.

The navbar on the Plants and Cart pages links to Home, Plants and Cart and shows how many items are in the cart.

## Files

- `src/App.jsx`: landing page
- `src/AboutUs.jsx`: company description
- `src/ProductList.jsx`: plant list and navbar
- `src/CartItem.jsx`: cart page
- `src/CartSlice.jsx`: Redux slice with `addItem`, `removeItem` and `updateQuantity`
- `src/store.js`: Redux store

## Run it

```bash
npm install
npm run dev
```

Deploy to GitHub Pages:

```bash
npm run deploy
```
