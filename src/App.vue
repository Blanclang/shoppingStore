<template>
    <div class="bodyBox">
        <Headers></Headers>
        <div class="concentBox">
            <div class="container">
                <router-view></router-view>
            </div>
            <Footers></Footers>
        </div>
    </div>
</template>

<script>

import Headers from './components/header/header'
import Footers from './components/footer/footer'

export default {
    name: 'app',
    components: {
        Headers,
        Footers
    }
}
</script>

<style>
        html, body, div, span, h3, h4, p,a, em, img, i, ul, li, form, label, table, tbody, tfoot, thead, tr, th, td,canvas, footer, header, nav, section, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
    }
    ol, ul {
        list-style: none;
    }
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    *{box-sizing: border-box;}
    html{font-size: 62.5%;}
    body {
        background: #f0f2f5;
        font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        color: #444;
        font-size: 1.4rem;
    }
    html,body{width: 100%;height: 100%;}
    .bodyBox{width: 100%;height: 100%;}
    .concentBox{width: 100%;height: calc(100% - 90px);overflow: hidden;overflow-y:auto; }
    .container{width: 1100px;min-height: calc(100% - 80px);margin: 0px auto;padding:18px 0px;}
</style>
