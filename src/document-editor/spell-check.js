/*jshint esversion: 6 */
this.default = function () {

    var englishSfdt = {"sfdt":"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"};
    var spanishSfdt = {"sfdt":"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"};
    var hostUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl: hostUrl, enableSpellCheck: true, enableToolbar: true, toolbarMode: 'Ribbon', height: '590px' });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar, ej.documenteditor.Ribbon);
    container.appendTo('#container');
    container.documentEditor.documentName = 'Spell Checking';
    var languageID = 1033;
    //Accessing spell checker.
    var spellChecker = container.documentEditor.spellChecker;
    //Set language id to map dictionary in server side.;
    spellChecker.languageID = languageID;
    spellChecker.removeUnderline = false;
    //Allow suggetion for miss spelled word/
    spellChecker.allowSpellCheckAndSuggestion = true;

    var switchObj = new ejs.buttons.Switch({ checked: true, cssClass: 'buttonSwitch' });
    switchObj.appendTo('#toolbarSwitch');

    switchObj.change = function (args) {
        if (args.checked) {
            container.toolbarMode = 'Ribbon';
        }
        else {
            container.toolbarMode = 'Toolbar';
        }
        showButtons(container.toolbarMode !== 'Ribbon');
    };

    titleBarDiv = document.getElementById('documenteditor_titlebar');
    initializeTitleBar(true);
    updateDocumentTitle();
    wireEventsInTitleBar();
    container.documentChange = function () {
        updateDocumentTitle();
    };
    var documentTitle;
    var documentTitleContentEditor;
    var titleBarDiv;
    var print;
    var openBtn;
    var download;
    function initializeTitleBar(isShareNeeded) {
        documentTitle = ej.base.createElement('label', { id: 'documenteditor_title_name', styles: 'text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text' });
        documentTitleContentEditor = ej.base.createElement('div', { id: 'documenteditor_title_contentEditor', className: 'single-line' });
        documentTitleContentEditor.appendChild(documentTitle);
        titleBarDiv.appendChild(documentTitleContentEditor);
        documentTitleContentEditor.setAttribute('title', 'Document Name. Click or tap to rename this document.');
        var btnStyles = 'float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;' +
            'border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400';
        print = addButton('e-de-icon-Print e-de-padding-right', 'Print', btnStyles, 'de-print', 'Print this document (Ctrl+P).', false);
        openBtn = addButton('e-de-icon-Open e-de-padding-right', 'open', btnStyles, 'de-open', 'Open', false);
        var items = [
            { text: 'Syncfusion Document Text (*.sfdt)', id: 'sfdt' },
            { text: 'Word Document (*.docx)', id: 'word' },
            { text: 'Word Template (*.dotx)', id: 'dotx' },
            { text: 'Plain Text (*.txt)', id: 'txt' },
        ];
        download = addButton('e-de-icon-Download e-de-padding-right', 'Download', btnStyles, 'documenteditor-share', 'Download this document.', true, items);
        if (!isShareNeeded) {
            download.element.style.display = 'none';
        }
        else {
            openBtn.element.style.display = 'none';
        }
    }
    function wireEventsInTitleBar() {
        print.element.addEventListener('click', onPrint);
        openBtn.element.addEventListener('click', function (e) {
            if (e.target.id === 'de-open') {
                var fileUpload = document.getElementById('uploadfileButton');
                fileUpload.value = '';
                fileUpload.click();
            }
        });
        documentTitleContentEditor.addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                documentTitleContentEditor.contentEditable = 'false';
                if (documentTitleContentEditor.textContent === '') {
                    documentTitleContentEditor.textContent = 'Document1';
                }
            }
        });
        documentTitleContentEditor.addEventListener('blur', function () {
            if (documentTitleContentEditor.textContent === '') {
                documentTitleContentEditor.textContent = 'Document1';
            }
            documentTitleContentEditor.contentEditable = 'false';
            container.documentEditor.documentName = documentTitle.textContent;
        });
        documentTitleContentEditor.addEventListener('click', function () {
            updateDocumentEditorTitle();
        });
    }
    function updateDocumentEditorTitle() {
        documentTitleContentEditor.contentEditable = 'true';
        documentTitleContentEditor.focus();
        window.getSelection().selectAllChildren(documentTitleContentEditor);
    }
    function updateDocumentTitle() {
        if (container.documentEditor.documentName === '') {
            container.documentEditor.documentName = 'Untitled';
        }
        documentTitle.textContent = container.documentEditor.documentName;
    }
    function onPrint() {
        container.documentEditor.print();
    }
    function onExportClick(args) {
        var value = args.item.id;
        switch (value) {
            case 'word':
                save('Docx');
                break;
            case 'sfdt':
                save('Sfdt');
                break;
            case 'txt':
                save('Txt');
                break;
            case 'dotx':
                save('Dotx');
                break;
        }
    }
    function save(format) {
        container.documentEditor.save(container.documentEditor.documentName === '' ? 'sample' : container.documentEditor.documentName, format);
    }
    function setTooltipForPopup() {
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[2].setAttribute('title', 'Download a copy of this document to your computer as a DOTX file.');
        document.getElementById('documenteditor-share-popup').querySelectorAll('li')[3].setAttribute('title', 'Download a copy of this document to your computer as a TXT file.');
    }
    function addButton(iconClass, btnText, styles, id, tooltipText, isDropDown, items) {
        var button = ej.base.createElement('button', { id: id, styles: styles });
        titleBarDiv.appendChild(button);
        button.setAttribute('title', tooltipText);
        if (isDropDown) {
            var dropButton = new ej.splitbuttons.DropDownButton({ select: onExportClick, items: items, iconCss: iconClass, cssClass: 'e-caret-hide', content: btnText, open: function () { setTooltipForPopup(); } }, button);
            return dropButton;
        }
        else {
            var ejButton = new ej.buttons.Button({ iconCss: iconClass, content: btnText }, button);
            return ejButton;
        }
    }

    function showButtons(show) {
        var displayStyle = show ? 'block' : 'none';

        if (print) {
            print.element.style.display = displayStyle;
        }
        if (download) {
            download.element.style.display = displayStyle;
        }
    }

    showButtons(false);

    // Create language dropdown (two values: "1033" and "1034") and wire select event
    var languageData = [
    { text: 'English', value: 1033 },
    { text: 'Spanish', value: 1034 },
    ];

    var languageDropDown = new ej.dropdowns.DropDownList({
    dataSource: languageData,
    fields: { text: 'text', value: 'value' },
    value: languageData.filter((lang) => lang.value === languageID)[0].value,
    index: languageData.indexOf(
        languageData.filter((lang) => lang.value === languageID)[0]
    ),
    placeholder: 'Select language',
    select: function (args) {
        var selected = (args.itemData).value;
        spellChecker.languageID = languageID = parseInt(selected, 10);
        var langData;
        if (container.documentEditor.spellChecker.languageID === 1033) {
            langData = JSON.stringify(englishSfdt);
        } else {
            langData = JSON.stringify(spanishSfdt);
        }
        container.documentEditor.open(langData);
    },
    });
    languageDropDown.appendTo('#languageDropdown');

    //unchecked state.
    var removeUnderlineCheckbox = new ej.buttons.CheckBox({
    label: 'Show Underline',
    checked: !container.documentEditor.spellChecker.removeUnderline,
    change: (args) => {
        container.documentEditor.spellChecker.removeUnderline = !args.checked;
    },
    });

    // Render initialized CheckBox.
    removeUnderlineCheckbox.appendTo('#checkbox2');

    var suggestioncheckbox = new ej.buttons.CheckBox({
    label: 'Show Suggestions',
    checked: true,
    change: (args) => {
        container.documentEditor.spellChecker.allowSpellCheckAndSuggestion =
        args.checked;
    },
    });

    // Render initialized CheckBox.
    suggestioncheckbox.appendTo('#checkbox3');

    //checked state.
    var enableSpellCheckerCheckbox = new ej.buttons.CheckBox({
    label: 'Enable Spelling',
    checked: container.documentEditor.spellChecker.enableSpellCheck,
    change: (args) => {
        container.documentEditor.spellChecker.enableSpellCheck = args.checked;
        suggestioncheckbox.disabled =
        removeUnderlineCheckbox.disabled =
            !args.checked;
    },
    });
    enableSpellCheckerCheckbox.appendTo('#checkbox1');

    container.documentEditor.open(JSON.stringify(englishSfdt));
    container.showPropertiesPane = false;
    container.documentEditor.selectionChange = () => {
        if (spellChecker.enableSpellCheck !== enableSpellCheckerCheckbox.checked) {
            enableSpellCheckerCheckbox.checked = spellChecker.enableSpellCheck;
            suggestioncheckbox.disabled =
            removeUnderlineCheckbox.disabled =
                !enableSpellCheckerCheckbox.checked;
        }
        if (spellChecker.removeUnderline === removeUnderlineCheckbox.checked) {
            removeUnderlineCheckbox.checked = !spellChecker.removeUnderline;
        }
    };
};
