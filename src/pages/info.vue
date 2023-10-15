<template>
  <main>
    <UContainer class="my-8">
      <h2 class="text-3xl font-medium">このサイトについて</h2>
      <h3 class="question">これは何？</h3>
      <p class="answer">
        なををををををさん（<UButton
          variant="link"
          to="https://twitter.com/70_pocky"
          :padded="false"
          >@70_pocky</UButton
        >）作の『不器用ビンボーダンス』というマンガの登場人物のセリフが、第何回のものかを検索するために作ったファンサイトです。
      </p>
      <h3 class="question">『不器用ビンボーダンス』について</h3>
      <p class="answer"><strong>まずはこちらを読んでみてください！</strong></p>

      <iframe
        class="hatenablogcard"
        style="width: 100%; height: 155px; margin: 15px 0; max-width: 680px"
        title="不器用ビンボーダンス / なをををををを"
        src="https://hatenablog-parts.com/embed?url=https://seiga.nicovideo.jp/comic/41035"
        frameborder="0"
        scrolling="no"
      ></iframe>

      <h3 class="question">使い方</h3>
      <ul class="answer">
        <li>Home ではメインの検索が行えます。</li>
        <li>List ではセリフの一覧を見ることができます。</li>
        <li>
          スマホのブラウザから、「ホーム画面に追加」するとアプリのように使えます。
        </li>
      </ul>
      <h3 class="question">セリフについて</h3>
      <p class="answer">
        現在手入力で文字起こししてスプレッドシートにまとめているので、編集したい方は以下の
        URL からお願いします！
        <iframe
          class="hatenablogcard"
          style="width: 100%; height: 155px; margin: 15px 0; max-width: 680px"
          title="BukibinQuotesList"
          src="https://hatenablog-parts.com/embed?url=https://docs.google.com/spreadsheets/d/10wbX66QkSPnSR8h2p0MdqWkgWklbS6RvwYYqJ6dtEEU/edit?usp=sharing"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </p>
    </UContainer>
  </main>
</template>

<style scoped>
h3.question {
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 30px;
}
h3.question:first-of-type {
  margin-top: 32px;
}
.answer {
  margin-top: 5px;
}
ul.answer {
  margin-left: 20px;
  list-style-type: disc;
}
ul.bukibin {
  margin-top: 10px;
}
.bukibin-url {
  margin-left: 10px;
}
</style>
