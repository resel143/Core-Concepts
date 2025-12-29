// Setup Debounce function
function debounce(fn, delay) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn.apply(this, args)
        }, delay);

    }
}

// make a function
function typer(name) {
    console.log(`typer: ${name}`)
}

// make call to this function
// typer("Reshul");


// make Debouce version for this function
let typerDeb = debounce(typer, 2000);

// Calling this Debounce function
typerDeb("Wate")