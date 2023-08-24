---
title: "Наш розклад"
layout: "doc"
aside: false
---

<h1>Розклад</h1>

<h2 id="firstWeekH2">Перший тиждень</h2>

<div id="firstWeek">

|                    |              Понеділок              |                Вівторок                |                 Середа                 | Четвер | П'ятниця |
| :----------------: | :---------------------------------: | :------------------------------------: | :------------------------------------: | :----: | :------: |
| 1<br>08:30 - 10:05 |     [АПЦП `Лек`](/tasks/APTSP)      |        [ОІТ `Лек`](/tasks/OIT)         |       [АПЦП `Лаб`](/tasks/APTSP)       |        |          |
| 2<br>10:25 - 12:00 |       [ТСС `Лек`](/tasks/TSS)       |   [КТ ТК РЕА `Лек`](/tasks/KTTKREA)    | [Схемотехніка `Лаб`](/tasks/circuitry) |        |          |
| 3<br>12:20 - 13:55 |      [ВРПЗ `Лек`](/tasks/VRPZ)      | [Схемотехніка `Лек`](/tasks/circuitry) |       [ВРПЗ `Лаб`](/tasks/VRPZ)        |        |          |
| 4<br>14:15 - 15:50 |       [ОМТ `Лек`](/tasks/OMT)       |                                        |        [ОІТ `Лаб`](/tasks/OIT)         |        |          |
| 5<br>16:10 - 18:10 | [Англійська `Прак`](/tasks/english) |                                        |                                        |        |          |

</div>

<h2 id="secondWeekH2">Другий тиждень</h2>

<div id="secondWeek">

|                    |              Понеділок              |             Вівторок              |              Середа               | Четвер | П'ятниця |
| :----------------: | :---------------------------------: | :-------------------------------: | :-------------------------------: | :----: | :------: |
| 1<br>08:30 - 10:05 |     [АПЦП `Лек`](/tasks/APTSP)      |      [ОІТ `Лек`](/tasks/OIT)      |    [АПЦП `Лаб`](/tasks/APTSP)     |        |          |
| 2<br>10:25 - 12:00 |       [ТСС `Лек`](/tasks/TSS)       | [КТ ТК РЕА `Лек`](/tasks/KTTKREA) |      [ТСС `Лаб`](/tasks/TSS)      |        |          |
| 3<br>12:20 - 13:55 |      [ВРПЗ `Лек`](/tasks/VRPZ)      |                                   |      [ОМТ `Лаб`](/tasks/OMT)      |        |          |
| 4<br>14:15 - 15:50 |       [ОМТ `Лек`](/tasks/OMT)       |                                   | [КТ ТК РЕА `Лаб`](/tasks/KTTKREA) |        |          |
| 5<br>16:10 - 18:10 | [Англійська `Прак`](/tasks/english) |                                   |                                   |        |          |

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

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const time = now.getTime();

function checkWeekAndCouple() {
    const firstWeek = document.getElementById('firstWeek');
    const secondWeek = document.getElementById('secondWeek');
    const currentWeek = getNowWeek() === 1 ? firstWeek : secondWeek;
    const nowCouple = getCouple();
    const table = currentWeek.getElementsByTagName("table")[0];
    table.style.border = "2px solid #059669";
    const weekDays = table.getElementsByTagName("td");
    if (nowCouple === -1) {
        let lastCouples = [25, 26, 27, 28, 29];
        for (let i = 0; i < lastCouples.length; i++) {
            weekDays[lastCouples[i]].style.border = "1px solid var(--vp-c-divider)"
        }
    }
    else if (nowCouple) {
        weekDays[nowCouple - 6].style.border = "1px solid var(--vp-c-divider)"
        weekDays[nowCouple].style.border = "2px solid #059669";
    }
}

function getNowWeek() {
    const today = new Date(year, month, 0).getTime();
    const week = Math.round((time) / (1000 * 60 * 60 * 24 * 7));
    return week % 2 ? 1 : 2;
}

function getCouple() {
    // [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
    const daysWithCouples = [[], [1, 7, 13, 19, 25], [2, 8, 14, 20, 26], [3, 9, 15, 21, 27], [4, 10, 16, 22, 28], [5, 11, 17, 23, 29], []];

    if (now >= new Date(year, month, date, 8, 30, 0) && now <= new Date(year, month, date, 10, 5, 0))
        return daysWithCouples[day][0];
    else if (now >= new Date(year, month, date, 10, 5, 0) && now <= new Date(year, month, date, 12, 0, 0))
        return daysWithCouples[day][1];
    else if (now >= new Date(year, month, date, 12, 0, 0) && now <= new Date(year, month, date, 13, 55, 0))
        return daysWithCouples[day][2];
    else if (now >= new Date(year, month, date, 13, 55, 0) && now <= new Date(year, month, date, 15, 50, 0))
        return daysWithCouples[day][3];
    else if (now >= new Date(year, month, date, 15, 50, 0) && now <= new Date(year, month, date, 18, 10, 0))
        return daysWithCouples[day][4];
    else if (now > new Date(year, month, date, 18, 10, 0) && now < new Date(year, month, date, 8, 30, 0))
        return -1;
    else return 0;
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
