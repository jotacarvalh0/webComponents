class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "card")
//
//
        const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "cardLeft")

        const autor = document.createElement("span");
            autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");     
        const linkTitle = document.createElement("a");
            linkTitle.textContent = this.getAttribute("title")
        const newsContent = document.createElement("p");
            newsContent.textContent = this.getAttribute("content")

//
//
        const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "cardRight")

        const newsImage = document.createElement("img");
//
//
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(newsImage);
//        
//
        return componentRoot
    }

    styles() {}
}

customElements.define("card-news", Cardnews)