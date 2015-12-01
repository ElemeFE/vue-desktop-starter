<style>
  html, body {
    font: 100% Helvetica, sans-serif;
    color: #293f54;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    overflow: hidden;
  }

  #aside {
    box-sizing: border-box;
    box-shadow: inset -2px 0 6px rgba(41,63,84,0.24);
    width: 200px;
    height: 100%;
    float: left;
    background: #354052;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #aside p {
    margin: 0;
    padding: 18px 8px;
    color: #8294aa;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.28);
    color: rgba(255, 255, 255, 0.75);
  }

  #main {
    position: relative;
    margin-left: 200px;
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
    overflow: auto;
    background-color: #ecf2f6;
  }

  .demolist {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .demolist li {
    padding: 0;
    cursor: pointer;
  }

  .demolist li:hover a {
    background-color: #2b3647;
  }

  .demolist .v-link-active {
    background-color: #0f141e;
    font-weight: 400;
  }

  .demolist .v-link-active:hover {
    background-color: #0f141e;
  }

  .demolist a {
    padding: 8px 30px;
    display: block;
    color: #c0cad8;
    text-decoration: none;
    transition: background-color .3s;
    font-size: 16px;
    text-align: left;
  }

  #aside .demoheader h3 {
    color: #8294aa;
  }

  #aside .accordion-content {
    padding: 0;
  }

  .container {
    height: 100%;
  }
</style>

<template>
  <div class="container">
    <div id="aside">
      <p class="title">Starter Page</p>
      <d-accordion type="transparent">
        <d-accordion-panel class="demoheader" title="Example" active>
          <ul class="demolist">
            <li><a v-link="{ path: '/page1' }">Page1</a></li>
            <li><a v-link="{ path: '/page2' }">Page2</a></li>
          </ul>
        </d-accordion-panel>
      </d-accordion>
    </div>

    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    },

    methods: {
    },

    ready() {
    }
  }
</script>
