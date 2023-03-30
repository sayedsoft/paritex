
<script setup lang="ts">

</script>

<template>
    <nav class="header__nav">
        <RouterLink class="header__item" to="/exchange">Market</RouterLink>
        <div class="header__item header__item_dropdown js-header-item">
            <button class="header__head js-header-head">
                Quick actions
                <svg class="icon icon-arrow-down">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </button>
            <div class="header__body js-header-body">
                <a class="header__link" href="buy-crypto.html">
                    <svg class="icon icon-user">
                        <use xlink:href="#icon-user"></use>
                    </svg>
                    Deposit
                </a>
                <a class="header__link" href="deposit-fiat.html">
                    <svg class="icon icon-image">
                        <use xlink:href="#icon-image"></use>
                    </svg>
                    Withdraw
                </a>
                <a class="header__link" href="deposit-fiat.html">
                    <svg class="icon icon-image">
                        <use xlink:href="#icon-image"></use>
                    </svg>
                    Withdraw
                </a>
            </div>
        </div>

        <a class="header__item" href="market.html">
            Wallet
        </a>
        <a class="header__item" href="learn-crypto.html">
            Discover
        </a>
    </nav>
</template>