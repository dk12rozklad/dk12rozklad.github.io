---
title: "Наш розклад"
layout: "doc"
aside: false
---

# Розклад {style="text-align:center;"}

### [Таблиця з прогресом Лаб та КР](https://docs.google.com/spreadsheets/d/1WgMoGPEhlSP8bXxPBziwLw-HYi10553Zxro24GwwDc4/edit#gid=0) {style="text-align:center;margin: 10px 0 0"}

### [Google Drive з Лабами](https://drive.google.com/drive/folders/1PQRp0uAXy95Q8l2S8xIsrQ-juQPd22eh?usp=sharing) {style="text-align:center;margin: 10px 0 0"}

#### `«Фортуна сприяє сміливим»` ― Вергілій, римський поет (70 – 19 рр. до н. е.). {style="text-align:center;margin: 10px 0 0"}

## Перший тиждень {#firstWeekH2}

<div id="firstWeek">

|                    |               Понеділок               |                    Вівторок                    |                 Середа                 |                 Четвер                  |
| :----------------: | :-----------------------------------: | :--------------------------------------------: | :------------------------------------: | :-------------------------------------: |
| 1<br>08:30 - 10:05 | [Сучасні проги `Лек`](/tasks/SMKKPIS) | [Перспективні `312-12 Лаб`](/tasks/PTPMPVREA)  |        [ЦОС `Лаб`](/tasks/TSOS)        |        [ЦОС `Лек`](/tasks/TSOS)         |
| 2<br>10:25 - 12:00 | [Сучасні проги `Лаб`](/tasks/SMKKPIS) | [Мікропроцесорні `331-12 Лаб`](/tasks/MPTKREA) | [Перспективні `Лек`](/tasks/PTPMPVREA) |         [Веб `Лек`](/tasks/MVP)         |
| 3<br>12:20 - 13:55 |        [АОП `Лек`](/tasks/AOP)        |                                                |  [Англійська `Прак`](/tasks/english)   | [Мікропроцесорні `Лек`](/tasks/MPTKREA) |
| 4<br>14:15 - 15:50 |                                       |        [Підпр. Право `Прак`](/tasks/PP)        |                                        |                                         |

</div>

## Другий тиждень {#secondWeekH2}

<div id="secondWeek">

|                    |               Понеділок               |                    Вівторок                    |                 Середа                 |                 Четвер                  |
| :----------------: | :-----------------------------------: | :--------------------------------------------: | :------------------------------------: | :-------------------------------------: |
| 1<br>08:30 - 10:05 | [Сучасні проги `Лек`](/tasks/SMKKPIS) |         [АОП `339-12 Лаб`](/tasks/AOP)         |        [ЦОС `Лаб`](/tasks/TSOS)        |        [ЦОС `Лек`](/tasks/TSOS)         |
| 2<br>10:25 - 12:00 |        [Веб `Лаб`](/tasks/MVP)        | [Мікропроцесорні `331-12 Лаб`](/tasks/MPTKREA) | [Перспективні `Лек`](/tasks/PTPMPVREA) |         [Веб `Лек`](/tasks/MVP)         |
| 3<br>12:20 - 13:55 |        [АОП `Лек`](/tasks/AOP)        |                                                |  [Англійська `Прак`](/tasks/english)   | [Мікропроцесорні `Лек`](/tasks/MPTKREA) |
| 4<br>14:15 - 15:50 |                                       |        [Підпр. Право `Лек`](/tasks/PP)         |                                        |                                         |

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

function getUADate(year, month, date, hours, minutes, secons) {
    return new Date(new Date(year, month, date, hours, minutes, secons).toLocaleString('en', {timeZone: 'Europe/Kyiv'}));
}

const now = new Date(new Date().toLocaleString('en', {timeZone: 'Europe/Kyiv'}));
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
        let lastCouples = [21, 22, 23, 24];
        for (let i = 0; i < lastCouples.length; i++) {
            weekDays[lastCouples[i]].style.border = "1px solid var(--vp-c-divider)"
        }
    }
    else if (nowCouple) {
        weekDays[nowCouple > 5 ? nowCouple - 5 : nowCouple].style.border = "1px solid var(--vp-c-divider)"
        weekDays[nowCouple].style.border = "2px solid #059669";
    }
}

function getNowWeek() {
    const today = getUADate(year, month, date, 0, 0, 0).getTime();
    const week = Math.round((time) / (1000 * 60 * 60 * 24 * 7));
    return week % 2 ? 1 : 2;
}

function getCouple() {
    // [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
    const daysWithCouples = [[], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [], []];

    if (now >= getUADate(year, month, date, 8, 30, 0) && now <= getUADate(year, month, date, 10, 5, 0))
        return daysWithCouples[day][0];
    else if (now >= getUADate(year, month, date, 10, 5, 0) && now <= getUADate(year, month, date, 12, 0, 0))
        return daysWithCouples[day][1];
    else if (now >= getUADate(year, month, date, 12, 0, 0) && now <= getUADate(year, month, date, 13, 55, 0))
        return daysWithCouples[day][2];
    else if (now >= getUADate(year, month, date, 13, 55, 0) && now <= getUADate(year, month, date, 15, 50, 0))
        return daysWithCouples[day][3];
    else if (now >= getUADate(year, month, date, 15, 50, 0) && now <= getUADate(year, month, date, 17, 45, 0))
        return daysWithCouples[day][4];
    else if (now > getUADate(year, month, date, 17, 45, 0) && now < getUADate(year, month, date, 8, 30, 0))
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
