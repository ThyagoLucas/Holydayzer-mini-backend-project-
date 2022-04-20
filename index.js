import express from "express";
import cors from 'cors';
console.log("carregay");
const app = express();

app.listen(3000, ()=>{
    console.log("Você está se tornando PRO");
});
 app.use(cors());

 const holidays = [
      { date: "1/1/2022", name: "Confraternização mundial" },
      { date: "1/3/2022", name: "Carnaval" },
      { date: "4/17/2022", name: "Páscoa" },
      { date: "4/21/2022", name: "Tiradentes" },
      { date: "5/1/2022", name: "Dia do trabalho" },
      { date: "6/16/2022", name: "Corpus Christi" },
      { date: "9/7/2022", name: "Independência do Brasil" },
      { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
      { date: "11/2/2022", name: "Finados" },
      { date: "11/15/2022", name: "Proclamação da República" },
      { date: "12/25/2022", name: "Natal" }
    ];

  app.get('/holidays/:idMes', (request, response)=>{
      const id = request.params.idMes;

      switch(parseInt(id)){
            case 1:response.send(`
            <ul>
                  <li>1/1/2022, Confraternização mundial </li>
                  <li>1/3/2022, Carnaval</li>
            </ul> 
            `);
            case 4:response.send(`
            <ul>
                  <li>4/17/2022, Páscoa </li>
                  <li>4/21/2022, Tiradentes</li>
            </ul> 
            `);
            case 5:response.send(`
            <ul>
                  <li>1/5/2022, Páscoa </li>
            </ul> 
            `);
            case 6:response.send(`
            <ul>
                  <li>6/16/2022, Corpus Christi</li>
            </ul> 
            `);
            case 9:response.send(`
            <ul>
                  <li>9/7/2022, Independência do Brasil</li>
            </ul> 
            `);
            case 10:response.send(`
            <ul>
                  <li>10/12/2022, Nossa Senhora Aparecida </li>
            </ul> 
            `);
            case 11:response.send(`
            <ul>
                  <li>11/2/2022, Finados </li>
                  <li>11/15/2022, Proclamação da República </li>
            </ul> 
            `);
            case 12:response.send(`
            <ul>
                  <li>12/25/2022, Natal </li>
            </ul> 
            `);
            case 0:response.send(`
            <h1>Todos os feriados</h1>
            <ul>
                  <li>1/1/2022, Confraternização mundial </li>
                  <li>1/3/2022, Carnaval </li>
                  <li>4/17/2022, Páscoa </li>
                  <li>4/21/2022, Tiradentes </li>
                  <li>5/1/2022, Dia do trabalho </li>
                  <li>6/16/2022, Corpus Christi </li>
                  <li>9/7/2022, Independência do Brasil </li>
                  <li>10/12/2022, Nossa Senhora Aparecida </li>
                  <li>11/2/2022, Finados </li>
                  <li>11/15/2022, Proclamação da República </li>
                  <li>12/25/2022, Natal </li>
            </ul> 

            `);
            default:response.send(`Não Encontrado, tente novamente`);
  
      }
  });

  app.get('/is-today-holiday', (request, response)=>{
      const hoje = new Date
      let isHoliday = false;
      let holidayName = '';
      holidays.forEach((day)=>{
            if(hoje.toLocaleDateString('en-US') === day.date){
            isHoliday = true
            holidayName = day.name
            }
      });

      isHoliday
      ? response.send(`Sim, hoje é ${holidayName}`)
      : response.send("Não, hoje não é feriado");

        
  });


  
