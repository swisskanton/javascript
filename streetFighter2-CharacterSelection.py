def street_fighter_selection(fighters, initial_position, moves):
    result = []
    (x, y) = initial_position
    for step in moves:
        if step == 'up':
            x -= 1
            if x < 0:
                x = 0
        elif step == 'down':
            x += 1
            if x > 1:
                x = 1
        elif step == 'right':
            y += 1
            if y > len(fighters[0]) - 1:
                y = 0
        elif step == 'left':
            y -= 1
            if y < 0:
                y = len(fighters[0]) - 1
        result.append(fighters[x][y])
    return result

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)

moves = ['up', 'left', 'right', 'left', 'left']
print('solution: ', ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'])
print('result is: ', street_fighter_selection(fighters, initial_position, moves))

moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
print('solution: ', ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat'])
print('result is: ', street_fighter_selection(fighters, initial_position, moves))

moves = []
print('solution: ', [])
print('result is: ', street_fighter_selection(fighters, initial_position, moves))

moves = ["left"]*8
print('solution: ', ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog'])
print('result is: ', street_fighter_selection(fighters, initial_position, moves))

moves = ["up"]*4
print('solution: ', ['Ryu', 'Ryu', 'Ryu', 'Ryu'])
print('result is: ', street_fighter_selection(fighters, initial_position, moves))

moves = ["down"]*4
print('solution: ', ['Ken', 'Ken', 'Ken', 'Ken'])
print('result is: ', street_fighter_selection(fighters, initial_position, moves))

moves = ["down","right","up","left"]*2
print('solution: ', ['Ken', 'Chun Li', 'E.Honda', 'Ryu', 'Ken', 'Chun Li', 'E.Honda', 'Ryu'])
print('result is: ', street_fighter_selection(fighters, initial_position, moves))

moves = ["up","left","down","right"]*2
print('solution: ', ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken'])
print('result is: ', street_fighter_selection(fighters, initial_position, moves))