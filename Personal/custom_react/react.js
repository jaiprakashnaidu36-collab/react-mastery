 function Customrender(reactelement , container){
    
//     // injecting the element into the #root container
//     const domelement = document.createElement(reactelement.type)
//     // setting the inner html of the domelement
//     domelement.innerHTML = reactelement.children
//     // setting the attributes
//     domelement.setAttribute('href' , reactelement.props.href)
//     domelement.setAttribute('target' , reactelement.props.target)
//     container.appendChild(domelement)

    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children

    for (const prop in reactelement.props) {
        if(prop === 'children') continue
        domelement.setAttribute(prop , reactelement.props[prop])
    }
    container.appendChild(domelement)

}

// react view the returned element in the form of key-value pairs

const reactelement = {
    type : "a" ,  // type of the returned element
    // properties of the element
    props : {
        href : 'https://google.com',
        target :'_blank'
    },
    // child of the returned element
    children : 'Click me to visit Google !' 
}

const mainContainer = document.querySelector("#root")

Customrender(reactelement , mainContainer)