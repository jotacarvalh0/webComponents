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
            linkTitle.href = this.getAttribute("link-url")
        
        const newsContent = document.createElement("p");
            newsContent.textContent = this.getAttribute("content")

//
//
        const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "cardRight")

        const newsImage = document.createElement("img");
        newsImage.src = "/assets/darthVader.jpg"
        newsImage.alt = "Foto da noticia"
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

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 100%;
            -webkit-box-shadow: 10px 10px 13px 4px rgba(0,0,0,0.25);
            -moz-box-shadow: 10px 10px 13px 4px rgba(0,0,0,0.25);
            box-shadow: 10px 10px 13px 4px rgba(0,0,0,0.25);
            display: flex;
            justify-content: space-between;
        }
        
        .cardLeft{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .cardLeft a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
        }
        
        .cardLeft span{
            font-weight: 400;
        }
        
        .cardLeft p{
            color: gray;
        }
        
        .cardRight img{
            width: 250px;
            height: 180px;
        }
        `

        return style;
    }
}

customElements.define("card-news", Cardnews)