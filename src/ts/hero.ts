class Hero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const newElement: HTMLElement = document.createElement('div');
        newElement.className = `${this.className}`;

        newElement.innerHTML = `
            <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div class="justify-center items-center flex-col mb-5 w-11/12 sm:w-2/3 lg:flex sm:mb-10">
                    <h1 class="text-2xl text-center text-palette-3 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Helloz I am
                        <span class="text-palette-5">Jonathan</span>
                        Matta
                    </h1>
                    <p 
                        class="mt-5 sm:mt-10 lg:w-10/12 text-palette-3 text-center text-sm sm:text-lg"
                    >
                        A student who ... hihi dunno what else I do. 
                        Gym is great! And 
                        (neo)<span class="text-palette-5 font-bold">vim</span> 
                        to! And more gym is also good!!!
                    </p>
                </div>
                <div class="flex justify-center items-center">
                    <button 
                        class="bg-transparent text-palette-5 font-semibold py-2 px-4 border rounded transition-all hover:bg-palette-3 hover:border-palette-5/0"
                    >
                        Contact me 
                    </button>
                </div>
            </div>
        `;

        this.outerHTML = newElement.outerHTML;
    }
};

customElements.define('j-hero', Hero);
