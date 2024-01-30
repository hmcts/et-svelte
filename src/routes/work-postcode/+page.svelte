<script>
    import { fly } from 'svelte/transition'
</script>
<div in:fly="{{key: 'work-postcode', duration:500, x:-500}}">
<main class="govuk-main-wrapper " id="main-content" role="main">
    <div class="govuk-grid-row ">
        <div class="govuk-grid-column-two-thirds">
            <h1 class="govuk-heading-xl govuk-!-margin-bottom-6">What’s the postcode where you worked or work?</h1>
            <p class="govuk-body ">This will decide which Employment Tribunal office deals with your claim. If you
                worked at home, enter your home postcode.</p>
            <p class="govuk-body govuk-!-margin-bottom-6">If you’re claiming against someone you did not work for, enter
                the postcode of where they are based.</p>
            <form class="form" id="main-form" method="post" action="" novalidate="true">
                <input type="hidden" name="_csrf" value=po0CA5MA-WqCjoXtyBKDXgnCFtmOXkZhfAkk>
                <div class="govuk-form-group workPostcode">
                    <label class="govuk-label govuk-label--m" for="workPostcode">
                        Postcode
                    </label>
                    <input class="govuk-input govuk-!-width-one-half" id="workPostcode" name="workPostcode" type="text">
                </div>
                <div class="govuk-button-group">
                    <a href="/lip-or-representative" class="govuk-button" data-module="govuk-button">
                        Continue
                    </a>
                </div>
            </form>
        </div>
    </div>
</main>
<div class="govuk-width-container">
    <details class="govuk-details" data-module="govuk-details">
        <summary class="govuk-details__summary">
          <span id="contact-us-dropdown-link" class="govuk-details__summary-text">
            Contact us
          </span>
        </summary>
        <div class="govuk-details__text">
            Call one of our Employment Tribunal customer contact centres. They cannot give you legal advice.
            <br><br>
            Monday to Friday, 9am to 5pm<br/>
            Telephone: 0300 123 1024<br/>
            Telephone: 0300 303 5176 (Welsh language)<br/>
            Telephone: 0300 790 6234 (Scotland)<br/>
            Textphone: 18001 0300 123 1024 (England and Wales)<br/>
            Textphone: 18001 0300 790 6234 (Scotland)

            <table>
                <tr>
                    <td>Webchat:</td>
                    <td>(Scotland only)</td>
                </tr>
            </table>
            <br/>
            <a href="https://www.gov.uk/call-charges" class="govuk-link">Find out about call charges</a>
        </div>
    </details>
</div>
</div>
<style>
    :root {
        --govuk-frontend-version: "4.7.0"
    }

    .govuk-link {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-decoration: underline
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

    @media print {
        .govuk-link {
            font-family: sans-serif
        }
    }

    .govuk-link:focus {
        outline: 3px solid rgba(0, 0, 0, 0);
        color: #0b0c0c;
        background-color: #fd0;
        box-shadow: 0 -2px #fd0, 0 4px #0b0c0c;
        text-decoration: none;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone
    }

    .govuk-link:link {
        color: #1d70b8
    }

    .govuk-link:visited {
        color: #4c2c92
    }

    .govuk-link:hover {
        color: #003078
    }

    .govuk-link:active {
        color: #0b0c0c
    }

    .govuk-link:focus {
        color: #0b0c0c
    }

    @media print {
        [href^="https://"].govuk-link:after {
            content: " (" attr(href) ")";
            font-size: 90%;
            word-wrap: break-word
        }
    }

    .govuk-link--no-underline:not(:hover):not(:active) {
        text-decoration: none
    }

    .govuk-heading-xl {
        color: #0b0c0c;
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 32px;
        font-size: 2rem;
        line-height: 1.09375;
        display: block;
        margin-top: 0;
        margin-bottom: 30px
    }

    @media print {
        .govuk-heading-xl {
            color: #000
        }
    }

    @media print {
        .govuk-heading-xl {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-heading-xl {
            font-size: 48px;
            font-size: 3rem;
            line-height: 1.0416666667
        }
    }

    @media print {
        .govuk-heading-xl {
            font-size: 32pt;
            line-height: 1.15
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-heading-xl {
            margin-bottom: 50px
        }
    }

    .govuk-body {
        color: #0b0c0c;
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        margin-top: 0;
        margin-bottom: 15px
    }

    @media print {
        .govuk-body {
            color: #000
        }
    }

    @media print {
        .govuk-body {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-body {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-body {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-body {
            margin-bottom: 20px
        }
    }

    .govuk-button-group {
        margin-bottom: 5px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-align: center;
        align-items: center
    }

    @media (min-width: 40.0625em) {
        .govuk-button-group {
            margin-bottom: 15px
        }
    }

    .govuk-button-group .govuk-button {
        margin-bottom: 17px
    }

    @media (min-width: 40.0625em) {
        .govuk-button-group {
            margin-right: -15px;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -ms-flex-align: baseline;
            align-items: baseline
        }

        .govuk-button-group .govuk-button {
            margin-right: 15px
        }
    }

    .govuk-form-group {
        margin-bottom: 20px
    }

    .govuk-form-group:after {
        content: "";
        display: block;
        clear: both
    }

    @media (min-width: 40.0625em) {
        .govuk-form-group {
            margin-bottom: 30px
        }
    }

    .govuk-grid-row {
        margin-right: -15px;
        margin-left: -15px
    }

    .govuk-grid-row:after {
        content: "";
        display: block;
        clear: both
    }

    .govuk-grid-column-two-thirds {
        box-sizing: border-box;
        width: 100%;
        padding: 0 15px
    }

    @media (min-width: 40.0625em) {
        .govuk-grid-column-two-thirds {
            width: 66.6666666667%;
            float: left
        }
    }

    .govuk-main-wrapper {
        display: block;
        padding-top: 20px;
        padding-bottom: 20px
    }

    @media (min-width: 40.0625em) {
        .govuk-main-wrapper {
            padding-top: 40px;
            padding-bottom: 40px
        }
    }

    @supports (position: -webkit-sticky) or (position: sticky) {
        .govuk-template:not(:has(.govuk-exit-this-page)) {
            scroll-padding-top: 0
        }
    }

    .govuk-width-container {
        max-width: 960px;
        margin-right: 15px;
        margin-left: 15px
    }

    @supports (margin: max(calc(0px))) {
        .govuk-width-container {
            margin-right: max(15px, calc(15px + env(safe-area-inset-right)));
            margin-left: max(15px, calc(15px + env(safe-area-inset-left)))
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-width-container {
            margin-right: 30px;
            margin-left: 30px
        }

        @supports (margin: max(calc(0px))) {
            .govuk-width-container {
                margin-right: max(30px, calc(15px + env(safe-area-inset-right)));
                margin-left: max(30px, calc(15px + env(safe-area-inset-left)))
            }
        }
    }

    @media (min-width: 1020px) {
        .govuk-width-container {
            margin-right: auto;
            margin-left: auto
        }

        @supports (margin: max(calc(0px))) {
            .govuk-width-container {
                margin-right: auto;
                margin-left: auto
            }
        }
    }

    @supports (content-visibility: hidden) {
    }

    @supports (border-width: max(0px)) {
    }

    @supports (border-width: max(0px)) {
    }

    .govuk-button {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.1875;
        box-sizing: border-box;
        display: inline-block;
        position: relative;
        width: 100%;
        margin-top: 0;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 22px;
        padding: 8px 10px 7px;
        border: 2px solid rgba(0, 0, 0, 0);
        border-radius: 0;
        color: #fff;
        background-color: #00703c;
        box-shadow: 0 2px 0 #002d18;
        text-align: center;
        vertical-align: top;
        cursor: pointer;
        -webkit-appearance: none
    }

    @media print {
        .govuk-button {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-button {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1
        }
    }

    @media print {
        .govuk-button {
            font-size: 14pt;
            line-height: 19px
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-button {
            margin-bottom: 32px
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-button {
            width: auto
        }
    }

    .govuk-button:link, .govuk-button:visited, .govuk-button:active, .govuk-button:hover {
        color: #fff;
        text-decoration: none
    }

    .govuk-button::-moz-focus-inner {
        padding: 0;
        border: 0
    }

    .govuk-button:hover {
        background-color: #005a30
    }

    .govuk-button:active {
        top: 2px
    }

    .govuk-button:focus {
        border-color: #fd0;
        outline: 3px solid rgba(0, 0, 0, 0);
        box-shadow: inset 0 0 0 1px #fd0
    }

    .govuk-button:focus:not(:active):not(:hover) {
        border-color: #fd0;
        color: #0b0c0c;
        background-color: #fd0;
        box-shadow: 0 2px 0 #0b0c0c
    }

    .govuk-button:before {
        content: "";
        display: block;
        position: absolute;
        top: -2px;
        right: -2px;
        bottom: -4px;
        left: -2px;
        background: rgba(0, 0, 0, 0)
    }

    .govuk-button:active:before {
        top: -4px
    }

    @supports not (caret-color: auto) {
    }

    .govuk-label {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        color: #0b0c0c;
        display: block;
        margin-bottom: 5px
    }

    @media print {
        .govuk-label {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-label {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-label {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    @media print {
        .govuk-label {
            color: #000
        }
    }

    .govuk-label--m {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 18px;
        font-size: 1.125rem;
        line-height: 1.1111111111;
        margin-bottom: 10px
    }

    @media print {
        .govuk-label--m {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-label--m {
            font-size: 24px;
            font-size: 1.5rem;
            line-height: 1.25
        }
    }

    @media print {
        .govuk-label--m {
            font-size: 18pt;
            line-height: 1.15
        }
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

    .govuk-input {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        height: 2.5rem;
        margin-top: 0;
        padding: 5px;
        border: 2px solid #0b0c0c;
        border-radius: 0;
        -webkit-appearance: none;
        appearance: none
    }

    @media print {
        .govuk-input {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-input {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-input {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    .govuk-input:focus {
        outline: 3px solid #fd0;
        outline-offset: 0;
        box-shadow: inset 0 0 0 2px
    }

    .govuk-input:disabled {
        opacity: .5;
        color: inherit;
        background-color: rgba(0, 0, 0, 0);
        cursor: not-allowed
    }

    .govuk-input::-webkit-outer-spin-button, .govuk-input::-webkit-inner-spin-button {
        margin: 0;
        -webkit-appearance: none
    }

    @supports (font-variant-numeric: tabular-nums) {
    }

    .govuk-details {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        color: #0b0c0c;
        margin-bottom: 20px;
        display: block
    }

    @media print {
        .govuk-details {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-details {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-details {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    @media print {
        .govuk-details {
            color: #000
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-details {
            margin-bottom: 30px
        }
    }

    .govuk-details__summary {
        display: inline-block;
        position: relative;
        margin-bottom: 5px;
        padding-left: 25px;
        color: #1d70b8;
        cursor: pointer
    }

    .govuk-details__summary:hover {
        color: #003078
    }

    .govuk-details__summary:focus {
        outline: 3px solid rgba(0, 0, 0, 0);
        color: #0b0c0c;
        background-color: #fd0;
        box-shadow: 0 -2px #fd0, 0 4px #0b0c0c;
        text-decoration: none;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone
    }

    .govuk-details__summary-text {
        text-decoration: underline
    }

    .govuk-details__summary:focus .govuk-details__summary-text {
        text-decoration: none
    }

    .govuk-details__summary::-webkit-details-marker {
        display: none
    }

    .govuk-details__summary:before {
        content: "";
        position: absolute;
        top: -1px;
        bottom: 0;
        left: 0;
        margin: auto;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0);
        -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
        border-width: 7px 0 7px 12.124px;
        border-left-color: inherit
    }

    .govuk-details__text {
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 20px;
        border-left: 5px solid #b1b4b6
    }

    .govuk-details__text > :last-child {
        margin-bottom: 0
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

    .govuk-\!-margin-bottom-6 {
        margin-bottom: 20px !important
    }

    @media (min-width: 40.0625em) {
        .govuk-\!-margin-bottom-6 {
            margin-bottom: 30px !important
        }
    }

    .govuk-\!-width-one-half {
        width: 100% !important
    }

    @media (min-width: 40.0625em) {
        .govuk-\!-width-one-half {
            width: 50% !important
        }
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
</style>
