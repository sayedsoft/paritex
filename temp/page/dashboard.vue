<route lang="yaml">
meta:
  requiresAuth: true
</route>
<script setup lang="ts">
import bannerLight from '@/assets/animations/light-banner-animated.svg'
</script>

<template>
    <div class="outer__inner">
        <div class="section main main_top_home">
            <div class="main__center center home__banner">
                <div class="main__wrap main__wrap__home">
                    <h1 class="main__title h1">Buy & sell <br>crypto in minutes</h1>
                    <div class="main__text">Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto
                        asset
                        exchange.</div>
                    <a class="button main__button">Get started now</a>
                    <a class="main__scroll scroll js-scroll" href="#learn">
                        <div class="scroll__line">
                            <svg class="icon icon-arrow-bottom">
                                <use xlink:href="#icon-arrow-bottom"></use>
                            </svg>
                            <svg class="icon icon-arrow-bottom">
                                <use xlink:href="#icon-arrow-bottom"></use>
                            </svg>
                        </div>
                    </a>
                </div>
                <div class="main__bg">
                    <HomeBanner></HomeBanner>

                </div>
                <div class="main__cards">
                    <a class="main__card" href="exchange.html">
                        <div class="main__icon">
                            <img src="../assets/img/content/currency/bitcoin.svg" alt="Bitcoin">
                        </div>
                        <div class="main__details">
                            <div class="main__line">
                                <div class="main__subtitle">BTC/USDT</div>
                                <div class="main__negative">-0.79% </div>
                            </div>
                            <div class="main__price">36,641.20</div>
                            <div class="main__money">36,641.20</div>
                        </div>
                    </a><a class="main__card" href="exchange.html">
                        <div class="main__icon"><img src="../assets/img/content/currency/chainlink.svg" alt="Chainlink">
                        </div>
                        <div class="main__details">
                            <div class="main__line">
                                <div class="main__subtitle">BTC/USDT</div>
                                <div class="main__positive">+0.79%</div>
                            </div>
                            <div class="main__price">36,641.20</div>
                            <div class="main__money">36,641.20</div>
                        </div>
                    </a><a class="main__card" href="exchange.html">
                        <div class="main__icon"><img src="../assets/img/content/currency/monero.svg" alt="Monero"></div>
                        <div class="main__details">
                            <div class="main__line">
                                <div class="main__subtitle">BTC/USDT</div>
                                <div class="main__positive">+0.79%</div>
                            </div>
                            <div class="main__price">36,641.20</div>
                            <div class="main__money">36,641.20</div>
                        </div>
                    </a><a class="main__card" href="exchange.html">
                        <div class="main__icon"><img src="../assets/img/content/currency/maid.svg" alt="Maid"></div>
                        <div class="main__details">
                            <div class="main__line">
                                <div class="main__subtitle">BTC/USDT</div>
                                <div class="main__positive">+0.79%</div>
                            </div>
                            <div class="main__price">36,641.20</div>
                            <div class="main__money">36,641.20</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="section trend">
            <div class="trend__center center">
                <div class="trend__line">
                    <h2 class="trend__title h2">Market</h2>
                    <RouterLink to="/market" class="button-stroke trend__button">View
                        more</RouterLink>
                </div>

                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>

                    <Script type="text/javascript"
                        src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
                        {
                                                      "width": "100%",
                                                      "height": "750",
                                                      "defaultColumn": "overview",
                                                      "screener_type": "crypto_mkt",
                                                      "displayCurrency": "USD",
                                                      "colorTheme": "dark",
                                                      "locale": "en",
                                                      "isTransparent":true
                                                    }
                    </Script>
                </div>
                <!-- TradingView Widget END -->

            </div>
        </div>
        <div class="section-bg section-mb0 popular">
            <div class="popular__center center">
                <div class="popular__head">
                    <h2 class="popular__title h2">Become a crypto trader in seconds</h2>
                    <div class="popular__info">We've got everything you need to start trading.</div>
                </div>
                <div class="popular__wrapper">
                    <div class="popular__slider js-slider-popular">
                        <div class="popular__item">
                            <div class="popular__preview">
                                <img srcSet="../assets/img/content/card-pic-1@2x.png 2x"
                                    src="../assets/img/content/card-pic-1.png" alt="Card">
                            </div>
                            <div class="popular__subtitle">Buy & Sell Crypto</div>
                            <div class="popular__content">We realize ideas from simple to complex, everything becomes
                                easy to use and
                                reach the most potential customers.</div><a
                                class="button-stroke button-small popular__button" href="buy-crypto.html">Buy crypto</a>
                        </div>
                        <div class="popular__item">
                            <div class="popular__preview"><img srcSet="../assets/img/content/card-pic-2@2x.png 2x"
                                    src="../assets/img/content/card-pic-2.png" alt="Card"></div>
                            <div class="popular__subtitle">Trade Assets</div>
                            <div class="popular__content">We realize ideas from simple to complex, everything becomes
                                easy to use and
                                reach the most potential customers.</div><a
                                class="button-stroke button-small popular__button" href="exchange.html">Trade now</a>
                        </div>
                        <div class="popular__item">
                            <div class="popular__preview"><img srcSet="../assets/img/content/card-pic-3@2x.png 2x"
                                    src="../assets/img/content/card-pic-3.png" alt="Card"></div>
                            <div class="popular__subtitle">Learn crypto</div>
                            <div class="popular__content">We realize ideas from simple to complex, everything becomes
                                easy to use and
                                reach the most potential customers.</div><a
                                class="button-stroke button-small popular__button" href="learn-crypto.html">Learn
                                now</a>
                        </div>
                    </div>
                </div>
                <div class="popular__btns"><a class="button popular__button" href="contact.html">Contact Us</a></div>
            </div>
        </div>
        <div class="section-mb0 download">
            <div class="download__center center">
                <div class="download__bg"><img srcSet="../assets/img/content/download-pic@2x.png 2x"
                        src="../assets/img/content/download-pic.png" alt="Download"></div>
                <div class="download__wrap">
                    <h2 class="download__title h2">Trade anywhere</h2>
                    <div class="download__info">Anytime, anywhere. Trade crypto on your terms.</div>
                    <div class="download__list"><a class="download__item" href="#">
                            <div class="download__icon"><img src="../assets/img/content/apple.svg" alt="Logo"></div>
                            <div class="download__details">
                                <div class="download__content">Download from</div>
                                <div class="download__subtitle">Appstore</div>
                            </div>
                        </a><a class="download__item" href="#">
                            <div class="download__icon"><img src="../assets/img/content/google-play.svg" alt="Logo">
                            </div>
                            <div class="download__details">
                                <div class="download__content">Download from</div>
                                <div class="download__subtitle">Google Play</div>
                            </div>
                        </a><a class="download__item" href="#">
                            <div class="download__icon"><img src="../assets/img/content/apple.svg" alt="Logo"></div>
                            <div class="download__details">
                                <div class="download__content">Download for</div>
                                <div class="download__subtitle">Mac OS</div>
                            </div>
                        </a></div>
                </div>
            </div>
        </div>
        <div class="section-bg news">
            <div class="news__center center">
                <div class="news__head">
                    <div class="news__logo"><img class="some-icon" src="../assets/img/logo-light.svg" alt="BitCloud"><img
                            class="some-icon-dark" src="../assets/img/logo-dark.svg" alt="BitCloud">
                    </div>
                    <h2 class="news__title h2">Stay in the know on crypto with BitCloud</h2>
                    <div class="news__info">A creative agency that lead and inspire</div>
                </div>
                <div class="news__wrapper">
                    <div class="news__slider js-slider-news">
                        <div class="news__item">
                            <div class="news__preview"><img srcSet="../assets/img/content/news-pic-1@2x.png 2x"
                                    src="../assets/img/content/news-pic-1.png" alt="Card"></div>
                            <div class="news__wrap">
                                <div class="stage-small news__stage">crypto news</div>
                                <div class="news__subtitle">Be Part of our Global Community</div>
                                <div class="news__content">Let’s stay in touch. Join our communities to keep up with the
                                    BitCloud team
                                    and our traders from across the world.</div><a
                                    class="button-stroke button-small news__button" href="learn-crypto-details.html">Join
                                    now</a>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__preview"><img srcSet="../assets/img/content/news-pic-1@2x.png 2x"
                                    src="../assets/img/content/news-pic-1.png" alt="Card"></div>
                            <div class="news__wrap">
                                <div class="stage-small news__stage">crypto news</div>
                                <div class="news__subtitle">Be Part of our Global Community</div>
                                <div class="news__content">Let’s stay in touch. Join our communities to keep up with the
                                    BitCloud team
                                    and our traders from across the world.</div><a
                                    class="button-stroke button-small news__button" href="learn-crypto-details.html">Join
                                    now</a>
                            </div>
                        </div>
                        <div class="news__item">
                            <div class="news__preview"><img srcSet="../assets/img/content/news-pic-1@2x.png 2x"
                                    src="../assets/img/content/news-pic-1.png" alt="Card"></div>
                            <div class="news__wrap">
                                <div class="stage-small news__stage">crypto news</div>
                                <div class="news__subtitle">Be Part of our Global Community</div>
                                <div class="news__content">Let’s stay in touch. Join our communities to keep up with the
                                    BitCloud team
                                    and our traders from across the world.</div><a
                                    class="button-stroke button-small news__button" href="learn-crypto-details.html">Join
                                    now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section steps">
            <div class="steps__center center">
                <div class="steps__head">
                    <h2 class="steps__title h2">How it works</h2>
                    <div class="steps__info">Stacks is a production-ready library of stackable content blocks built in
                        React
                        Native.</div>
                </div>
                <div class="steps__list">
                    <div class="steps__item">
                        <div class="steps__preview"><img srcSet="../assets/img/content/step-1@2x.png 2x"
                                src="../assets/img/content/step-1.png" alt="Step 1"></div>
                        <div class="steps__number">Step 1</div>
                        <div class="steps__subtitle">Download</div>
                        <div class="steps__content">Stacks is a production-ready library of stackable content blocks
                            built in React
                            Native.</div>
                    </div>
                    <div class="steps__item">
                        <div class="steps__preview"><img srcSet="../assets/img/content/step-2@2x.png 2x"
                                src="../assets/img/content/step-2.png" alt="Step 1"></div>
                        <div class="steps__number">Step 2</div>
                        <div class="steps__subtitle">Connect wallet</div>
                        <div class="steps__content">Stacks is a production-ready library of stackable content blocks
                            built in React
                            Native.</div>
                    </div>
                    <div class="steps__item">
                        <div class="steps__preview"><img srcSet="../assets/img/content/step-3@2x.png 2x"
                                src="../assets/img/content/step-3.png" alt="Step 1"></div>
                        <div class="steps__number">Step 3</div>
                        <div class="steps__subtitle">Start trading</div>
                        <div class="steps__content">Stacks is a production-ready library of stackable content blocks
                            built in React
                            Native.</div>
                    </div>
                    <div class="steps__item">
                        <div class="steps__preview"><img srcSet="../assets/img/content/step-4@2x.png 2x"
                                src="../assets/img/content/step-4.png" alt="Step 1"></div>
                        <div class="steps__number">Step 4</div>
                        <div class="steps__subtitle">Earn money</div>
                        <div class="steps__content">Stacks is a production-ready library of stackable content blocks
                            built in React
                            Native.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style >
.home__banner {
    position: relative;
}

.main__bg {
    position: absolute;
    top: 0;
    right: 5%;
    width: 40%;
    pointer-events: none;
}

.main_top_home {
    padding-top: 110px;
}

.main__wrap__home {
    padding-top: 90px;
}
</style>
  