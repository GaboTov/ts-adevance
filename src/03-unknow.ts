let anyVar: any;// desactiva todo el analasis estatico

anyVar = 1
anyVar = 'eau'
anyVar = {}
anyVar = []

let unknowVar: unknown // hace que tengamos que checkear el tipo para poder tener los poderes de Ts
unknowVar = 1
unknowVar = 'eau'
unknowVar = {}
unknowVar = []

if (typeof unknowVar == 'string') {
  unknowVar.toUpperCase()
}
