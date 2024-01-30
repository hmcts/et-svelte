<footer class="govuk-footer " role="contentinfo">
    <div class="govuk-width-container ">

        <div class="govuk-footer__meta">
            <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">

                <h2 class="govuk-visually-hidden">Support links</h2>

                <ul class="govuk-footer__inline-list">

                    <li class="govuk-footer__inline-list-item">
                        <a class="govuk-footer__link" href="https://www.gov.uk/help">
                            Help
                        </a>
                    </li>

                    <li class="govuk-footer__inline-list-item">
                        <a class="govuk-footer__link" href="https://www.gov.uk/help/privacy-notice">
                            Privacy
                        </a>
                    </li>

                    <li class="govuk-footer__inline-list-item">
                        <a class="govuk-footer__link" href="https://www.gov.uk/help/cookies">
                            Cookies
                        </a>
                    </li>

                    <li class="govuk-footer__inline-list-item">
                        <a class="govuk-footer__link" href="/accessibility">
                            Accessibility Statement
                        </a>
                    </li>

                    <li class="govuk-footer__inline-list-item">
                        <a class="govuk-footer__link"
                           href="https://www.gov.uk/guidance/employment-tribunal-offices-and-venues">
                            Contact
                        </a>
                    </li>

                    <li class="govuk-footer__inline-list-item">
                        <a class="govuk-footer__link" href="https://www.gov.uk/help/terms-conditions">
                            Terms and Conditions
                        </a>
                    </li>

                    <li class="govuk-footer__inline-list-item">
                        <a class="govuk-footer__link" href="https://www.gov.uk/cymraeg">
                            Rhestr o Wasanaethau Cymraeg
                        </a>
                    </li>

                    <li class="govuk-footer__inline-list-item">
                        <a class="govuk-footer__link"
                           href="https://www.gov.uk/government/organisations/government-digital-service">
                            Government Digital Service
                        </a>
                    </li>

                </ul>


                <svg
                        aria-hidden="true"
                        focusable="false"
                        class="govuk-footer__licence-logo"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 483.2 195.7"
                        height="17"
                        width="41"
                >
                    <path
                            fill="currentColor"
                            d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
                    />
                </svg>
                <span class="govuk-footer__licence-description">

            All content is available under the
            <a
                    class="govuk-footer__link"
                    href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                    rel="license"
            >Open Government Licence v3.0</a>, except where otherwise stated

        </span>
            </div>
            <div class="govuk-footer__meta-item">
                <a
                        class="govuk-footer__link govuk-footer__copyright-logo"
                        href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
                >© Crown copyright</a>
            </div>
        </div>
    </div>
</footer>

<style>
    :root {
        --govuk-frontend-version: "4.7.0"
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

    .govuk-link--no-underline:not(:hover):not(:active) {
        text-decoration: none
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

    .govuk-footer {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 14px;
        font-size: .875rem;
        line-height: 1.1428571429;
        padding-top: 25px;
        padding-bottom: 15px;
        border-top: 1px solid #b1b4b6;
        color: #0b0c0c;
        background: #f3f2f1
    }

    @media print {
        .govuk-footer {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-footer {
            font-size: 16px;
            font-size: 1rem;
            line-height: 1.25
        }
    }

    @media print {
        .govuk-footer {
            font-size: 14pt;
            line-height: 1.2
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-footer {
            padding-top: 40px
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-footer {
            padding-bottom: 25px
        }
    }

    .govuk-footer__link {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-decoration: underline
    }

    @media print {
        .govuk-footer__link {
            font-family: sans-serif
        }
    }

    .govuk-footer__link:focus {
        outline: 3px solid rgba(0, 0, 0, 0);
        color: #0b0c0c;
        background-color: #fd0;
        box-shadow: 0 -2px #fd0, 0 4px #0b0c0c;
        text-decoration: none;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone
    }

    .govuk-footer__link:link, .govuk-footer__link:visited {
        color: #0b0c0c
    }

    @media print {
        .govuk-footer__link:link, .govuk-footer__link:visited {
            color: #000
        }
    }

    .govuk-footer__link:hover {
        color: rgba(11, 12, 12, .99)
    }

    .govuk-footer__link:active, .govuk-footer__link:focus {
        color: #0b0c0c
    }

    @media print {
        .govuk-footer__link:active, .govuk-footer__link:focus {
            color: #000
        }
    }

    .govuk-footer__meta {
        display: -ms-flexbox;
        display: flex;
        margin-right: -15px;
        margin-left: -15px;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: end;
        align-items: flex-end;
        -ms-flex-pack: center;
        justify-content: center
    }

    .govuk-footer__meta-item {
        margin-right: 15px;
        margin-bottom: 25px;
        margin-left: 15px
    }

    .govuk-footer__meta-item--grow {
        -ms-flex: 1;
        flex: 1
    }

    @media (max-width: 40.0525em) {
        .govuk-footer__meta-item--grow {
            -ms-flex-preferred-size: 320px;
            flex-basis: 320px
        }
    }

    .govuk-footer__licence-logo {
        display: inline-block;
        margin-right: 10px;
        vertical-align: top;
        forced-color-adjust: auto
    }

    @media (max-width: 48.0525em) {
        .govuk-footer__licence-logo {
            margin-bottom: 15px
        }
    }

    .govuk-footer__licence-description {
        display: inline-block
    }

    .govuk-footer__copyright-logo {
        display: inline-block;
        min-width: 125px;
        padding-top: 112px;
        background-repeat: no-repeat;
        background-position: 50% 0%;
        background-size: 125px 102px;
        text-align: center;
        white-space: nowrap
    }



    .govuk-footer__inline-list {
        margin-top: 0;
        margin-bottom: 15px;
        padding: 0
    }

    .govuk-footer__inline-list-item {
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 5px
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

    .govuk-visually-hidden {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        clip: rect(0 0 0 0) !important;
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
        border: 0 !important;
        white-space: nowrap !important
    }

    .govuk-visually-hidden:before {
        content: " "
    }

    .govuk-visually-hidden:after {
        content: " "
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
