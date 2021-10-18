<template>
    <div class="header">

        <!-- 頂部通欄 -->
        <div class="top-wrapper">
            <div class="back-wrapper">
                <span class="icon-arrow_lift"></span>
            </div>

            <form class="search-wrapper">
                <span class="search-icon"></span>
                <input class="search-bar" type="text" placeholder="搜索店內商品">
            </form>

            <div class="more-wrapper">
                <a class="spelling-bt" href="#"></a>
                <div class="more-bt"></div>
            </div>
        </div>

        <!-- 主體內容 -->
        <div class="content-wrapper"></div>
        
        <!-- 公告內容 -->
        <div class="bulletin-wrapper"></div>
    </div>
</template>

<script>
export default {};
</script>

<style>
/*導入字體圖標*/
@import url("../../common/sytle/icon.css");
/* 導入CSS*/
@import url("Header.css");
</style>
