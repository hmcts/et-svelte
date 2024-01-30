<div class="govuk-phase-banner">
    <p class="govuk-phase-banner__content">
        <strong class="govuk-tag govuk-phase-banner__content__tag">
            beta
        </strong>
        <span class="govuk-phase-banner__text">
      <a class="govuk-link" href="https://www.smartsurvey.co.uk/s/ET_Feedback/?pageurl="
         target="_blank">Your feedback</a> helps us to improve this service.<a href="/?lng=cy"
                                                                               class="govuk-link language">Cymraeg</a>
    </span>
    </p>
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
        [href^="/"].govuk-link:after, [href^="https://"].govuk-link:after {
            content: " (" attr(href) ")";
            font-size: 90%;
            word-wrap: break-word
        }
    }

    .govuk-link--no-underline:not(:hover):not(:active) {
        text-decoration: none
    }

    @supports (position: -webkit-sticky) or (position: sticky) {
        .govuk-template:not(:has(.govuk-exit-this-page)) {
            scroll-padding-top: 0
        }
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

    .govuk-tag {
        display: inline-block;
        outline: 2px solid rgba(0, 0, 0, 0);
        outline-offset: -2px;
        color: #fff;
        background-color: #1d70b8;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 14px;
        font-size: .875rem;
        line-height: 1;
        padding-top: 5px;
        padding-right: 8px;
        padding-bottom: 4px;
        padding-left: 8px
    }

    @media print {
        .govuk-tag {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-tag {
            font-size: 16px;
            font-size: 1rem;
            line-height: 1
        }
    }

    @media print {
        .govuk-tag {
            font-size: 14pt;
            line-height: 1
        }
    }

    .govuk-phase-banner {
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #b1b4b6
    }

    .govuk-phase-banner__content {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 14px;
        font-size: .875rem;
        line-height: 1.1428571429;
        color: #0b0c0c;
        display: table;
        margin: 0
    }

    @media print {
        .govuk-phase-banner__content {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-phase-banner__content {
            font-size: 16px;
            font-size: 1rem;
            line-height: 1.25
        }
    }

    @media print {
        .govuk-phase-banner__content {
            font-size: 14pt;
            line-height: 1.2
        }
    }

    @media print {
        .govuk-phase-banner__content {
            color: #000
        }
    }

    .govuk-phase-banner__content__tag {
        margin-right: 10px
    }

    .govuk-phase-banner__text {
        display: table-cell;
        vertical-align: middle
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

    .govuk-phase-banner__text {
        width: 100%
    }

    .govuk-phase-banner__text .language {
        float: right
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
