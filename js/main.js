var xValues = ['Completed', 'Pending', 'Failed']
var yValues = [02, 01, 01, 0]
var barColors = ['green', '#ffc107', 'red']

new Chart('myChart', {
  type: 'bar',
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Task Status',
    },
  },
})

let box = document.querySelector('.notifi-box')
let down = false

let icon = document.getElementById('icon')

icon.addEventListener('click', () => {
  box.classList.toggle('box-active')
})

const menu = document.querySelector('.menu-btn')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('main')

let width = document.querySelector('body').offsetWidth
console.log(width)
if (width <= 1024) {
  menu.classList.add('active')
  sidebar.style.display = 'none'
  main.classList.add('main-active')
} else {
  menu.classList.remove('active')
  sidebar.style.display = 'flex'
  main.classList.remove('main-active')
}
menu.addEventListener('click', function () {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
    sidebar.style.display = 'flex'
    main.classList.remove('main-active')
  } else {
    menu.classList.add('active')
    sidebar.style.display = 'none'
    main.classList.add('main-active')
  }
})
