function street_fighter_selection(fighters, initial_position, moves) {
    var result = []
    var x = initial_position[0]
    var y = initial_position[1]
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == 'up') {
            x--
            if (x < 0) x = 0
        } else if (moves[i] == 'down') {
            x++
            if (x > 1) x = 1
        } else if (moves[i] == 'right') {
            y++
            if (y > fighters[0].length - 1) y = 0
        } else if (moves[i] == 'left') {
            y--
            if (y < 0) y = fighters[0].length - 1
        }
        result.push(fighters[x][y])
    }
    return result
}

fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  ]
  initial_position = [0,0]
  
  moves = ['up', 'left', 'right', 'left', 'left']
  console.log('solution: ', ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'])
  console.log('result is: ', street_fighter_selection(fighters, initial_position, moves))
  
  moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
  console.log('solution: ', ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat'])
  console.log('result is: ', street_fighter_selection(fighters, initial_position, moves))
  
  moves = []
  console.log('solution: ', [])
  console.log('result is: ', street_fighter_selection(fighters, initial_position, moves))
  
  moves = ["left", "left", "left", "left", "left", "left", "left", "left"]
  console.log('solution: ', ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog'])
  console.log('result is: ', street_fighter_selection(fighters, initial_position, moves))
  
  moves = ["up", "up", "up", "up"]
  console.log('solution: ', ['Ryu', 'Ryu', 'Ryu', 'Ryu'])
  console.log('result is: ', street_fighter_selection(fighters, initial_position, moves))
  
  moves = ["down", "down", "down", "down"]
  console.log('solution: ', ['Ken', 'Ken', 'Ken', 'Ken'])
  console.log('result is: ', street_fighter_selection(fighters, initial_position, moves))
  
  moves = ["down","right","up","left", "down","right","up","left"]
  console.log('solution: ', ['Ken', 'Chun Li', 'E.Honda', 'Ryu', 'Ken', 'Chun Li', 'E.Honda', 'Ryu'])
  console.log('result is: ', street_fighter_selection(fighters, initial_position, moves))
  
  moves = ["up","left","down","right", "up","left","down","right"]
  console.log('solution: ', ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken'])
  console.log('result is: ', street_fighter_selection(fighters, initial_position, moves))