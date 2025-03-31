
// document.getElementById("comienzo-quiz").addEventListener("click", function() {
//     window.location.href = "./pages/question.html";
//   });

let acertadas = ""; 
let falladas = 100 - acertadas;

function graficaRespuestas() {
    var data = {
        series: [acertadas, falladas]
    };

    var optionsWithColors = {
        labelOffset: 50,
        labelDirection: 'explode',
        chartPadding: 10,
        startAngle: 270,
        total: 100,
        showLabel: true,
        donut: false, 
        colors: ['', ''], //Colores a elegir
    };

    var responsiveOptions = [
        ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
                return value;
            }
        }],
        ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
        }]
    ];

    // Crear el gráfico de tipo dona usando los datos, opciones y responsiveOptions
    new Chartist.Pie('#grafica', data, optionsWithColors, responsiveOptions);
}

graficaRespuestas();



  


