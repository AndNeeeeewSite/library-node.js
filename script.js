//  1.
keys = ['KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP']
currentKeyIndex = 0
document.querySelector('#key').textContent = keys[currentKeyIndex]
document.addEventListener('keydown',function(event){
    event.preventDefault();
    key = event.code
    if(key == keys[currentKeyIndex]){
        PNotify.success({
            text: 'Правильна кнопка! Кнопка змінена.',
            delay: 250
          }); 
        currentKeyIndex++
        document.querySelector('#key').textContent = keys[currentKeyIndex]
    }
    else{
        PNotify.error({
            text: 'Не правильна кнопка! Ви натиснули ' + key,
            delay: 250
          });
    }
  });
document.querySelector('#new').addEventListener('click',function(){
    currentKeyIndex = 0
    document.querySelector('#key').textContent = keys[currentKeyIndex]
})
//        2.
canvas = document.querySelector('#sales-chart')
const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],
  };
  const salesChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });