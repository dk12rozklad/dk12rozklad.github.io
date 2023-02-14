---
title: "Наш розклад"
layout: "doc"
aside: false
---

<h1 align="center">Розклад</h1>

<h2 id="firstWeekH2" align="center">Перший тиждень</h2>

<div id="firstWeek">

|   | Понеділок | Вівторок | Середа | Четвер | П'ятниця |
|:-:|:---------:|:--------:|:------:|:------:|:--------:|
| 1<br>08:30 - 10:05 | [Психологія конфлікту - прак](/tasks/agrophilosophy) | [КПРА - лек](/tasks/kpra) | [Схемотехніка - лек](/tasks/circuit) | [КПРА - лаб](/tasks/kpra) |
| 2<br>10:25 - 12:00 | [Політична участь - лек](/tasks/political)<br>[Розумні міста - прак](/tasks/smart) | [ЕД та ПРХ - лек](/tasks/edprh) | [Філософія - лек](/tasks/philosophy)| [Англійська мова - прак](/tasks/english) |
| 3<br>12:20 - 13:55 | [Соціальна психологія - прак](/tasks/psychology) | [МОДІ - лек](/tasks/modi) | [ФЛП - лек](/tasks/flp) |  | [ЕД та ПРХ - прак](/tasks/edprh) |
| 4<br>14:15 - 15:50 |  | [МОДІ - прак](/tasks/modi) | [ЕД та ПРХ - лек](/tasks/edprh) |  | [Філософія - прак](/tasks/philosophy)|

</div>

<h2 id="secondWeekH2" align="center">Другий тиждень</h2>

<div id="secondWeek">

|   | Понеділок | Вівторок | Середа | Четвер | П'ятниця |
|:-:|:---------:|:--------:|:------:|:------:|:--------:|
| 1<br>08:30 - 10:05 | [Психологія конфлікту - лек](/tasks/agrophilosophy) | [КПРА - лек](/tasks/kpra) | [Схемотехніка - лек](/tasks/circuit) | [КПРА - лаб](/tasks/kpra) | [Схемотехніка - лаб](/tasks/circuit) |
| 2<br>10:25 - 12:00 | [Політична участь - прак](/tasks/political) | [ЕД та ПРХ - лек](/tasks/edprh) | [ФЛП - лек](/tasks/flp)| [Англійська мова - прак](/tasks/english) | [ФЛП - лек](/tasks/flp) |
| 3<br>12:20 - 13:55 | [Соціальна психологія - лек](/tasks/psychology) |  | [ФЛП - лек](/tasks/flp) |  | [ЕД та ПРХ - прак](/tasks/edprh) |
| 4<br>14:15 - 15:50 | [Розумні міста - лек](/tasks/smart) |  | [ЕД та ПРХ - лек](/tasks/edprh) |  |  |

</div>

Всю інформацію по предметам надсилайте групу ДЗ в тг

<script setup>
import { onMounted } from "vue"

onMounted(() => {
    checkWeekAndCouple()
    setInterval(() => {
        checkWeekAndCouple();
    }, 60000);
    console.log("Ну і чого ти сюди дивишся, чортяка! Якщо ти хочеш допомогти зробити цей сайт краще, то пиши в телеграм: @Renat_TOP");
})

function checkWeekAndCouple() {
    let firstWeek = document.getElementById('firstWeek');
    let secondWeek = document.getElementById('secondWeek');
    let currentWeek = getNowWeek() === 1 ? firstWeek : secondWeek;
    let nowCouple = getCouple() ? getCouple() : 0;
    let table = currentWeek.getElementsByTagName("table")[0];
    table.style.border = "2px solid #059669";
    let weekDays = table.getElementsByTagName("td");
    if (nowCouple) {
        weekDays[nowCouple].style.border = "2px solid #059669";
    }
}

function getNowWeek() {
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var today = new Date(year, month, 0).getTime();
    var now = new Date().getTime();
    var week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7));
    if (week % 2) return 1;
    else return 2;
}

function getCouple() {
    // [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
    let daysWithCouples = [[], [1, 7, 13, 19], [2, 8, 14, 20], [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], []];

    let now = new Date();

    if (now >= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 30, 0) && now <= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 5, 0))
        return daysWithCouples[now.getDay()][0];
    else if (now >= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 5, 0) && now <= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0))
        return daysWithCouples[now.getDay()][1];
    else if (now >= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0) && now <= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 55, 0))
        return daysWithCouples[now.getDay()][2];
    else if (now >= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 55, 0) && now <= new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 50, 0))
        return daysWithCouples[now.getDay()][3];
    else return 0;
}

</script>
