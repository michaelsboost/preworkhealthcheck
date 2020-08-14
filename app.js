document.getElementByID('getname').focus(true)

document.getElementByID('nobtn').addEventListener('click', function() {
  console.log('no button clicked')
  alert('no button clicked')
})

document.getElementByID('yesbtn').addEventListener('click', function() {
  console.log('yes button clicked')
  alert('yes button clicked')
})