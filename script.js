const quizData = {
    '1': {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: 'js',
        b: 'scripting',
        c: 'javascript',
        d: 'script',
        answer: 'c'
    },
    '2': {
        question: 'Variables declared with the let keyword have what type of scope?',
        a: 'function scope',
        b: 'block scope',
        c: 'inline scope',
        d: 'global scope',
        answer: 'b'
    },
    '3': {
        question: 'Why would you surround a piece of text with <h1></h1> tags?',
        a: 'to indicate that this text is the main heading on the page',
        b: 'to make the text bold',
        c: 'to ensure that search engines treat the keywords as being important for this page',
        d: 'to demonstrate to screen readers that this text is important',
        answer: 'a'
    },
    '4': {
        question: 'When might an empty alt attribute be the correct value?',
        a: 'when you cannot think of useful alt text',
        b: 'when you don\'t think it would be interesting to someone who cannot see it',
        c: 'when the image has come from a CMS',
        d: 'when the image is purely decorative',
        answer: 'd'
    },
    '5': {
        question: 'Which attribute must have a unique value each time it is used in an HTML document?',
        a: 'title',
        b: 'class',
        c: 'style',
        d: 'id',
        answer: 'd'
    },
    '6': {
        question: 'Which CSS property will not trigger layout recalculation?',
        a: 'top',
        b: 'opacity',
        c: 'width',
        d: 'height',
        answer: 'b'
    },
    '7': {
        question: 'What does the === comparison operator do?',
        a: 'It sets one variable equal to another in both value and type',
        b: 'It tests for equality of type only',
        c: 'It tests for equality of value only',
        d: 'It tests for equality of value and type',
        answer: 'd'
    },
    '8': {
        question: ' What is the <label> element used for?',
        a: 'to identify the different parts of a figure',
        b: 'to explain what needs to be entered into a form field',
        c: 'as a caption for images',
        d: 'as a heading for tables',
        answer: 'b'
    },
    '9': {
        question: 'The browser finds some CSS that it does not understand. What is likely to happen?',
        a: 'The page will not display',
        b: 'An error message will be displayed',
        c: 'The browser will not load the stylesheet',
        d: 'The browser will ignore the unknown CSS',
        answer: 'd'
    },
    '10': {
        question: 'Which choice is not a value of the type attribute of the <input> element?',
        a: 'range',
        b: 'address',
        c: 'date',
        d: 'password',
        answer: 'b'
    },
    '11': {
        question: 'You have used display: none in your stylesheet. Which users will be able to see or hear this content?',
        a: 'all users',
        b: 'users who can see the content on the screen',
        c: 'no users',
        d: 'screen reader users',
        answer: 'c'
    },
    '12': {
        question: 'Which choice is not part of CSS box model?',
        a: 'margin',
        b: 'border',
        c: 'padding',
        d: 'paragraph',
        answer: 'd'
    },
    '13': {
        question: 'Which part of the URL https://app.uniswap.org/pool specifies the domain name?',
        a: 'https',
        b: 'org',
        c: 'uniswap.org',
        d: 'app.uniswap',
        answer: 'c'
    },
    '14': {
        question: 'Which HTML element is not considered a landmark element?',
        a: '<form>',
        b: '<ul>',
        c: '<main>',
        d: '<nav>',
        answer: 'b'
    },
    '15': {
        question: 'Which statement is true when an HTML tag has been deprecated?',
        a: 'It employs code that can be viewed only on a desktop computer',
        b: 'It is obsolete and is not recommended for use in marking web content',
        c: 'It employs code that will require users to update their browsers',
        d: 'It employs incorrect syntax that will cause the browser to crash',
        answer: 'b'
    },
    '16': {
        question: 'How does the rem unit represent a font size?',
        a: 'Font sizes are expressed relative to the font size of the containing div element',
        b: 'Font sizes are expressed relative to the font size of the parent elements',
        c: 'Font sizes are relative to the base font size of the operating system.',
        d: 'Font sizes are relative to the root em unit used in the HTML element.',
        answer: 'd'
    },
    '17': {
        question: 'Which HTML element represents either a scalar value within a known range OR a fractional value?',
        a: '<meter>',
        b: '<range>',
        c: '<datalist>',
        d: '<optgroup>',
        answer: 'a'
    },
    '18': {
        question: 'What is Webpack primarily used for?',
        a: 'sharing JavaScript code with other people',
        b: 'making JavaScript-reliant sites accessible to users who do not have JavaScript turned on',
        c: 'bundling individual JavaScript files for use on your website',
        d: 'scrsource control',
        answer: 'c'
    },
    '19': {
        question: 'A video on your webpage does not display and the console shows an error about mixed content. What is happening?',
        a: 'The webpage is using a DOCTYPE, which renders it incapable of displayed video in addition to other web content.',
        b: 'Your browser does not support HTML5 video.',
        c: 'The video is from a source that cannot be displayed in your location for legal reasons.',
        d: 'The page is loaded via HTTPS, but the video is being served insecurely as HTTP and the browser is blocking it.',
        answer: 'd'
    },
    '20': {
        question: 'Lighthouse is a tool for auditing your website. Which choice is not a category of report offered by Lighthouse?',
        a: 'performance',
        b: 'UX design',
        c: 'accessibility',
        d: 'SEO',
        answer: 'b'
    },
    '21': {
        question: 'Which choice is not a render blocking resource?',
        a: 'images',
        b: 'HTML',
        c: 'CSS',
        d: 'JavaScript',
        answer: 'a'
    },
    '22': {
        question: 'Which choice does not provide information on browser support for a particular CSS property?',
        a: 'the "Can I Use" website',
        b: 'the Web Platform Tests Suite',
        c: 'the CSS specification',
        d: 'MDN property pages',
        answer: 'b'
    },
    '23': {
        question: 'what does the CSS selector a[href$="org"] select?',
        a: 'all <a> tags whose href attribute begins with "org"',
        b: 'all <a> tags whose href attribute equals "org"',
        c: 'all <a> tags whose href attribute ends with "org"',
        d: 'all <a> tags whose href attribute contains "org"',
        answer: 'c'
    },
    '24': {
        question: 'Which choice is not a result of invoking strict mode in JavaScript?',
        a: 'It eliminates some JavaScript silent errors by changing them to throw errors.',
        b: 'It prohibits some syntax likely to be defined in future versions of ECMAScript.',
        c: 'It forces the writing of valid HTML and CSS.',
        d: 'It fixes mistakes that make it difficult for JavaScript engines to perform optimizations.',
        answer: 'c'
    },
    '25': {
        question: 'Which array method should you apply to run a function for every item within an array, returning an array of all items for which the function is true?',
        a: 'every()',
        b: 'map()',
        c: 'forEach()',
        d: 'filter()',
        answer: 'd'
    }
}