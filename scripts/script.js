
document.getElementById("comienzo-quiz").addEventListener("click", function() {
    window.location.href = "./pages/question.html";
  });

  let acertadas = ""; 
let falladas = ""; 

function graficaRespuestas() {
    acertadas = parseInt(document.getElementById('').value); //Vacio porque no se cual va a hacer el id 
    falladas = 100 - acertadas; 

    var data = {
        series: [acertadas, falladas]
    };

    var options = {
        labelInterpolationFnc: function(value) {
          return value[0]
        }
    };

    var optionsWithColors = {
        labelOffset: 50,
        labelDirection: 'explode',
        chartPadding: 10,
        startAngle: 270,
        total: 100,
        showLabel: true,
        plugins: [
          //Aqui falta asignar colores para los aciertos y los fallos
          Chartist.plugins.fillDonut({
            items: [
              {item: 0, value: ''},
              {item: 1, value: ''},  
            ]}
        )]
    }
      
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
    }

      new Chartist.Pie('container', data,optionsWithColors, options, responsiveOptions);

 graficaRespuestas();

