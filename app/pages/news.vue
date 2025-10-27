<template>
  <div class="container mx-auto p-4 my-auto">
    <div class="grid xl:grid-cols-3 lg:gap-6 md:grid-cols-2 gap-4 grid-cols-1">
      <CommonNewsCard
        v-for="(item, i) in items"
        :key="i"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const items = [
    {
      title:
        'Експертна група Нацагентства із забезпечення якості вищої освіти запрошує долучитися до відкритої зустрічі',
      link: 'https://www.znu.edu.ua/cms/index.php?action=news/view_details&news_id=66627&lang=ukr&news_code=ekspertna-grupa-natsagentstva-iz-zabezpechennya-yakosti-vischoyi-osviti-zaproshu---doluchitisya-do-vidkritoyi-zustrichi66627-ukr',
      date: '2025-10-22T12:00:00.000Z',
      img: 'images/news/1.png'
    },
    {
      title:
        'Експертна група Нацагентства із забезпечення якості вищої освіти запрошує долучитися до відкритої зустрічі',
      link: 'https://www.znu.edu.ua/cms/index.php?action=news/view_details&news_id=66653&lang=ukr&news_code=ekspertna-grupa-natsagentstva-iz-zabezpechennya-yakosti-vischoyi-osviti-zaproshu---doluchitisya-do-vidkritoyi-zustrichi66653-ukr',
      date: '2025-10-24T15:13:00.000Z',
      img: 'images/news/1.png'
    },
    {
      title: 'Центр інтенсивного вивчення іноземних мов запрошує на курси',
      link: 'https://www.znu.edu.ua/cms/index.php?action=news/view_details&news_id=60470&lang=ukr&news_code=tsentr-intensivnogo-vivchennya-inozemnikh-mov-proponu---yakisni-osvitni-poslugi',
      date: '2025-09-05T08:01:00.000Z',
      img: 'images/news/2.jpg'
    },
    {
      title: 'Студенти освітньої програми «Спорт» дослідили якість освітнього процесу',
      link: 'https://www.znu.edu.ua/cms/index.php?action=news/view_details&news_id=66654&lang=ukr&news_code=studenti-osvitnoyi-programi---sport---doslidili-yakist-osvitnogo-protsesu',
      date: '2025-10-24T14:14:00.000Z',
      img: 'images/news/3.jpg'
    },
    {
      title: 'Філологічний факультет долучився до міжнародної ініціативи Erasmus Days – 2025',
      link: 'https://www.znu.edu.ua/cms/index.php?action=news/view_details&news_id=66652&lang=ukr&news_code=filologichnij-fakultet-doluchivsya-do-mizhnarodnoyi-initsiativi-Erasmus-Days-----2025',
      date: '2025-10-24T13:11:00.000Z',
      img: 'images/news/4.jpg'
    },
    {
      title: 'Стейкхолдери факультету журналістики привітали з Днем рекламіста через small talk',
      link: 'https://www.znu.edu.ua/cms/index.php?action=news/view_details&news_id=66651&lang=ukr&news_code=stejkkholderi-fakultetu-zhurnalistiki-privitali-z-dnem-reklamista-cherez-small-talk',
      date: '2025-10-24T13:10:00.000Z',
      img: 'images/news/5.jpg'
    }
  ];
</script>
