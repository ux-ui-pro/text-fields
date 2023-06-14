const notched = `
    <div class="notched-outline">
        <div class="notched-outline__leading"></div>
        <div class="notched-outline__notch"></div>
        <div class="notched-outline__trailing"></div>
    </div>
`

const customizeLabel = (textField) => {
    const label = textField.previousElementSibling
    const notchedOutline = textField.parentElement.querySelector('.notched-outline')

    if (notchedOutline) return

    textField.parentElement.insertAdjacentHTML('afterbegin', notched)

    textField.parentElement
        .querySelector('.notched-outline__notch')
        .appendChild(label)
}

const handleInput = (input, classList, label, style) => {
    if (input && label) {
        if (input.disabled) {
            classList.add('input--disabled')
        }

        if (input.required) {
            label.classList.add('floating-label--required')
        }

        if (input.value.trim().length > 0) {
            classList.add('input--filled')
            style.width = ((label.clientWidth + 13) * .75) + 'px'
        }

        input.addEventListener('focus', () => {
            classList.add('input--focused')
            style.width = ((label.clientWidth + 13) * .75) + 'px'
        })

        input.addEventListener('blur', () => {
            classList.remove('input--focused')

            if (input.value.trim().length <= 0 && label) {
                style.width = 'auto'
            }
        })

        input.addEventListener('input', () => {
            (input.value.trim().length > 0) ? classList.add('input--filled') : classList.remove('input--filled')
        })
    }
}

const handleTextarea = (textarea, classList, label, style) => {
    if (textarea && label) {
        if (textarea.disabled) {
            classList.add('textarea--disabled')
        }

        if (textarea.required) {
            label.classList.add('floating-label--required')
        }

        if (textarea.value.trim().length > 0) {
            classList.add('textarea--filled')
            style.width = ((label.clientWidth + 13) * .75) + 'px'
        }

        textarea.addEventListener('focus', () => {
            classList.add('textarea--focused')
            style.width = ((label.clientWidth + 13) * .75) + 'px'
        })

        textarea.addEventListener('blur', () => {
            classList.remove('textarea--focused')

            if (textarea.value.trim().length <= 0 && label) {
                style.width = 'auto'
            }
        })

        textarea.addEventListener('change', () => {
            (textarea.value.trim().length > 0) ? classList.add('textarea--filled') : classList.remove('textarea--filled')
        })

        textarea.addEventListener('input', () => {
            if (classList.contains('textarea--auto-resizeable')) {
                textarea.style.height = 'auto'
                textarea.style.height = (textarea.scrollHeight) + 'px'
            }
        })
    }
}

const input = () => {
    const inputs = document.querySelectorAll('.input input')

    for (let input of inputs) {
        const label = input.previousElementSibling

        if (!label) return

        customizeLabel(input)
        const { classList } = input.parentNode
        const { style } = label.parentNode
        handleInput(input, classList, label, style)
    }
}

const textarea = () => {
    const textareas = document.querySelectorAll('.textarea textarea')

    for (let textarea of textareas) {
        const label = textarea.previousElementSibling

        if (!label) return

        customizeLabel(textarea)
        const { classList } = textarea.parentNode
        const { style } = label.parentNode
        handleTextarea(textarea, classList, label, style)
    }
}

export default {
    input,
    textarea
}