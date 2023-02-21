---
title: "Наш розклад"
layout: "doc"
aside: false
---

<h1>Розклад</h1>

<h2 id="firstWeekH2">Перший тиждень</h2>

<div id="firstWeek">

|                    |                                     Понеділок                                      |            Вівторок             |                Середа                |                  Четвер                  |               П'ятниця                |
| :----------------: | :--------------------------------------------------------------------------------: | :-----------------------------: | :----------------------------------: | :--------------------------------------: | :-----------------------------------: |
| 1<br>08:30 - 10:05 |                [Психологія конфлікту `Прак`](/tasks/agrophilosophy)                |    [КПРА `Лек`](/tasks/kpra)    | [Схемотехніка `Лек`](/tasks/circuit) |        [КПРА `Лаб`](/tasks/kpra)         |
| 2<br>10:25 - 12:00 | [Політична участь `Лек`](/tasks/political)<br>[Розумні міста `Прак`](/tasks/smart) | [ЕД та ПРХ `Лек`](/tasks/edprh) | [Філософія `Лек`](/tasks/philosophy) | [Англійська мова `Прак`](/tasks/english) |
| 3<br>12:20 - 13:55 |                  [Соціальна психологія `Прак`](/tasks/psychology)                  |    [МОДІ `Лек`](/tasks/modi)    |       [ФЛП `Лек`](/tasks/flp)        |                                          |   [ЕД та ПРХ `Прак`](/tasks/edprh)    |
| 4<br>14:15 - 15:50 |                                                                                    |   [МОДІ `Прак`](/tasks/modi)    |   [ЕД та ПРХ `Лек`](/tasks/edprh)    |                                          | [Філософія `Прак`](/tasks/philosophy) |

</div>

<h2 id="secondWeekH2">Другий тиждень</h2>

<div id="secondWeek">

|                    |                      Понеділок                      |            Вівторок             |                Середа                |                  Четвер                  |               П'ятниця               |
| :----------------: | :-------------------------------------------------: | :-----------------------------: | :----------------------------------: | :--------------------------------------: | :----------------------------------: |
| 1<br>08:30 - 10:05 | [Психологія конфлікту `Лек`](/tasks/agrophilosophy) |    [КПРА `Лек`](/tasks/kpra)    | [Схемотехніка `Лек`](/tasks/circuit) |        [КПРА `Лаб`](/tasks/kpra)         | [Схемотехніка `Лаб`](/tasks/circuit) |
| 2<br>10:25 - 12:00 |     [Політична участь `Прак`](/tasks/political)     | [ЕД та ПРХ `Лек`](/tasks/edprh) |       [ФЛП `Лек`](/tasks/flp)        | [Англійська мова `Прак`](/tasks/english) |       [ФЛП `Лаб`](/tasks/flp)        |
| 3<br>12:20 - 13:55 |   [Соціальна психологія `Лек`](/tasks/psychology)   |                                 |       [ФЛП `Лек`](/tasks/flp)        |                                          |   [ЕД та ПРХ `Лаб`](/tasks/edprh)    |
| 4<br>14:15 - 15:50 |         [Розумні міста `Лек`](/tasks/smart)         |                                 |   [ЕД та ПРХ `Лек`](/tasks/edprh)    |                                          |                                      |

</div>

Всю інформацію по предметам надсилайте в групу ДЗ в тг

<script setup>
import { onMounted } from "vue"

onMounted(() => { 
    console.log("Ну і чого ти сюди дивишся, чортяка! Якщо ти хочеш допомогти зробити цей сайт краще, то пиши в телеграм: @Renat_TOP");
    try {
        checkWeekAndCouple()
        setInterval(() => {
            checkWeekAndCouple();
        }, 10000);
    } catch (e) {}
})

const daysWithCouples = [[], [1, 7, 13, 19], [2, 8, 14, 20], [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], []];
const COUPLE_TIME = {
    start: '08:30',
    end1: '10:05',
    end2: '12:00',
    end3: '13:55',
    end4: '15:50'
};

function getNowWeek() {
  const now = new Date();
  const week = Math.round(now / (1000 * 60 * 60 * 24 * 7));
  return week % 2 ? 1 : 2;
}


function getCouple(){
    let now = new Date();
    let day = now.getDay();
    let timeHour = now.getHours();
    let timeMinutes = now.getMinutes();
    let hourminute = timeHour + ":" + timeMinutes;
    let coupleIndex = 0;

    switch(true){
        case (hourminute >= COUPLE_TIME.start && hourminute <= COUPLE_TIME.end1):
            coupleIndex = 0;
            break;
        case (hourminute > COUPLE_TIME.end1 && hourminute <= COUPLE_TIME.end2):
            coupleIndex = 1;
            break;
        case (hourminute > COUPLE_TIME.end2 && hourminute <= COUPLE_TIME.end3):
            coupleIndex = 2;
            break;
        case (hourminute > COUPLE_TIME.end3 && hourminute <= COUPLE_TIME.end4):
            coupleIndex = 3;
            break;
        default:
            coupleIndex = -1;
            break;
    }
    return daysWithCouples[day][coupleIndex] || 0;	
}

function checkWeekAndCouple() {
    let firstWeek = document.getElementById('firstWeek');
    let secondWeek = document.getElementById('secondWeek');		
    let currentWeek = getNowWeek() === 1 ? firstWeek : secondWeek;
    let nowCouple = getCouple() ? getCouple() : 0;
    let table = currentWeek.getElementsByTagName("table")[0];
    table.style.border = "2px solid #059669";
    let weekDays = table.getElementsByTagName("td");
    let lastCouples = [19, 20, 21, 22, 23];
    
    if (nowCouple === -1) {
        lastCouples.forEach(function(element){
            weekDays[element].style.border = "1px solid var(--vp-c-divider)"
        }); 
    }
    else if (nowCouple) {
        weekDays[nowCouple - 6].style.border = "1px solid var(--vp-c-divider)"
        weekDays[nowCouple].style.border = "2px solid #059669";
    }
}

</script>

<style scoped>
h1, h2 {
    text-align: center !important;
}

th {
    width: 1% !important;
}
</style>
