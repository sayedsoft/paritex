
<script setup lang="ts">


</script>

<template>
    <div class="header__item header__item_settings js-header-item">
        <button class="header__head js-header-head">EN
            <svg class="icon icon-arrow-down">
                <use xlink:href="#icon-arrow-down"></use>
            </svg>
        </button>



        <div class="header__body js-header-body">
            <div class="header__row">
                <div class="header__col">
                    <div class="header__category">Language</div>
                    <div class="header__menu">
                        <a class="header__language active" href="#">
                            <span class="header__flag">🇺🇸</span>English
                        </a>
                        <a class="header__language" href="#">
                            <span class="header__flag">🇻🇳</span> Türkçe
                        </a>
                        <a class="header__language" href="#">
                            <span class="header__flag">🇷🇺</span>Russia
                        </a>
                    </div>
                </div>

                <div class="header__col">
                    <div class="header__category">Currency</div>
                    <div class="header__menu">
                        <a class="header__currency active" href="#">USD</a>
                        <a class="header__currency" href="#">RUB</a>
                        <a class="header__currency" href="#">EUR</a>
                        <a class="header__currency" href="#">JPY</a>
                        <a class="header__currency" href="#">BTC</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

  