<script>
    import { slide } from 'svelte/transition'
</script>

<div in:slide="{{key: 'checklist', duration:500}}">
    <main class="govuk-main-wrapper " id="main-content" role="main">
        <div class="govuk-panel govuk-panel--interruption">
            <h1 class="govuk-heading-l">Before you continue</h1>
            <div class="govuk-panel__body ">
                <p class="govuk-body-m govuk-!-font-weight-bold">You’ll have the opportunity to provide detailed
                    information about your claim, but you might want to have the minimum required information to
                    hand:</p>
                <ul class="govuk-list">
                    <li>
                        <span class="circle circle-step circle-white">1</span>
                        <p class="govuk-body-m govuk-!-font-weight-bold govuk-!-margin-left-7">The name and address of
                            each claimant (you or the person you’re claiming for)</p>
                    </li>

                    <li>
                        <span class="circle circle-step circle-white">2</span>
                        <p class="govuk-body-m govuk-!-font-weight-bold govuk-!-margin-left-7">Name and address of each
                            respondent you’re making the claim against - this can be found in any letter you received
                            offering you the job, a contract of employment or payslips</p>
                    </li>
                    <li>
                        <span class="circle circle-step circle-white">3</span>
                        <p class="govuk-body-m govuk-!-font-weight-bold govuk-!-margin-left-7">Certificate number from
                            the Acas early conciliation process for each respondent, or explain why you do not have
                            one</p>
                    </li>
                </ul>
                <p class="govuk-body-m govuk-!-font-weight-bold">You do not have to complete your claim in one session.
                    You can save your progress and return to the claim at any time before submitting.</p>
            </div>
        </div>
        <div class="govuk-grid-row">
            <div class="govuk-grid-column-full">
                <a href="/work-postcode" role="button" draggable="false" class="govuk-button"
                   data-module="govuk-button">
                    Continue
                </a>
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

    .govuk-list {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        color: #0b0c0c;
        margin-top: 0;
        margin-bottom: 15px;
        padding-left: 0;
        list-style-type: none
    }

    @media print {
        .govuk-list {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-list {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-list {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    @media print {
        .govuk-list {
            color: #000
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-list {
            margin-bottom: 20px
        }
    }

    .govuk-list > li {
        margin-bottom: 5px
    }

    .govuk-heading-l {
        color: #0b0c0c;
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.0416666667;
        display: block;
        margin-top: 0;
        margin-bottom: 20px
    }

    @media print {
        .govuk-heading-l {
            color: #000
        }
    }

    @media print {
        .govuk-heading-l {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-heading-l {
            font-size: 36px;
            font-size: 2.25rem;
            line-height: 1.1111111111
        }
    }

    @media print {
        .govuk-heading-l {
            font-size: 24pt;
            line-height: 1.05
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-heading-l {
            margin-bottom: 30px
        }
    }

    .govuk-body-m {
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
        .govuk-body-m {
            color: #000
        }
    }

    @media print {
        .govuk-body-m {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-body-m {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-body-m {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-body-m {
            margin-bottom: 20px
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

    .govuk-grid-column-full {
        box-sizing: border-box;
        width: 100%;
        padding: 0 15px
    }

    @media (min-width: 40.0625em) {
        .govuk-grid-column-full {
            width: 100%;
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

    .govuk-panel {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        box-sizing: border-box;
        margin-bottom: 15px;
        padding: 35px;
        border: 5px solid rgba(0, 0, 0, 0);
        text-align: center
    }

    @media print {
        .govuk-panel {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-panel {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-panel {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    @media (max-width: 40.0525em) {
        .govuk-panel {
            padding: 10px;
            overflow-wrap: break-word;
            word-wrap: break-word
        }
    }

    .govuk-panel__body {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.0416666667
    }

    @media print {
        .govuk-panel__body {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-panel__body {
            font-size: 36px;
            font-size: 2.25rem;
            line-height: 1.1111111111
        }
    }

    @media print {
        .govuk-panel__body {
            font-size: 24pt;
            line-height: 1.05
        }
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

    .govuk-\!-margin-left-7 {
        margin-left: 25px !important
    }

    @media (min-width: 40.0625em) {
        .govuk-\!-margin-left-7 {
            margin-left: 40px !important
        }
    }

    .govuk-\!-font-weight-bold {
        font-weight: 700 !important
    }

    .govuk-panel--interruption {
        background-color: #1d70b8;
        margin-bottom: 15px;
        padding: 30px
    }

    .govuk-panel--interruption .govuk-panel__body {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 14px;
        font-size: .875rem;
        line-height: 1.1428571429
    }

    @media print {
        .govuk-panel--interruption .govuk-panel__body {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-panel--interruption .govuk-panel__body {
            font-size: 16px;
            font-size: 1rem;
            line-height: 1.25
        }
    }

    @media print {
        .govuk-panel--interruption .govuk-panel__body {
            font-size: 14pt;
            line-height: 1.2
        }
    }

    .govuk-panel--interruption div, .govuk-panel--interruption h1, .govuk-panel--interruption p, .govuk-panel--interruption ul {
        color: #fff;
        text-align: left
    }

    .circle {
        background: #0b0c0c;
        border-radius: 50%;
        color: #fff;
        display: inline-block;
        font-family: "ntatabularnumbers", "nta", Arial, sans-serif;
        font-size: 15px;
        font-weight: bold;
        text-align: center
    }

    .circle-step {
        float: left;
        line-height: 25px;
        margin-right: 10px;
        min-height: 25px;
        min-width: 25px
    }

    .circle-white {
        background: #fff;
        color: #1d70b8
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
