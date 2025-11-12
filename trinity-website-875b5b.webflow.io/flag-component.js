// Cross-platform flag display component
class FlagDisplay {
    constructor(container, method = 'twemoji') {
        this.container = container;
        this.method = method;
        this.init();
    }

    init() {
        if (this.method === 'twemoji') {
            this.loadTwemoji();
        } else if (this.method === 'css') {
            this.loadFlagCSS();
        }
    }

    loadTwemoji() {
        if (!window.twemoji) {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/twemoji@latest/dist/twemoji.min.js';
            script.onload = () => this.renderTwemojiFlags();
            document.head.appendChild(script);
        } else {
            this.renderTwemojiFlags();
        }
    }

    loadFlagCSS() {
        if (!document.querySelector('link[href*="flag-icons"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css';
            document.head.appendChild(link);
        }
        this.renderCSSFlags();
    }

    renderTwemojiFlags() {
        const flags = this.getCountryFlags();
        this.container.innerHTML = flags.map(country => 
            `<span class="flag-item" data-country="${country.code}">
                <span class="flag-emoji">${country.flag}</span>
                <span class="flag-name">${country.name}</span>
            </span>`
        ).join('');

        twemoji.parse(this.container, { folder: 'svg', ext: '.svg' });
    }

    renderCSSFlags() {
        const flags = this.getCountryFlags();
        this.container.innerHTML = flags.map(country => 
            `<span class="flag-item" data-country="${country.code}">
                <span class="fi fi-${country.code.toLowerCase()}"></span>
                <span class="flag-name">${country.name}</span>
            </span>`
        ).join('');
    }

    getCountryFlags() {
        return [
            { code: 'US', name: 'United States', flag: '🇺🇸' },
            { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
            { code: 'DE', name: 'Germany', flag: '🇩🇪' },
            { code: 'FR', name: 'France', flag: '🇫🇷' },
            { code: 'JP', name: 'Japan', flag: '🇯🇵' },
            { code: 'CN', name: 'China', flag: '🇨🇳' },
            { code: 'IN', name: 'India', flag: '🇮🇳' },
            { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
            { code: 'CA', name: 'Canada', flag: '🇨🇦' },
            { code: 'AU', name: 'Australia', flag: '🇦🇺' }
        ];
    }
}

// Usage: new FlagDisplay(document.getElementById('flags'), 'twemoji');