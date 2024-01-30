<script>
    import {fly} from 'svelte/transition';
</script>

<div in:fly="{{key: 'single-or-multiple-claim', x:-500}}">
    <main class="govuk-main-wrapper " id="main-content" role="main">
        <form class="form" id="main-form" method="post" action="" novalidate="true">
            <input type="hidden" name="_csrf" value=acnafQnu-KHXC0i-6oj8FmFS82nbBfNoW6i0>
            <div class="govuk-form-group typeOfClaim">
                <fieldset class="govuk-fieldset" aria-describedby="typeOfClaim-hint">
                    <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
                        <h1 class="govuk-fieldset__heading">
                            What type of claim are you making?
                        </h1>

                    </legend>


                    <div id="typeOfClaim-hint" class="govuk-hint">
                        You can choose all that apply to you. Further information will be asked for later in the claim.
                        <br><br><span
                            class="govuk-!-font-weight">Select all that apply </span>
                    </div>


                    <div class="govuk-checkboxes"
                         data-module="govuk-checkboxes">


                        <div class="govuk-checkboxes__item">
                            <input class="govuk-checkboxes__input" id="breachOfContract" name="typeOfClaim"
                                   type="checkbox"
                                   value="breachOfContract">
                            <label class="govuk-label govuk-checkboxes__label" for="breachOfContract">
                                Breach of contract - including notice pay
                            </label>

                        </div>


                        <div class="govuk-checkboxes__item">
                            <input class="govuk-checkboxes__input" id="discrimination" name="typeOfClaim"
                                   type="checkbox"
                                   value="discrimination" aria-describedby="discrimination-item-hint">
                            <label class="govuk-label govuk-checkboxes__label" for="discrimination">
                                Discrimination of any type
                            </label>

                            <div id="discrimination-item-hint" class="govuk-hint govuk-checkboxes__hint">
                                for example because of your sex, ethnicity, disability or other characteristic
                            </div>

                        </div>


                        <div class="govuk-checkboxes__item">
                            <input class="govuk-checkboxes__input" id="payRelatedClaim" name="typeOfClaim"
                                   type="checkbox"
                                   value="payRelated">
                            <label class="govuk-label govuk-checkboxes__label" for="payRelatedClaim">
                                Pay-related claim
                            </label>

                        </div>


                        <div class="govuk-checkboxes__item">
                            <input class="govuk-checkboxes__input" id="unfairDismissal" name="typeOfClaim"
                                   type="checkbox"
                                   value="unfairDismissal" aria-describedby="unfairDismissal-item-hint">
                            <label class="govuk-label govuk-checkboxes__label" for="unfairDismissal">
                                Unfair dismissal
                            </label>

                            <div id="unfairDismissal-item-hint" class="govuk-hint govuk-checkboxes__hint">
                                including constructive dismissal
                            </div>

                        </div>


                        <div class="govuk-checkboxes__item">
                            <input class="govuk-checkboxes__input" id="whistleBlowing" name="typeOfClaim"
                                   type="checkbox"
                                   value="whistleBlowing" aria-describedby="whistleBlowing-item-hint">
                            <label class="govuk-label govuk-checkboxes__label" for="whistleBlowing">
                                Whistleblowing
                            </label>

                            <div id="whistleBlowing-item-hint" class="govuk-hint govuk-checkboxes__hint">
                                including dismissal or any other unfair treatment after whistleblowing
                            </div>

                        </div>


                        <div class="govuk-checkboxes__item">
                            <input class="govuk-checkboxes__input" id="otherTypes" name="typeOfClaim" type="checkbox"
                                   value="otherTypesOfClaims" data-aria-controls="conditional-otherTypes">
                            <label class="govuk-label govuk-checkboxes__label" for="otherTypes">
                                Other type of claim
                            </label>

                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="govuk-button-group">
                <a href="/steps-to-making-your-claim" class="govuk-button">
                    Continue
                </a>
            </div>
        </form>
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

    .govuk-fieldset {
        min-width: 0;
        margin: 0;
        padding: 0;
        border: 0
    }

    .govuk-fieldset:after {
        content: "";
        display: block;
        clear: both
    }

    @supports not (caret-color: auto) {
        .govuk-fieldset {
            display: table-cell
        }
    }

    .govuk-fieldset__legend {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        color: #0b0c0c;
        box-sizing: border-box;
        display: table;
        max-width: 100%;
        margin-bottom: 10px;
        padding: 0;
        white-space: normal
    }

    @media print {
        .govuk-fieldset__legend {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-fieldset__legend {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-fieldset__legend {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    @media print {
        .govuk-fieldset__legend {
            color: #000
        }
    }

    .govuk-fieldset__legend--xl {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 32px;
        font-size: 2rem;
        line-height: 1.09375;
        margin-bottom: 15px
    }

    @media print {
        .govuk-fieldset__legend--xl {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-fieldset__legend--xl {
            font-size: 48px;
            font-size: 3rem;
            line-height: 1.0416666667
        }
    }

    @media print {
        .govuk-fieldset__legend--xl {
            font-size: 32pt;
            line-height: 1.15
        }
    }

    .govuk-fieldset__heading {
        margin: 0;
        font-size: inherit;
        font-weight: inherit
    }

    .govuk-hint {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        margin-bottom: 15px;
        color: #505a5f
    }

    @media print {
        .govuk-hint {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-hint {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-hint {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    .govuk-label:not(.govuk-label--m):not(.govuk-label--l):not(.govuk-label--xl) + .govuk-hint {
        margin-bottom: 10px
    }

    .govuk-fieldset__legend + .govuk-hint {
        margin-top: -5px
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

    .govuk-checkboxes__item {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        display: block;
        position: relative;
        min-height: 40px;
        margin-bottom: 10px;
        padding-left: 40px;
        clear: left
    }

    @media print {
        .govuk-checkboxes__item {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-checkboxes__item {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-checkboxes__item {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    .govuk-checkboxes__input {
        cursor: pointer;
        position: absolute;
        z-index: 1;
        top: -2px;
        left: -2px;
        width: 44px;
        height: 44px;
        margin: 0;
        opacity: 0
    }

    .govuk-checkboxes__label {
        display: inline-block;
        margin-bottom: 0;
        padding: 8px 15px 5px;
        cursor: pointer;
        -ms-touch-action: manipulation;
        touch-action: manipulation
    }

    .govuk-checkboxes__label:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border: 2px solid currentcolor;
        background: rgba(0, 0, 0, 0)
    }

    .govuk-checkboxes__label:after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 11px;
        left: 9px;
        width: 23px;
        height: 12px;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        border: solid;
        border-width: 0 0 5px 5px;
        border-top-color: rgba(0, 0, 0, 0);
        opacity: 0;
        background: rgba(0, 0, 0, 0)
    }

    .govuk-checkboxes__hint {
        display: block;
        padding-right: 15px;
        padding-left: 15px
    }

    .govuk-checkboxes__input:focus + .govuk-checkboxes__label:before {
        border-width: 4px;
        outline: 3px solid rgba(0, 0, 0, 0);
        outline-offset: 1px;
        box-shadow: 0 0 0 3px #fd0
    }

    @media screen and (forced-colors: active),(-ms-high-contrast: active) {
        .govuk-checkboxes__input:focus + .govuk-checkboxes__label:before {
            outline-color: Highlight
        }
    }

    .govuk-checkboxes__input:checked + .govuk-checkboxes__label:after {
        opacity: 1
    }

    .govuk-checkboxes__input:disabled, .govuk-checkboxes__input:disabled + .govuk-checkboxes__label {
        cursor: not-allowed
    }

    .govuk-checkboxes__input:disabled + .govuk-checkboxes__label, .govuk-checkboxes__input:disabled ~ .govuk-hint {
        opacity: .5
    }

    .govuk-checkboxes__conditional {
        margin-bottom: 15px;
        margin-left: 18px;
        padding-left: 33px;
        border-left: 4px solid #b1b4b6
    }

    @media (min-width: 40.0625em) {
        .govuk-checkboxes__conditional {
            margin-bottom: 20px
        }
    }

    .govuk-checkboxes__conditional > :last-child {
        margin-bottom: 0
    }

    .govuk-checkboxes--small .govuk-checkboxes__item:hover .govuk-checkboxes__input:not(:disabled) + .govuk-checkboxes__label:before {
        box-shadow: 0 0 0 10px #b1b4b6
    }

    @media (hover: none),(pointer: coarse) {
        .govuk-checkboxes--small .govuk-checkboxes__item:hover .govuk-checkboxes__input:not(:disabled) + .govuk-checkboxes__label:before {
            box-shadow: initial
        }
    }

    .govuk-textarea {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.25;
        box-sizing: border-box;
        display: block;
        width: 100%;
        min-height: 40px;
        margin-bottom: 20px;
        padding: 5px;
        resize: vertical;
        border: 2px solid #0b0c0c;
        border-radius: 0;
        -webkit-appearance: none
    }

    @media print {
        .govuk-textarea {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-textarea {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.25
        }
    }

    @media print {
        .govuk-textarea {
            font-size: 14pt;
            line-height: 1.25
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-textarea {
            margin-bottom: 30px
        }
    }

    .govuk-textarea:focus {
        outline: 3px solid #fd0;
        outline-offset: 0;
        box-shadow: inset 0 0 0 2px
    }

    .govuk-textarea:disabled {
        opacity: .5;
        color: inherit;
        background-color: rgba(0, 0, 0, 0);
        cursor: not-allowed
    }

    .govuk-character-count {
        margin-bottom: 20px
    }

    @media (min-width: 40.0625em) {
        .govuk-character-count {
            margin-bottom: 30px
        }
    }

    .govuk-character-count .govuk-form-group, .govuk-character-count .govuk-textarea {
        margin-bottom: 5px
    }

    .govuk-character-count__message {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-feature-settings: "tnum" 1;
        font-feature-settings: "tnum" 1;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0
    }

    @media print {
        .govuk-character-count__message {
            font-family: sans-serif
        }
    }

    @supports (font-variant-numeric: tabular-nums) {
        .govuk-character-count__message {
            -webkit-font-feature-settings: normal;
            font-feature-settings: normal;
            font-variant-numeric: tabular-nums
        }
    }

    .govuk-character-count__message:after {
        content: "​"
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
