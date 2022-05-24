import { db } from '../firebase/config.js'
const postData = () => {
  db.collection('franchise')
    .add({
      name: 'Mixue',
      location: 'Bandung',
      category: 'Dessert',
      price: 50000000,
      uri: 'https://firebasestorage.googleapis.com/v0/b/waralobby.appspot.com/o/68464421.jpg?alt=media'
    })
    .then(console.log('added'))
}

postData()
