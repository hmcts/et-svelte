<script>
    import Banner from './banner.svelte';
    import Phasebanner from './phasebanner.svelte';
    import Footer from './footer.svelte';
</script>

<svelte:head>
    <meta charset="utf-8">
    <title>Onboarding - Employment Tribunals - GOV.UK</title>
</svelte:head>
<div class="govuk-template__body">
    <Banner/>
    <div class="govuk-width-container">
        <Phasebanner/>
            <slot />
        </div>
    </div>
    <Footer/>
<style>:root {
    --govuk-frontend-version: "4.7.0"
}

.govuk-width-container {
    max-width: 960px;
    margin-right: auto;
    margin-left: auto;
}

.govuk-template__body {
    margin: 0;
    background-color: #fff;
}

/*! Copyright (c) 2011 by Margaret Calvert & Henrik Kubel. All rights reserved. The font has been customised for exclusive use on gov.uk. This cut is not commercially available. */
@font-face {
    font-family: "GDS Transport";
    font-style: normal;
    font-weight: normal;
    font-display: fallback
}

@font-face {
    font-family: "GDS Transport";
    font-style: normal;
    font-weight: bold;
    font-display: fallback
}


.govuk-template__body {
    margin: 0;
    background-color: #fff
}

@supports (margin: max(calc(0px))) {
}

@media (min-width: 40.0625em) {
    @supports (margin: max(calc(0px))) {
    }
}

@media (min-width: 1020px) {
    @supports (margin: max(calc(0px))) {
    }
}

@supports (content-visibility: hidden) {
}

@supports (border-width: max(0px)) {
}

@supports (border-width: max(0px)) {
}

.govuk-button:focus:not(:active):not(:hover) {
    border-color: #fd0;
    color: #0b0c0c;
    background-color: #fd0;
    box-shadow: 0 2px 0 #0b0c0c
}

@supports not (caret-color: auto) {
}

.govuk-checkboxes--small .govuk-checkboxes__item:hover .govuk-checkboxes__input:not(:disabled) + .govuk-checkboxes__label:before {
    box-shadow: 0 0 0 10px #b1b4b6
}

@media (hover: none),(pointer: coarse) {
    .govuk-checkboxes--small .govuk-checkboxes__item:hover .govuk-checkboxes__input:not(:disabled) + .govuk-checkboxes__label:before {
        box-shadow: initial
    }
}

@supports (font-variant-numeric: tabular-nums) {
}

@supports (font-variant-numeric: tabular-nums) {
}

.govuk-pagination--block .govuk-pagination__link:not(:focus) {
    text-decoration: none
}

.govuk-radios--small .govuk-radios__item:hover .govuk-radios__input:not(:disabled) + .govuk-radios__label:before {
    box-shadow: 0 0 0 10px #b1b4b6
}

@media (hover: none),(pointer: coarse) {
    .govuk-radios--small .govuk-radios__item:hover .govuk-radios__input:not(:disabled) + .govuk-radios__label:before {
        box-shadow: initial
    }
}

@supports (padding: max(calc(0px))) {
}

@supports (font-variant-numeric: tabular-nums) {
}

@media only screen and (max-device-width: 760px) {
    * {
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto
    }
}

@media screen and (max-device-width: 760px) {
    * {
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto
    }
}

@media screen and (max-width: 760px) {
    * {
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto
    }
}

/*# sourceMappingURL=main.8c2c768c5843e4e4064d.css.map*/
</style>
