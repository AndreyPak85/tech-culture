/** 
 * @author Andrey P
 * Сделать класс DomElement
 * содержит свойства:
 * selector,
 * height,
 * width,
 * bg,
 * fontSize
 * содержит метод который создает элемент на странице если в селектор передана строка начинающаяся с точки ‘.’ создавать <div></div> с таким классом если с решетки ‘#’ то создать параграф <p></p>
 * 
 * с помощью cssText задавать стили:
 * высотой - height,
 * шириной - width,
 * background - bg
 * размер текста fontSize
 * внутрь записывать любой текст
 * 
 * Создать новый объект на основе класса DomElement
 * Вызвать его метод чтобы получить элемент на странице
*/

class DomElement {

    constructor (selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.randomText = Math.random();
    }


        createElement() {
            if (this.selector[0] === '.') {
                let divElement = document.createElement("div");
                divElement.classList.add(this.selector.slice(1,));
                divElement.style.cssText = `
                    height: ${this.height}px;
                    width: ${this.width}px;
                    background: ${this.bg};
                    font-size: ${this.fontSize}px;      
                `                
                divElement.textContent = this.randomText;

                
                document.body.append(divElement);
                console.log(divElement)

            }
            else if(this.selector[0] === '#') {
                let pElement = document.createElement("p")
                pElement.classList.add(this.selector.slice(1))
                pElement.style.cssText = `
                    height: ${this.height}px;
                    width: ${this.width}px;
                    background: ${this.bg};
                    font-size: ${this.fontSize}px;      
                    `
                pElement.textContent = this.randomText;
                document.body.append(pElement);
                console.log(pElement)
            }
        }

}

let element = new DomElement(".book", 80, 100, 'tomato', 20);
element.createElement();


const element2 = new DomElement("#author", 100, 200, 'Khaki', 30);
element2.createElement();