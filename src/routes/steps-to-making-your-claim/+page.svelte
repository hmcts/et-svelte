<script>
    import { scale } from 'svelte/transition'
</script>

<div in:scale="{{key: 'steps-to-making-your-claim', duration:500}}">
<main class="govuk-main-wrapper " id="main-content" role="main">
    <div class="govuk-grid-row">
        <div class="govuk-grid-column-two-thirds">
            <h1 class="govuk-heading-xl"> Steps to making your claim </h1>
            <h2 class="govuk-heading-m govuk-!-margin-bottom-4">Application Details </h2>
            <div class="govuk-grid-row">
                <div class="govuk-grid-column-one-third">
                    <p class="govuk-body govuk-!-font-weight-bold">Claim type</p>
                </div>
                <div class="govuk-grid-column-two-thirds">
                    <ul class="govuk-list">
                        <li>Discrimination</li>
                    </ul>
                </div>
            </div>
            <ol class="app-task-list">
                <li>
                    <h2 class="app-task-list__section">
                        <span class="app-task-list__section-number">1. </span> Your details
                    </h2>
                    <ul class="app-task-list__items">
                        <li class="app-task-list__item">
              <span class="app-task-list__task-name--300px">
                  <a href="/dob-details?lng=en">
                  Personal details
                  </a>
              </span>
                            <strong class="govuk-tag app-task-list__tag govuk-tag--grey">
                                NOT STARTED
                            </strong>
                        </li>
                        <li class="app-task-list__item">
              <span class="app-task-list__task-name--300px">
                  <a href="/address-postcode-enter?lng=en">
                  Contact details
                  </a>
              </span>
                            <strong class="govuk-tag app-task-list__tag govuk-tag--grey">
                                NOT STARTED
                            </strong>
                        </li>
                        <li class="app-task-list__item">
              <span class="app-task-list__task-name--300px">
                  <a href="/how-would-you-like-to-be-updated-about-your-claim?lng=en">
                  Your preferences
                  </a>
              </span>
                            <strong class="govuk-tag app-task-list__tag govuk-tag--grey">
                                NOT STARTED
                            </strong>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 class="app-task-list__section">
                        <span class="app-task-list__section-number">2. </span> Employment and respondent details
                    </h2>
                    <ul class="app-task-list__items">
                        <li class="app-task-list__item">
              <span class="app-task-list__task-name--300px">
                  <a href="/past-employer?lng=en">
                  Employment status
                  </a>
              </span>
                            <strong class="govuk-tag app-task-list__tag govuk-tag--grey">
                                NOT STARTED
                            </strong>
                        </li>
                        <li class="app-task-list__item">
              <span class="app-task-list__task-name--300px">
                  <a href="/respondent/1/respondent-name?lng=en">
                  Respondent details
                  </a>
              </span>
                            <strong class="govuk-tag app-task-list__tag govuk-tag--grey">
                                NOT STARTED
                            </strong>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 class="app-task-list__section">
                        <span class="app-task-list__section-number">3. </span> Claim details
                    </h2>
                    <ul class="app-task-list__items">
                        <li class="app-task-list__item">
              <span class="app-task-list__task-name--300px">
                  <a href="/claim-type-discrimination?lng=en">
                  Describe what happened to you
                  </a>
              </span>
                            <strong class="govuk-tag app-task-list__tag govuk-tag--grey">
                                NOT STARTED
                            </strong>
                        </li>
                        <li class="app-task-list__item">
              <span class="app-task-list__task-name--300px">
                  <a href="/tell-us-what-you-want?lng=en">
                  Tell us what you want from your claim
                  </a>
              </span>
                            <strong class="govuk-tag app-task-list__tag govuk-tag--grey">
                                NOT STARTED
                            </strong>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 class="app-task-list__section">
                        <span class="app-task-list__section-number">4. </span> Check and submit
                    </h2>
                    <ul class="app-task-list__items">
                        <li class="app-task-list__item">
              <span class="app-task-list__task-name--300px">
                  Check your answers
              </span>
                            <strong class="govuk-tag app-task-list__tag govuk-tag--grey">
                                CANNOT START YET
                            </strong>
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
    <a href="/your-claim-has-been-saved" role="button" draggable="false" class="govuk-button govuk-button--secondary"
       data-module="govuk-button">
        Save as draft
    </a>
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
                    <td>
                    </td>
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

    .govuk-heading-m {
        color: #0b0c0c;
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 18px;
        font-size: 1.125rem;
        line-height: 1.1111111111;
        display: block;
        margin-top: 0;
        margin-bottom: 15px
    }

    @media print {
        .govuk-heading-m {
            color: #000
        }
    }

    @media print {
        .govuk-heading-m {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-heading-m {
            font-size: 24px;
            font-size: 1.5rem;
            line-height: 1.25
        }
    }

    @media print {
        .govuk-heading-m {
            font-size: 18pt;
            line-height: 1.15
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-heading-m {
            margin-bottom: 20px
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

    .govuk-grid-row {
        margin-right: -15px;
        margin-left: -15px
    }

    .govuk-grid-row:after {
        content: "";
        display: block;
        clear: both
    }

    .govuk-grid-column-one-third {
        box-sizing: border-box;
        width: 100%;
        padding: 0 15px
    }

    @media (min-width: 40.0625em) {
        .govuk-grid-column-one-third {
            width: 33.3333333333%;
            float: left
        }
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

    .govuk-button--secondary {
        background-color: #f3f2f1;
        box-shadow: 0 2px 0 #929191
    }

    .govuk-button--secondary, .govuk-button--secondary:link, .govuk-button--secondary:visited, .govuk-button--secondary:active, .govuk-button--secondary:hover {
        color: #0b0c0c
    }

    .govuk-button--secondary:hover {
        background-color: #dbdad9
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

    .govuk-tag--grey {
        color: #383f43;
        background: #eeefef
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

    .govuk-\!-margin-bottom-4 {
        margin-bottom: 15px !important
    }

    @media (min-width: 40.0625em) {
        .govuk-\!-margin-bottom-4 {
            margin-bottom: 20px !important
        }
    }

    .govuk-\!-font-weight-bold {
        font-weight: 700 !important
    }

    .app-task-list {
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0
    }

    @media (min-width: 40.0625em) {
        .app-task-list {
            min-width: 550px
        }
    }

    .app-task-list__section {
        display: table;
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 18px;
        font-size: 1.125rem;
        line-height: 1.1111111111
    }

    @media print {
        .app-task-list__section {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .app-task-list__section {
            font-size: 24px;
            font-size: 1.5rem;
            line-height: 1.25
        }
    }

    @media print {
        .app-task-list__section {
            font-size: 18pt;
            line-height: 1.15
        }
    }

    .app-task-list__section-number {
        display: table-cell
    }

    @media (min-width: 40.0625em) {
        .app-task-list__section-number {
            min-width: 30px;
            padding-right: 0
        }
    }

    .app-task-list__items {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        margin-bottom: 40px;
        list-style: none;
        padding-left: 0
    }

    @media print {
        .app-task-list__items {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .app-task-list__items {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .app-task-list__items {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    @media (min-width: 40.0625em) {
        .app-task-list__items {
            margin-bottom: 60px
        }
    }

    @media (min-width: 40.0625em) {
        .app-task-list__items {
            padding-left: 30px
        }
    }

    .app-task-list__item {
        border-bottom: 1px solid #b1b4b6;
        margin-bottom: 0 !important;
        padding-top: 10px;
        padding-bottom: 10px
    }

    .app-task-list__item:after {
        content: "";
        display: block;
        clear: both
    }

    .app-task-list__item:first-child {
        border-top: 1px solid #b1b4b6
    }

    .app-task-list__task-name--300px {
        display: block
    }

    @media (min-width: 28.125em) {
        .app-task-list__task-name--300px {
            float: left
        }
    }

    .app-task-list__task-name--300px {
        max-width: 300px;
        word-wrap: break-word
    }

    .app-task-list__tag {
        margin-top: 10px;
        margin-bottom: 5px
    }

    @media (min-width: 28.125em) {
        .app-task-list__tag {
            float: right;
            margin-top: 0;
            margin-bottom: 0
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
