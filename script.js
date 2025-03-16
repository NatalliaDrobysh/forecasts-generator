/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */



function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function generatePercent (max) {
    return Math.floor(Math.random() * 100);  
}

const button = document.querySelector('.forecast-btn');

button.addEventListener('click', function() {
    const predictionNumber = generateNumber(1, 4);
    let predictionText = "";
    switch (predictionNumber) {
        case 1:
            predictionText = "Попробуй начать что-то новое, у тебя обязательно все получится!";
            break;
        case 2:
            predictionText = "Не отчаивайся, если сегодня ничего не получается, попробуй завтра!";
            break;
        case 3:
            predictionText = "Завтра тебя ждет заманчивое предложение. Не упусти его!";
            break;
        case 4:
            predictionText = "Сегодня вечером тебя ждет интересный сюрприз. Ты его точно оценишь!";
            break;

    }

    let currentForecast = document.querySelector('h1');
    currentForecast.textContent = predictionText;
    
    const predictionPercent = generatePercent(100);
    const currentForecastContainer = document.querySelector('.current-forecast')
    let currentForecastPercent = currentForecastContainer.querySelector('p');
    currentForecastPercent.textContent = `Вероятность: ${predictionPercent}%`;

    let forecastTemplate = document.querySelector('#forecast-item');

    function makeForecastByTemplate(title, probability) {
       let myPredictionsTemplate = forecastTemplate.content.cloneNode(true);

       myPredictionsTemplate.querySelector('h3').textContent = title;
       myPredictionsTemplate.querySelector('p').textContent = probability;

       return myPredictionsTemplate;
    }
    
    let myPredictions = makeForecastByTemplate(currentForecast.textContent, currentForecastPercent.textContent);

    const foreCasts = document.querySelector('.forecasts');
    foreCasts.prepend(myPredictions);


    
    
  
    
})
   

    


 
