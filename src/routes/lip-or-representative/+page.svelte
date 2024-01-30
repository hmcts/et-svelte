<script>
    import { scale } from 'svelte/transition'
</script>

<div in:scale="{{key: 'lip-or-representative', duration:500}}">
<main class="govuk-main-wrapper " id="main-content" role="main">
    <div class="govuk-grid-row">
        <div class="govuk-grid-column-full">
            <h1 class="govuk-heading-xl govuk-!-margin-bottom-4 ">Claiming on your own or on behalf of someone else</h1>
            <p class="govuk-body ">A representative is someone who can act on your behalf to complete the claim, write
                to the employment tribunal or present your case at a hearing.</p>
            <details class="govuk-details govuk-!-margin-bottom-2" data-module="govuk-details">
                <summary class="govuk-details__summary">
                    <span class="govuk-details__summary-text">Who can act as a representative?</span>
                </summary>
                <div class="govuk-details__text">
                    <p class="govuk-body">Free representation can include:</p>
                    <ul class="govuk-list govuk-list--bullet">
                        <li>friends</li>
                        <li>colleagues</li>
                        <li>family members</li>
                        <li>trade unions (if one is available to you)</li>
                        <li>Citizens Advice advisers</li>
                        <li>advisers from law clinics or law centres</li>
                    </ul>
                    <p class="govuk-body">Paid representation be through legal professionals, including:</p>
                    <ul class="govuk-list govuk-list--bullet">
                        <li>solicitors</li>
                        <li>barristers (called &#39;advocates&#39; in Scotland)</li>
                        <li>legal executives</li>
                        <li>claims management companies (regulated by the Financial Conduct Authority (FCA))</li>
                    </ul>
                </div>
            </details>
            <details class="govuk-details govuk-!-margin-bottom-4" data-module="govuk-details">
                <summary class="govuk-details__summary">
          <span class="govuk-details__summary-text">
            How to find and get a representative?
          </span>
                </summary>
                <div class="govuk-details__text">
                    <p class="govuk-body">The following links open in a new tab</p>
                    <ul class="govuk-list govuk-list--bullet">
                        <li><a href="https://solicitors.lawsociety.org.uk/" class="govuk-link" rel="noreferrer noopener"
                               target="_blank">Find a solicitor in England and Wales<span class="govuk-visually-hidden">(opens in new tab)</span></a>
                            – list of solicitors run by The Law Society
                        </li>
                        <li><a href="https://www.lawscot.org.uk/find-a-solicitor/" class="govuk-link"
                               rel="noreferrer noopener" target="_blank">Find a solicitor in Scotland<span
                                class="govuk-visually-hidden">(opens in new tab)</span></a> – database of solicitors run
                            The Law Society of Scotland
                        </li>
                        <li><a href="https://www.thefru.org.uk/" class="govuk-link" rel="noreferrer noopener"
                               target="_blank">Free Representation Unit (FRU)<span class="govuk-visually-hidden">(opens in new tab)</span></a>
                            – charity providing legal advice, case preparation and advocacy for people not eligible for
                            legal aid or who cannot afford lawyers (this service is not available in Scotland)
                        </li>
                        <li>In Scotland, some university law clinics can provide advice and represenation. You can find
                            a list at <a
                                    href="https://www.abdn.ac.uk/law/research/the-scottish-university-law-clinic-network-546.php"
                                    class="govuk-link" rel="noreferrer noopener" target="_blank">The Scottish University
                                Law Clinic Network (SULCN)<span class="govuk-visually-hidden">(opens in new tab)</span></a>
                        </li>
                        <li>local ‘law centres’ – not-for-profit legal practices providing legal aid for people who
                            cannot afford lawyers.
                        </li>
                    </ul>
                    <p class="govuk-body govuk-!-margin-top-4">A trade union may also be able to pay for a solicitor and
                        free legal advice is available from <a href="https://www.citizensadvice.org.uk/"
                                                               class="govuk-link" rel="noreferrer noopener"
                                                               target="_blank">Citizens Advice<span
                                class="govuk-visually-hidden">(opens in new tab)</span></a> or <a
                                href="https://www.cas.org.uk/" class="govuk-link" rel="noreferrer noopener"
                                target="_blank">Citizens Advice Scotland<span class="govuk-visually-hidden">(opens in new tab)</span></a>.
                    </p>
                    <p class="govuk-body">The <a href="https://www.equalityadvisoryservice.com/" class="govuk-link"
                                                 rel="noreferrer noopener" target="_blank">Equality Advisory and Support
                        Service<span class="govuk-visually-hidden">(opens in new tab)</span></a> can help with
                        discrimination claims.</p>
                    <p class="govuk-body">Some people may also be able to get help to pay for legal advice through legal
                        aid.</p>
                </div>
            </details>
            <form class="form" id="main-form" method="post" action="" novalidate="true">
                <input type="hidden" name="_csrf" value=W6ToBJqr-4UtSPCahOPG9OaLFcn6TFnYHfSQ>
                <div class="govuk-form-group lip-or-representative">
                    <fieldset class="govuk-fieldset" aria-describedby="lip-or-representative-hint">
                        <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
                            Are you making the claim for yourself, or representing someone else?
                        </legend>
                        <div id="lip-or-representative-hint" class="govuk-hint">
                        </div>
                        <div class="govuk-radios govuk-radios"
                             data-module="govuk-radios">
                            <div class="govuk-radios__item">
                                <input class="govuk-radios__input" id="lip-or-representative"
                                       name="claimantRepresentedQuestion" type="radio" value="No">
                                <label class="govuk-label govuk-radios__label" for="lip-or-representative">
                                    I’m representing myself and making my own claim
                                </label>
                            </div>
                            <div class="govuk-radios__item">
                                <input class="govuk-radios__input" id="lip-or-representative-2"
                                       name="claimantRepresentedQuestion" type="radio" value="Yes">
                                <label class="govuk-label govuk-radios__label" for="lip-or-representative-2">
                                    I’m making a claim for someone else and acting as their representative
                                </label>

                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="govuk-button-group">
                    <a href="/single-or-multiple-claim" class="govuk-button">
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

    .govuk-list--bullet {
        padding-left: 20px;
        list-style-type: disc
    }

    .govuk-list--bullet > li {
        margin-bottom: 0
    }

    @media (min-width: 40.0625em) {
        .govuk-list--bullet > li {
            margin-bottom: 5px
        }
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

    .govuk-fieldset__legend--l {
        font-family: "GDS Transport", arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 700;
        font-size: 24px;
        font-size: 1.5rem;
        line-height: 1.0416666667;
        margin-bottom: 15px
    }

    @media print {
        .govuk-fieldset__legend--l {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-fieldset__legend--l {
            font-size: 36px;
            font-size: 2.25rem;
            line-height: 1.1111111111
        }
    }

    @media print {
        .govuk-fieldset__legend--l {
            font-size: 24pt;
            line-height: 1.05
        }
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

    .govuk-details__text p {
        margin-top: 0;
        margin-bottom: 20px
    }

    .govuk-details__text > :last-child {
        margin-bottom: 0
    }

    .govuk-pagination--block .govuk-pagination__link:not(:focus) {
        text-decoration: none
    }

    .govuk-radios__item {
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
        .govuk-radios__item {
            font-family: sans-serif
        }
    }

    @media (min-width: 40.0625em) {
        .govuk-radios__item {
            font-size: 19px;
            font-size: 1.1875rem;
            line-height: 1.3157894737
        }
    }

    @media print {
        .govuk-radios__item {
            font-size: 14pt;
            line-height: 1.15
        }
    }

    .govuk-radios__item:last-child, .govuk-radios__item:last-of-type {
        margin-bottom: 0
    }

    .govuk-radios__input {
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

    .govuk-radios__label {
        display: inline-block;
        margin-bottom: 0;
        padding: 8px 15px 5px;
        cursor: pointer;
        -ms-touch-action: manipulation;
        touch-action: manipulation
    }

    .govuk-radios__label:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border: 2px solid currentcolor;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0)
    }

    .govuk-radios__label:after {
        content: "";
        position: absolute;
        top: 10px;
        left: 10px;
        width: 0;
        height: 0;
        border: 10px solid currentcolor;
        border-radius: 50%;
        opacity: 0;
        background: currentcolor
    }

    .govuk-radios__input:focus + .govuk-radios__label:before {
        border-width: 4px;
        outline: 3px solid rgba(0, 0, 0, 0);
        outline-offset: 1px;
        box-shadow: 0 0 0 4px #fd0
    }

    @media screen and (forced-colors: active),(-ms-high-contrast: active) {
        .govuk-radios__input:focus + .govuk-radios__label:before {
            outline-color: Highlight
        }
    }

    .govuk-radios__input:checked + .govuk-radios__label:after {
        opacity: 1
    }

    .govuk-radios__input:disabled, .govuk-radios__input:disabled + .govuk-radios__label {
        cursor: not-allowed
    }

    .govuk-radios__input:disabled + .govuk-radios__label {
        opacity: .5
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

    .govuk-\!-margin-bottom-2 {
        margin-bottom: 10px !important
    }

    .govuk-\!-margin-top-4 {
        margin-top: 15px !important
    }

    @media (min-width: 40.0625em) {
        .govuk-\!-margin-top-4 {
            margin-top: 20px !important
        }
    }

    .govuk-\!-margin-bottom-4 {
        margin-bottom: 15px !important
    }

    @media (min-width: 40.0625em) {
        .govuk-\!-margin-bottom-4 {
            margin-bottom: 20px !important
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

    /*# sourceMappingURL=main.8c2c768c5843e4e4064d.css.map*/
</style>


