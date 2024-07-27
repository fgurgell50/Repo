'use client'
import ReactDom  from "react-dom";
//carregar as imagens antes para nao gerar problemas
export function PreloadResources() {
    ReactDom.preload("./sprite.svg", {
        as: "image",
    })

    return null
}