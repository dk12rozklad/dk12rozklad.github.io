---
title: "Наш розклад"
layout: "doc"
aside: false
---

<h1 align="center">Розклад</h1>

<h2 align="center">Перший тиждень</h2>

|   | Понеділок | Вівторок | Середа | Четвер | П'ятниця |
|:-:|:---------:|:--------:|:------:|:------:|:--------:|
| 1<br>08:30 |  | [КПРА - лек](/tasks/kpra) | [Схемотехніка - лек](/tasks/circuit) | [КПРА - лаб](/tasks/kpra) |
| 2<br>10:25 | [Політична участь - лек](/tasks/political)<br>[Розумні міста - прак](/tasks/smart) | [ЕД та ПРХ - лек](/tasks/edprh) | [Філософія - лек](/tasks/philosophy)| [Англійська мова - прак](/tasks/english) |
| 3<br>12:20 | [Соціальна психологія - лек](/tasks/psychology) | [МОДІ - лек](/tasks/modi) | [ФЛП - лек](/tasks/flp) |  | [ЕД та ПРХ - прак](/tasks/edprh) |
| 4<br>14:15 |  | [МОДІ - прак](/tasks/modi) | [ЕД та ПРХ - лек](/tasks/edprh) |  | [Філософія - прак](/tasks/philosophy)|

<h2 align="center">Другий тиждень</h2>

|   | Понеділок | Вівторок | Середа | Четвер | П'ятниця |
|:-:|:---------:|:--------:|:------:|:------:|:--------:|
| 1<br>08:30 |  | [КПРА - лек](/tasks/kpra) | [Схемотехніка - лек](/tasks/circuit) | [КПРА - лаб](/tasks/kpra) | [Схемотехніка - лек](/tasks/circuit) |
| 2<br>10:25 | [Політична участь - лек](/tasks/political) | [ЕД та ПРХ - лек](/tasks/edprh) | [ФЛП - лек](/tasks/flp)| [Англійська мова - прак](/tasks/english) | [ФЛП - лек](/tasks/flp) |
| 3<br>12:20 | [Соціальна психологія - лек](/tasks/psychology) |  | [ФЛП - лек](/tasks/flp) |  | [ЕД та ПРХ - прак](/tasks/edprh) |
| 4<br>14:15 | [Розумні міста - прак](/tasks/smart) |  | [ЕД та ПРХ - лек](/tasks/edprh) |  |  |


<script setup>
function getNowWeekDay() {
    let now = new Date();
    let days = ['#day-7', '#day-1', '#day-2', '#day-3', '#day-4', '#day-5', '#day-6'];
    return days[now.getDay()];
}
</script>
